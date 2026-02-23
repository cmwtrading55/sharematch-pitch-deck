"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../common/SectionWrapper";
import AnimatedCounter from "../common/AnimatedCounter";
import GlowCard from "../common/GlowCard";
import Badge from "../common/Badge";
import { Globe, CreditCard } from "lucide-react";

const phases = [
  {
    phase: "Phase 1 — Seed",
    region: "GCC",
    focus: "Initial launch focused on KSA",
    tam: "40M+",
    tamNum: 40,
    segments: [
      "Saudi Arabia: 23M+ Muslim population",
      "Wider GCC: 18M+ highly digital, high-ARPU users",
    ],
    rails: ["STC Pay", "urpay", "tiqmo"],
    fullWidth: true,
    highlight: true,
  },
  {
    phase: "Phase 2 — Series A",
    region: "Asia Pacific",
    focus: "Indonesia, India, Pakistan, Bangladesh",
    tam: "800M+",
    tamNum: 800,
    segments: [
      "Indonesia: 230M+ Muslim population, Liga 1 supporters",
      "India & Pakistan: 430M+ Muslims, PCB & ACC access",
      "Bangladesh: 150M+ Muslims, mobile-first economy",
    ],
    rails: ["GoPay", "DANA", "JazzCash", "bKash"],
    fullWidth: true,
  },
  {
    phase: "Phase 3 — Series B",
    region: "Greater MENA",
    focus: "Türkiye, North Africa, and the Levant",
    tam: "340M+",
    tamNum: 340,
    segments: [
      "Türkiye & Azerbaijan: 93M+ Muslims, mature fintech infrastructure",
      "Egypt: 95M+ Muslims, largest Arab market by population",
      "North Africa & Levant: 140M+ across Morocco, Algeria, Tunisia, Jordan, Lebanon, Iraq",
    ],
    rails: ["Fawry", "CashPlus", "Papara", "Local Rails"],
    fullWidth: true,
  },
  {
    phase: "Phase 4 — The Future",
    region: "Sub-Saharan Africa",
    focus: "Mobile-first Muslim communities",
    tam: "300M+",
    tamNum: 300,
    segments: [
      "Nigeria: 100M+ Muslims",
      "East Africa: Kenya, Tanzania, Ethiopia",
    ],
    rails: ["MPESA", "Safaricom"],
    fullWidth: false,
  },
  {
    phase: "Phase 5 — The Future",
    region: "Rest of the World",
    focus: "Global Muslim diaspora",
    tam: "100M+",
    tamNum: 100,
    segments: [
      "Europe: 44M+ Muslims (UK, France, Germany)",
      "Americas & Oceania: growing diaspora communities",
    ],
    rails: ["Stripe", "Local Rails"],
    fullWidth: false,
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
          1.5B+ Addressable Users. Five Phases.
        </h2>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          ~2 billion Muslims worldwide. ~1.5 billion are mobile-connected.
          Five phases of expansion across GCC, Asia Pacific, Greater MENA,
          Sub-Saharan Africa, and the rest of the world.
        </p>
      </div>

      {/* Phase 1 — GCC (Seed) — full width highlight */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="p-6 md:p-8 rounded-2xl bg-emerald-900/30 border border-emerald-500/15 mb-6"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <Badge variant="amber" className="mb-2">
              {phases[0].phase}
            </Badge>
            <h3 className="text-2xl font-bold">{phases[0].region} &mdash; {phases[0].focus}</h3>
            <p className="text-text-secondary text-sm">
              Highest immediate conversion. Foundation for viral network effects.
            </p>
          </div>
          <div className="text-right">
            <AnimatedCounter
              target={phases[0].tamNum}
              suffix="M+"
              className="text-4xl font-bold text-amber-400"
            />
            <p className="text-text-muted text-sm">Addressable Users</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {phases[0].segments.map((s) => (
            <div
              key={s}
              className="px-3 py-2 rounded-lg bg-white/5 text-sm text-text-secondary"
            >
              {s}
            </div>
          ))}
          <div className="px-3 py-2 rounded-lg bg-white/5 text-sm text-text-secondary flex flex-wrap items-center gap-1.5">
            {phases[0].rails.map((r) => (
              <span
                key={r}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] bg-white/5 text-text-muted"
              >
                <CreditCard className="w-2.5 h-2.5" />
                {r}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Phase 2 & 3 — full width cards */}
      {phases.slice(1, 3).map((p, i) => (
        <motion.div
          key={p.region}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="p-6 md:p-8 rounded-2xl glass-card glass-card-hover mb-6"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <Badge variant="emerald" className="mb-2">
                {p.phase}
              </Badge>
              <h3 className="text-2xl font-bold">{p.region}</h3>
              <p className="text-text-secondary text-sm">{p.focus}</p>
            </div>
            <div className="text-right">
              <AnimatedCounter
                target={p.tamNum}
                suffix="M+"
                className="text-4xl font-bold text-emerald-400"
              />
              <p className="text-text-muted text-sm">Addressable Users</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {p.segments.map((s) => (
              <div
                key={s}
                className="px-3 py-2 rounded-lg bg-white/5 text-sm text-text-secondary"
              >
                {s}
              </div>
            ))}
            <div className="px-3 py-2 rounded-lg bg-white/5 text-sm text-text-secondary flex flex-wrap items-center gap-1.5">
              {p.rails.map((r) => (
                <span
                  key={r}
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] bg-white/5 text-text-muted"
                >
                  <CreditCard className="w-2.5 h-2.5" />
                  {r}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}

      {/* Phase 4 & 5 — half width cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {phases.slice(3).map((p, i) => (
          <GlowCard key={p.region} delay={i * 0.1} className="p-6 h-full flex flex-col">
            <Badge variant="emerald" className="mb-3 w-fit">
              {p.phase}
            </Badge>
            <h4 className="text-xl font-bold mb-1">{p.region}</h4>
            <p className="text-text-secondary text-xs mb-3">{p.focus}</p>
            <AnimatedCounter
              target={p.tamNum}
              suffix="M+"
              className="text-2xl font-bold text-emerald-400"
            />
            <p className="text-xs text-text-muted mb-4">Addressable Users</p>
            <div className="space-y-1.5 mb-4 flex-grow">
              {p.segments.map((s) => (
                <p key={s} className="text-xs text-text-secondary">
                  {s}
                </p>
              ))}
            </div>
            <div className="flex flex-wrap gap-1.5 mt-auto">
              {p.rails.map((r) => (
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
