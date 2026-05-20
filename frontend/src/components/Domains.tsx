"use client";

import { motion } from "framer-motion";
import { 
  Layers, 
  Cpu, 
  Wifi, 
  Bot, 
  BrainCircuit, 
  LineChart, 
  Globe, 
  FileCode, 
  Database, 
  Zap, 
  Binary 
} from "lucide-react";

export default function Domains() {
  const row1 = [
    { name: "VLSI", icon: Cpu },
    { name: "Embedded Systems", icon: Layers },
    { name: "IoT", icon: Wifi },
    { name: "Robotics", icon: Bot },
    { name: "Artificial Intelligence", icon: BrainCircuit },
    { name: "Machine Learning", icon: LineChart },
  ];

  const row2 = [
    { name: "Web Development", icon: Globe },
    { name: "Full Stack", icon: FileCode },
    { name: "Python", icon: Binary },
    { name: "SQL", icon: Database },
    { name: "Power Electronics", icon: Zap },
    { name: "MatLab", icon: Cpu },
  ];

  // Duplicate arrays to allow seamless infinite scroll
  const marquee1 = [...row1, ...row1, ...row1, ...row1];
  const marquee2 = [...row2, ...row2, ...row2, ...row2];

  return (
    <section id="domains" className="py-24 relative overflow-hidden bg-[#05050f]">
      {/* Absolute Neon Glows */}
      <div className="absolute top-0 right-1/4 w-[300px] h-[300px] rounded-full bg-primary/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full bg-secondary/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10 text-center space-y-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold tracking-tight"
        >
          Technologies &amp; <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Domains We Master</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-slate-400 text-lg max-w-2xl mx-auto"
        >
          We offer comprehensive training and specialized projects across a broad spectrum of cutting-edge tech domains.
        </motion.p>
      </div>

      {/* Marquees Container */}
      <div className="flex flex-col gap-6 relative z-10 w-full select-none overflow-hidden">
        {/* Row 1: Left Scroll */}
        <div className="flex w-max gap-4 overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 25,
              repeat: Infinity,
            }}
            className="flex gap-4 pr-4"
          >
            {marquee1.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={`${item.name}-r1-${idx}`}
                  className="flex items-center gap-3 px-6 py-4 rounded-2xl glass border border-white/10 hover:border-primary/40 hover:bg-white/5 transition-all shadow-md group"
                >
                  <Icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-white font-medium text-sm sm:text-base whitespace-nowrap">
                    {item.name}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Row 2: Right Scroll */}
        <div className="flex w-max gap-4 overflow-hidden">
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              ease: "linear",
              duration: 25,
              repeat: Infinity,
            }}
            className="flex gap-4 pr-4"
          >
            {marquee2.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={`${item.name}-r2-${idx}`}
                  className="flex items-center gap-3 px-6 py-4 rounded-2xl glass border border-white/10 hover:border-secondary/40 hover:bg-white/5 transition-all shadow-md group"
                >
                  <Icon className="w-5 h-5 text-secondary group-hover:scale-110 transition-transform" />
                  <span className="text-white font-medium text-sm sm:text-base whitespace-nowrap">
                    {item.name}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
