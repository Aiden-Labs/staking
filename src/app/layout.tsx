import { Navbar } from "@/components/navbar";
import { Providers } from "@/components/providers";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aiden - Staking",
  description: "Staking for Aiden",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} dark antialiased`}
      >
        <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-primary/20 to-accent/20 blur-xl" />
        <Providers cookie={(await headers()).get("cookie")}>
          <Navbar />
          <div className="flex min-h-screen flex-col">
            <main className="mt-24 flex flex-grow px-4 sm:px-6 md:mt-40 lg:px-8">
              {children}
            </main>
            <footer className="flex items-center justify-center gap-1 py-8 text-center text-sm text-muted-foreground">
              Powered by{" "}
              <Link href="https://liteflow.com">
                <Image
                  src="/liteflow.svg"
                  alt="Liteflow Logo"
                  width={96}
                  height={24}
                />
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
