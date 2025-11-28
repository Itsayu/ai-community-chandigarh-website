import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { BackgroundEffects } from "@/components/BackgroundEffects";
// import InitialLoader from "@/components/InitialLoader";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "AI Community Chandigarh",
  description:
    "The central hub for the Artificial Intelligence community in Chandigarh. Discover projects, events, jobs, and connect with peers.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-body antialiased", inter.className)}>
        {/* Initial global loader (canvas) */}
        {/* <InitialLoader /> */}

        <BackgroundEffects />
        <div className="relative z-10 flex min-h-dvh flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
