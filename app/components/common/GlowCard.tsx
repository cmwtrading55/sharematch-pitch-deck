"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "emerald" | "amber";
  delay?: number;
}

export default function GlowCard({
  children,
  className = "",
  glowColor = "emerald",
  delay = 0,
}: GlowCardProps) {
  const glowClass =
    glowColor === "amber"
      ? "hover:shadow-[0_0_60px_rgba(245,158,11,0.12)]"
      : "hover:shadow-[0_0_60px_rgba(16,185,129,0.12)]";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.22, 0.61, 0.36, 1] }}
      className={`glass-card glass-card-hover transition-all duration-500 ${glowClass} ${className}`}
    >
      {children}
    </motion.div>
  );
}
