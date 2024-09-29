import React from 'react';
import type { Metadata } from "next";
import {Inter} from 'next/font/google'
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700', '800']
});

export const metadata: Metadata = {
  title: "News Homepage",
  description: "News Homepage build with bento grid design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
