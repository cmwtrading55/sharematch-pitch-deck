"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../common/SectionWrapper";
import Badge from "../common/Badge";
import { Linkedin, ShieldCheck } from "lucide-react";

const executives = [
  {
    name: "Will Wilde",
    role: "CEO & Founder",
    location: "United Kingdom",
    initials: "WW",
    gradient: "from-emerald-500 to-emerald-700",
    bio: "Founder and Chief Executive. Two decades across sport, data and capital markets. Sets the vision and capital strategy, leads the raise, and owns the regulatory and Shariah architecture, with Saudi Arabia as the first GCC market.",
  },
  {
    name: "Rawad Abou Diab",
    role: "Chief Financial Officer",
    location: "Saudi Arabia",
    initials: "RA",
    gradient: "from-amber-500 to-amber-700",
    bio: "Group Finance Director with 15+ years leading finance for holding and multi-company groups across KSA and the region. Owns financial strategy, corporate finance, IPO readiness, M&A, and Islamic and conventional banking facilities.",
    linkedin: "https://www.linkedin.com/in/rawad-abou-diab-mba/",
  },
  {
    name: "Resmi Ajesh",
    role: "Chief Technology Officer",
    location: "United Arab Emirates",
    initials: "RA",
    gradient: "from-emerald-400 to-teal-600",
    bio: "Leads technology and AI. Architects the Shariah-compliant trading platform, real-world-asset tokenisation, the IAT and SMUS token frameworks, and the KYC/KYB and on/off-ramp infrastructure behind the exchange.",
    linkedin: "https://www.linkedin.com/in/resmikrishna/",
  },
  {
    name: "Paul Phillpot",
    role: "Chief Operating Officer",
    location: "Saudi Arabia",
    initials: "PP",
    gradient: "from-amber-400 to-orange-600",
    bio: "27+ years across technology, sport and entertainment as a start-up builder and C-suite operator. Turns strategy into operational reality and builds the teams and partnerships behind ShareMatch's global rollout.",
    linkedin: "https://www.linkedin.com/in/paulphillpot/",
  },
  {
    name: "Wayne Barry",
    role: "Head of Blockchain Development",
    location: "United Kingdom",
    initials: "WB",
    gradient: "from-emerald-500 to-emerald-800",
    bio: "Leads blockchain engineering from The Den, ShareMatch's London lab. Owns the smart-contract layer behind the IAT and SMUS frameworks and the on-chain tokenisation and settlement pipeline on Solana.",
  },
  {
    name: "Nigel Rodrigo",
    role: "General Manager",
    location: "United Arab Emirates",
    initials: "NR",
    gradient: "from-amber-500 to-amber-800",
    bio: "General Manager for UAE operations, leading regional execution and go-to-market across the GCC. Stands up the regional entity and builds the commercial and institutional relationships behind Gulf expansion.",
    linkedin: "https://www.linkedin.com/in/nigel-rodrigo-0bb4283a2/",
  },
];

const execDirectors = [
  {
    name: "Will Wilde",
    role: "Chair, CEO & Founder",
    location: "United Kingdom",
    initials: "WW",
    gradient: "from-emerald-500 to-emerald-700",
    bio: "Founder and CEO. Two decades across sport, data and capital markets. Sets vision and capital strategy and owns the regulatory and Shariah architecture.",
  },
  {
    name: "Paul Phillpot",
    role: "Executive Director, COO",
    location: "Saudi Arabia",
    initials: "PP",
    gradient: "from-amber-400 to-orange-600",
    bio: "27+ years across technology, sport and entertainment. Turns strategy into operational reality behind the global rollout.",
    linkedin: "https://www.linkedin.com/in/paulphillpot/",
  },
  {
    name: "Rawad Abou Diab",
    role: "Executive Director, CFO",
    location: "Saudi Arabia",
    initials: "RA",
    gradient: "from-emerald-400 to-teal-600",
    bio: "Group Finance Director with 15+ years across KSA and the region. Owns financial strategy, IPO readiness and the banking architecture.",
    linkedin: "https://www.linkedin.com/in/rawad-abou-diab-mba/",
  },
];

const nonExecs = [
  {
    name: "Joshua Hearne",
    role: "Non-Executive Director",
    location: "United Kingdom",
    initials: "JH",
    gradient: "from-emerald-500 to-emerald-700",
    bio: "Settlement specialist with deep expertise in trade settlement, asset management and equities. Brings a controls-first, post-trade view to the oversight of ShareMatch's trading, settlement and asset-handling.",
    linkedin: "https://www.linkedin.com/in/joshua-hearne-5223b455/",
  },
  {
    name: "Gillian Hughes",
    role: "Non-Executive Director",
    location: "United Kingdom",
    initials: "GH",
    gradient: "from-amber-500 to-amber-700",
    bio: "Traded on LIFFE with a sharp instinct for market structure, risk and liquidity. An early blockchain adopter and active crypto investor, she bridges traditional exchange expertise with digital-asset conviction.",
  },
];

const shariahBoard = [
  {
    name: "Mahmoud Zoair",
    role: "Chairman",
    initials: "MZ",
    gradient: "from-emerald-500 to-emerald-800",
    bio: "Islamic Banking & Finance expert. CSAA and CIPA (AAOIFI), DBA (Harvard executive leadership) and MBA in Islamic Finance. Shariah Board Secretary at Jadwa Investment; sits on the Shariah boards of Islamic Coin, the Haqq Network and 21Shares Funds.",
    linkedin: "https://www.linkedin.com/in/mahmoud-zoair/",
  },
  {
    name: "Aya Hisham Eissa",
    role: "Member",
    initials: "AE",
    gradient: "from-emerald-400 to-teal-600",
    bio: "Comparative-jurisprudence scholar (Al-Azhar) and CSAA Fellow (AAOIFI). Member of the Royal Chartered Institute of Arbitrators and Islamic Arbitrator at IICRA, Dubai. Certified Sukuk Specialist.",
    linkedin: "https://www.linkedin.com/in/aya-eissa-mciarb-0a1328223/",
  },
  {
    name: "Mohamed Tayel",
    role: "Member",
    initials: "MT",
    gradient: "from-emerald-500 to-emerald-700",
    bio: "Islamic law (Al-Azhar) and international business law (CEU). AML and compliance specialist, currently MLRO at Western Union Hungary; previously Binance MENA, Wise, KPMG and Morgan Stanley.",
    linkedin: "https://www.linkedin.com/in/mtayel/",
  },
];

type Person = {
  name: string;
  role: string;
  location?: string;
  initials: string;
  gradient: string;
  bio: string;
  linkedin?: string;
};

function PersonCard({ p, i, roleColor }: { p: Person; i: number; roleColor: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (i % 3) * 0.1, duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
      className="group relative p-6 rounded-2xl glass-card glass-card-hover transition-all duration-500"
    >
      <div className="flex items-center gap-4 mb-4">
        <div
          className={`w-14 h-14 shrink-0 rounded-full bg-gradient-to-br ${p.gradient} flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300`}
        >
          <span className="text-base font-bold text-white tracking-wide">{p.initials}</span>
        </div>
        <div className="min-w-0">
          <h3 className="text-lg font-semibold leading-tight">{p.name}</h3>
          <p className={`text-xs font-medium ${roleColor}`}>{p.role}</p>
          {p.location && (
            <p className="text-[11px] text-text-muted uppercase tracking-wide mt-0.5">{p.location}</p>
          )}
        </div>
      </div>
      <p className="text-xs text-text-secondary leading-relaxed mb-4">{p.bio}</p>
      {p.linkedin && (
        <a
          href={p.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-text-muted hover:text-emerald-400 transition-colors"
        >
          <Linkedin className="w-3.5 h-3.5" />
          LinkedIn
        </a>
      )}
    </motion.div>
  );
}

export default function TeamSection() {
  return (
    <SectionWrapper id="team">
      {/* ── EXECUTIVE LEADERSHIP ── */}
      <div className="text-center mb-12">
        <Badge variant="emerald" className="mb-4">
          Leadership
        </Badge>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          The Team Behind ShareMatch
        </h2>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          An operator-led team across the UK, Saudi Arabia and the UAE, pairing
          capital-markets and Islamic-finance expertise with blockchain and
          sports-tech heritage.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {executives.map((p, i) => (
          <PersonCard key={p.name} p={p} i={i} roleColor="text-emerald-400" />
        ))}
      </div>

      {/* ── BOARD OF DIRECTORS ── */}
      <div className="text-center mb-10">
        <Badge variant="amber" className="mb-4">
          Governance
        </Badge>
        <h3 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
          Board of Directors
        </h3>
        <p className="text-text-secondary text-base max-w-2xl mx-auto">
          A five-member board, three Executive and two Non-Executive, spanning
          capital markets, Islamic finance, exchange-traded and digital-asset
          markets, and sports technology.
        </p>
      </div>

      <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400 mb-5">
        Executive Directors
      </p>
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {execDirectors.map((p, i) => (
          <PersonCard key={p.name} p={p} i={i} roleColor="text-emerald-400" />
        ))}
      </div>

      <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-amber-400 mb-5">
        Non-Executive Directors
      </p>
      <div className="grid md:grid-cols-2 gap-6 mb-20 max-w-3xl mx-auto">
        {nonExecs.map((p, i) => (
          <PersonCard key={p.name} p={p} i={i} roleColor="text-amber-400" />
        ))}
      </div>

      {/* ── SHARIAH GOVERNANCE ── */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 mb-3">
          <ShieldCheck className="w-5 h-5 text-emerald-400" />
          <h3 className="text-2xl md:text-4xl font-bold tracking-tight">
            Independent Shariah Board
          </h3>
        </div>
        <p className="text-text-secondary text-base max-w-2xl mx-auto">
          Three scholars provide independent oversight and certification of the
          platform&apos;s products and token frameworks, separate from the
          executive team.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {shariahBoard.map((p, i) => (
          <PersonCard key={p.name} p={p} i={i} roleColor="text-emerald-400" />
        ))}
      </div>

      <p className="text-[11px] text-text-muted leading-relaxed mt-6 pt-6 border-t border-white/5 max-w-5xl mx-auto text-center">
        ShareMatch is independently supervised by a Shariah Advisory Board
        comprising highly qualified scholars. Our board conducts ongoing periodic
        audits of the platform and reviews any new market features prior to launch
        to ensure continuous compliance.
      </p>
    </SectionWrapper>
  );
}
