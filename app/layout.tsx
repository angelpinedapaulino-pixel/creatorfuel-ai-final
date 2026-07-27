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
  description: "A premium AI platform for creators with refined design and the same backend logic.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-slate-950 text-white antialiased`}>
        <Providers>
          <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top_left,_rgba(95,119,255,0.22),transparent_25%),radial-gradient(circle_at_top_right,_rgba(58,207,216,0.16),transparent_20%)]" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-96 bg-[radial-gradient(circle_at_bottom_left,_rgba(139,92,246,0.22),transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.18),transparent_22%)]" />

            <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 backdrop-blur-2xl">
              <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-6 py-4 sm:px-8">
                <Link href="/" className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white shadow-[0_20px_80px_-60px_rgba(59,130,246,0.35)] transition hover:border-cyan-400/40">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-3xl bg-gradient-to-br from-violet-500 to-cyan-500 text-sm font-semibold text-white shadow-lg shadow-violet-500/25">
                    CF
                  </span>
                  CreatorFuel AI
                </Link>
                <nav className="hidden items-center gap-3 text-sm font-medium text-slate-300 md:flex">
                  <Link href="/" className="rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white">
                    Product
                  </Link>
                  <Link href="/pricing" className="rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white">
                    Pricing
                  </Link>
                  <Link href="/dashboard" className="rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white">
                    Dashboard
                  </Link>
                </nav>
                <div className="flex items-center gap-3">
                  <Link href="/login" className="rounded-full px-4 py-2 text-sm font-semibold text-slate-200 transition hover:bg-white/10 hover:text-white">
                    Login
                  </Link>
                  <Link href="/register" className="hidden rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:brightness-110 sm:inline-flex">
                    Register
                  </Link>
                </div>
              </div>
            </header>

            <main className="relative">{children}</main>

            <footer className="border-t border-white/10 bg-slate-950/95 text-slate-400">
              <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
                <div>
                  <p className="text-sm font-medium text-slate-300">CreatorFuel AI</p>
                  <p className="mt-2 text-sm text-slate-500">A premium creator platform designed for AI-first teams.</p>
                </div>
                <p className="text-sm">© {new Date().getFullYear()} CreatorFuel AI. Built with Next.js.</p>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
