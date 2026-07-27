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
    <html lang="en" className="h-full">
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-[#070B16] text-white antialiased`}>
        <Providers>
          <div className="relative min-h-screen overflow-hidden">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.18),transparent_24%),radial-gradient(circle_at_top_right,_rgba(139,92,246,0.12),transparent_28%)]" />
            <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070B16]/90 backdrop-blur-xl">
              <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-4 sm:px-8">
                <Link href="/" className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white shadow-[0_20px_80px_-60px_rgba(139,92,246,0.45)] transition hover:border-violet-400/40">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-500 text-white shadow-lg shadow-violet-500/20">
                    CF
                  </span>
                  CreatorFuel AI
                </Link>
                <nav className="flex flex-wrap items-center gap-2 text-sm font-medium text-slate-300">
                  <Link href="/dashboard" className="rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white">
                    Dashboard
                  </Link>
                  <Link href="/pricing" className="rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white">
                    Pricing
                  </Link>
                  <Link href="/login" className="rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white">
                    Login
                  </Link>
                  <Link href="/register" className="rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-4 py-2 text-white transition hover:brightness-110">
                    Register
                  </Link>
                </nav>
              </div>
            </header>

            <main>{children}</main>

            <footer className="border-t border-white/10 bg-[#070B16]/90 text-slate-500">
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
