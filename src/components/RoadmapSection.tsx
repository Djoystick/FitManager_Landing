"use client";

import { motion } from "framer-motion";
import { Check, CircleDashed } from "lucide-react";

export default function RoadmapSection() {
  const roadmap = [
    {
      phase: "Фаза 1: Архитектура и Движок",
      status: "completed",
      items: [
        "Telegram TMA и Supabase интеграция",
        "Продвинутый Матч-движок v3.0 (Микро-дуэли)",
        "Базовая клубная инфраструктура",
        "Система глобальных лиг (10 дивизионов)",
      ]
    },
    {
      phase: "Фаза 2: Закрытая Бета",
      status: "current",
      items: [
        "Синхронизация шагов (Walk-to-Earn / Sweat Bank)",
        "Экономика v2 (Anti-P2W и Стеклянный потолок)",
        "Механика старения и 'Form Decay'",
        "Экспоненциальные зарплаты футболистов",
      ]
    },
    {
      phase: "Фаза 3: Web3 & Релиз (Q3 2026)",
      status: "upcoming",
      items: [
        "Chemistry & Trait Resonance (Синергия команды)",
        "TON Connect и Трансферный рынок",
        "Интеграция пула наград (Prize Waterfall)",
        "Публичный релиз в каталоге TON Apps",
      ]
    },
    {
      phase: "Фаза 4: Расширение (Q4 2026)",
      status: "upcoming",
      items: [
        "Глобальные сезонные турниры",
        "Продвинутая система скаутинга",
        "Масштабная маркетинговая кампания",
      ]
    }
  ];

  return (
    <section className="py-24 relative z-10 border-t shadow-subtle-3">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-4xl">
        
        <div className="text-center mb-16">
          <h2 className="text-heading-lg md:text-display font-bold text-ghost-white mb-4">
            Эволюция платформы
          </h2>
          <p className="text-body-lg text-comet max-w-2xl mx-auto opacity-80">
            Мы строим долгосрочный продукт, а не временный хайп. Наш фокус — стабильная экономика.
          </p>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-white/10">
          {roadmap.map((phase, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              
              {/* Timeline Node */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-midnight-abyss bg-storm-gray shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10">
                {phase.status === "completed" ? (
                  <Check className="w-4 h-4 text-ghost-white" />
                ) : phase.status === "current" ? (
                  <div className="w-2.5 h-2.5 bg-neon-violet rounded-full shadow-[0_0_8px_rgba(102,58,243,0.8)]" />
                ) : (
                  <CircleDashed className="w-4 h-4 text-white/30" />
                )}
              </div>
              
              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white/[0.02] shadow-subtle-4 border border-white/5 hover:bg-white/[0.04] transition-colors mt-1 md:mt-0">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className={`text-subheading font-bold ${phase.status === 'current' ? 'text-ghost-white' : 'text-comet'}`}>
                    {phase.phase}
                  </h3>
                  {phase.status === "completed" && (
                    <span className="px-2 py-0.5 rounded text-[10px] uppercase font-medium bg-white/10 text-ghost-white">
                      Done
                    </span>
                  )}
                  {phase.status === "current" && (
                    <span className="px-2 py-0.5 rounded text-[10px] uppercase font-medium bg-neon-violet/20 text-neon-violet border border-neon-violet/30">
                      In Progress
                    </span>
                  )}
                </div>
                
                <ul className="space-y-3">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-body text-arctic-mist opacity-80">
                      <span className="text-white/30 mt-1.5 w-1 h-1 rounded-full bg-current shrink-0" /> 
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
