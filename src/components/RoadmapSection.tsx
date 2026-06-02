"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import { CheckCircle2, Circle, Clock, Pause } from "lucide-react";

type PhaseStatus = "done" | "active" | "planned" | "frozen";

interface Phase {
  key: string;
  status: PhaseStatus;
  quarter?: string;
}

const PHASES: Phase[] = [
  { key: "phase1",  status: "done" },
  { key: "phase5",  status: "done" },
  { key: "phase55", status: "active" },
  { key: "phase7",  status: "planned" },
  { key: "phase6",  status: "frozen" },
  { key: "phase8",  status: "planned" },
  { key: "q3",      status: "planned", quarter: "Q3 2026" },
  { key: "q4",      status: "planned", quarter: "Q4 2026" },
  { key: "future",  status: "planned", quarter: "2027+" },
];

const STATUS_CONFIG: Record<PhaseStatus, {
  icon: React.ReactNode;
  badgeClass: string;
  dotColor: string;
  lineColor: string;
}> = {
  done: {
    icon: <CheckCircle2 size={14} />,
    badgeClass: "badge-green",
    dotColor: "#34d399",
    lineColor: "#34d399",
  },
  active: {
    icon: <Circle size={14} />,
    badgeClass: "badge-accent",
    dotColor: "var(--color-neon-violet)",
    lineColor: "var(--color-neon-violet)",
  },
  planned: {
    icon: <Clock size={14} />,
    badgeClass: "",
    dotColor: "var(--border-strong)",
    lineColor: "var(--border-subtle)",
  },
  frozen: {
    icon: <Pause size={14} />,
    badgeClass: "badge-amber",
    dotColor: "#fbbf24",
    lineColor: "#fbbf24",
  },
};

export default function RoadmapSection() {
  const { t } = useLanguage();

  return (
    <section id="roadmap" className="section relative z-10">
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
                {t("roadmap.title")}
              </span>
            </div>
            <h2
              className="text-heading-lg font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              {t("roadmap.title")}
            </h2>
          </div>
          <p className="text-body max-w-sm" style={{ color: "var(--text-muted)" }}>
            {t("roadmap.subtitle")}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative flex flex-col gap-0">

          {PHASES.map((phase, i) => {
            const cfg = STATUS_CONFIG[phase.status];
            const isLast = i === PHASES.length - 1;
            const label = t(`roadmap.${phase.key}_label`);
            const title = t(`roadmap.${phase.key}_title`);
            const desc  = t(`roadmap.${phase.key}_desc`);

            return (
              <motion.div
                key={phase.key}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="flex gap-4"
              >
                {/* Timeline axis */}
                <div className="flex flex-col items-center shrink-0 w-8">
                  {/* Dot */}
                  <motion.div
                    className="w-3 h-3 rounded-full border-2 mt-1 shrink-0 z-10"
                    style={{
                      borderColor: cfg.dotColor,
                      background:
                        phase.status === "active"
                          ? cfg.dotColor
                          : "var(--bg-page)",
                    }}
                    animate={
                      phase.status === "active"
                        ? { boxShadow: [`0 0 0 0 ${cfg.dotColor}40`, `0 0 0 6px ${cfg.dotColor}00`] }
                        : {}
                    }
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  {/* Connector line */}
                  {!isLast && (
                    <div
                      className="flex-1 w-px mt-1"
                      style={{
                        background: `linear-gradient(to bottom, ${cfg.lineColor}60, var(--border-subtle))`,
                        minHeight: "32px",
                      }}
                    />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-5">
                  <div className="flex flex-wrap items-center gap-2 mb-0.5">
                    {/* Quarter tag if present */}
                    {phase.quarter && (
                      <span
                        className="text-mono-sm font-medium"
                        style={{
                          color: "var(--color-neon-violet)",
                          fontSize: "10px",
                          background: "rgba(102,58,243,0.1)",
                          padding: "1px 6px",
                          borderRadius: "4px",
                          border: "1px solid rgba(102,58,243,0.2)",
                        }}
                      >
                        {phase.quarter}
                      </span>
                    )}
                    <h3
                      className="text-body font-semibold"
                      style={{
                        fontFamily: "var(--font-display)",
                        color:
                          phase.status === "active"
                            ? "var(--text-primary)"
                            : phase.status === "done"
                            ? "var(--text-secondary)"
                            : "var(--text-muted)",
                      }}
                    >
                      {title}
                    </h3>
                    <span
                      className={`badge ${cfg.badgeClass} flex items-center gap-1`}
                    >
                      {cfg.icon}
                      {label}
                    </span>
                  </div>
                  <p
                    className="text-caption"
                    style={{ color: "var(--text-dim)", maxWidth: "580px" }}
                  >
                    {desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
