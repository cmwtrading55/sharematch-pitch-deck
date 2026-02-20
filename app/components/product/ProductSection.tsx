"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "../common/SectionWrapper";
import Badge from "../common/Badge";

const stats = [
  "Live & Trading",
  "Fatwa Approved",
  "RWA Structure",
  "Secondary Market",
];

const avatars = ["epl", "f1", "nba", "nfl", "ucl", "spl", "wc", "t20"];

export default function ProductSection() {
  return (
    <SectionWrapper id="product" className="py-5 md:py-10 xl:pt-4">
      <div className="text-center mb-5 xl:mb-4">
        <Badge variant="emerald" className="mb-4">
          Live Product
        </Badge>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Market ready with live data.
        </h2>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          Real users, real volume, real markets &mdash; across football,
          cricket, motorsport, basketball, e-sports, and global events.
        </p>
      </div>

      {/* Browser Frame with real screenshot */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative max-w-6xl mx-auto mb-12"
      >
        <div className="flex flex-col md:flex-row gap-6 items-center">
          {/* First screen */}
          <div className="browser-frame flex-1 w-full min-w-0 md:min-w-[360px]">
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
            <div className="relative aspect-16/10 overflow-hidden mx-auto w-full max-w-full">
              <Image
                src="/screenshots/LoggedView.png"
                alt="ShareMatch logged-in view — full platform"
                fill
                className="object-contain object-center p-2"
                priority
              />
            </div>
          </div>

          {/* Second screen */}
          <div className="browser-frame flex-1 w-full min-w-0 md:min-w-[360px]">
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
            <div className="relative aspect-16/10 overflow-hidden mx-auto w-full max-w-full">
              <Image
                src="/screenshots/HAL-AI.png"
                alt="HAL AI — analytics view"
                fill
                className="object-cover object-center"
              />
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

      {/* Index avatars removed per request */}
    </SectionWrapper>
  );
}
