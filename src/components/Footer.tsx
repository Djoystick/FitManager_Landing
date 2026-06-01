"use client";

import { useState } from "react";
import Link from "next/link";
import { Send, Globe, Shield, FileText, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const [legalModal, setLegalModal] = useState<"tos" | "privacy" | null>(null);

  return (
    <>
      <footer className="relative border-t border-white/10 pt-16 pb-8">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-2xl font-bold text-white mb-4">FitManager</h2>
              <p className="text-gray-400 mb-6 max-w-sm">
                Первый футбольный Web3-менеджер в Telegram, объединяющий тактику, экономику на базе TON и Fitness-to-Earn механики.
              </p>
              <div className="flex gap-4">
                <Link href="https://t.me/fitmanager_game_channel" target="_blank" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors">
                  <Send className="w-5 h-5" />
                </Link>
                <Link href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors">
                  <Globe className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Проект</h3>
              <ul className="space-y-3">
                <li><Link href="https://t.me/fitmanager_game_bot/FitManager" target="_blank" className="text-gray-400 hover:text-neon-cyan transition-colors">Играть в Telegram</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-neon-cyan transition-colors">Whitepaper (Скоро)</Link></li>
                <li><Link href="https://t.me/fitmanager_game_channel" target="_blank" className="text-gray-400 hover:text-neon-cyan transition-colors">Новости (Dev-Блог)</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-white font-semibold mb-4">Правовая инфа</h3>
              <ul className="space-y-3">
                <li 
                  onClick={() => setLegalModal("tos")}
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  <FileText className="w-4 h-4" /> Terms of Service
                </li>
                <li 
                  onClick={() => setLegalModal("privacy")}
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  <Shield className="w-4 h-4" /> Privacy Policy
                </li>
              </ul>
            </div>

          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-500 text-sm">
              © 2026 FitManager. All rights reserved. Built on TON.
            </p>
          </div>
        </div>
      </footer>

      {/* Legal Modal */}
      <AnimatePresence>
        {legalModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setLegalModal(null)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative z-10 w-full max-w-3xl bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl p-6 md:p-8 max-h-[80vh] overflow-y-auto"
            >
              <button 
                onClick={() => setLegalModal(null)}
                className="absolute top-4 right-4 p-2 bg-white/5 hover:bg-white/10 rounded-full text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <h2 className="text-2xl font-bold text-white mb-6">
                {legalModal === "tos" ? "Terms of Service" : "Privacy Policy"}
              </h2>
              
              <div className="prose prose-invert max-w-none text-gray-400">
                {legalModal === "tos" ? (
                  <>
                    <p><strong>Last Updated: June 2026</strong></p>
                    <p>Welcome to FitManager! By accessing our Telegram Mini App and using our services, you agree to comply with and be bound by the following terms and conditions.</p>
                    <h4 className="text-white mt-4 mb-2 font-bold">1. Acceptance of Terms</h4>
                    <p>By registering an account and syncing your fitness data, you represent that you have read, understood, and agreed to be bound by these Terms. FitManager operates as a Web3 game on the TON blockchain.</p>
                    <h4 className="text-white mt-4 mb-2 font-bold">2. Blockchain and Digital Assets</h4>
                    <p>All in-game assets (players, facilities, FanCoins) and blockchain assets (TON) involve financial risk. We do not guarantee any monetary value or return on investment. You are solely responsible for the security of your Web3 wallet.</p>
                    <h4 className="text-white mt-4 mb-2 font-bold">3. Fair Play and Activity Tracking</h4>
                    <p>The core of FitManager is Move-to-Earn (W2E). Any attempt to spoof, fake, or manipulate step data using software (emulators) or hardware devices is strictly prohibited and will result in permanent account suspension and asset freezing.</p>
                  </>
                ) : (
                  <>
                    <p><strong>Last Updated: June 2026</strong></p>
                    <p>At FitManager, we take your privacy seriously. This policy describes what personal data we collect and how we use it.</p>
                    <h4 className="text-white mt-4 mb-2 font-bold">1. Data Collection</h4>
                    <p>We collect your Telegram ID, username, and language preferences. With your explicit permission, we collect fitness and step data (from Apple Health, Google Fit, or native pedometers) exclusively for in-game mechanics.</p>
                    <h4 className="text-white mt-4 mb-2 font-bold">2. Data Usage</h4>
                    <p>Your fitness data is converted into 'Sweat Points' and is NOT sold to third-party advertisers. We use blockchain (TON) to record transactions, which are public by nature, but your real-world identity is not linked to your on-chain wallet by us.</p>
                    <h4 className="text-white mt-4 mb-2 font-bold">3. Data Security</h4>
                    <p>We implement robust security measures to protect your data. However, transmitting data over the internet is never 100% secure. You provide data at your own risk.</p>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
