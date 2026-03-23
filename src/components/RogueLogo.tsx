"use client";

import React from "react";
import { motion } from "framer-motion";

export const RogueLogo: React.FC = () => {
  return (
    <div className="relative inline-flex items-center justify-center p-8">
      {/* Pulse Outer Glow */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-48 h-48 rounded-full bg-[#9D00FF] blur-3xl opacity-20 pointer-events-none"
      />

      <svg
        width="160"
        height="160"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 animate-pulse-glow"
      >
        {/* Geometric Sharp ROG-style logo base */}
        <path
          d="M 10 20 L 50 10 L 90 20 L 90 80 L 50 95 L 10 80 Z"
          stroke="#9D00FF"
          strokeWidth="3"
          strokeLinejoin="miter"
          fill="rgba(157, 0, 255, 0.05)"
        />
        
        {/* Inner geometric lines */}
        <path
          d="M 25 35 L 50 25 L 75 35 M 50 25 L 50 85"
          stroke="#9D00FF"
          strokeWidth="4"
          strokeLinecap="square"
        />
        <path
          d="M 30 50 L 50 40 L 70 50"
          stroke="#9D00FF"
          strokeWidth="3"
        />
        <path
          d="M 35 65 L 50 55 L 65 65"
          stroke="#9D00FF"
          strokeWidth="2"
        />

        {/* Sharp accents */}
        <path d="M 10 20 L 25 35 M 90 20 L 75 35 M 10 80 L 25 65 M 90 80 L 75 65" 
          stroke="#9D00FF" 
          strokeWidth="1.5" 
        />
      </svg>
    </div>
  );
};
