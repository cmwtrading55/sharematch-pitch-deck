"use client";

import { motion } from "framer-motion";
import Badge from "../common/Badge";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] pb-12 flex items-center justify-center gradient-mesh overflow-hidden">
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="section-container relative z-10 text-center pt-20 md:pt-24">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="font-display text-xs md:text-sm font-semibold uppercase tracking-[0.35em] text-amber-400/90 mb-5"
        >
          The Future of Halal SportFi
        </motion.p>

        {/* Status badge */}
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
            Live &amp; Trading &middot; Seed Round Open
          </Badge>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6 max-w-5xl mx-auto"
        >
          The World&rsquo;s First{" "}
          <span className="text-emerald-gradient">Shariah-Compliant</span>{" "}
          Sports Investment Market
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Live and trading on Solana. An official Fatwa, AAOIFI-standard assets
          and patent-pending settlement, the only Halal alternative to
          Polymarket, Kalshi and DraftKings.
        </motion.p>

        {/* Key stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-12 mb-5"
        >
          {[
            { value: "£4M", label: "Raising" },
            { value: "£64M", label: "Post-Money" },
            { value: "EIS", label: "UK Tax Relief" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-gold-gradient">
                {stat.value}
              </p>
              <p className="text-xs text-text-muted mt-1 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Scarcity line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="text-sm text-text-secondary mb-10"
        >
          We do not expect to raise again this year.{" "}
          <span className="text-amber-400 font-medium">This is the only chance to own ShareMatch.</span>
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#investment"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-emerald-600 text-white font-medium text-lg hover:bg-emerald-500 transition-all duration-300 hover:-translate-y-0.5 shimmer"
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
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary to-transparent" />
    </section>
  );
}
