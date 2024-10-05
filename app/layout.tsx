import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navigation } from "./components/auth/navigation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "T3 Stack demo",
  description: "T3 stack demo",
};

type RootLayoutProps = {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <Navigation />

          <main className="mx-auto max-w-screen-md flex-1 px-2">
            {children}
          </main>

          <footer className="py-5">
            <div className="text-center text-sm">
              Copyright © All rights reserved |{"    "}
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                full stack
              </a>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
