"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../common/SectionWrapper";
import AnimatedCounter from "../common/AnimatedCounter";
import Badge from "../common/Badge";

const comparables = [
  {
    name: "Kalshi",
    badge: "Regulated",
    badgeVariant: "muted" as const,
    valuation: 12,
    suffix: "B",
    prefix: "$",
    source: "Feb 2026 Secondary Market",
    barColor: "bg-text-muted/30",
    status: "US Market Leader",
    bg: "glass-card",
  },
  {
    name: "Polymarket",
    badge: "Crypto",
    badgeVariant: "muted" as const,
    valuation: 12,
    suffix: "B",
    prefix: "$",
    source: "Feb 2026 Secondary Market",
    barColor: "bg-text-muted/30",
    status: "Global Dominance",
    bg: "glass-card",
  },
  {
    name: "ShareMatch",
    badge: "Shariah Compliant",
    badgeVariant: "amber" as const,
    valuation: 64,
    suffix: "M",
    prefix: "£",
    source: "Post-Money Seed Valuation",
    barColor: "bg-gradient-to-r from-amber-500 to-amber-400",
    status: "Uncapped Upside",
    bg: "bg-emerald-900 border border-emerald-500/20",
    featured: true,
  },
];

export default function OpportunitySection() {
  return (
    <SectionWrapper id="opportunity">
      <div className="text-center mb-16">
        <Badge variant="emerald" className="mb-4">
          Market Context
        </Badge>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          $12B Valuations. Zero Shariah Coverage.
        </h2>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          Prediction markets are the fastest-growing asset class in fintech.
          ShareMatch owns the only segment the incumbents structurally cannot
          enter.
        </p>
      </div>

      {/* Comparable Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {comparables.map((comp, i) => (
          <motion.div
            key={comp.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: i * 0.15,
              duration: 0.6,
              ease: [0.22, 0.61, 0.36, 1],
            }}
            className={`relative p-6 rounded-2xl transition-all duration-500 ${
              comp.featured
                ? `${comp.bg} shimmer md:-translate-y-4 glow-emerald`
                : comp.bg
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">{comp.name}</h3>
              <Badge variant={comp.badgeVariant}>{comp.badge}</Badge>
            </div>

            <div className="mb-1">
              <AnimatedCounter
                target={comp.valuation}
                prefix={comp.prefix}
                suffix={comp.suffix}
                className={`text-4xl font-bold ${
                  comp.featured ? "text-amber-400" : "text-text-primary"
                }`}
              />
            </div>
            <p className="text-sm text-text-muted mb-6">{comp.source}</p>

            {/* Progress bar */}
            <div className="relative h-8 rounded-full bg-white/5 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.5 + i * 0.15,
                  duration: 1,
                  ease: "easeOut",
                }}
                className={`absolute inset-y-0 left-0 rounded-full ${comp.barColor}`}
              />
              <span className="absolute inset-0 flex items-center justify-center text-xs font-medium">
                {comp.status}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* TAM Callout */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center p-8 rounded-2xl bg-gradient-to-br from-emerald-900/50 to-bg-secondary border border-emerald-500/10"
      >
        <p className="text-text-secondary mb-2 text-sm uppercase tracking-wider">
          Total Addressable Market
        </p>
        <AnimatedCounter
          target={7.5}
          prefix="$"
          suffix=" Trillion"
          decimals={1}
          className="text-5xl md:text-6xl font-bold text-emerald-400"
        />
        <p className="text-text-secondary mt-2">
          Islamic Finance &mdash; growing 10% annually, entirely unserved by
          digital markets
        </p>
      </motion.div>
    </SectionWrapper>
  );
}
