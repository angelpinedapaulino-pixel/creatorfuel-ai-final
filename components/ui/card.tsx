import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-950/95 to-slate-900/90 p-6 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)] backdrop-blur-xl",
        className
      )}
      {...props}
    />
  );
}
