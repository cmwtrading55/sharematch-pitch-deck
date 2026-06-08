"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../common/SectionWrapper";
import Badge from "../common/Badge";
import { Shield, Clock, FileText, Eye, Repeat } from "lucide-react";

const terms = [
  {
    icon: FileText,
    title: "Ordinary shares",
    detail: "Fully paid ordinary shares in ShareMatch Limited (UK). No debt, no interest.",
  },
  {
    icon: Eye,
    title: "Information rights",
    detail: "Monthly KPI report, quarterly board observer seat, and audited annual accounts.",
  },
  {
    icon: Repeat,
    title: "Pre-emption",
    detail: "Pro-rata participation rights in the Series A and Series B rounds.",
  },
];

export default function InvestmentSection() {
  return (
    <SectionWrapper id="investment" className="bg-bg-secondary py-5 md:py-10 xl:pt-4">
      <div className="text-center mb-5 xl:mb-4">
        <Badge variant="amber" className="mb-4">
          <Clock className="w-3 h-3" /> Seed Round &middot; Open Now
        </Badge>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Investment Terms
        </h2>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          <span className="text-gold-gradient font-semibold">£4M at £60M pre-money</span> for 6.25%
          in ordinary shares. £2M takes ShareMatch to market; £4M funds the full twelve-month plan.
        </p>
      </div>

      {/* Key Terms Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto mb-8"
      >
          <div className="relative text-center p-8 rounded-2xl bg-emerald-900 border-2 border-emerald-400/50 glow-emerald">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Badge variant="amber">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400" />
              </span>
              Now Open
            </Badge>
          </div>
          <p className="font-display text-5xl font-bold mb-2 text-gold-gradient">£4M</p>
          <p className="text-text-secondary mb-6">
            Seed Round at £60M Pre-Money &middot; £64M Post-Money
          </p>

          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
            <div>
              <p className="text-2xl font-bold text-emerald-400">6.25%</p>
              <p className="text-xs text-text-muted">Ordinary Shares</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-amber-400">£22B</p>
              <p className="text-xs text-text-muted">Kalshi Comparable</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-text-primary">£64M</p>
              <p className="text-xs text-text-muted">Post-Money</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* What investors get */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="max-w-2xl mx-auto mb-8 grid md:grid-cols-3 gap-4"
      >
        {terms.map((t) => (
          <div key={t.title} className="p-5 rounded-2xl glass-card">
            <t.icon className="w-5 h-5 text-amber-400 mb-3" />
            <h3 className="text-sm font-semibold mb-1.5">{t.title}</h3>
            <p className="text-xs text-text-secondary leading-relaxed">{t.detail}</p>
          </div>
        ))}
      </motion.div>

      {/* Scarcity callout */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto mb-6 text-center p-5 rounded-2xl bg-amber-500/5 border border-amber-500/20"
      >
        <p className="text-sm md:text-base text-text-primary">
          We do not expect to raise again this year.{" "}
          <span className="text-amber-400 font-semibold">This is the only chance to own ShareMatch at seed.</span>
        </p>
      </motion.div>

      {/* EIS Badge */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto mb-12"
      >
          <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/15">
          <Shield className="w-5 h-5 text-emerald-400 shrink-0" />
          <div className="text-sm">
            <span className="text-emerald-400 font-semibold">EIS Eligible</span>{" "}
            <span className="text-text-secondary">
              , UK investors may claim up to{" "}
              <span className="text-text-primary font-medium">30% income tax relief</span>{" "}
              via the Enterprise Investment Scheme. Capital gains tax exemption on qualifying shares held 3+ years.
            </span>
          </div>
        </div>
      </motion.div>

    </SectionWrapper>
  );
}
