"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
// removed supabase browser import
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import toast from "react-hot-toast";

export default function RegisterPage() {
  const router = useRouter();
  // Supabase removed; using custom auth endpoint
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
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
    <div className="mx-auto max-w-md px-6 py-16 sm:px-8 lg:py-20">
      <div className="rounded-[2rem] border border-slate-800 bg-[#111827] p-10 shadow-[0_30px_70px_-40px_rgba(0,0,0,0.6)]">
        <div className="space-y-4 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Create your account</p>
          <h1 className="text-3xl font-semibold text-white">Start building with CreatorFuel AI</h1>
          <p className="text-sm leading-6 text-slate-400">
            Sign up and begin managing credits, subscriptions and creator workflows in one place.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-10 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Full name</Label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Your name"
              required
            />
          </div>
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
              placeholder="Create a password"
              minLength={8}
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Creating account..." : "Create account"}
          </Button>
        </form>
      </div>
    </div>
  );
}
