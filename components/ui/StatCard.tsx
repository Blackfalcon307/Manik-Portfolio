"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

interface StatCardProps {
  value: number | string;
  suffix?: string;
  label: string;
  isString?: boolean;
  isInView?: boolean;
}

export default function StatCard({
  value,
  suffix = "",
  label,
  isString = false,
  isInView = false,
}: StatCardProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const displayRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (
      isInView &&
      !isString &&
      !hasAnimated.current &&
      typeof value === "number"
    ) {
      hasAnimated.current = true;
      const controls = animate(count, value, {
        duration: 2,
        ease: "easeOut",
      });
      return () => controls.stop();
    }
  }, [isInView, value, isString, count]);

  useEffect(() => {
    if (!isString) {
      return rounded.on("change", (v) => {
        if (displayRef.current) {
          displayRef.current.textContent = String(v);
        }
      });
    }
  }, [rounded, isString]);

  return (
    <div className="p-6 rounded-2xl border border-[#222222] bg-[#111111] hover:border-[#333333] transition-colors group">
      <div className="flex items-end gap-0.5 mb-2">
        {isString ? (
          <span className="text-4xl font-black text-[#00C2FF] leading-none">
            {value}
          </span>
        ) : (
          <>
            <span
              ref={displayRef}
              className="text-4xl font-black text-[#00C2FF] leading-none"
            >
              0
            </span>
            {suffix && (
              <span className="text-2xl font-black text-[#00C2FF] leading-none mb-0.5">
                {suffix}
              </span>
            )}
          </>
        )}
      </div>
      <p className="text-[#A1A1AA] text-sm font-mono">{label}</p>
      <div className="mt-3 h-px bg-gradient-to-r from-[#00C2FF]/40 to-transparent group-hover:from-[#00C2FF]/70 transition-all" />
    </div>
  );
}
