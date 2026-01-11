import type { Metadata } from "next";
import flisvask from "@/public/flisvask.png";
import "./globals.css";

export const metadata: Metadata = {
  title: "Renovering Bad",
  description: "Renovering Bad",
  icons: {
    icon: flisvask.src,
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
