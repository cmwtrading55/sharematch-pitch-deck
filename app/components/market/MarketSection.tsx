"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../common/SectionWrapper";
import AnimatedCounter from "../common/AnimatedCounter";
import Badge from "../common/Badge";
import { Globe } from "lucide-react";

const phases = [
  {
    phase: "Phase 1",
    region: "GCC",
    focus: "Initial launch focused on KSA",
    tamNum: 40,
    segments: [
      "Saudi Arabia: 23M+ Muslim population",
      "Wider GCC: 18M+ highly digital, high-ARPU users",
    ],
    highlight: true,
  },
  {
    phase: "Phase 2",
    region: "Asia Pacific",
    focus: "Indonesia, India, Pakistan, Bangladesh",
    tamNum: 800,
    segments: [
      "Indonesia: 230M+ Muslims, Liga 1 supporters",
      "India & Pakistan: 430M+ Muslims, PCB & ACC access",
      "Bangladesh: 150M+ Muslims, mobile-first economy",
    ],
  },
  {
    phase: "Phase 3",
    region: "Greater MENA",
    focus: "Türkiye, North Africa, and the Levant",
    tamNum: 340,
    segments: [
      "Türkiye & Azerbaijan: 93M+ Muslims",
      "Egypt: 95M+ Muslims, largest Arab market",
      "North Africa & Levant: 140M+ across the region",
    ],
  },
  {
    phase: "Phase 4",
    region: "Africa & Global Diaspora",
    focus: "Sub-Saharan Africa, Europe, the Americas",
    tamNum: 400,
    segments: [
      "Nigeria: 100M+ Muslims",
      "Europe: 44M+ Muslims (UK, France, Germany)",
      "Americas & Oceania: growing diaspora communities",
    ],
  },
];

export default function MarketSection() {
  return (
    <SectionWrapper id="markets" className="bg-bg-secondary py-5 md:py-10 xl:pt-4">
      <div className="text-center mb-8">
        <Badge variant="emerald" className="mb-4">
          <Globe className="w-3 h-3" /> Global Expansion
        </Badge>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          1.5B+ Addressable Users. Four Phases.
        </h2>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          ~2 billion Muslims worldwide, ~1.5 billion mobile-connected. Four
          phases of expansion, from the GCC to the global diaspora.
        </p>
      </div>

      <div className="space-y-5">
        {phases.map((p, i) => (
          <motion.div
            key={p.region}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 2) * 0.08, duration: 0.6 }}
            className={`p-6 md:p-8 rounded-2xl ${
              p.highlight
                ? "bg-emerald-900/30 border border-emerald-500/15"
                : "glass-card glass-card-hover"
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
              <div>
                <Badge variant={p.highlight ? "amber" : "emerald"} className="mb-2">
                  {p.phase}
                </Badge>
                <h3 className="text-2xl font-bold">{p.region}</h3>
                <p className="text-text-secondary text-sm">{p.focus}</p>
              </div>
              <div className="text-right shrink-0">
                <AnimatedCounter
                  target={p.tamNum}
                  suffix="M+"
                  className={`text-4xl font-bold ${p.highlight ? "text-amber-400" : "text-emerald-400"}`}
                />
                <p className="text-text-muted text-sm">Addressable Users</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {p.segments.map((s) => (
                <div
                  key={s}
                  className="px-3 py-2 rounded-lg bg-white/5 text-sm text-text-secondary"
                >
                  {s}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
