"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import toast from "react-hot-toast";
import { Sparkles, UserPlus } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();
    setLoading(false);

    if (!res.ok) {
      toast.error(data.error || "Unable to create account.");
      return;
    }

    toast.success("Account created successfully.");
    router.push("/dashboard");
  };

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 sm:px-8 lg:px-10">
      <div className="relative mx-auto grid max-w-6xl gap-12 rounded-[2rem] border border-white/10 bg-slate-950/95 px-6 py-8 shadow-[0_40px_120px_-80px_rgba(59,130,246,0.25)] backdrop-blur-xl sm:px-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#060912] p-10 shadow-[0_10px_40px_-30px_rgba(59,130,246,0.35)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(168,85,247,0.18),transparent_25%)]" />
          <div className="relative space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.32em] text-slate-300">
              <Sparkles className="h-4 w-4 text-violet-300" />
              Premium onboarding
            </span>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold text-white">Create your creator workspace.</h1>
              <p className="max-w-xl text-sm leading-7 text-slate-300">
                Register now and get access to a premium dashboard, credit tracking, and AI tools for creators.
              </p>
            </div>
            <div className="grid gap-4 rounded-[1.75rem] border border-white/10 bg-white/5 p-6 text-slate-300">
              <div className="flex items-start gap-3">
                <UserPlus className="mt-1 h-5 w-5 text-cyan-300" />
                <div>
                  <p className="font-semibold text-white">Smooth onboarding</p>
                  <p className="text-sm text-slate-400">Create your account and start generating in seconds.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles className="mt-1 h-5 w-5 text-violet-300" />
                <div>
                  <p className="font-semibold text-white">Premium interface</p>
                  <p className="text-sm text-slate-400">Your frontend is now refined and elegant.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] bg-slate-900/95 p-10 shadow-[0_30px_90px_-40px_rgba(0,0,0,0.45)]">
          <div className="mb-8 space-y-3 text-center">
            <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Sign up</p>
            <h2 className="text-3xl font-semibold text-white">Start your CreatorFuel journey</h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor="name">Full name</Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Your full name"
                required
              />
            </div>
            <div className="space-y-3">
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
            <div className="space-y-3">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Create a password"
                minLength={8}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Creating account..." : "Create account"}
            </Button>
          </form>
          <p className="mt-6 text-center text-sm text-slate-400">
            Already registered?{' '}
            <Link href="/login" className="font-semibold text-violet-300 hover:text-violet-200">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
