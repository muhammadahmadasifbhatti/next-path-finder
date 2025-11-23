import "@radix-ui/themes/styles.css";
import "@/app/globals.css";

import { Box, Theme } from "@radix-ui/themes";
import type { Metadata } from "next";
import React from "react";

import Navigation from "@/components/Navigation";

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
  return (
    <html lang="en">
      <body>
        <Theme appearance="dark" grayColor="sand" accentColor="lime">
          <Navigation />
          <Box p="4">{children}</Box>
        </Theme>
      </body>
    </html>
  );
}
