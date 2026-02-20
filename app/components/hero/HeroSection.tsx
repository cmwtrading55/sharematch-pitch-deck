"use client";

import { motion } from "framer-motion";
import Badge from "../common/Badge";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-mesh overflow-hidden">
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="section-container relative z-10 text-center pt-24">
        {/* Closing date badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-6"
        >
          <Badge variant="amber">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400" />
            </span>
            Seed Round Closing 6th March 2026
          </Badge>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 max-w-5xl mx-auto"
        >
          The World&rsquo;s First{" "}
          <span className="bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
            Shariah-Compliant
          </span>{" "}
          Digital Markets Platform
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Fatwa issued. Shariah compliant. Patent-protected. Market ready.
          Supported by leading Shariah scholars and EU regulated for Global Markets.
        </motion.p>

        {/* Key stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12"
        >
          {[
            { value: "£4M", label: "Raising" },
            { value: "£64M", label: "Post-Money" },
            { value: "EIS", label: "UK Tax Relief" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-amber-400">
                {stat.value}
              </p>
              <p className="text-xs text-text-muted mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#investment"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-emerald-900 text-white font-medium text-lg hover:bg-emerald-700 transition-all duration-300 hover:-translate-y-0.5 shimmer"
          >
            View Investment Terms
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
          <a
            href="#opportunity"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-text-secondary font-medium hover:border-emerald-500/30 hover:text-text-primary transition-all duration-300"
          >
            See the Opportunity
          </a>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary to-transparent" />
    </section>
  );
}
