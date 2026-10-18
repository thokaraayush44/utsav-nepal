import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  DM_Sans,
  Noto_Sans_Devanagari,
} from "next/font/google";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const bodyFont = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const nepaliFont = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-nepali",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Utsav Nepal — Dashain & Tihar",
  description:
    "A celebration of Nepali traditions, family and festive memories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${displayFont.variable} ${bodyFont.variable} ${nepaliFont.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
