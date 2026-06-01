"use client";

import { motion } from "framer-motion";
import { BrainCircuit, LineChart, Coins, Users, Zap, Award } from "lucide-react";

const features = [
  {
    icon: <BrainCircuit className="w-8 h-8 text-neon-cyan" />,
    title: "Тактика решает",
    description:
      "Никакого рандома. Математический движок симуляции учитывает схему, мораль, усталость и сыгранность каждого игрока на поле.",
  },
  {
    icon: <Coins className="w-8 h-8 text-neon-yellow" />,
    title: "Настоящая экономика",
    description:
      "Зарабатывай FanCoins, инвестируй в инфраструктуру и выходи на трансферный рынок, чтобы торговаться с другими игроками.",
  },
  {
    icon: <Users className="w-8 h-8 text-blue-400" />,
    title: "Молодежная академия",
    description:
      "Ищи молодые таланты, прокачивай их навыки и продавай за TON, когда они станут звездами мирового уровня.",
  },
  {
    icon: <Zap className="w-8 h-8 text-purple-400" />,
    title: "Умное старение",
    description:
      "Игроки стареют и теряют характеристики. Выстраивай стратегию омоложения состава, чтобы не вылететь из лиги.",
  },
  {
    icon: <LineChart className="w-8 h-8 text-green-400" />,
    title: "Walk-to-Earn",
    description:
      "Интеграция с шагомером. Твоя реальная физическая активность ускоряет тренировки и приносит пассивный доход клубу.",
  },
  {
    icon: <Award className="w-8 h-8 text-orange-400" />,
    title: "Турниры и Лиги",
    description:
      "Участвуй в сезонных лигах. Поднимайся в рейтинге и забирай свою часть призового фонда в криптовалюте TON.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Почему мы <span className="text-red-500">не кликер</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg"
          >
            Мы взяли глубину классических футбольных менеджеров (FM) и перенесли ее в Web3. Каждое твое решение имеет экономические последствия.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-neon-cyan/50 transition-colors relative overflow-hidden"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="mb-6 p-4 rounded-xl bg-white/5 inline-block">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
