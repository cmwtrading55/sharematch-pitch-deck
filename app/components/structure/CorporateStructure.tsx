"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../common/SectionWrapper";
import Badge from "../common/Badge";
import { Building2 } from "lucide-react";

const subsidiaries = [
  { name: "ShareMatch Poland", jurisdiction: "Poland · EU" },
  { name: "ShareMatch UAE", jurisdiction: "United Arab Emirates" },
  { name: "ShareMatch BVI", jurisdiction: "British Virgin Islands" },
];

export default function CorporateStructure() {
  return (
    <SectionWrapper id="structure" className="bg-bg-secondary py-5 md:py-10 xl:pt-4">
      <div className="text-center mb-12">
        <Badge variant="amber" className="mb-4">
          Corporate Structure
        </Badge>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          One UK Company. Global Reach.
        </h2>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          Your investment is made into{" "}
          <span className="text-text-primary font-medium">ShareMatch Limited</span>,
          the UK holding company, which wholly owns each operating subsidiary.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto"
      >
        {/* Holding company */}
        <div className="flex justify-center">
          <div className="relative text-center px-8 py-6 rounded-2xl bg-emerald-900 border-2 border-amber-400/40 glow-emerald w-full max-w-md">
            <Building2 className="w-6 h-6 text-amber-400 mx-auto mb-2" />
            <p className="text-xl font-bold">ShareMatch Limited</p>
            <p className="text-xs text-amber-400 font-semibold uppercase tracking-wider mt-1">
              UK Holding Company
            </p>
            <p className="text-[11px] text-text-muted mt-2">
              England &amp; Wales · The investment entity
            </p>
          </div>
        </div>

        {/* Connector */}
        <div className="flex justify-center">
          <div className="w-px h-8 bg-white/15" />
        </div>
        <div className="hidden md:block mx-auto h-px bg-white/15 w-2/3" />

        {/* Subsidiaries */}
        <div className="grid md:grid-cols-3 gap-5 mt-0 md:mt-8 pt-6 md:pt-0">
          {subsidiaries.map((sub, i) => (
            <motion.div
              key={sub.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}
              className="relative"
            >
              {/* vertical connector to the horizontal line (desktop) */}
              <div className="hidden md:block absolute left-1/2 -top-8 -translate-x-1/2 w-px h-8 bg-white/15" />
              <div className="relative p-6 rounded-2xl glass-card text-center">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-amber-500 text-bg-primary text-[11px] font-bold">
                  100%
                </span>
                <p className="text-base font-semibold mt-2">{sub.name}</p>
                <p className="text-xs text-text-muted uppercase tracking-wide mt-1.5">
                  {sub.jurisdiction}
                </p>
                <p className="text-[11px] text-emerald-400 mt-3">
                  Wholly-owned subsidiary
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs text-text-muted max-w-2xl mx-auto mt-10 leading-relaxed">
          All three subsidiaries are wholly owned (100%) by ShareMatch Limited.
          UK investors may qualify for EIS relief on shares in the holding
          company.
        </p>
      </motion.div>
    </SectionWrapper>
  );
}
