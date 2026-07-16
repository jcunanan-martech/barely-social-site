import type { Metadata } from "next";
import CursorGlow from "./CursorGlow";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://barely-social.sites.openai.com"),
  title: "Barely Social | Landing Pages, Automations & Lifecycle Workflows",
  description:
    "Barely Social builds landing pages, websites, automations, and lifecycle workflows for SaaS and founder-led brands.",
  openGraph: {
    title: "Barely Social",
    description:
      "Landing pages, automations, and lifecycle marketing systems for teams that want cleaner growth.",
    images: ["/og.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Barely Social",
    description:
      "Growth systems for pages, workflows, automations, and lifecycle marketing.",
    images: ["/og.svg"],
  },
  icons: {
    icon: "/favicon-bs.svg",
    shortcut: "/favicon-bs.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
