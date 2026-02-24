"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const nodes = [
  { id: "network", label: "network", x: -120, y: -160 },
  { id: "dynamic", label: "dynamic", x: 80, y: -180 },
  { id: "pixel", label: "pixel", x: 260, y: -170 },
  { id: "experience", label: "experience", x: -240, y: -100 },
  { id: "system", label: "system", x: -110, y: -70 },
  { id: "filter", label: "filter", x: 180, y: -60 },
  { id: "graphics", label: "graphics", x: 320, y: -70 },
  { id: "web", label: "web", x: -160, y: -10 },
  { id: "function", label: "function", x: 0, y: -40 },
  { id: "design", label: "design", x: 220, y: -20 },
  { id: "interaction", label: "interaction", x: -300, y: 120 },
  { id: "ux", label: "ux", x: -200, y: 140 },
  { id: "ui", label: "ui", x: -110, y: 150 },
  { id: "canvas", label: "canvas", x: 210, y: 170 },
  { id: "responsive", label: "responsive", x: 320, y: 180 },
  { id: "cloud", label: "cloud", x: 10, y: 200 },
  { id: "color", label: "color", x: -320, y: 210 },
  { id: "development", label: "development", x: -90, y: 240 },
  { id: "media", label: "media", x: -240, y: 280 },
  { id: "links", label: "links", x: 120, y: 300 },
  { id: "bold", label: "bold", x: -110, y: 360 },
  { id: "layers", label: "layers", x: 280, y: 370 },
];

const connections = [
  ["network", "dynamic"], ["dynamic", "pixel"], ["pixel", "graphics"],
  ["network", "experience"], ["experience", "system"], ["system", "function"],
  ["function", "filter"], ["filter", "design"], ["design", "graphics"],
  ["web", "system"], ["web", "experience"], ["web", "interaction"],
  ["interaction", "ux"], ["ux", "ui"], ["ui", "function"],
  ["function", "design"], ["design", "canvas"], ["canvas", "responsive"],
  ["interaction", "color"], ["color", "ux"], ["ui", "development"],
  ["development", "media"], ["media", "color"], ["ui", "cloud"],
  ["cloud", "links"], ["links", "canvas"], ["links", "layers"],
  ["bold", "media"], ["bold", "links"], ["development", "bold"],
  ["system", "web"], ["filter", "pixel"], ["cloud", "function"]
];

export const InteractiveNodes = () => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center overflow-visible select-none md:translate-x-[15%]">
      {/* Central Anchor Logo */}
      <motion.div 
        className="relative z-20 flex flex-col items-center justify-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="relative">
          {/* Stylized Logo Icon */}
          <div className="text-7xl font-bold tracking-tighter text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
            <svg width="60" height="60" viewBox="0 0 100 100" fill="white">
              <path d="M50 0 L100 50 L50 100 L0 50 Z" />
              <path d="M50 20 L80 50 L50 80 L20 50 Z" fill="black" />
            </svg>
          </div>
        </div>
      </motion.div>

      {/* Connections Layer */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
        <g transform="translate(50%, 50%)">
          {connections.map(([fromId, toId], idx) => {
            const fromNode = nodes.find(n => n.id === fromId);
            const toNode = nodes.find(n => n.id === toId);
            if (!fromNode || !toNode) return null;

            const isRelated = hoveredNode === fromId || hoveredNode === toId;

            return (
              <motion.line
                key={idx}
                x1={fromNode.x}
                y1={fromNode.y}
                x2={toNode.x}
                y2={toNode.y}
                stroke="white"
                strokeWidth={isRelated ? 1.5 : 0.5}
                strokeOpacity={isRelated ? 0.7 : 0.1}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: 1, 
                  opacity: 1,
                  strokeOpacity: isRelated ? 0.7 : 0.1,
                  strokeWidth: isRelated ? 1.5 : 0.5
                }}
                transition={{ 
                  duration: 2, 
                  delay: idx * 0.01,
                  strokeWidth: { duration: 0.3 },
                  strokeOpacity: { duration: 0.3 }
                }}
              />
            );
          })}
        </g>
      </svg>

      {/* Nodes Layer */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
        <div className="relative w-full h-full flex items-center justify-center">
          {nodes.map((node) => (
            <motion.div
              key={node.id}
              className="absolute pointer-events-auto cursor-pointer"
              style={{ 
                left: `calc(50% + ${node.x}px)`, 
                top: `calc(50% + ${node.y}px)`,
                transform: "translate(-50%, -50%)"
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: Math.random() * 0.5 + 0.5 }}
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
              whileHover={{ scale: 1.1 }}
            >
              <div className={cn(
                "px-2 py-0.5 bg-black border border-white/10 text-[9px] uppercase font-mono tracking-[0.2em] text-white/40 transition-all duration-300",
                hoveredNode === node.id && "border-white/60 text-white bg-white/5 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
              )}>
                {node.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};