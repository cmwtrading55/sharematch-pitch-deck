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
          <Clock className="w-3 h-3" /> Seed Round, Closing 24th April
        </Badge>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Investment Terms
        </h2>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          $5.2M at $83M post-money. Round closes{" "}
          <span className="text-amber-400 font-semibold">24th April 2026</span>.
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
          <p className="text-5xl font-bold mb-2">$5.2M</p>
          <p className="text-text-secondary mb-6">
            Seed Round at $83M Post-Money Valuation
          </p>

          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
            <div>
              <p className="text-2xl font-bold text-emerald-400">6.25%</p>
              <p className="text-xs text-text-muted">Total Equity</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-amber-400">$22B</p>
              <p className="text-xs text-text-muted">Comparable Valuations</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-text-primary">$83M</p>
              <p className="text-xs text-text-muted">Post-Money</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Fundraise Progress Tracker */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="max-w-2xl mx-auto mb-8"
      >
        <div className="p-6 rounded-2xl glass-card border border-white/10">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider">Fundraise Progress</h3>
            <span className="text-xs text-amber-400 font-semibold">60% Committed</span>
          </div>

          {/* Progress bar */}
          <div className="relative h-5 rounded-full bg-white/5 overflow-hidden mb-4">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "60%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 1.2, ease: "easeOut" }}
              className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-400"
            />
            {/* Glow effect on the leading edge */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "60%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 1.2, ease: "easeOut" }}
              className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-transparent via-transparent to-emerald-300/40 blur-sm"
            />
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-xl font-bold text-emerald-400">$3.1M</p>
              <p className="text-[10px] text-text-muted uppercase tracking-wider">Committed</p>
            </div>
            <div>
              <p className="text-xl font-bold text-amber-400">$2.1M</p>
              <p className="text-[10px] text-text-muted uppercase tracking-wider">Remaining</p>
            </div>
            <div>
              <p className="text-xl font-bold text-text-primary">$5.2M</p>
              <p className="text-[10px] text-text-muted uppercase tracking-wider">Target</p>
            </div>
          </div>

          {/* Milestone markers */}
          <div className="mt-4 pt-4 border-t border-white/5">
            <div className="flex items-center justify-between text-[10px] text-text-muted">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Closes 24th April 2026</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                <span>Accepting commitments now</span>
              </div>
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
