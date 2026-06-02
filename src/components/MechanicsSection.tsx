"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import {
  Cpu,
  Zap,
  Activity,
  ShieldOff,
  TrendingDown,
  Landmark,
  Building2,
} from "lucide-react";

// ─── Trait chip component ──────────────────────────────────────
function TraitChip({ name, color }: { name: string; color: string }) {
  return (
    <span
      className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium"
      style={{
        background: `${color}18`,
        border: `1px solid ${color}40`,
        color,
        fontFamily: "var(--font-mono)",
        fontSize: "10px",
      }}
    >
      {name}
    </span>
  );
}

// ─── Stat row inside card ──────────────────────────────────────
function StatRow({
  label,
  value,
  accent = false,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className="flex items-center justify-between py-1.5" style={{ borderBottom: "1px solid var(--border-subtle)" }}>
      <span className="text-caption" style={{ color: "var(--text-dim)" }}>
        {label}
      </span>
      <span
        className="text-mono-sm font-medium"
        style={{ color: accent ? "var(--color-neon-violet)" : "var(--text-primary)" }}
      >
        {value}
      </span>
    </div>
  );
}

// ─── Progress bar mini ─────────────────────────────────────────
function MiniProgress({ pct, color = "var(--color-neon-violet)" }: { pct: number; color?: string }) {
  return (
    <div className="progress-bar flex-1" style={{ height: "2px" }}>
      <motion.div
        className="progress-fill"
        style={{ background: color, width: 0 }}
        whileInView={{ width: `${pct}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </div>
  );
}

// ─── Card wrapper ──────────────────────────────────────────────
function MechCard({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <motion.div
      id={id}
      variants={{
        hidden: { opacity: 0, y: 12, scale: 0.97 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: "easeOut" } },
      }}
      className={`card-glass p-5 flex flex-col gap-3 relative overflow-hidden ${className}`}
      style={{ borderRadius: "var(--radius-lg)" }}
      whileHover={{
        boxShadow: "rgba(199,211,234,0.18) 0px 1px 1px 0px inset, rgba(199,211,234,0.07) 0px 24px 48px 0px inset, rgba(6,6,14,0.8) 0px 24px 32px 0px",
      }}
    >
      {children}
    </motion.div>
  );
}

// ─── Card header ──────────────────────────────────────────────
function CardHeader({
  icon,
  title,
  badge,
}: {
  icon: ReactNode;
  title: string;
  badge?: string;
}) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-2.5">
        <div
          className="w-8 h-8 flex items-center justify-center rounded-md shrink-0"
          style={{
            background: "rgba(102,58,243,0.12)",
            border: "1px solid rgba(102,58,243,0.25)",
            color: "var(--color-neon-violet)",
          }}
        >
          {icon}
        </div>
        <h3
          className="text-body font-semibold"
          style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
        >
          {title}
        </h3>
      </div>
      {badge && <span className="badge badge-accent shrink-0">{badge}</span>}
    </div>
  );
}

// ──────────────────────────────────────────────────────────────
// Main Section
// ──────────────────────────────────────────────────────────────
export default function MechanicsSection() {
  const { t } = useLanguage();

  const traits = [
    { name: "Sniper",    color: "#f87171" },
    { name: "Playmaker", color: "#60a5fa" },
    { name: "Wall",      color: "#34d399" },
    { name: "Speedster", color: "#facc15" },
    { name: "Anchor",    color: "#c084fc" },
    { name: "Poacher",   color: "#fb923c" },
    { name: "Engine",    color: "#38bdf8" },
  ];

  return (
    <section
      id="mechanics"
      className="section relative z-10"
    >
      <div
        className="section-divider mb-12"
        aria-hidden="true"
      />

      <div className="container-main">
        {/* Section header */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="accent-line" />
              <span
                className="text-caption font-semibold uppercase tracking-wider"
                style={{ color: "var(--color-neon-violet)" }}
              >
                {t("mechanics.title")}
              </span>
            </div>
            <h2 className="text-heading-lg font-bold" style={{ color: "var(--text-primary)" }}>
              {t("mechanics.title")}
            </h2>
          </div>
          <p
            className="text-body max-w-sm"
            style={{ color: "var(--text-muted)" }}
          >
            {t("mechanics.subtitle")}
          </p>
        </div>

        {/* ── 3-col grid ────────────────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.07 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
        >

          {/* 1 — Match Engine */}
          <MechCard>
            <CardHeader
              icon={<Cpu size={16} />}
              title={t("mechanics.engine_title")}
              badge="v3.0"
            />
            <p className="text-caption" style={{ color: "var(--text-muted)" }}>
              {t("mechanics.engine_desc")}
            </p>
            <div className="flex flex-col gap-0">
              <StatRow label={t("mechanics.engine_stat1")} value="90 min" />
              <StatRow label={t("mechanics.engine_stat2")} value="90" accent />
              <StatRow label={t("mechanics.engine_stat3")} value="~27" />
            </div>
            {/* Mini match progress visual */}
            <div className="mt-1">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-mono-sm" style={{ color: "var(--text-dim)" }}>0</span>
                <MiniProgress pct={100} />
                <span className="text-mono-sm" style={{ color: "var(--text-dim)" }}>90'</span>
              </div>
              <div className="flex gap-1 flex-wrap">
                {[12, 23, 45, 58, 71, 82, 90].map((m) => (
                  <span
                    key={m}
                    className="text-mono-sm px-1 rounded"
                    style={{
                      fontSize: "9px",
                      background: "rgba(102,58,243,0.12)",
                      color: "var(--color-neon-violet)",
                    }}
                  >
                    {m}&#39;
                  </span>
                ))}
              </div>
            </div>
          </MechCard>

          {/* 2 — Chemistry */}
          <MechCard>
            <CardHeader
              icon={<Zap size={16} />}
              title={t("mechanics.chemistry_title")}
            />
            <p className="text-caption" style={{ color: "var(--text-muted)" }}>
              {t("mechanics.chemistry_desc")}
            </p>
            <div className="flex flex-col gap-0">
              <StatRow label={t("mechanics.chemistry_stat1")} value="7" accent />
              <StatRow label={t("mechanics.chemistry_stat2")} value="+30 OVR" />
              <StatRow label={t("mechanics.chemistry_stat3")} value="−50%" />
            </div>
            {/* Trait chips */}
            <div className="flex flex-wrap gap-1 mt-1">
              {traits.map((tr) => (
                <TraitChip key={tr.name} name={tr.name} color={tr.color} />
              ))}
            </div>
          </MechCard>

          {/* 3 — Stamina */}
          <MechCard>
            <CardHeader
              icon={<Activity size={16} />}
              title={t("mechanics.stamina_title")}
            />
            <p className="text-caption" style={{ color: "var(--text-muted)" }}>
              {t("mechanics.stamina_desc")}
            </p>
            <div className="flex flex-col gap-0">
              <StatRow label={t("mechanics.stamina_stat1")} value="< 50%" accent />
              <StatRow label={t("mechanics.stamina_stat2")} value="−40%" />
              <StatRow label={t("mechanics.stamina_stat3")} value="TP" />
            </div>
            {/* Stamina bar viz */}
            <div className="mt-1 flex flex-col gap-1.5">
              {[
                { label: "GK  Ramirez", pct: 95, color: "#34d399" },
                { label: "FWD Petrov",  pct: 42, color: "#f87171" },
                { label: "MID Santos",  pct: 67, color: "#facc15" },
              ].map(({ label, pct, color }) => (
                <div key={label} className="flex items-center gap-2">
                  <span
                    className="text-mono-sm"
                    style={{ color: "var(--text-dim)", width: "80px", fontSize: "9px" }}
                  >
                    {label}
                  </span>
                  <MiniProgress pct={pct} color={color} />
                  <span
                    className="text-mono-sm"
                    style={{ color, fontSize: "9px", width: "28px", textAlign: "right" }}
                  >
                    {pct}%
                  </span>
                </div>
              ))}
            </div>
          </MechCard>

          {/* 4 — Glass Ceiling */}
          <MechCard>
            <CardHeader
              icon={<ShieldOff size={16} />}
              title={t("mechanics.glass_title")}
              badge="Anti-P2W"
            />
            <p className="text-caption" style={{ color: "var(--text-muted)" }}>
              {t("mechanics.glass_desc")}
            </p>
            <div className="flex flex-col gap-0">
              <StatRow label={t("mechanics.glass_stat1")} value="OVR 69" accent />
              <StatRow label={t("mechanics.glass_stat2")} value="SP only" />
              <StatRow label={t("mechanics.glass_stat3")} value="OVR 90" />
            </div>
            {/* OVR ceiling visual */}
            <div className="mt-1 relative h-6 rounded" style={{ background: "var(--border-subtle)" }}>
              <motion.div
                className="absolute left-0 top-0 h-full rounded-l"
                style={{ background: "linear-gradient(to right, #34d399, #facc15)", width: 0 }}
                whileInView={{ width: "69%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: "easeOut" }}
              />
              <div
                className="absolute top-0 h-full border-l-2 border-dashed"
                style={{ left: "69%", borderColor: "#f87171" }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-mono-sm" style={{ fontSize: "9px", color: "var(--text-primary)" }}>
                  0 ——— FC zone (0–69) ——— | ——— SP zone (70–99) ———
                </span>
              </div>
            </div>
          </MechCard>

          {/* 5 — Form Decay */}
          <MechCard>
            <CardHeader
              icon={<TrendingDown size={16} />}
              title={t("mechanics.decay_title")}
              badge="78+ OVR"
            />
            <p className="text-caption" style={{ color: "var(--text-muted)" }}>
              {t("mechanics.decay_desc")}
            </p>
            <div className="flex flex-col gap-0">
              <StatRow label={t("mechanics.decay_stat1")} value="OVR 78+" accent />
              <StatRow label={t("mechanics.decay_stat2")} value="Pace / Physical" />
              <StatRow label={t("mechanics.decay_stat3")} value="Daily SP" />
            </div>
            {/* Decay simulation */}
            <div
              className="mt-1 p-2 rounded"
              style={{ background: "rgba(248,113,113,0.06)", border: "1px solid rgba(248,113,113,0.15)" }}
            >
              <div className="flex justify-between items-center mb-1">
                <span className="text-caption" style={{ color: "var(--text-dim)" }}>Messi · OVR 86</span>
                <span className="badge badge-amber" style={{ fontSize: "9px" }}>Day 3 no SP</span>
              </div>
              <div className="flex gap-2 text-mono-sm" style={{ fontSize: "9px" }}>
                <span style={{ color: "#f87171" }}>Pace: 90 → 84</span>
                <span style={{ color: "#f87171" }}>Phys: 82 → 76</span>
              </div>
            </div>
          </MechCard>

          {/* 6 — Luxury Tax / Infrastructure */}
          <MechCard>
            <CardHeader
              icon={<Landmark size={16} />}
              title={t("mechanics.tax_title")}
              badge="FC"
            />
            <p className="text-caption" style={{ color: "var(--text-muted)" }}>
              {t("mechanics.tax_desc")}
            </p>
            <div className="flex flex-col gap-0">
              <StatRow label={t("mechanics.tax_stat1")} value="FanCoin" accent />
              <StatRow label={t("mechanics.tax_stat2")} value="✓" />
              <StatRow label={t("mechanics.tax_stat3")} value="✓" />
            </div>
            {/* Infrastructure buildings mini-grid */}
            <div className="mt-1 grid grid-cols-2 gap-1">
              {[
                { icon: <Building2 size={10} />, label: "Stadium",      bonus: "FC/match" },
                { icon: <Building2 size={10} />, label: "Med Center",   bonus: "Recovery" },
                { icon: <Building2 size={10} />, label: "Academy",      bonus: "Youth SP" },
                { icon: <Building2 size={10} />, label: "Training Camp", bonus: "Tax −%" },
              ].map(({ icon, label, bonus }) => (
                <div
                  key={label}
                  className="flex items-center gap-1.5 p-1.5 rounded"
                  style={{ background: "var(--border-subtle)", border: "1px solid var(--border-subtle)" }}
                >
                  <span style={{ color: "var(--color-neon-violet)" }}>{icon}</span>
                  <div>
                    <div className="text-mono-sm" style={{ fontSize: "9px", color: "var(--text-primary)" }}>{label}</div>
                    <div className="text-mono-sm" style={{ fontSize: "8px", color: "var(--text-dim)" }}>{bonus}</div>
                  </div>
                </div>
              ))}
            </div>
          </MechCard>

        </motion.div>
      </div>
    </section>
  );
}
