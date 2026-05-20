"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Cpu, Globe, Brain } from "lucide-react";

export default function Hero() {
  const googleFormLink = "https://forms.gle/Hd7pTycBkQisug1cA";

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20 px-6"
    >
      {/* Background Decorative Neon Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-primary/20 blur-[100px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full bg-secondary/20 blur-[120px] animate-pulse pointer-events-none" />

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left: Text Content */}
        <div className="lg:col-span-7 text-left space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold tracking-wider uppercase backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 animate-spin" />
            Next-Gen Technology Hub
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1]"
          >
            Empowering the <br />
            <span className="bg-gradient-to-r from-primary via-[#a2d2ff] to-secondary bg-clip-text text-transparent drop-shadow-sm">
              Future of Tech
            </span>{" "}
            <br />
            &amp; Sustainability.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-slate-300 text-lg md:text-xl max-w-2xl font-light leading-relaxed"
          >
            From AI &amp; VLSI to Hydroponics. Join JK SemiTech for industry-ready courses, internships, and capstone projects.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a
              href={googleFormLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl font-bold bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 group cursor-pointer"
            >
              Register Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="px-8 py-4 rounded-xl font-bold glass text-white hover:bg-white/10 border border-white/10 hover:border-white/20 active:scale-[0.98] transition-all"
            >
              Explore Programs
            </a>
          </motion.div>
        </div>

        {/* Right: Premium Tech Abstract Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center items-center relative"
        >
          {/* Animated 3D Tech Cube / Structure */}
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center">
            {/* Outer Rotating Glowing Ring */}
            <div className="absolute inset-0 rounded-full border border-dashed border-primary/40 animate-[spin_60s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border border-secondary/30 animate-[spin_40s_linear_infinite_reverse]" />
            <div className="absolute inset-8 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-[4px] border border-white/5" />

            {/* Glowing Center Glass Sphere */}
            <div className="absolute w-48 h-48 rounded-full bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 border border-white/10 flex items-center justify-center shadow-[inset_0_0_20px_rgba(255,255,255,0.1),0_0_40px_rgba(0,210,255,0.2)] animate-pulse">
              <Cpu className="w-16 h-16 text-primary animate-bounce" />
            </div>

            {/* Floating Orbiting Tech Badges */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-4 left-4 p-3 rounded-2xl glass-card border border-white/10 flex items-center gap-2 shadow-lg"
            >
              <Brain className="w-6 h-6 text-secondary" />
              <span className="text-xs font-semibold text-white">AI / ML</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-4 right-4 p-3 rounded-2xl glass-card border border-white/10 flex items-center gap-2 shadow-lg"
            >
              <Cpu className="w-6 h-6 text-primary" />
              <span className="text-xs font-semibold text-white">VLSI</span>
            </motion.div>

            <motion.div
              animate={{ x: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-1/2 -right-4 p-3 rounded-2xl glass-card border border-white/10 flex items-center gap-2 shadow-lg"
            >
              <Globe className="w-6 h-6 text-green-400" />
              <span className="text-xs font-semibold text-white">Eco Tech</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
