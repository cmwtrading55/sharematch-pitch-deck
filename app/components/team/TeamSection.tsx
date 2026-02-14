"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../common/SectionWrapper";
import Badge from "../common/Badge";
import { Linkedin } from "lucide-react";

const team = [
  {
    name: "Will Wilde",
    role: "CEO & Co-Founder",
    initials: "WW",
    gradient: "from-emerald-500 to-emerald-700",
    bio: "Serial entrepreneur. Previously founded Jersey Trust Company. 10+ years in fintech, trading systems, and regulated markets. Leads fundraising, strategy, and stakeholder management.",
    linkedin: "https://www.linkedin.com/in/willwilde/",
  },
  {
    name: "Ammad Ahmad",
    role: "CTO & Co-Founder",
    initials: "AA",
    gradient: "from-amber-500 to-amber-700",
    bio: "Full-stack architect and AI engineer. Built ShareMatch's trading engine, real-time settlement system, and AI-powered analytics from the ground up. Patent co-inventor.",
    linkedin: "https://www.linkedin.com/in/ammadahmad/",
  },
  {
    name: "Haroon Malik",
    role: "Head of Shariah Compliance",
    initials: "HM",
    gradient: "from-emerald-400 to-teal-600",
    bio: "Islamic finance scholar and compliance specialist. Architected the Haqq Mali (RWA) token structure and secured the independent Shariah Fatwa. Oversees ongoing scholarly governance.",
  },
  {
    name: "Bilal Khan",
    role: "Head of GCC Operations",
    initials: "BK",
    gradient: "from-amber-400 to-orange-600",
    bio: "KSA market specialist with deep relationships across GCC government and enterprise. Leading the Saudi Arabia launch, payment rail integrations, and strategic distribution partnerships.",
  },
];

const advisors = [
  "Former Kalshi VP of Product",
  "ex-Goldman Sachs Director",
  "PIF-connected KSA Advisor",
  "Senior Shariah Scholar (Al-Azhar)",
];

export default function TeamSection() {
  return (
    <SectionWrapper id="team">
      <div className="text-center mb-16">
        <Badge variant="emerald" className="mb-4">
          Leadership
        </Badge>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          The Team Behind ShareMatch
        </h2>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          Finance veterans, AI engineers, and Islamic finance scholars &mdash;
          the only team in the world with the credentials to build this.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {team.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: i * 0.1,
              duration: 0.6,
              ease: [0.22, 0.61, 0.36, 1],
            }}
            className="group relative p-6 rounded-2xl glass-card glass-card-hover transition-all duration-500 text-center"
          >
            {/* Avatar */}
            <div
              className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300`}
            >
              <span className="text-xl font-bold text-white tracking-wide">
                {member.initials}
              </span>
            </div>

            {/* Info */}
            <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
            <p className="text-xs text-emerald-400 font-medium mb-3">
              {member.role}
            </p>
            <p className="text-xs text-text-secondary leading-relaxed mb-4">
              {member.bio}
            </p>

            {/* LinkedIn */}
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-text-muted hover:text-emerald-400 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                LinkedIn
              </a>
            )}
          </motion.div>
        ))}
      </div>

      {/* Advisory Board */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h3 className="text-xl font-semibold mb-6">Advisory Board</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {advisors.map((a, i) => (
            <motion.div
              key={a}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="px-4 py-2.5 rounded-xl glass-card text-sm text-text-secondary"
            >
              {a}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
