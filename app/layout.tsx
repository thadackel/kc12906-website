import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Knights of Columbus Council 12906 | Covington, Louisiana",
  description:
    "Knights of Columbus St. Peter Council 12906 in Covington, Louisiana. Catholic men serving through charity, unity, fraternity, and patriotism.",
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
