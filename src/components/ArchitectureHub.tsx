"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

// ── SVG Architecture Hub ──────────────────────────────────────
// Central node with 6 satellite nodes connected by circuit-like paths

const NODES = [
  { id: "engine", angle: 270, radius: 120, color: "#663af3", glow: true },
  { id: "db",     angle: 330, radius: 120, color: "#3ecf8e", glow: false },
  { id: "ton",    angle: 30,  radius: 120, color: "#0098ea", glow: false },
  { id: "tg",     angle: 90,  radius: 120, color: "#2ca5e0", glow: false },
  { id: "cron",   angle: 150, radius: 120, color: "#fbbf24", glow: false },
  { id: "auth",   angle: 210, radius: 120, color: "#f472b6", glow: false },
];

function toXY(angle: number, radius: number, cx = 200, cy = 200) {
  const rad = ((angle - 90) * Math.PI) / 180;
  return {
    x: cx + radius * Math.cos(rad),
    y: cy + radius * Math.sin(rad),
  };
}

function ArchSVG({ t }: { t: (k: string) => string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[380px] mx-auto"
      style={{ overflow: "visible" }}
      aria-label="Architecture hub diagram"
    >
      <defs>
        {NODES.map((n) => (
          <radialGradient key={n.id} id={`grd-${n.id}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={n.color} stopOpacity="0.3" />
            <stop offset="100%" stopColor={n.color} stopOpacity="0" />
          </radialGradient>
        ))}
        <radialGradient id="grd-center" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#663af3" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#663af3" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ── Faint rings ── */}
      <circle cx="200" cy="200" r="120" stroke="var(--border-subtle)" strokeWidth="1" strokeDasharray="4 8" />
      <circle cx="200" cy="200" r="70"  stroke="var(--border-subtle)" strokeWidth="1" />

      {/* ── Connection paths with corner-bend aesthetic ── */}
      {NODES.map((n) => {
        const { x, y } = toXY(n.angle, n.radius);
        const mid = toXY(n.angle, 70);
        return (
          <motion.path
            key={n.id}
            d={`M200,200 L${mid.x},${mid.y} L${x},${y}`}
            stroke={n.color}
            strokeWidth="1.5"
            strokeOpacity="0.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: NODES.indexOf(n) * 0.1 }}
          />
        );
      })}

      {/* ── Center glow ── */}
      <circle cx="200" cy="200" r="50" fill="url(#grd-center)" />

      {/* ── Center hub ── */}
      <rect
        x="168" y="168" width="64" height="64" rx="12"
        fill="var(--bg-card-solid)"
        stroke="#663af3"
        strokeWidth="1.5"
        strokeOpacity="0.7"
      />
      {/* CPU icon lines */}
      <line x1="182" y1="180" x2="218" y2="180" stroke="#663af3" strokeWidth="1.5" strokeOpacity="0.9" strokeLinecap="round" />
      <line x1="182" y1="190" x2="218" y2="190" stroke="#663af3" strokeWidth="1.5" strokeOpacity="0.9" strokeLinecap="round" />
      <line x1="182" y1="200" x2="218" y2="200" stroke="#663af3" strokeWidth="1.5" strokeOpacity="0.9" strokeLinecap="round" />
      <line x1="182" y1="210" x2="218" y2="210" stroke="#663af3" strokeWidth="1.5" strokeOpacity="0.9" strokeLinecap="round" />
      <text x="200" y="222" textAnchor="middle" fontSize="8" fill="#663af3" fontFamily="'IBM Plex Mono', monospace" opacity="0.8">
        Match Engine
      </text>

      {/* ── Satellite nodes ── */}
      {NODES.map((n, i) => {
        const { x, y } = toXY(n.angle, n.radius);
        const keyBase  = `architecture.node_${n.id}`;
        
        let labelX = x;
        let labelY = y;
        let descY = y;
        let align: "start" | "middle" | "end" = "middle";

        if (n.angle === 270) { // Left
          labelX = x - 26;
          labelY = y - 2;
          descY = y + 7;
          align = "end";
        } else if (n.angle === 90) { // Right
          labelX = x + 26;
          labelY = y - 2;
          descY = y + 7;
          align = "start";
        } else if (n.angle < 90 || n.angle > 270) { // Top
          labelX = x;
          labelY = y - 30;
          descY = y - 21;
          align = "middle";
        } else { // Bottom
          labelX = x;
          labelY = y + 32;
          descY = y + 41;
          align = "middle";
        }

        return (
          <motion.g
            key={n.id}
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            {/* Glow */}
            <circle cx={x} cy={y} r="22" fill={`url(#grd-${n.id})`} />
            {/* Node box */}
            <rect
              x={x - 18} y={y - 18} width="36" height="36" rx="7"
              fill="var(--bg-card-solid)"
              stroke={n.color}
              strokeWidth="1.2"
              strokeOpacity="0.6"
            />
            {/* Dot */}
            <circle cx={x} cy={y} r="4" fill={n.color} opacity="0.85" />

            {/* Labels */}
            <text
              x={labelX} y={labelY}
              textAnchor={align}
              fontSize="7"
              fontWeight="600"
              fill="var(--text-primary)"
              fontFamily="'Space Grotesk', sans-serif"
              opacity="0.95"
            >
              {t(`${keyBase}`)}
            </text>
            <text
              x={labelX} y={descY}
              textAnchor={align}
              fontSize="5.5"
              fill="var(--text-dim)"
              fontFamily="'IBM Plex Mono', monospace"
              opacity="0.7"
            >
              {t(`${keyBase}_desc`)}
            </text>
          </motion.g>
        );
      })}

      {/* ── Data flow dots animation ── */}
      {NODES.slice(0, 3).map((n) => {
        const end = toXY(n.angle, n.radius - 20);
        return (
          <motion.circle
            key={`dot-${n.id}`}
            r="2.5"
            fill={n.color}
            initial={{ cx: 200, cy: 200, opacity: 0 }}
            animate={{
              cx: [200, end.x],
              cy: [200, end.y],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: NODES.indexOf(n) * 0.7,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </svg>
  );
}

// ──────────────────────────────────────────────────────────────
// Main Section
// ──────────────────────────────────────────────────────────────
export default function ArchitectureSection() {
  const { t } = useLanguage();

  const techStack = [
    { label: "Next.js 15",          sub: "App Router + API Routes",    color: "#ffffff" },
    { label: "React 19",            sub: "Server & Client Components",  color: "#61dafb" },
    { label: "Supabase",            sub: "PostgreSQL + RPC + Triggers", color: "#3ecf8e" },
    { label: "TON Connect",         sub: "Blockchain + NFT Minting",    color: "#0098ea" },
    { label: "Framer Motion",       sub: "UI Animations",              color: "#ff0055" },
    { label: "cron-job.org",        sub: "Match automation",           color: "#fbbf24" },
    { label: "Ed25519",             sub: "Telegram Auth Verification", color: "#f472b6" },
    { label: "TypeScript",          sub: "End-to-end type safety",     color: "#3178c6" },
  ];

  return (
    <section className="section relative z-10">
      <div className="section-divider mb-12" aria-hidden="true" />

      <div className="container-main">
        {/* Header */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="accent-line" />
              <span
                className="text-caption font-semibold uppercase tracking-wider"
                style={{ color: "var(--color-neon-violet)" }}
              >
                Architecture
              </span>
            </div>
            <h2
              className="text-heading-lg font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              {t("architecture.title")}
            </h2>
          </div>
          <p
            className="text-body max-w-sm"
            style={{ color: "var(--text-muted)" }}
          >
            {t("architecture.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* SVG Hub */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-glass p-4"
            style={{ borderRadius: "var(--radius-lg)" }}
          >
            <ArchSVG t={t} />
          </motion.div>

          {/* Tech stack list */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.05 } },
            }}
            className="flex flex-col gap-2"
          >
            {techStack.map(({ label, sub, color }) => (
              <motion.div
                key={label}
                variants={{
                  hidden: { opacity: 0, x: 12 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.35 } },
                }}
                className="flex items-center gap-3 p-3 rounded-md group transition-all duration-150 cursor-default"
                style={{
                  border: "1px solid var(--border-subtle)",
                  background: "var(--bg-card)",
                  borderRadius: "var(--radius-md)",
                }}
                whileHover={{ background: "var(--bg-card-hover)" }}
              >
                <div
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ background: color, boxShadow: `0 0 6px ${color}60` }}
                />
                <div className="flex-1 min-w-0">
                  <div
                    className="text-body font-medium"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {label}
                  </div>
                  <div className="text-caption" style={{ color: "var(--text-dim)" }}>
                    {sub}
                  </div>
                </div>
                <div
                  className="text-mono-sm opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color, fontSize: "10px" }}
                >
                  →
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
