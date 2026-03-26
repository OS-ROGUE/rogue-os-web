"use client";

import React from "react";
import { motion } from "framer-motion";

interface CubeIconProps {
  size?: number;
  color?: string;
  variant?: "light" | "dark" | "high-contrast";
  modifier?: React.ReactNode;
  className?: string;
  showGlow?: boolean;
}

export const CubeIcon: React.FC<CubeIconProps> = ({
  size = 100,
  color = "#9D00FF",
  variant = "dark",
  modifier,
  className = "",
  showGlow = false,
}) => {
  const getStrokeColor = () => {
    if (variant === "light") return "#A070FF";
    if (variant === "high-contrast") return "#FFFFFF";
    return color;
  };

  const strokeColor = getStrokeColor();
  const fillOpacity = variant === "light" ? 0.05 : 0.02;

  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      {showGlow && (
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute rounded-full blur-3xl pointer-events-none"
          style={{
            width: size * 1.5,
            height: size * 1.5,
            backgroundColor: strokeColor
          }}
        />
      )}

      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10"
      >
        {/* Main Cube Hexagon Boundary */}
        <path
          d="M 50 5 L 90 25 L 90 75 L 50 95 L 10 75 L 10 25 Z"
          stroke={strokeColor}
          strokeWidth="3"
          strokeLinejoin="miter"
          fill={variant === "high-contrast" ? "none" : `rgba(157, 0, 255, ${fillOpacity})`}
        />

        {/* Top Faces Grid / T-Shape */}
        <path
          d="M 10 25 L 50 45 L 90 25"
          stroke={strokeColor}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M 50 5 L 50 45"
          stroke={strokeColor}
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Central Spine */}
        <path
          d="M 50 45 L 50 85"
          stroke={strokeColor}
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Skeletal Ribs */}
        <path
          d="M 30 55 L 50 45 L 70 55"
          stroke={strokeColor}
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M 35 70 L 50 60 L 65 70"
          stroke={strokeColor}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M 40 85 L 50 75 L 60 85"
          stroke={strokeColor}
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Dynamic Modifier Overlay */}
        {modifier && (
          <g className="modifier-container">
             {modifier}
          </g>
        )}
      </svg>
    </div>
  );
};
