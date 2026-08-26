"use client";

import { useEffect, useState } from "react";

export default function TypewriterText({
  text,
  speed = 40,
  className,
}: {
  text: string;
  speed?: number;
  className?: string;
}) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    setDisplayed(""); // reset if text changes
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span className={className}>
      {displayed}
      <span className="animate-pulse">▌</span>
    </span>
  );
}