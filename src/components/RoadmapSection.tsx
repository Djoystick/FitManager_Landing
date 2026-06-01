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
    <section className="py-24 bg-black relative">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-neon-cyan">Roadmap</span> Проекта
          </motion.h2>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:border-none">
          {/* Timeline Center Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
          
          {roadmap.map((phase, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`relative flex flex-col md:flex-row items-start mb-12 ${
                  isEven ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Timeline dot */}
                <div className={`absolute left-[-20px] md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center bg-black border-2 ${
                  phase.status === 'completed' ? 'border-green-500 text-green-500' :
                  phase.status === 'current' ? 'border-neon-cyan text-neon-cyan' :
                  'border-white/20 text-white/20'
                } z-10`}>
                  {phase.status === 'completed' ? <CheckCircle2 className="w-5 h-5" /> :
                   phase.status === 'current' ? <Rocket className="w-5 h-5 animate-pulse" /> :
                   <CircleDashed className="w-5 h-5" />}
                </div>

                {/* Content Card */}
                <div className={`ml-8 md:ml-0 md:w-[45%] p-6 rounded-2xl bg-white/[0.02] border border-white/5 ${
                  phase.status === 'current' ? 'border-neon-cyan/30 box-glow' : ''
                }`}>
                  <h3 className={`text-xl font-bold mb-4 ${
                    phase.status === 'current' ? 'text-neon-cyan' : 'text-white'
                  }`}>
                    {phase.phase}
                  </h3>
                  <ul className="space-y-3">
                    {phase.items.map((item, i) => (
                      <li key={i} className="flex items-start text-gray-400 text-sm">
                        <span className={`mr-2 mt-1 w-1.5 h-1.5 rounded-full ${
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
