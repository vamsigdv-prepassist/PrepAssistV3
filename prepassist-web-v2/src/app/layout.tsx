import type { Metadata } from "next";
import DashboardLayout from "@/components/DashboardLayout";
import AuthGuard from "@/components/AuthGuard";
import "./globals.css";

export const metadata: Metadata = {
  title: "PrepAssist V2 | Your Personal AI Mentor",
  description: "Advanced RAG-driven AI platform for rigorous UPSC Civil Services Preparation natively extracting test structures dynamically.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col bg-[#020617] text-white font-sans">
        <AuthGuard>
          <DashboardLayout>
            {children}
          </DashboardLayout>
        </AuthGuard>
      </body>
    </html>
  );
}
