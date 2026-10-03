import Link from "next/link";
import { Wordmark } from "@/components/common/Wordmark";
import { ArrowUpRight } from "lucide-react";

const FOOTER_NAV = [
  { label: "WORK", href: "/#work" },
  { label: "SERVICES", href: "/#services" },
  { label: "PROCESS", href: "/#process" },
  { label: "ABOUT", href: "/#about" },
  { label: "CONTACT", href: "/contact" },
];

const SOCIAL_LINKS = [
  { label: "INSTAGRAM", href: "https://instagram.com" },
  { label: "LINKEDIN", href: "https://linkedin.com" },
  { label: "WHATSAPP", href: "https://whatsapp.com" },
  { label: "EMAIL", href: "mailto:hello@framehouse.com" },
];

export function Footer() {
  return (
    <footer
      data-theme="dark"
      className="bg-[#0A0A0A] text-white pt-20 pb-12 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Brand Column */}
          <div className="md:col-span-6 space-y-4">
            <Wordmark size="lg" className="text-white" />
            <p className="text-xs sm:text-sm font-mono text-white/50 max-w-sm leading-relaxed">
              Digital products, built beautifully. Independent studio engineering custom websites,
              applications, and bespoke software.
            </p>
            <div className="pt-2 text-xs font-mono text-[#C8FF3D] tracking-wider">
              PAKISTAN → WORLDWIDE
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <div className="text-[11px] font-mono tracking-widest text-white/40 uppercase">
              INDEX
            </div>
            <nav className="flex flex-col space-y-2.5">
              {FOOTER_NAV.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs font-semibold tracking-wider uppercase text-white/70 hover:text-[#C8FF3D] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social / Connect */}
          <div className="md:col-span-3 space-y-4">
            <div className="text-[11px] font-mono tracking-widest text-white/40 uppercase">
              CONNECT
            </div>
            <div className="flex flex-col space-y-2.5">
              {SOCIAL_LINKS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-xs font-mono uppercase text-white/70 hover:text-[#C8FF3D] transition-colors"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-3 h-3 text-white/30 group-hover:text-[#C8FF3D] transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40">
          <div>© 2026 FRAMEHOUSE. ALL RIGHTS RESERVED.</div>
          <div className="flex items-center gap-6">
            <span>ISLAMABAD / GMT+5</span>
            <span className="text-white/60">INDEPENDENT STUDIO</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
