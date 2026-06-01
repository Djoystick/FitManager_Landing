"use client";

import Link from "next/link";
import { Send, Globe, Shield, FileText } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
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
              <li className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer">
                <FileText className="w-4 h-4" /> Terms of Service
              </li>
              <li className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer">
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
  );
}
