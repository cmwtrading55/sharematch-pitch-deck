"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../common/SectionWrapper";
import Badge from "../common/Badge";
import { Shield, Clock } from "lucide-react";

export default function InvestmentSection() {
  return (
    <SectionWrapper id="investment" className="bg-bg-secondary py-5 md:py-10 xl:pt-4">
      <div className="text-center mb-5 xl:mb-4">
        <Badge variant="amber" className="mb-4">
          <Clock className="w-3 h-3" /> Seed Round &mdash; Closing 6th March
        </Badge>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Investment Terms
        </h2>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          £4M at £64M post-money. Round closes{" "}
          <span className="text-amber-400 font-semibold">6th March 2026</span>.
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
          <p className="text-5xl font-bold mb-2">£4M</p>
          <p className="text-text-secondary mb-6">
            Seed Round at £64M Post-Money Valuation
          </p>

          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
            <div>
              <p className="text-2xl font-bold text-emerald-400">6.25%</p>
              <p className="text-xs text-text-muted">Total Equity</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-amber-400">$12B</p>
              <p className="text-xs text-text-muted">Comparable Valuations</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-text-primary">£64M</p>
              <p className="text-xs text-text-muted">Post-Money</p>
            </div>
          </div>
        </div>
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
              &mdash; UK investors may claim up to{" "}
              <span className="text-text-primary font-medium">30% income tax relief</span>{" "}
              via the Enterprise Investment Scheme. Capital gains tax exemption on qualifying shares held 3+ years.
            </span>
          </div>
        </div>
      </motion.div>

    </SectionWrapper>
  );
}
