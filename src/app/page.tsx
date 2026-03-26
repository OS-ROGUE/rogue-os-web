"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NeonFrame } from "@/components/NeonFrame";
import { RogueLogo } from "@/components/RogueLogo";
import { Zap, Settings, Download, Mail, Grid } from "lucide-react";
import Link from "next/link";

type Language = "EN" | "PL";

const translations = {
  EN: {
    welcome: "Welcome",
    slogan: "Absolute Control. Pure Performance.",
    description: "Rogue OS is a custom Arch Linux distribution tailored for gamers and power users.",
    rollingRelease: "Rolling Release",
    absoluteControl: "Absolute Control",
    performanceTuned: "Performance-Tuned for Gaming",
    download: "DOWNLOAD ROGUE OS ISO",
    features: "Tech Specs",
    speed: "Lightning Fast",
    speedDesc: "Optimized kernel and drivers for minimum latency.",
    customization: "Full Control",
    customizationDesc: "Pre-configured but completely open to your tweaks.",
    viewIcons: "VIEW SYSTEM ICONS",
    contact: "Technical Support:",
  },
  PL: {
    welcome: "Witaj",
    slogan: "Absolutna Kontrola. Czysta Wydajność.",
    description: "Rogue OS to zmodyfikowana dystrybucja Arch Linux stworzona dla graczy i zaawansowanych użytkowników.",
    rollingRelease: "Rolling Release (Ciągłe wydania)",
    absoluteControl: "Absolutna Kontrola",
    performanceTuned: "Zoptymalizowany pod Gaming",
    download: "POBIERZ ROGUE OS ISO",
    features: "Specyfikacja",
    speed: "Błyskawiczna Prędkość",
    speedDesc: "Zoptymalizowane jądro i sterowniki dla minimalnych opóźnień.",
    customization: "Pełna Kontrola",
    customizationDesc: "Wstępnie skonfigurowany, ale w pełni otwarty na Twoje modyfikacje.",
    viewIcons: "ZOBACZ IKONY SYSTEMOWE",
    contact: "Wsparcie Techniczne:",
  },
};

export default function Home() {
  const [lang, setLang] = useState<Language | null>(null);

  const handleLangSelect = (selectedLang: Language) => {
    setLang(selectedLang);
  };

  const t = lang ? translations[lang] : translations.EN;

  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <AnimatePresence mode="wait">
        {!lang ? (
          <motion.div
            key="splash"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              transition: { duration: 0.8, ease: "easeInOut" }
            }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 1, 0.8, 1],
              }}
              transition={{ 
                duration: 2,
                times: [0, 0.4, 0.6, 1],
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="text-5xl md:text-7xl font-gaming glow-purple-strong mb-12 tracking-widest"
            >
              WELCOME
            </motion.h1>
            
            <div className="flex gap-8">
              {["ENGLISH", "POLSKI"].map((label) => (
                <button
                  key={label}
                  onClick={() => handleLangSelect(label === "ENGLISH" ? "EN" : "PL")}
                  className="px-8 py-3 border border-[#9D00FF] font-gaming text-lg hover:bg-[#9D00FF] hover:text-black transition-all duration-300 shadow-glow-purple group relative overflow-hidden"
                >
                  <span className="relative z-10">{label}</span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
                </button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              transition: { 
                duration: 1.5,
                ease: "easeOut",
                staggerChildren: 0.2
              }
            }}
            className="w-full"
          >
            <NeonFrame>
              <div className="flex flex-col items-center py-12 px-4 space-y-24">
                
                {/* Hero Section */}
                <section className="flex flex-col items-center text-center space-y-8 max-w-4xl">
                  <RogueLogo />
                  <motion.h2 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-4xl md:text-6xl font-gaming glow-purple tracking-tight leading-tight"
                  >
                    {t.slogan}
                  </motion.h2>
                  <motion.p 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg md:text-xl text-gray-400 max-w-2xl"
                  >
                    {t.description}
                  </motion.p>
                </section>

                {/* Description / Code Block Section */}
                <section className="w-full max-w-3xl space-y-6">
                  <div className="code-block text-purple-400">
                    <p className="mb-2">{">"} systemctl status rogue-os.service</p>
                    <p className="text-white">● rogue-os.service - Rogue OS Performance Suite</p>
                    <p className="ml-4 text-green-500">Active: active (running) since always</p>
                    <p className="ml-4">Main features:</p>
                    <ul className="ml-8 list-disc text-gray-300">
                      <li>{t.rollingRelease}</li>
                      <li>{t.absoluteControl}</li>
                      <li>{t.performanceTuned}</li>
                    </ul>
                  </div>
                </section>

                {/* Action Buttons Section */}
                <section className="flex flex-col items-center gap-8">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group px-12 py-6 bg-black border-2 border-[#9D00FF] font-gaming text-2xl tracking-widest overflow-hidden animate-pulse-glow"
                  >
                    <div className="absolute inset-0 bg-[#9D00FF] opacity-10 group-hover:opacity-30 transition-opacity" />
                    <div className="absolute -inset-1 bg-[#9D00FF] opacity-0 group-hover:opacity-20 blur-xl transition-opacity" />
                    <span className="relative z-10 flex items-center gap-4">
                      <Download className="w-8 h-8" />
                      {t.download}
                    </span>
                  </motion.button>

                  <Link href="/icons">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 text-sm font-gaming text-[#9D00FF] border-b border-transparent hover:border-[#9D00FF] transition-all cursor-pointer py-1"
                    >
                      <Grid className="w-4 h-4" />
                      {t.viewIcons}
                    </motion.div>
                  </Link>
                </section>

                {/* Features Section */}
                <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl">
                  <div className="flex flex-col items-center text-center p-8 border border-[#30004F] bg-[#111] hover:border-[#9D00FF] transition-colors rounded-lg group">
                    <div className="w-16 h-16 rounded-full border border-[#9D00FF] flex items-center justify-center mb-6 shadow-glow-purple group-hover:scale-110 transition-transform">
                      <Zap className="w-8 h-8 text-[#9D00FF]" />
                    </div>
                    <h3 className="text-2xl font-gaming mb-4">{t.speed}</h3>
                    <p className="text-gray-400">{t.speedDesc}</p>
                  </div>
                  <div className="flex flex-col items-center text-center p-8 border border-[#30004F] bg-[#111] hover:border-[#9D00FF] transition-colors rounded-lg group">
                    <div className="w-16 h-16 rounded-full border border-[#9D00FF] flex items-center justify-center mb-6 shadow-glow-purple group-hover:scale-110 transition-transform">
                      <Settings className="w-8 h-8 text-[#9D00FF]" />
                    </div>
                    <h3 className="text-2xl font-gaming mb-4">{t.customization}</h3>
                    <p className="text-gray-400">{t.customizationDesc}</p>
                  </div>
                </section>

                {/* Footer */}
                <footer className="w-full flex flex-col items-center pt-24 pb-8 space-y-4">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-[#9D00FF] to-transparent opacity-30" />
                  <div className="flex items-center gap-3 text-gray-400">
                    <Mail className="w-5 h-5" />
                    <span>{t.contact} <a href="mailto:helperrogueos@gmail.com" className="text-[#9D00FF] hover:underline">helperrogueos@gmail.com</a></span>
                  </div>
                  <p className="text-xs text-gray-600 font-gaming">ROGUE OS © {new Date().getFullYear()} | BUILT FOR THE ELITE</p>
                </footer>

              </div>
            </NeonFrame>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
