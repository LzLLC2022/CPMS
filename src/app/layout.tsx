import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CTAF Portal",
  description: "Climate Technology Accelerator Fund",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white">
        <Header />

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col w-full">
          {children}
        </main>

        {/* Footer Layer */}
        <footer className="w-full bg-gray-50 px-10 py-10 shrink-0 border-t border-gray-200 print:hidden">
          <div className="mx-auto max-w-[1728px]">
            <div className="flex flex-col gap-8 pb-6 md:flex-row md:items-center md:justify-between">
              <div className="flex w-full flex-col gap-6 md:w-auto md:flex-row md:items-center md:gap-10">
                <div className="flex w-full max-w-[320px] shrink-0 flex-col gap-1 text-gray-900">
                  <h3 className="text-lg font-semibold">CTAF</h3>
                  <p className="text-sm leading-tight break-words text-gray-600">
                    Climate Technology Accelerator Fund
                  </p>
                </div>
                <div className="flex min-w-0 flex-col gap-3">
                  <div className="flex items-center gap-2">
                    {/* Mail Icon SVG */}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <span className="text-sm text-gray-700">ctaf@gggi.org</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <a href="https://gggi.org/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                  <Image src="/logo-gggi.png" alt="GGGI Logo" width={96} height={96} className="h-12 w-auto object-contain" />
                </a>
                <a href="https://www.mofa.go.kr/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                  <Image src="/logo-mofa.png" alt="MOFA Logo" width={96} height={96} className="h-12 w-auto object-contain" />
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-4 border-t border-black/10 pt-6 md:flex-row md:items-end md:gap-6">
              <span className="text-sm text-gray-500">©All Rights Reserved</span>
              <div className="flex flex-wrap items-center gap-2">
                <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                  Terms and Conditions
                </Link>
                <span className="h-3 w-px bg-gray-300"></span>
                <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
