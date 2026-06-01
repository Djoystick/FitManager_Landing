"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Users, Zap, Globe2 } from "lucide-react";

export default function FeatureGrid() {
  const features = [
    {
      icon: <Globe2 className="w-8 h-8 text-white/50 group-hover:text-white transition-colors" />,
      title: "Глобальные Лиги",
      description: "От Песочницы (Tier 10) до Высшей Лиги. Призовые пулы распределяются прозрачно в смарт-контрактах.",
    },
    {
      icon: <Users className="w-8 h-8 text-white/50 group-hover:text-white transition-colors" />,
      title: "Chemistry & Traits",
      description: "Игроки из одной страны или лиги играют лучше вместе. Собирай пазл перков для победы.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-white/50 group-hover:text-white transition-colors" />,
      title: "P2P Market",
      description: "Полноценный внутренний рынок трансферов. Покупай, арендуй и продавай NFT-игроков напрямую.",
    },
    {
      icon: <Zap className="w-8 h-8 text-white/50 group-hover:text-white transition-colors" />,
      title: "Анти-P2W Механики",
      description: "Система старения, Form Decay и стеклянный потолок не дадут купить победу. Решает интеллект.",
    }
  ];

  return (
    <section className="py-24 relative z-10 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        
        <div className="text-center mb-16 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-transparent to-white/20 -mt-16"></div>
          <h2 className="text-heading-lg md:text-display font-bold text-ghost-white mb-4">
            Архитектура победы
          </h2>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-8 bg-gradient-to-t from-transparent to-white/20 -mb-12"></div>
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
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="group flex flex-col p-8 md:p-10 rounded-3xl bg-[#080911] border border-white/5 shadow-subtle-4 relative overflow-hidden h-[300px] items-center justify-center text-center hover:bg-[#0a0b14] transition-colors"
            >
              {/* Corner Dots */}
              <div className="absolute top-4 left-4 w-1 h-1 bg-white/20 rounded-full" />
              <div className="absolute top-4 right-4 w-1 h-1 bg-white/20 rounded-full" />
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-white/20 rounded-full" />
              <div className="absolute bottom-4 right-4 w-1 h-1 bg-white/20 rounded-full" />

              {/* Faint Background Circuitry SVG (Abstract) */}
              <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 150H100L150 100H250L300 150H400" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M0 200H80L120 160H280L320 200H400" stroke="white" strokeWidth="1" strokeLinejoin="round"/>
                <circle cx="150" cy="100" r="4" fill="white"/>
                <circle cx="250" cy="100" r="4" fill="white"/>
              </svg>

              {/* Embossed Center Plaque */}
              <div className="mb-6 p-4 rounded-2xl bg-[#0a0c16] shadow-embossed border border-white/5 relative z-10 group-hover:scale-105 transition-transform duration-500">
                <div className="w-16 h-16 rounded-xl bg-midnight-abyss flex items-center justify-center shadow-subtle-5 border border-white/5">
                  {feature.icon}
                </div>
              </div>
              
              <h3 className="text-heading font-bold text-ghost-white mb-2 relative z-10 group-hover:text-neon-violet transition-colors">
                {feature.title}
              </h3>
              <p className="text-body text-comet/60 max-w-sm relative z-10">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-white/10 bg-[#080911] shadow-subtle text-caption text-comet cursor-pointer hover:bg-white/5 transition-colors">
             Follow @FitManagerWeb3 on Telegram
          </div>
        </div>

      </div>
    </section>
  );
}
