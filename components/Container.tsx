"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Container({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [animationKey, setAnimationKey] = useState(0);

  // trigger animation on route change
  useEffect(() => {
    setAnimationKey((prev) => prev + 1);
  }, [pathname]);

  return (
    <main
      key={animationKey}
      className="flex flex-col flex-1 container gap-y-10 opacity-0 animate-slidein"
    >
      {children}
    </main>
  );
}
