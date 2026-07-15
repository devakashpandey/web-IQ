import { ClerkProvider } from "@clerk/nextjs";
import { shadcn } from "@clerk/ui/themes";
import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "webIQ | Agentic AI Website & Web App Builder",
  description: "Create, iterate, and deploy premium web applications with collaborative AI agents and a visual code-canvas workspace. The dark canvas builder that code-syncs in real time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${inter.variable} h-full antialiased`}
      style={{ colorScheme: "dark" }}
    >
      <body className="min-h-full flex flex-col bg-[#090909] text-white">
        <ClerkProvider appearance={{ theme: shadcn }}>
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}