import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export interface InquiryPayload {
  name: string;
  email: string;
  business?: string;
  projectType?: string;
  services?: string[];
  budgetRange?: string;
  budget?: string;
  timeline?: string;
  details?: string;
  message?: string;
  websiteUrl?: string;
  links?: string;
  source?: "homepage_brief" | "contact_page" | "direct";
  hp_title?: string;
}

export async function GET() {
  return NextResponse.json({
    status: "online",
    service: "Framehouse Studio Intake Engine",
    timestamp: new Date().toISOString(),
  });
}

export async function POST(req: Request) {
  try {
    const body: InquiryPayload = await req.json();

    // Anti-spam honeypot detection
    if (body.hp_title && body.hp_title.trim().length > 0) {
      console.warn("[INTAKE] Spam honeypot triggered. Silently dropping bot payload.");
      return NextResponse.json({
        success: true,
        inquiryId: "inq_bot_filtered",
        message: "Brief received.",
      });
    }

    // Required fields validation
    const name = (body.name || "").trim();
    const email = (body.email || "").trim().toLowerCase();
    const messageContent = (body.details || body.message || "").trim();

    if (!name) {
      return NextResponse.json(
        { success: false, error: "Please provide your name." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!messageContent) {
      return NextResponse.json(
        { success: false, error: "Please share a brief summary of what you want to build." },
        { status: 400 }
      );
    }

    const inquiryId = `inq_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    const timestamp = new Date().toISOString();

    const record = {
      id: inquiryId,
      timestamp,
      source: body.source || "homepage_brief",
      name,
      email,
      business: (body.business || "").trim(),
      projectType: Array.isArray(body.services) && body.services.length > 0
        ? body.services.join(", ")
        : (body.projectType || "General Project"),
      budget: body.budgetRange || body.budget || "Unspecified",
      timeline: body.timeline || "Flexible",
      details: messageContent,
      websiteUrl: (body.websiteUrl || body.links || "").trim(),
    };

    // 1. FAIL-SAFE LOCAL STORAGE
    // Persist inquiry to disk immediately so no lead is lost under any condition
    try {
      const dataDir = path.join(process.cwd(), "data");
      await fs.mkdir(dataDir, { recursive: true });

      const jsonFilePath = path.join(dataDir, "inquiries.json");
      let existingInquiries: any[] = [];
      try {
        const fileContent = await fs.readFile(jsonFilePath, "utf8");
        existingInquiries = JSON.parse(fileContent);
        if (!Array.isArray(existingInquiries)) existingInquiries = [];
      } catch {
        existingInquiries = [];
      }

      existingInquiries.push(record);
      await fs.writeFile(jsonFilePath, JSON.stringify(existingInquiries, null, 2), "utf8");

      // Also append to human-readable log
      const logFilePath = path.join(dataDir, "inquiries.log");
      const logLine = `[${timestamp}] ID: ${inquiryId} | FROM: ${name} <${email}> | BUDGET: ${record.budget} | TYPE: ${record.projectType}\nDETAILS: ${record.details}\n---\n`;
      await fs.appendFile(logFilePath, logLine, "utf8");

      console.log(`[FRAMEHOUSE INTAKE] Saved inquiry #${inquiryId} to ${jsonFilePath}`);
    } catch (fsErr) {
      console.error("[FRAMEHOUSE INTAKE] Local file storage warning:", fsErr);
    }

    // 2. DISCORD / SLACK WEBHOOK DISPATCH (Optional)
    const webhookUrl = process.env.NOTIFICATION_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            content: `🛎️ **New FRAMEHOUSE Project Inquiry**\n**From:** ${record.name} (${record.email})\n**Business:** ${record.business || "N/A"}\n**Type:** ${record.projectType}\n**Budget:** ${record.budget}\n**Timeline:** ${record.timeline}\n**Details:**\n> ${record.details.replace(/\n/g, "\n> ")}\n**Links:** ${record.websiteUrl || "None"}\n*ID: ${record.id}*`,
          }),
        });
      } catch (webhookErr) {
        console.error("[FRAMEHOUSE INTAKE] Webhook dispatch error:", webhookErr);
      }
    }

    // 3. RESEND EMAIL DISPATCH (Optional)
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      try {
        const recipient = process.env.NOTIFICATION_EMAIL || "hello@framehouse.com";
        const sender = process.env.RESEND_FROM_EMAIL || "Framehouse Studio <onboarding@resend.dev>";

        const emailHtml = `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #121110; background: #FAF9F6; border: 1px solid #E5E5E5;">
            <div style="border-bottom: 2px solid #121110; padding-bottom: 12px; margin-bottom: 20px;">
              <span style="font-size: 11px; font-family: monospace; letter-spacing: 0.1em; color: #888; text-transform: uppercase;">FRAMEHOUSE STUDIO • PROJECT INTAKE</span>
              <h2 style="margin: 8px 0 0; font-size: 22px; font-weight: 800; color: #0A0A0A;">New Project Brief Received</h2>
            </div>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 13px;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; width: 140px; color: #666; font-family: monospace;">CLIENT NAME</td>
                <td style="padding: 8px 0; color: #0A0A0A; font-weight: 600;">${record.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #666; font-family: monospace;">EMAIL</td>
                <td style="padding: 8px 0;"><a href="mailto:${record.email}" style="color: #0A0A0A; text-decoration: underline;">${record.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #666; font-family: monospace;">BUSINESS</td>
                <td style="padding: 8px 0; color: #0A0A0A;">${record.business || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #666; font-family: monospace;">PROJECT TYPE</td>
                <td style="padding: 8px 0; color: #0A0A0A;">${record.projectType}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #666; font-family: monospace;">BUDGET RANGE</td>
                <td style="padding: 8px 0; color: #0A0A0A; font-weight: bold;">${record.budget}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #666; font-family: monospace;">TARGET TIMELINE</td>
                <td style="padding: 8px 0; color: #0A0A0A;">${record.timeline}</td>
              </tr>
              ${record.websiteUrl ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #666; font-family: monospace;">WEBSITE / LINKS</td>
                <td style="padding: 8px 0;"><a href="${record.websiteUrl}" target="_blank" style="color: #0A0A0A;">${record.websiteUrl}</a></td>
              </tr>` : ""}
            </table>

            <div style="background: #FFFFFF; border: 1px solid #E5E5E5; padding: 16px; border-radius: 4px; margin-bottom: 24px;">
              <div style="font-size: 11px; font-family: monospace; color: #888; text-transform: uppercase; margin-bottom: 8px;">PROJECT SCOPE &amp; DETAILS</div>
              <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #222; white-space: pre-wrap;">${record.details}</p>
            </div>

            <div style="font-size: 11px; font-family: monospace; color: #888; border-top: 1px solid #E5E5E5; padding-top: 12px; display: flex; justify-content: space-between;">
              <span>INQUIRY ID: ${record.id}</span>
              <span>TIMESTAMP: ${record.timestamp}</span>
            </div>
          </div>
        `;

        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: sender,
            to: [recipient],
            reply_to: record.email,
            subject: `[FRAMEHOUSE BRIEF] ${record.name} — ${record.budget}`,
            html: emailHtml,
          }),
        });
        console.log(`[FRAMEHOUSE INTAKE] Email notification dispatched via Resend to ${recipient}`);
      } catch (emailErr) {
        console.error("[FRAMEHOUSE INTAKE] Resend email dispatch error:", emailErr);
      }
    }

    return NextResponse.json({
      success: true,
      inquiryId: record.id,
      message: "Project brief successfully received and securely logged.",
    });
  } catch (err: any) {
    console.error("[FRAMEHOUSE INTAKE] Unexpected error processing brief:", err);
    return NextResponse.json(
      {
        success: false,
        error: "Unable to process project brief. Please email hello@framehouse.com directly.",
      },
      { status: 500 }
    );
  }
}
