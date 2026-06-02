"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import { Footprints, ShieldCheck, Coins, TrendingUp } from "lucide-react";

// ── Manager Profile Card ────────────────────────────────────────
function ProfileCard({
  emoji,
  title,
  desc,
  rates,
}: {
  emoji: string;
  title: string;
  desc: string;
  rates: { label: string; pct: number; color: string }[];
}) {
  return (
    <div
      className="card-glass p-4 flex flex-col gap-3"
      style={{ borderRadius: "var(--radius-lg)" }}
    >
      <div className="flex items-center gap-2.5">
        <span className="text-xl">{emoji}</span>
        <div>
          <h3
            className="text-body font-semibold"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            {title}
          </h3>
          <p className="text-caption" style={{ color: "var(--text-dim)" }}>
            {desc}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        {rates.map(({ label, pct, color }) => (
          <div key={label}>
            <div className="flex justify-between mb-0.5">
              <span className="text-caption" style={{ color: "var(--text-dim)", fontSize: "10px" }}>
                {label}
              </span>
              <span
                className="text-mono-sm"
                style={{ color, fontSize: "10px" }}
              >
                {pct}%
              </span>
            </div>
            <div
              className="h-1 rounded-full overflow-hidden"
              style={{ background: "var(--border-subtle)" }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{ background: color, width: 0 }}
                whileInView={{ width: `${pct}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Treasury Tier Row ───────────────────────────────────────────
function TierRow({ tier, pct, active = false }: { tier: number; pct: number; active?: boolean }) {
  return (
    <div
      className="flex items-center gap-3 py-1.5"
      style={{ borderBottom: "1px solid var(--border-subtle)" }}
    >
      <span
        className="text-mono-sm w-14 shrink-0"
        style={{
          color: active ? "var(--color-neon-violet)" : "var(--text-dim)",
          fontSize: "10px",
        }}
      >
        Tier {tier}
      </span>
      <div
        className="flex-1 h-1.5 rounded-full overflow-hidden"
        style={{ background: "var(--border-subtle)" }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{
            background: active
              ? "var(--color-neon-violet)"
              : "var(--border-strong)",
            width: 0,
          }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: tier * 0.04 }}
        />
      </div>
      <span
        className="text-mono-sm w-10 text-right shrink-0"
        style={{
          color: active ? "var(--color-neon-violet)" : "var(--text-dim)",
          fontSize: "10px",
        }}
      >
        {pct}%
      </span>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────
// Main Section
// ──────────────────────────────────────────────────────────────
export default function EconomySection() {
  const { t } = useLanguage();

  const profiles = [
    {
      emoji: "🏃‍♂️",
      title: t("economy.profile_runner"),
      desc: t("economy.profile_runner_desc"),
      rates: [
        { label: "Cardio → Pace/Endurance", pct: 100, color: "#34d399" },
        { label: "Agility → Dribbling",     pct: 60,  color: "#60a5fa" },
        { label: "Skill → Ball Control",    pct: 40,  color: "#a78bfa" },
        { label: "Strength → Physical",     pct: 20,  color: "#f87171" },
      ],
    },
    {
      emoji: "🏋️",
      title: t("economy.profile_lifter"),
      desc: t("economy.profile_lifter_desc"),
      rates: [
        { label: "Strength → Physical",     pct: 100, color: "#34d399" },
        { label: "Agility → Dribbling",     pct: 60,  color: "#60a5fa" },
        { label: "Skill → Ball Control",    pct: 40,  color: "#a78bfa" },
        { label: "Cardio → Pace/Endurance", pct: 20,  color: "#f87171" },
      ],
    },
    {
      emoji: "🧘",
      title: t("economy.profile_yogi"),
      desc: t("economy.profile_yogi_desc"),
      rates: [
        { label: "Agility → Dribbling",     pct: 100, color: "#34d399" },
        { label: "Cardio → Pace/Endurance", pct: 60,  color: "#60a5fa" },
        { label: "Skill → Ball Control",    pct: 60,  color: "#a78bfa" },
        { label: "Strength → Physical",     pct: 40,  color: "#facc15" },
      ],
    },
  ];

  const treasuryTiers = [
    { tier: 1, pct: 100 },
    { tier: 2, pct: 80 },
    { tier: 3, pct: 60 },
    { tier: 4, pct: 45 },
    { tier: 5, pct: 30 },
  ];

  return (
    <section id="economy" className="section relative z-10">
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
                {t("economy.title")}
              </span>
            </div>
            <h2
              className="text-heading-lg font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              {t("economy.title")}
            </h2>
          </div>
          <p
            className="text-body max-w-sm"
            style={{ color: "var(--text-muted)" }}
          >
            {t("economy.subtitle")}
          </p>
        </div>

        {/* Main grid: 2 columns on desktop */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-4"
        >
          {/* Left col — Profiles */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            className="flex flex-col gap-3"
          >
            {/* Step conversion header */}
            <div
              className="card-elevated flex items-center justify-between p-4 gap-4"
              style={{ borderRadius: "var(--radius-lg)" }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-md flex items-center justify-center shrink-0"
                  style={{
                    background: "rgba(102,58,243,0.12)",
                    border: "1px solid rgba(102,58,243,0.3)",
                  }}
                >
                  <Footprints size={18} style={{ color: "var(--color-neon-violet)" }} />
                </div>
                <div>
                  <div
                    className="text-body font-semibold"
                    style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
                  >
                    {t("economy.conversion_title")}
                  </div>
                  <div className="text-caption" style={{ color: "var(--text-dim)" }}>
                    {t("economy.conversion_label")}
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span
                  className="text-heading font-bold"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--color-neon-violet)",
                    lineHeight: 1,
                  }}
                >
                  100 SP
                </span>
                <span className="text-caption" style={{ color: "var(--text-dim)" }}>base rate</span>
              </div>
            </div>

            {/* Profile cards */}
            {profiles.map((p) => (
              <ProfileCard key={p.title} {...p} />
            ))}
          </motion.div>

          {/* Right col — P2P + Treasury + Anti-bot */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } } }}
            className="flex flex-col gap-3"
          >
            {/* P2P Market card */}
            <div
              className="card-glass p-5"
              style={{ borderRadius: "var(--radius-lg)" }}
            >
              <div className="flex items-center gap-2.5 mb-3">
                <div
                  className="w-8 h-8 flex items-center justify-center rounded-md"
                  style={{
                    background: "rgba(96,165,250,0.12)",
                    border: "1px solid rgba(96,165,250,0.25)",
                  }}
                >
                  <TrendingUp size={16} style={{ color: "#60a5fa" }} />
                </div>
                <h3
                  className="text-body font-semibold"
                  style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
                >
                  {t("economy.markets_title")}
                </h3>
              </div>
              <p className="text-caption mb-4" style={{ color: "var(--text-muted)" }}>
                {t("economy.markets_desc")}
              </p>

              {/* Simulated trade flow */}
              <div className="flex items-center gap-2 p-2 rounded" style={{ background: "var(--border-subtle)" }}>
                <div className="flex flex-col items-center flex-1 text-center">
                  <span className="text-xl mb-1">🏃‍♂️</span>
                  <span className="text-mono-sm" style={{ fontSize: "9px", color: "#34d399" }}>
                    +Pace, +Endurance
                  </span>
                </div>
                <div className="flex flex-col items-center gap-0.5">
                  <div className="w-8 h-px" style={{ background: "var(--color-neon-violet)" }} />
                  <span className="text-mono-sm" style={{ fontSize: "8px", color: "var(--color-neon-violet)" }}>TON</span>
                  <div className="w-8 h-px" style={{ background: "var(--color-neon-violet)" }} />
                </div>
                <div className="flex flex-col items-center flex-1 text-center">
                  <span className="text-xl mb-1">🏋️</span>
                  <span className="text-mono-sm" style={{ fontSize: "9px", color: "#f87171" }}>
                    +Physical, +Shoot
                  </span>
                </div>
              </div>
            </div>

            {/* TON Treasury */}
            <div
              className="card-glass p-5"
              style={{ borderRadius: "var(--radius-lg)" }}
            >
              <div className="flex items-center gap-2.5 mb-3">
                <div
                  className="w-8 h-8 flex items-center justify-center rounded-md"
                  style={{
                    background: "rgba(251,191,36,0.12)",
                    border: "1px solid rgba(251,191,36,0.25)",
                  }}
                >
                  <Coins size={16} style={{ color: "#fbbf24" }} />
                </div>
                <h3
                  className="text-body font-semibold"
                  style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
                >
                  {t("economy.treasury_title")}
                </h3>
              </div>
              <p className="text-caption mb-3" style={{ color: "var(--text-muted)" }}>
                {t("economy.treasury_desc")}
              </p>
              <div className="flex flex-col gap-0">
                {treasuryTiers.map(({ tier, pct }) => (
                  <TierRow key={tier} tier={tier} pct={pct} active={tier === 1} />
                ))}
              </div>
            </div>

            {/* Anti-bot */}
            <div
              className="card-glass p-4"
              style={{ borderRadius: "var(--radius-lg)" }}
            >
              <div className="flex items-center gap-2.5 mb-3">
                <div
                  className="w-8 h-8 flex items-center justify-center rounded-md"
                  style={{
                    background: "rgba(52,211,153,0.12)",
                    border: "1px solid rgba(52,211,153,0.25)",
                  }}
                >
                  <ShieldCheck size={16} style={{ color: "#34d399" }} />
                </div>
                <h3
                  className="text-body font-semibold"
                  style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
                >
                  {t("economy.antibot_title")}
                </h3>
              </div>
              <div className="flex flex-col gap-1.5">
                {[
                  { text: t("economy.antibot_steps"),   icon: "⛔" },
                  { text: t("economy.antibot_ceiling"),  icon: "🧱" },
                  { text: t("economy.antibot_decay"),    icon: "📉" },
                ].map(({ text, icon }) => (
                  <div
                    key={text}
                    className="flex items-start gap-2 text-caption"
                    style={{ color: "var(--text-muted)" }}
                  >
                    <span className="shrink-0">{icon}</span>
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
