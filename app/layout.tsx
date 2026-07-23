import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://koc12906.org"),
  title: {
    default: "Knights of Columbus Council 12906 | Covington, Louisiana",
    template: "%s | Council 12906",
  },
  description:
    "Knights of Columbus Council 12906 in Covington, Louisiana. Catholic men serving St. Peter Parish through charity, unity, fraternity, and patriotism.",
  alternates: {
    canonical: "/",
  },
  applicationName: "Knights of Columbus Council 12906",
  keywords: [
    "Knights of Columbus",
    "Council 12906",
    "Covington Louisiana",
    "St. Peter Parish",
    "Catholic men",
    "Catholic charity",
  ],
  openGraph: {
    title: "Knights of Columbus Council 12906",
    description:
      "Catholic men serving St. Peter Parish and the Covington community.",
    url: "https://koc12906.org",
    siteName: "Knights of Columbus Council 12906",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/branding/kofc-logo.png",
        width: 512,
        height: 512,
        alt: "Knights of Columbus Council 12906 emblem",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
