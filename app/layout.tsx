import type { Metadata } from "next";
import Link from "next/link";
import localFont from "next/font/local";
import "./globals.css";

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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-screen bg-background text-foreground">
          <header className="border-b border-slate-200/80 bg-white/90 backdrop-blur-xl sticky top-0 z-20">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 sm:px-8">
              <Link href="/" className="text-lg font-semibold tracking-tight">
                CreatorFuel AI
              </Link>
              <nav className="flex flex-wrap gap-3 text-sm font-medium text-slate-700">
                <Link href="/dashboard" className="rounded-md px-3 py-2 transition hover:bg-slate-100">
                  Dashboard
                </Link>
                <Link href="/pricing" className="rounded-md px-3 py-2 transition hover:bg-slate-100">
                  Pricing
                </Link>
                <Link href="/login" className="rounded-md px-3 py-2 transition hover:bg-slate-100">
                  Login
                </Link>
                <Link href="/register" className="rounded-md px-3 py-2 bg-slate-900 text-white transition hover:bg-slate-700">
                  Register
                </Link>
              </nav>
            </div>
          </header>

          <main>{children}</main>

          <footer className="border-t border-slate-200/80 bg-white/90 text-slate-600">
            <div className="mx-auto max-w-7xl px-6 py-6 sm:px-8 text-sm">
              © {new Date().getFullYear()} CreatorFuel AI. Built with Next.js.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
