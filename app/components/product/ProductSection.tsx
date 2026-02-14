"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "../common/SectionWrapper";
import Badge from "../common/Badge";

const stats = [
  "Live Platform",
  "Shariah Approved",
  "RWA Structure",
  "Secondary Trading",
];

const avatars = ["epl", "f1", "nba", "nfl", "ucl", "spl", "wc", "t20"];

export default function ProductSection() {
  return (
    <SectionWrapper id="product">
      <div className="text-center mb-16">
        <Badge variant="emerald" className="mb-4">
          Live Product
        </Badge>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          The Platform &mdash; Live &amp; Trading
        </h2>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          ShareMatch is not a concept. It is live, Shariah-approved, and
          processing trades across global sporting events.
        </p>
      </div>

      {/* Browser Frame */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative max-w-4xl mx-auto mb-12 animate-float"
      >
        <div className="browser-frame">
          <div className="browser-frame-bar">
            <div className="browser-dot bg-red-500" />
            <div className="browser-dot bg-yellow-500" />
            <div className="browser-dot bg-green-500" />
            <div className="flex-1 mx-4">
              <div className="bg-white/5 rounded-md px-3 py-1 text-xs text-text-muted text-center">
                rwa.sharematch.me
              </div>
            </div>
          </div>
          <div className="relative aspect-[16/10] bg-gradient-to-br from-emerald-900/50 to-bg-secondary overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                  <Image
                    src="/logos/sharematch-mark.svg"
                    alt=""
                    width={32}
                    height={32}
                  />
                </div>
                <p className="text-text-muted text-sm">
                  Live platform &mdash; rwa.sharematch.me
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Ambient glow */}
        <div className="absolute -inset-10 -z-10 bg-emerald-500/5 rounded-full blur-3xl" />
      </motion.div>

      {/* Stat pills */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {stats.map((stat, i) => (
          <motion.div
            key={stat}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
          >
            <Badge variant="emerald">{stat}</Badge>
          </motion.div>
        ))}
      </div>

      {/* Index avatar strip */}
      <div className="flex justify-center gap-4">
        {avatars.map((a, i) => (
          <motion.div
            key={a}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + i * 0.05, duration: 0.4 }}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden"
          >
            <Image
              src={`/index-avatars/${a}.svg`}
              alt={a.toUpperCase()}
              width={24}
              height={24}
            />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
