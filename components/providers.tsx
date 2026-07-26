"use client";

import { ToasterProvider } from "@/components/toaster-provider";

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <>
      {children}
      <ToasterProvider />
    </>
  );
}
