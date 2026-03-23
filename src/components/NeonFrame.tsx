"use client";

import React from "react";

export const NeonFrame: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full p-4 md:p-8">
      {/* Intricate Neon Border SVG */}
      <div className="pointer-events-none fixed inset-0 z-50">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          {/* Main frame line */}
          <rect
            x="1"
            y="1"
            width="98"
            height="98"
            fill="none"
            stroke="#9D00FF"
            strokeWidth="0.2"
            className="opacity-50"
          />
          
          {/* Glowing accents in corners (filigree inspired) */}
          {/* Top Left */}
          <path
            d="M 1 10 L 1 1 L 10 1 M 2 2 L 2 8 M 8 2 L 2 2"
            fill="none"
            stroke="#9D00FF"
            strokeWidth="0.3"
            className="animate-pulse"
          />
          <circle cx="1" cy="1" r="0.5" fill="#9D00FF" className="animate-pulse" />
          
          {/* Top Right */}
          <path
            d="M 90 1 L 99 1 L 99 10 M 98 2 L 92 2 M 98 2 L 98 8"
            fill="none"
            stroke="#9D00FF"
            strokeWidth="0.3"
            className="animate-pulse"
          />
          <circle cx="99" cy="1" r="0.5" fill="#9D00FF" className="animate-pulse" />

          {/* Bottom Left */}
          <path
            d="M 1 90 L 1 99 L 10 99 M 2 98 L 2 92 M 8 98 L 2 98"
            fill="none"
            stroke="#9D00FF"
            strokeWidth="0.3"
            className="animate-pulse"
          />
          <circle cx="1" cy="99" r="0.5" fill="#9D00FF" className="animate-pulse" />

          {/* Bottom Right */}
          <path
            d="M 90 99 L 99 99 L 99 90 M 98 98 L 92 98 M 98 98 L 98 92"
            fill="none"
            stroke="#9D00FF"
            strokeWidth="0.3"
            className="animate-pulse"
          />
          <circle cx="99" cy="99" r="0.5" fill="#9D00FF" className="animate-pulse" />
          
          {/* Middle filigree elements */}
          <path
            d="M 45 1 L 50 2 L 55 1 M 48 1.5 L 52 1.5"
            fill="none"
            stroke="#9D00FF"
            strokeWidth="0.2"
          />
          <path
            d="M 45 99 L 50 98 L 55 99 M 48 98.5 L 52 98.5"
            fill="none"
            stroke="#9D00FF"
            strokeWidth="0.2"
          />
        </svg>
      </div>

      {/* Decorative Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#9D00FF] opacity-[0.05] blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#9D00FF] opacity-[0.05] blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl">
        {children}
      </div>
    </div>
  );
};
