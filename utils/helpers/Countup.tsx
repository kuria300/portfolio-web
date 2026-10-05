'use client'
import { useEffect, useRef, useState } from "react";

export function CountUp({ value, duration = 1500 }: { value: string; duration?: number }) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";

  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const el = ref.current;
    if (!el || !match) return;

    let raf = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect(); // run once

        const start = performance.now();
        const tick = (now: number): void => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3); // ease-out
          setCount(Math.round(target * eased));
          if (progress < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target, duration]);

  // value has no leading number, so show it as-is
  if (!match) return <span>{value}</span>;

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}