"use client";

import { motion } from "framer-motion";
import { CheckCircle2, CircleDashed, Rocket } from "lucide-react";

const roadmap = [
  {
    phase: "Phase 1: Foundation (Q2 2026)",
    status: "completed",
    items: [
      "Разработка основного концепта и экономики",
      "Telegram Mini App архитектура",
      "Математический движок матчей (v1.0)",
      "Интеграция смарт-старения игроков",
    ]
  },
  {
    phase: "Phase 2: Closed Alpha (Текущая)",
    status: "current",
    items: [
      "Запуск закрытого тестирования",
      "Трансферный рынок (P2P)",
      "Базовые инфраструктурные постройки",
      "Интеграция кошелька TON",
    ]
  },
  {
    phase: "Phase 3: Beta & Fitness (Q3 2026)",
    status: "upcoming",
    items: [
      "Интеграция шагомера (Walk-to-Earn)",
      "Молодежная академия и скаутинг",
      "Тактические схемы и стили игры",
      "Реферальная система и кланы",
    ]
  },
  {
    phase: "Phase 4: Global Release (Q4 2026)",
    status: "upcoming",
    items: [
      "Публичный релиз игры",
      "Глобальные сезонные турниры",
      "NFT Тренеры с уникальными бонусами",
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
