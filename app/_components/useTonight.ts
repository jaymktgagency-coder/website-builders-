"use client";

import { useEffect, useState } from "react";
import { getTonight, type Tonight } from "@/lib/tonight";

/** Tonight's status in Hollywood time. null until mounted, to avoid hydration drift. */
export function useTonight() {
  const [tonight, setTonight] = useState<Tonight | null>(null);
  useEffect(() => {
    const update = () => setTonight(getTonight());
    update();
    const id = window.setInterval(update, 60_000);
    return () => window.clearInterval(id);
  }, []);
  return tonight;
}
