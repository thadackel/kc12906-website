import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kc12906.org"),
  title: {
    default: "Knights of Columbus Council 12906 | Covington, Louisiana",
    template: "%s | Council 12906",
  },
  description:
    "Knights of Columbus Council 12906 in Covington, Louisiana. Catholic men serving St. Peter Parish through charity, unity, fraternity, and patriotism.",
  openGraph: {
    title: "Knights of Columbus Council 12906",
    description:
      "Catholic men serving St. Peter Parish and the Covington community.",
    url: "https://kc12906.org",
    siteName: "Knights of Columbus Council 12906",
    locale: "en_US",
    type: "website",
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
