import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SpotterDesk AI - AI Voice Agents & Workflow Automations",
  description: "Deploy production-grade AI voice receptionists and intelligent automations with sub-500ms latency.",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body 
        className={`${inter.className} min-h-screen antialiased overflow-x-hidden bg-white text-slate-900`}
      >
        <div className="relative flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}