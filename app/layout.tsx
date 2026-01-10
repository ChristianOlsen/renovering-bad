import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Renovering Bad",
  description: "Bathroom renovation project",
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
