"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../common/SectionWrapper";
import AnimatedCounter from "../common/AnimatedCounter";
import GlowCard from "../common/GlowCard";
import Badge from "../common/Badge";
import { Globe, CreditCard } from "lucide-react";

const markets = [
  {
    region: "Saudi Arabia",
    phase: "Phase 1 — Launch Market",
    tam: "23.2M",
    tamNum: 23.2,
    segments: [
      "Football Ultras: 6.5M",
      "Casual Predictors: 12M",
      "Fantasy & Stats: 1.8M",
      "Finance Traders: 0.7M",
    ],
    rails: ["STC Pay", "urpay", "tiqmo"],
  },
  {
    region: "Indonesia",
    phase: "Phase 2",
    tam: "40M+",
    tamNum: 40,
    segments: ["Liga 1 Supporters: 40M+", "Sports Social Users: 180M"],
    rails: ["GoPay", "DANA"],
  },
  {
    region: "Africa",
    phase: "Phase 2",
    tam: "30-40M",
    tamNum: 400,
    segments: ["Nigeria Sports Fans", "East Africa Mobile-first"],
    rails: ["MPESA", "Safaricom"],
  },
  {
    region: "South Asia",
    phase: "Phase 2",
    tam: "~600M",
    tamNum: 600,
    segments: ["Cricket Fans: ~600M", "PCB & ACC Access"],
    rails: ["Local Rails"],
  },
  {
    region: "GCC",
    phase: "Phase 2",
    tam: "20M+",
    tamNum: 20,
    segments: ["Highly Digital Users", "High ARPU Market"],
    rails: ["STC Pay", "urpay"],
  },
];

export default function MarketSection() {
  return (
    <SectionWrapper id="markets" className="bg-bg-secondary py-5 md:py-10 xl:pt-4">
      <div className="text-center mb-5 xl:mb-4">
        <Badge variant="emerald" className="mb-4">
          <Globe className="w-3 h-3" /> Global Expansion
        </Badge>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          700M+ Addressable Users. Five Regions.
        </h2>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          KSA first, then Indonesia, Africa, South Asia, and wider GCC &mdash;
          native payment rails and strategic distribution in every market.
        </p>
      </div>

      {/* Phase 1 highlight */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="p-6 md:p-8 rounded-2xl bg-emerald-900/30 border border-emerald-500/15 mb-8"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <Badge variant="amber" className="mb-2">
              Phase 1 &mdash; March 2026
            </Badge>
            <h3 className="text-2xl font-bold">Saudi Arabia &mdash; KSA Launch</h3>
            <p className="text-text-secondary text-sm">
              Highest immediate conversion. Foundation for viral network effects.
            </p>
          </div>
          <div className="text-right">
            <AnimatedCounter
              target={23.2}
              suffix="M"
              decimals={1}
              className="text-4xl font-bold text-amber-400"
            />
            <p className="text-text-muted text-sm">Addressable Users</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {markets[0].segments.map((s) => (
            <div
              key={s}
              className="px-3 py-2 rounded-lg bg-white/5 text-sm text-text-secondary"
            >
              {s}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Phase 2 markets grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {markets.slice(1).map((m, i) => (
          <GlowCard key={m.region} delay={i * 0.1} className="p-5">
            <h4 className="text-lg font-semibold mb-1">{m.region}</h4>
            <AnimatedCounter
              target={m.tamNum}
              suffix="M+"
              className="text-2xl font-bold text-emerald-400"
            />
            <p className="text-xs text-text-muted mb-3">Addressable Users</p>
            <div className="space-y-1.5 mb-4">
              {m.segments.map((s) => (
                <p key={s} className="text-xs text-text-secondary">
                  {s}
                </p>
              ))}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {m.rails.map((r) => (
                <span
                  key={r}
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] bg-white/5 text-text-muted"
                >
                  <CreditCard className="w-2.5 h-2.5" />
                  {r}
                </span>
              ))}
            </div>
          </GlowCard>
        ))}
      </div>
    </SectionWrapper>
  );
}
