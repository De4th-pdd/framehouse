import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FRAMEHOUSE — Digital products, built beautifully.",
  description:
    "Independent digital studio. Websites, software & digital experiences for businesses ready to look different. Pakistan / Worldwide.",
  metadataBase: new URL("https://framehouse.com"),
  openGraph: {
    title: "FRAMEHOUSE — Digital products, built beautifully.",
    description:
      "Websites, software & digital experiences for businesses ready to look different.",
    url: "https://framehouse.com",
    siteName: "FRAMEHOUSE",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FRAMEHOUSE — Digital products, built beautifully.",
    description:
      "Websites, software & digital experiences for businesses ready to look different.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-[#F4F2ED] text-[#0A0A0A] selection:bg-[#C8FF3D] selection:text-[#0A0A0A]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#0A0A0A] focus:text-[#C8FF3D] focus:font-mono focus:text-xs focus:rounded-xs focus:shadow-xl"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
