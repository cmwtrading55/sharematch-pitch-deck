"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "../common/SectionWrapper";
import Badge from "../common/Badge";
import { Sparkles } from "lucide-react";

const stats = [
  "Built on Solana",
  "Live & Trading",
  "Dual-Token (SMUS + IAT)",
  "HAL AI · Google Gemini",
  "KYC by Sumsub",
  "On-Chain Settlement",
];

export default function ProductSection() {
  return (
    <SectionWrapper id="product" className="py-5 md:py-10 xl:pt-4">
      <div className="text-center mb-10">
        <Badge variant="emerald" className="mb-4">
          Live Product
        </Badge>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Live and Trading on <span className="text-emerald-gradient">Solana</span>
        </h2>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          Buy and sell verifiable, asset-backed performance tokens tied to live
          sports indices, across football, cricket, motorsport, golf, basketball
          and global events. Settled on-chain, with HAL AI built in.
        </p>
      </div>

      {/* Live platform: desktop + mobile */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative max-w-6xl mx-auto mb-12"
      >
        <div className="flex flex-col lg:flex-row gap-6 items-stretch justify-center">
          {/* Desktop */}
          <div className="browser-frame flex-1 w-full min-w-0 self-center">
            <div className="browser-frame-bar">
              <div className="browser-dot bg-red-500" />
              <div className="browser-dot bg-yellow-500" />
              <div className="browser-dot bg-green-500" />
              <div className="flex-1 mx-4">
                <div className="bg-white/5 rounded-md px-3 py-1 text-[11px] md:text-xs text-text-muted text-center">
                  rwa.sharematch.me
                </div>
              </div>
            </div>
            <div className="relative aspect-16/10 overflow-hidden w-full">
              <Image
                src="/screenshots/live-markets.png"
                alt="ShareMatch live trending markets with real-time index prices"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

          {/* Mobile */}
          <div className="shrink-0 mx-auto w-[210px] rounded-[2rem] border-[6px] border-[#16162a] bg-[#16162a] shadow-2xl overflow-hidden">
            <div className="relative w-full" style={{ aspectRatio: "390 / 760" }}>
              <Image
                src="/screenshots/live-mobile.png"
                alt="ShareMatch on mobile, trending markets and live charts"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>

        {/* Ambient glow */}
        <div className="absolute -inset-10 -z-10 bg-emerald-500/5 rounded-full blur-3xl" />
      </motion.div>

      {/* Stat pills */}
      <div className="flex flex-wrap justify-center gap-3 mb-20">
        {stats.map((stat, i) => (
          <motion.div
            key={stat}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
          >
            <Badge variant="emerald">{stat}</Badge>
          </motion.div>
        ))}
      </div>

      {/* HAL AI — the USP */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto"
      >
        {/* Copy */}
        <div>
          <Badge variant="amber" className="mb-4">
            HAL AI &middot; The USP
          </Badge>
          <h3 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
            An AI analyst that reads{" "}
            <span className="text-gold-gradient">your portfolio</span>
          </h3>
          <p className="text-text-secondary leading-relaxed mb-6">
            An investment platform first! Ask HAL to &ldquo;analyse my current
            holdings&rdquo; and it reads your live positions and explains every
            one of them, grounded in real fixtures and results, Shariah-screened,
            and powered by Google Gemini.
          </p>
          <div className="flex flex-wrap gap-2.5">
            {[
              "Reads your live holdings",
              "Grounded in real-time results",
              "Shariah-screened",
              "Cited sources",
            ].map((f) => (
              <span
                key={f}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs text-text-secondary glass-card"
              >
                <Sparkles className="w-3 h-3 text-amber-400" />
                {f}
              </span>
            ))}
          </div>
        </div>

        {/* Screenshot */}
        <div className="browser-frame w-full">
          <div className="browser-frame-bar">
            <div className="browser-dot bg-red-500" />
            <div className="browser-dot bg-yellow-500" />
            <div className="browser-dot bg-green-500" />
            <div className="flex-1 mx-4">
              <div className="bg-white/5 rounded-md px-3 py-1 text-[11px] md:text-xs text-text-muted text-center">
                rwa.sharematch.me/ai-analytics
              </div>
            </div>
          </div>
          <div className="relative aspect-16/10 overflow-hidden w-full">
            <Image
              src="/screenshots/hal-portfolio.png"
              alt="HAL AI analysing a live ShareMatch portfolio, holding by holding"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
