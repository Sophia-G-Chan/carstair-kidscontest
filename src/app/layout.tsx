import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Carstairs Kids' Make, Bake & Grow Contest",
  description: "Join the Carstairs Horticultural & Craft Show for an exciting family adventure! Get creative together as kids make, bake, and grow their way to fun. A fantastic community event where young talents shine through crafts, cooking, and gardening. Enter now for memorable family moments!",
  keywords: "kids contest, family activities, Carstairs events, craft show, horticultural show, baking competition, gardening for kids",
  icons: {
    icon: "/ckcfavicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full min-h-screen flex flex-col  bg-gradient-to-b from-blue-50 to-purple-50 `}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
