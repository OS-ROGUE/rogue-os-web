"use client";

import React from "react";
import { motion } from "framer-motion";
import { CubeIcon } from "@/components/CubeIcon";
import Link from "next/link";
import {
  Settings,
  Folder,
  Shield,
  Terminal,
  Disc,
  Search,
  Battery,
  ArrowLeft
} from "lucide-react";

const icons = [
  {
    label: "Ustawienia Systemu",
    modifier: <Settings className="w-8 h-8 text-white" strokeWidth={1.5} />,
  },
  {
    label: "Menedżer Plików",
    modifier: <Folder className="w-8 h-8 text-white" strokeWidth={1.5} />,
  },
  {
    label: "Centrum Oprogramowania",
    modifier: (
      <div className="relative w-8 h-8 flex items-center justify-center">
        <Terminal className="w-6 h-6 text-white" strokeWidth={2} />
        <div className="absolute -bottom-1 -right-1 bg-black rounded-full p-0.5">
          <Shield className="w-3 h-3 text-[#9D00FF]" fill="#9D00FF" fillOpacity={0.2} />
        </div>
      </div>
    ),
  },
  {
    label: "Bezpieczeństwo/Zapora",
    modifier: <Shield className="w-8 h-8 text-white" strokeWidth={1.5} />,
  },
  {
    label: "Odtwarzacz Multimedialny",
    modifier: (
      <div className="relative w-8 h-8 flex items-center justify-center">
        <div className="absolute w-8 h-8 border border-white rounded-full opacity-20" />
        <div className="absolute w-5 h-5 border border-white rounded-full opacity-50" />
        <div className="absolute w-2 h-2 bg-[#9D00FF] rounded-full shadow-[0_0_5px_#9D00FF]" />
      </div>
    ),
  },
  {
    label: "Przeglądarka",
    modifier: <Search className="w-8 h-8 text-white" strokeWidth={1.5} />,
  },
  {
    label: "Zarządzanie Energią",
    modifier: <Battery className="w-8 h-8 text-white" strokeWidth={1.5} />,
  },
];

export default function IconsPage() {
  return (
    <div className="min-h-screen bg-[#0a001a] text-white font-sans selection:bg-[#9D00FF] selection:text-white">
      {/* Background Grid */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#30004F_1px,transparent_1px),linear-gradient(to_bottom,#30004F_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,#30004F,transparent)]" />
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="flex justify-between items-start mb-24">
          <Link href="/" className="group flex items-center gap-2 text-sm font-gaming text-gray-400 hover:text-[#9D00FF] transition-colors">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            POWRÓT DO STARTU
          </Link>
          <div className="text-right">
            <h2 className="text-xs font-gaming tracking-[0.3em] text-[#9D00FF]">TECHNICAL SPECIFICATION v1.0</h2>
            <p className="text-[10px] text-gray-500 mt-1">ROGUE-OS ICON DESIGN SYSTEM</p>
          </div>
        </div>

        {/* Central Element */}
        <div className="flex flex-col items-center mb-32">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <CubeIcon size={320} showGlow color="#9D00FF" />
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-center"
          >
            <h1 className="text-5xl md:text-7xl font-gaming tracking-tighter glow-purple-strong">
              40 IKON SYSTEMOWYCH
            </h1>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#9D00FF] to-transparent mt-4 opacity-50" />
          </motion.div>
        </div>

        {/* Icon Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-x-8 gap-y-24 mb-48">
          {icons.map((icon, index) => (
            <motion.div
              key={icon.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index + 0.8 }}
              className="flex flex-col items-center group"
            >
              <div className="relative mb-6 transform group-hover:scale-110 transition-transform duration-500">
                <CubeIcon
                  size={120}
                  modifier={
                    <foreignObject x="34" y="34" width="32" height="32">
                      <div className="flex items-center justify-center w-full h-full opacity-80 group-hover:opacity-100 transition-opacity">
                        {icon.modifier}
                      </div>
                    </foreignObject>
                  }
                />
              </div>
              <span className="text-[10px] font-gaming text-center tracking-widest text-gray-400 group-hover:text-white transition-colors uppercase">
                {icon.label}
              </span>
            </motion.div>
          ))}

          {/* Filler for 40 total icons concept */}
          <div className="flex flex-col items-center opacity-30 cursor-not-allowed">
            <CubeIcon size={120} />
            <span className="text-[10px] font-gaming text-center tracking-widest text-gray-600 mt-6 uppercase">
              Wkrótce...
            </span>
          </div>
        </div>

        {/* Compatibility Section */}
        <section className="mb-48">
          <div className="flex items-center gap-4 mb-12">
            <h3 className="text-xl font-gaming tracking-wider text-white whitespace-nowrap">
              KOMPATYBILNOŚĆ Z LINUX UI
            </h3>
            <div className="h-px w-full bg-[#30004F]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "DARK MODE", variant: "dark" as const, bg: "bg-black" },
              { title: "LIGHT MODE", variant: "light" as const, bg: "bg-gray-100" },
              { title: "HIGH CONTRAST", variant: "high-contrast" as const, bg: "bg-[#000000] border border-white/20" },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center gap-6 p-12 rounded-lg border border-[#30004F] bg-black/40">
                <div className={`w-32 h-32 rounded flex items-center justify-center ${item.bg}`}>
                  <CubeIcon size={80} variant={item.variant} />
                </div>
                <span className="text-[10px] font-gaming tracking-[0.2em] text-gray-400">{item.title}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Precision Section */}
        <section>
          <div className="flex items-center gap-4 mb-12">
            <h3 className="text-xl font-gaming tracking-wider text-white whitespace-nowrap">
              PRECYZJA ŚCIEŻEK
            </h3>
            <div className="h-px w-full bg-[#30004F]" />
          </div>

          <div className="flex flex-wrap items-end justify-between gap-8 p-12 rounded-lg border border-[#30004F] bg-black/20 overflow-x-auto">
            {[256, 128, 64, 32, 16].map((size) => (
              <div key={size} className="flex flex-col items-center gap-4 min-w-fit">
                <CubeIcon size={size} />
                <span className="text-[10px] font-gaming text-gray-500">{size}x{size}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Footer */}
        <footer className="mt-48 pt-12 border-t border-[#30004F] flex flex-col md:flex-row justify-between gap-8">
          <div className="text-[10px] font-gaming text-gray-600 space-y-2">
            <p>DESIGN SYSTEM: ROGUE_CUBE_V1</p>
            <p>ENCODING: VECTOR_PATH_OPTIMIZED</p>
            <p>EXPORT: SVG / PNG / ICO</p>
          </div>
          <div className="text-[10px] font-gaming text-[#9D00FF] md:text-right">
            ROGUE OS © 2025 | ALL RIGHTS RESERVED
          </div>
        </footer>
      </main>
    </div>
  );
}
