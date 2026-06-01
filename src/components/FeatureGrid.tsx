"use client";

import { motion } from "framer-motion";
import { Trophy, ShieldCheck, Activity, Cpu, Coins, Users, Zap, Globe2 } from "lucide-react";

export default function FeatureGrid() {
  const features = [
    {
      icon: <Cpu className="w-6 h-6 text-ghost-white" />,
      title: "Smart Match Engine",
      description: "Микро-дуэли характеристик. Учитываем мораль, стамину и сыгранность состава в реальном времени.",
      badge: "Core Tech"
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-ghost-white" />,
      title: "Web3 Экономика",
      description: "Реальный рынок игроков, P2P обмены и турниры с настоящим пулом наград в TON.",
      badge: "TON Network"
    },
    {
      icon: <Activity className="w-6 h-6 text-ghost-white" />,
      title: "Walk-to-Earn",
      description: "Синхронизируй шаги и конвертируй физическую активность в очки тренировок (Sweat Points).",
      badge: "Real World"
    },
    {
      icon: <Trophy className="w-6 h-6 text-ghost-white" />,
      title: "Глобальные Лиги",
      description: "От Песочницы (Tier 10) до Высшей Лиги. Призовые пулы распределяются прозрачно в смарт-контрактах.",
      badge: "Competition"
    },
    {
      icon: <Users className="w-6 h-6 text-ghost-white" />,
      title: "Сыгранность (Chemistry)",
      description: "Игроки из одной страны или лиги играют лучше вместе. Собирай пазл перков для победы.",
      badge: "Mechanic"
    },
    {
      icon: <Zap className="w-6 h-6 text-ghost-white" />,
      title: "Анти-P2W Механики",
      description: "Система старения, Form Decay и стеклянный потолок не дадут купить победу. Решает интеллект.",
      badge: "Fair Play"
    }
  ];

  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-6xl">
        
        <div className="text-center mb-16">
          <h2 className="text-heading-lg md:text-display font-bold text-ghost-white mb-4">
            Продуманный геймплей. <br className="hidden sm:block" /> Никаких тапов.
          </h2>
          <p className="text-body-lg text-comet max-w-2xl mx-auto">
            Архитектура игры строится на глубоком балансе и прозрачной Web3 экономике.
          </p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
              }}
              className="flex flex-col p-6 rounded-2xl bg-[#bad6f7]/[0.02] shadow-subtle-4 hover:bg-[#bad6f7]/[0.04] transition-colors"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-12 h-12 rounded-full border border-white/10 shadow-subtle-3 flex items-center justify-center bg-midnight-abyss">
                  {feature.icon}
                </div>
                <div className="px-2 py-1 rounded-md bg-midnight-abyss shadow-subtle text-[10px] uppercase tracking-wider text-arctic-mist font-medium">
                  {feature.badge}
                </div>
              </div>
              
              <h3 className="text-subheading font-semibold text-ghost-white mb-3">
                {feature.title}
              </h3>
              <p className="text-body text-comet opacity-80 leading-relaxed mt-auto">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
