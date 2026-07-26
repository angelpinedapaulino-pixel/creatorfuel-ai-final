"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import toast from "react-hot-toast";
import { Lock, Mail, Sparkles } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    setLoading(false);

    if (!res.ok) {
      toast.error(data.error || "Unable to log in.");
      return;
    }

    toast.success("Logged in successfully.");
    router.push("/dashboard");
  };

  return (
    <main className="min-h-screen bg-[#070B16] px-6 py-16 sm:px-8 lg:px-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <section className="glass-card p-10">
          <div className="space-y-6 text-slate-300">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.28em] text-slate-200">
              <Sparkles className="h-4 w-4 text-violet-400" />
              CreatorFuel AI
            </div>
            <div>
              <h1 className="text-4xl font-semibold text-white">Welcome back</h1>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
                Log in to access your creator dashboard, manage credits, and build premium content with AI.
              </p>
            </div>
            <div className="grid gap-4 rounded-[2rem] border border-white/5 bg-white/5 p-6 text-slate-200 shadow-[0_30px_80px_-40px_rgba(139,92,246,0.35)]">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-violet-400" />
                <div>
                  <p className="text-sm font-semibold text-white">Secure login</p>
                  <p className="text-sm text-slate-400">JWT auth and cookie sessions keep you safe.</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Lock className="h-5 w-5 text-cyan-400" />
                <div>
                  <p className="text-sm font-semibold text-white">Modern auth</p>
                  <p className="text-sm text-slate-400">Continue with your CreatorFuel account instantly.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="glass-card p-10">
          <div className="space-y-8">
            <div className="space-y-3 text-center">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Sign in</p>
              <h2 className="text-3xl font-semibold text-white">Access your creator workspace</h2>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>
              <Button type="submit" className="glass-button w-full" disabled={loading}>
                {loading ? "Signing in..." : "Continue"}
              </Button>
            </form>
            <p className="text-center text-sm text-slate-400">
              Don&apos;t have an account?{' '}
              <Link href="/register" className="text-violet-300 hover:text-violet-200">
                Create one now
              </Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
