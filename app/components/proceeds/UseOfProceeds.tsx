"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../common/SectionWrapper";
import Badge from "../common/Badge";

const fmt = (n: number) =>
  n >= 1_000_000 ? `£${(n / 1_000_000).toFixed(2).replace(/\.?0+$/, "")}M` : `£${Math.round(n / 1000)}k`;

const oneOff = {
  title: "Market Entry & Setup",
  tag: "One-off",
  subtotal: 1_481_000,
  accent: "from-amber-500 to-amber-400",
  items: [
    { label: "Launch marketing & FIFA World Cup", value: 510_000 },
    { label: "IP, patents & trademarks (12+ jurisdictions)", value: 500_000 },
    { label: "Corporate & regulatory (BVI, Poland MiCA, KSA)", value: 236_000 },
    { label: "Recruitment & first-year audit", value: 127_000 },
    { label: "Security & QA (Solana program audit, pen-test)", value: 108_000 },
  ],
};

const runRate = {
  title: "Twelve-Month Run-Rate",
  tag: "Recurring",
  subtotal: 2_606_400,
  accent: "from-emerald-500 to-emerald-400",
  items: [
    { label: "Leadership & senior team", value: 1_320_000 },
    { label: "Operations (support, coworking, data, travel)", value: 780_000 },
    { label: "Governance & advisory (Shariah Board, directors)", value: 216_000 },
    { label: "Core team & external compliance", value: 170_400 },
    { label: "Strategic & professional services", value: 120_000 },
  ],
};

function Column({ group }: { group: typeof oneOff }) {
  const max = Math.max(...group.items.map((i) => i.value));
  return (
    <div className="p-6 md:p-7 rounded-2xl glass-card">
      <div className="flex items-baseline justify-between mb-6">
        <div>
          <Badge variant="muted" className="mb-2">
            {group.tag}
          </Badge>
          <h3 className="text-xl font-bold">{group.title}</h3>
        </div>
        <p className="font-display text-2xl font-bold text-gold-gradient">
          {fmt(group.subtotal)}
        </p>
      </div>
      <div className="space-y-4">
        {group.items.map((item, i) => (
          <div key={item.label}>
            <div className="flex justify-between text-sm mb-1.5">
              <span className="text-text-secondary pr-3">{item.label}</span>
              <span className="text-text-primary font-medium tabular-nums shrink-0">
                {fmt(item.value)}
              </span>
            </div>
            <div className="h-2 rounded-full bg-white/5 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${(item.value / max) * 100}%` }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.08, duration: 0.9, ease: "easeOut" }}
                className={`h-full rounded-full bg-gradient-to-r ${group.accent}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function UseOfProceeds() {
  return (
    <SectionWrapper id="proceeds" className="bg-bg-secondary py-5 md:py-10 xl:pt-4">
      <div className="text-center mb-10">
        <Badge variant="amber" className="mb-4">
          Use of Proceeds
        </Badge>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Where the <span className="text-gold-gradient">£4M</span> Goes
        </h2>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          A fully costed twelve-month operating plan, May 2026 to April 2027.
          <span className="text-text-primary font-medium"> £2M takes ShareMatch to market</span>; the
          full £4M funds the entire year. We do not expect to raise again in 2026.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
        <Column group={oneOff} />
        <Column group={runRate} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto grid grid-cols-3 gap-4 text-center"
      >
        {[
          { v: "£1.48M", l: "One-off market entry" },
          { v: "£2.61M", l: "12-month run-rate" },
          { v: "£4.09M", l: "Total 12-month all-in" },
        ].map((s, i) => (
          <div
            key={s.l}
            className={`p-5 rounded-2xl ${i === 2 ? "bg-emerald-900 border border-amber-400/30 glow-emerald" : "glass-card"}`}
          >
            <p className={`font-display text-2xl md:text-3xl font-bold ${i === 2 ? "text-gold-gradient" : "text-text-primary"}`}>
              {s.v}
            </p>
            <p className="text-[11px] text-text-muted uppercase tracking-wider mt-1">{s.l}</p>
          </div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
