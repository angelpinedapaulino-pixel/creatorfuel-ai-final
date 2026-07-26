import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-slate-800 bg-slate-950/90 p-6 shadow-2xl shadow-black/20",
        className
      )}
      {...props}
    />
  );
}
