import type { Metadata } from "next";
import Link from "next/link";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "@/components/providers";

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
  title: "CreatorFuel AI",
  description: "AI-powered creator growth platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} bg-[#0F172A] text-slate-100 antialiased`}>
        <Providers>
          <div className="min-h-screen">
            <header className="sticky top-0 z-30 border-b border-slate-800/70 bg-[#09090B]/95 backdrop-blur-xl">
              <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 sm:px-8">
                <Link href="/" className="text-lg font-semibold tracking-tight text-white">
                  CreatorFuel AI
                </Link>
                <nav className="flex flex-wrap gap-3 text-sm font-medium text-slate-300">
                  <Link href="/dashboard" className="rounded-full px-4 py-2 transition hover:bg-slate-900/80">
                    Dashboard
                  </Link>
                  <Link href="/pricing" className="rounded-full px-4 py-2 transition hover:bg-slate-900/80">
                    Pricing
                  </Link>
                  <Link href="/login" className="rounded-full px-4 py-2 transition hover:bg-slate-900/80">
                    Login
                  </Link>
                  <Link href="/register" className="rounded-full bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-500">
                    Register
                  </Link>
                </nav>
              </div>
            </header>

            <main>{children}</main>

            <footer className="border-t border-slate-800 bg-[#09090B] text-slate-500">
              <div className="mx-auto max-w-7xl px-6 py-6 sm:px-8 text-sm">
                © {new Date().getFullYear()} CreatorFuel AI. Built with Next.js.
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
