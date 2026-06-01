"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Circle } from "lucide-react";

export default function RoadmapSection() {
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

  return (
    <section className="py-16 md:py-24 relative border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 md:mb-6"
          >
            Эволюция <span className="text-neon-yellow text-glow">Проекта</span>
          </motion.h2>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            }
          }}
          className="space-y-6 md:space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-neon-cyan/50 before:to-transparent perspective-1000"
        >
          {roadmap.map((phase, idx) => (
            <motion.div 
              key={idx} 
              variants={{
                hidden: { opacity: 0, x: idx % 2 === 0 ? -50 : 50, rotateY: idx % 2 === 0 ? 15 : -15, filter: "blur(5px)" },
                visible: { opacity: 1, x: 0, rotateY: 0, filter: "blur(0px)", transition: { type: "spring", stiffness: 80, damping: 15 } }
              }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              
              {/* Icon / Node */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#050505] bg-black shadow-[0_0_20px_rgba(0,240,255,0.2)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10 transition-transform duration-500 group-hover:scale-125 group-hover:shadow-[0_0_30px_rgba(0,240,255,0.5)]">
                {phase.status === "completed" ? (
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                ) : phase.status === "current" ? (
                  <div className="w-3 h-3 bg-neon-cyan rounded-full animate-[ping_2s_ease-in-out_infinite] box-glow" />
                ) : (
                  <Circle className="w-4 h-4 text-gray-600" />
                )}
              </div>
              
              {/* Card */}
              <div 
                className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-5 md:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-neon-cyan/50 hover:bg-white/10 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] group-hover:-translate-y-1"
              >
                <h3 className={`text-lg md:text-xl font-bold mb-3 ${phase.status === 'current' ? 'text-neon-cyan text-glow' : 'text-white'}`}>
                  {phase.phase}
                </h3>
                <ul className="space-y-2">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm md:text-base text-gray-400">
                      <span className="text-neon-cyan mt-1 opacity-50">-</span> {item}
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
