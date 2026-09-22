import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Build Your Ganesh Royal Digital Invitation - MyVedika",
  description: "Customize your premium Ganesh Chaturthi event website. Add live darshan links, committee details, schedules, and UPI donation integration.",
  keywords: ["ganesh chaturthi invitation maker", "vinayaka chavithi digital card", "utsav samithi website", "ganesh pandal online", "myvedika ganesh"],
};

export default function GaneshRoyalLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
