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
  title: "MyVedika - Premium Digital Invitations & Event Websites",
  description: "Create stunning, personalized digital invitations and event websites for Weddings, Ganesh Chaturthi, Birthdays, and more in India. Share your celebration with the world.",
  keywords: [
    "myvedika",
    "vedika",
    "digital invitations",
    "wedding website",
    "telugu invitations",
    "ganesh chaturthi digital invitation",
    "event website builder",
    "indian wedding invites",
    "online invitations india",
    "birthday invitations"
  ],
  authors: [{ name: "MyVedika" }],
  creator: "MyVedika",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.myvedika.online",
    title: "MyVedika - Premium Digital Invitations",
    description: "Create a beautiful, private digital space for your special moments, memories, photos and videos.",
    siteName: "MyVedika",
  },
  twitter: {
    card: "summary_large_image",
    title: "MyVedika - Premium Digital Invitations",
    description: "Create stunning digital event websites in minutes.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
