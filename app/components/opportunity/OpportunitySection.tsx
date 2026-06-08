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
    valuation: 16.5,
    decimals: 1,
    suffix: "B",
    prefix: "£",
    source: "$22B, Mar 2026 Series F (Bloomberg)",
    barColor: "bg-text-muted/30",
    status: "US Market Leader",
    bg: "glass-card",
  },
  {
    name: "Polymarket",
    badge: "Crypto",
    badgeVariant: "muted" as const,
    valuation: 9,
    decimals: 0,
    suffix: "B",
    prefix: "£",
    source: "$12B, 2026 (ICE-backed)",
    barColor: "bg-text-muted/30",
    status: "Global Dominance",
    bg: "glass-card",
  },
  {
    name: "ShareMatch",
    badge: "Shariah-Compliant",
    badgeVariant: "amber" as const,
    valuation: 64,
    decimals: 0,
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
          Record Valuations. A Market Incumbents Can&rsquo;t Serve.
        </h2>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          Prediction markets are Fintech&rsquo;s fastest-growing category, Kalshi
          alone is now worth £16.5B. ShareMatch owns the one segment incumbents
          cannot enter.
        </p>
      </div>

      {/* Comparable Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-16 items-stretch">
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
            className={`relative p-6 rounded-2xl transition-all duration-500 h-full flex flex-col ${
              comp.featured ? `${comp.bg} shimmer glow-emerald` : comp.bg
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
                decimals={comp.decimals}
                className={`text-4xl font-bold ${
                  comp.featured ? "text-amber-400" : "text-text-primary"
                }`}
              />
            </div>
            <p className="text-sm text-text-muted mb-6">{comp.source}</p>

            {/* Progress bar */}
            <div className="mt-auto relative h-8 rounded-full bg-white/5 overflow-hidden">
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

      {/* Pricing gap */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-16"
      >
        At £64M, ShareMatch is priced at just{" "}
        <span className="text-gold-gradient font-bold">0.4% of Kalshi</span> and{" "}
        <span className="text-gold-gradient font-bold">0.7% of Polymarket</span>, a foothold
        in a category they are structurally barred from serving.
      </motion.p>

      {/* TAM Callout */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center pt-8 pb-8 px-8 xl:pt-2 xl:pb-2 rounded-2xl bg-gradient-to-br from-emerald-900/50 to-bg-secondary border border-emerald-500/10"
      >
        <p className="text-text-secondary mb-2 text-sm uppercase tracking-wider">
          SHAREMATCH&rsquo;S TOTAL ADDRESSABLE MARKET
        </p>
        <AnimatedCounter
          target={5.8}
          prefix="£"
          suffix=" Trillion"
          decimals={1}
          className="text-5xl md:text-6xl font-bold text-emerald-400"
        />
        <p className="text-xs text-text-muted mt-1 mb-1">Islamic Finance industry size</p>
        <p className="text-text-secondary mt-1">
          Growing ~10% annually, entirely ignored by
          existing digital markets
        </p>
      </motion.div>
    </SectionWrapper>
  );
}
