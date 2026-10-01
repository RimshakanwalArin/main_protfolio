import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const bodyFont = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const displayFont = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://your-domain.example";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Rimsha Kanwal | Web Developer & Digital Solutions Specialist",
  description:
    "Freelance web developer and designer helping small businesses get online with thoughtful websites, visual identity, and practical AI workflows.",
  openGraph: {
    title: "Rimsha Kanwal | Web Developer & Digital Solutions Specialist",
    description:
      "Thoughtful websites, visual identity, and digital experiences for growing businesses.",
    url: siteUrl,
    siteName: "Rimsha Kanwal Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rimsha Kanwal | Web Developer & Digital Solutions Specialist",
    description:
      "Thoughtful websites, visual identity, and digital experiences for growing businesses.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
