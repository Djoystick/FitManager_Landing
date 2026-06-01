"use client";

import { motion } from "framer-motion";
import { Activity, ShieldCheck, Gamepad2, Coins } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      title: "Экономика без 'Китов'",
      description: "Никаких 'pay-to-win'. Игроков выше 70 OVR невозможно прокачать за деньги — только за твои реальные шаги (Sweat Points).",
      icon: <ShieldCheck className="w-6 h-6 text-neon-cyan" />
    },
    {
      title: "Глобальные Лиги",
      description: "10 дивизионов с системой промоушена и вылета. Бросай вызов менеджерам по всему миру и забирай призовой фонд.",
      icon: <Gamepad2 className="w-6 h-6 text-purple-400" />
    },
    {
      title: "Move-to-Earn v2.0",
      description: "Фитнес-трекинг встроен прямо в геймплей. Твой бег = стамина твоих игроков. Не двигаешься ты — проигрывает команда.",
      icon: <Activity className="w-6 h-6 text-green-400" />
    },
    {
      title: "Реальный Трансферный Рынок",
      description: "Покупай перспективных юниоров за FanCoins, тренируй и продавай на P2P рынке за TON.",
      icon: <Coins className="w-6 h-6 text-neon-yellow" />
    }
  ];

  return (
    <section className="py-16 md:py-24 relative border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Почему мы <span className="text-neon-cyan text-glow">НЕ кликер?</span>
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            FitManager — это полноценный футбольный симулятор с устойчивой Web3-экономикой.
          </p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 perspective-1000"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.9, rotateX: 20 },
                visible: { opacity: 1, y: 0, scale: 1, rotateX: 0, transition: { type: "spring", stiffness: 120, damping: 14 } }
              }}
              className="p-6 md:p-8 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-white/20 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white/5 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 relative z-10">
                {feature.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 relative z-10">{feature.title}</h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed relative z-10">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
