import type { Metadata } from "next";
import "./globals.css";

import { Cormorant_Garamond, Inter } from "next/font/google";

const heading = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "ELIXIR",
  description: "Luxury skincare",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${heading.variable} ${body.variable}`}>
        {children}
      </body>
    </html>
  );
}