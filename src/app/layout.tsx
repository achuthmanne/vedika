import type { Metadata } from "next";
import { DM_Serif_Display, Manrope } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: "400",
  variable: "--font-dm-serif",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VEDIKA - Your Digital Space for Every Celebration",
  description: "Create a beautiful, private digital space for your special moments, memories, photos and videos.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${dmSerif.variable} ${manrope.variable} h-full antialiased scrollbar-hide`}
    >
      <body className="min-h-full flex flex-col font-body scrollbar-hide">{children}</body>
    </html>
  );
}
