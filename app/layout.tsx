import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muhammad Ahmad | Intro",
  description: "Muhammad Ahmad's personal website",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("layout", inter.className);

  return (
    <html lang="en">
      <body>
        <div>
          <div className="w-full">
            <Navigation />
            <div className="background pt-4 h-full w-full px-10">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
