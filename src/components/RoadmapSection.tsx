"use client";

import { motion } from "framer-motion";
import { CheckCircle2, CircleDashed, Rocket } from "lucide-react";

const roadmap = [
  {
    phase: "Фаза 1: Архитектура и Движок (Завершено)",
    status: "completed",
    items: [
      "Telegram TMA и Supabase интеграция",
      "Продвинутый Матч-движок v3.0 (Микро-дуэли)",
      "Базовая клубная инфраструктура",
      "Система глобальных лиг (10 дивизионов)",
    ]
  },
  {
    phase: "Фаза 2: Закрытая Бета (Текущая)",
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

export default function RoadmapSection() {
  return (
    <section className="py-16 md:py-24 relative border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 md:mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-neon-cyan">Roadmap</span> Проекта
          </motion.h2>
        </div>

        <div className="space-y-6 md:space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
          {roadmap.map((phase, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse ${
                  isEven ? "" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className={`absolute left-0 w-10 h-10 rounded-full flex items-center justify-center bg-black border-2 ${
                  phase.status === 'completed' ? 'border-green-500 text-green-500' :
                  phase.status === 'current' ? 'border-neon-cyan text-neon-cyan' :
                  'border-white/20 text-white/20'
                } z-10 md:left-[calc(50%-20px)]`}>
                  {phase.status === 'completed' ? <CheckCircle2 className="w-5 h-5" /> :
                   phase.status === 'current' ? <Rocket className="w-5 h-5 animate-pulse" /> :
                   <CircleDashed className="w-5 h-5" />}
                </div>

                {/* Content Card */}
                <div className="ml-16 md:ml-0 md:w-[calc(50%-2.5rem)] p-5 md:p-6 rounded-2xl bg-white/5 border border-white/10">
                  <h3 className={`text-lg md:text-xl font-bold mb-3 ${
                    phase.status === 'current' ? 'text-neon-cyan' : 'text-white'
                  }`}>
                    {phase.phase}
                  </h3>
                  <ul className="space-y-2">
                    {phase.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm md:text-base text-gray-400">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${
                           phase.status === 'completed' ? 'bg-green-500' :
                           phase.status === 'current' ? 'bg-neon-cyan' : 'bg-gray-600'
                        }`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
