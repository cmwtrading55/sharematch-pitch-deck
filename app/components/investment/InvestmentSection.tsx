"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "../common/SectionWrapper";
import Badge from "../common/Badge";
import CountdownTimer from "../common/CountdownTimer";
import { Shield, Clock } from "lucide-react";

const useOfFunds = [
  { label: "KSA & GCC User Acquisition", percent: 35, amount: 1.4 },
  { label: "Liquidity & Market Making", percent: 25, amount: 1.0 },
  { label: "Engineering & Product", percent: 25, amount: 1.0 },
  { label: "Shariah & Regulatory Operations", percent: 15, amount: 0.6 },
];

const valuationMarks = [
  { value: 100, label: "£100M" },
  { value: 300, label: "£300M" },
  { value: 640, label: "£640M" },
  { value: 1000, label: "£1B" },
  { value: 3000, label: "£3B" },
  { value: 6400, label: "£6.4B" },
  { value: 8770, label: "£8.77B" },
];

function formatReturn(value: number): string {
  if (value >= 1000) return `£${(value / 1000).toFixed(1)}B`;
  return `£${value.toFixed(0)}M`;
}

function formatMultiple(value: number): string {
  if (value < 10) return `${value.toFixed(1)}x`;
  return `${Math.round(value)}x`;
}

export default function InvestmentSection() {
  const [futureValuation, setFutureValuation] = useState(1000);
  const [investmentAmount, setInvestmentAmount] = useState(100); // £K

  const minLog = Math.log(100);
  const maxLog = Math.log(8770);
  const sliderToValue = (slider: number) =>
    Math.exp(minLog + (slider / 100) * (maxLog - minLog));
  const valueToSlider = (value: number) =>
    ((Math.log(value) - minLog) / (maxLog - minLog)) * 100;

  const sliderPosition = valueToSlider(futureValuation);

  const equityPercent = (investmentAmount / 1000) / 64 * 100;
  const equityValue = (equityPercent / 100) * futureValuation;
  const returnMultiple = equityValue / (investmentAmount / 1000);
  const profit = equityValue - investmentAmount / 1000;

  return (
    <SectionWrapper id="investment" className="bg-bg-secondary">
      <div className="text-center mb-16">
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
              <p className="text-2xl font-bold text-amber-400">187x</p>
              <p className="text-xs text-text-muted">Growth Potential</p>
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
          <Shield className="w-5 h-5 text-emerald-400 flex-shrink-0" />
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

      {/* Countdown */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto mb-12 text-center"
      >
        <p className="text-xs text-text-muted uppercase tracking-wider mb-3">
          Round closes in
        </p>
        <CountdownTimer targetDate="2026-03-06T23:59:59Z" />
      </motion.div>

      {/* Use of Funds */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto mb-16"
      >
        <h3 className="text-xl font-semibold mb-6 text-center">
          Use of Funds
        </h3>
        <div className="space-y-4">
          {useOfFunds.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card p-4"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">{item.label}</span>
                <span className="text-sm text-emerald-400 font-semibold">
                  £{item.amount}M ({item.percent}%)
                </span>
              </div>
              <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.percent}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.8, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ROI Calculator */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto p-8 md:p-10 rounded-2xl bg-bg-elevated border border-white/5"
      >
        <h3 className="text-2xl font-bold mb-2 text-center">
          Return Scenario Calculator
        </h3>
        <p className="text-text-secondary text-sm text-center mb-8">
          See what your investment could be worth at different future valuations
        </p>

        {/* Investment Amount Selector */}
        <div className="mb-8">
          <p className="text-sm text-text-muted mb-3 text-center">
            Your investment amount
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[10, 25, 50, 100, 250, 500].map((amount) => (
              <button
                key={amount}
                onClick={() => setInvestmentAmount(amount)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  investmentAmount === amount
                    ? "bg-emerald-900 text-emerald-400 border border-emerald-500/30"
                    : "glass-card text-text-muted hover:text-text-primary"
                }`}
              >
                £{amount >= 1000 ? `${amount / 1000}M` : `${amount}K`}
              </button>
            ))}
          </div>
        </div>

        {/* Valuation Slider */}
        <div className="mb-10">
          <div className="flex justify-between text-sm text-text-muted mb-2">
            <span>£100M</span>
            <span className="text-lg font-bold text-amber-400">
              {formatReturn(futureValuation)}
            </span>
            <span>£8.77B</span>
          </div>
          <input
            type="range"
            min={0}
            max={100}
            step={0.5}
            value={sliderPosition}
            onChange={(e) =>
              setFutureValuation(sliderToValue(Number(e.target.value)))
            }
            className="w-full h-2 rounded-full appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #10b981 0%, #f59e0b ${sliderPosition}%, rgba(255,255,255,0.05) ${sliderPosition}%, rgba(255,255,255,0.05) 100%)`,
            }}
          />
          <div className="flex justify-between mt-2">
            {valuationMarks.map((mark) => (
              <button
                key={mark.value}
                onClick={() => setFutureValuation(mark.value)}
                className="text-[10px] text-text-muted hover:text-emerald-400 transition-colors hidden md:block"
              >
                {mark.label}
              </button>
            ))}
          </div>
        </div>

        {/* Return Result */}
        <motion.div
          layout
          className="p-6 rounded-xl text-center bg-emerald-900/50 border border-emerald-500/20"
        >
          <p className="text-sm text-text-muted mb-1">
            £{investmentAmount >= 1000 ? `${investmentAmount / 1000}M` : `${investmentAmount}K`} invested
            &rarr; {equityPercent.toFixed(4)}% equity
          </p>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${Math.round(futureValuation)}-${investmentAmount}`}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-4xl font-bold text-amber-400 mb-1">
                {formatMultiple(returnMultiple)}
              </p>
              <p className="text-lg text-emerald-400">
                {formatReturn(equityValue)} value
              </p>
              <p className="text-sm text-text-muted mt-1">
                {profit > 0 ? "+" : ""}
                {formatReturn(profit)} return
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* EIS callout inside calculator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-6 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10 text-center"
        >
          <p className="text-xs text-text-secondary">
            <span className="text-emerald-400 font-semibold">With EIS relief:</span>{" "}
            UK investors effectively invest at a{" "}
            <span className="text-text-primary font-medium">30% discount</span>.
            A £100K investment costs just £70K after tax relief.
          </p>
        </motion.div>

        {/* Comparables callout */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-4 p-5 rounded-xl bg-amber-500/5 border border-amber-500/15 text-center"
        >
          <p className="text-sm text-text-secondary">
            Kalshi and Polymarket are both valued at{" "}
            <span className="text-amber-400 font-semibold">$12B today</span>.
            If ShareMatch reaches just{" "}
            <span className="text-amber-400 font-semibold">one tenth</span>{" "}
            of that (~£880M), that is already a{" "}
            <span className="text-amber-400 font-bold">10x+ return</span> on
            the seed round.
          </p>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
