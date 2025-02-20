import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "sonner";
import { Geist, Geist_Mono } from "next/font/google";
import { QueryClientProvider } from "@tanstack/react-query";
import NextAuthSessionProvider from "@/providers/sessionProvider";

import { queryClient } from "@/providers/queryClient";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Waffle",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextAuthSessionProvider>
          <QueryClientProvider client={queryClient}>
            <Toaster />
            {children}
          </QueryClientProvider>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
