"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Code, 
  Briefcase, 
  Award, 
  BookOpen, 
  Users, 
  Trophy, 
  ShieldCheck, 
  Compass, 
  Sun, 
  Leaf 
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Final Year Projects",
      slug: "final-year-projects",
      description: "Comprehensive end-to-end support for engineering & tech students to build breakthrough final year projects.",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Mini Projects",
      slug: "mini-projects",
      description: "Hands-on implementation of specialized mini-projects to master targeted technology stacks.",
      icon: Briefcase,
      color: "from-purple-500 to-indigo-500",
    },
    {
      title: "Internships",
      slug: "internships",
      description: "Immersive industry internships with real-world project experience, mentorship, and certification.",
      icon: Award,
      color: "from-teal-500 to-emerald-500",
    },
    {
      title: "Trainings",
      slug: "trainings",
      description: "Rigorous technical training programs led by industry professionals to bridge classroom & career.",
      icon: BookOpen,
      color: "from-rose-500 to-orange-500",
    },
    {
      title: "Workshops",
      slug: "workshops",
      description: "Interactive, specialized, and fast-paced tech workshops on emerging next-generation technologies.",
      icon: Users,
      color: "from-amber-500 to-yellow-500",
    },
    {
      title: "Hackathons",
      slug: "hackathons",
      description: "Intense coding and building challenges to stimulate innovation, teamwork, and problem-solving.",
      icon: Trophy,
      color: "from-fuchsia-500 to-pink-500",
    },
    {
      title: "Capstone Projects",
      slug: "capstone-projects",
      description: "Multi-disciplinary projects integrating advanced tech concepts to solve industrial challenges.",
      icon: ShieldCheck,
      color: "from-indigo-500 to-cyan-500",
    },
    {
      title: "Industry Ready Courses",
      slug: "industry-ready-courses",
      description: "Expert-curated curriculum tailored to current market demands ensuring direct employability.",
      icon: Compass,
      color: "from-emerald-500 to-teal-500",
    },
    {
      title: "Solar Panel Installation",
      slug: "solar-panel-installation",
      description: "Professional training and execution on sustainable green energy engineering and solar infrastructure.",
      icon: Sun,
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Hydroponics",
      slug: "hydroponics",
      description: "Advanced smart agriculture courses combining sustainable food production and IoT technologies.",
      icon: Leaf,
      color: "from-green-500 to-emerald-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  } as const;

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#03030c]">
      {/* Background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-secondary/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold tracking-tight"
          >
            Our Core <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Services &amp; Programs</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-slate-400 text-lg"
          >
            Bridging the gap between engineering curriculum and real-world tech environments through modern, hands-on, and sustainable disciplines.
          </motion.p>
        </div>

        {/* Responsive Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link href={`/services/${service.slug}`} key={service.title} className="block group">
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="relative rounded-3xl glass-card p-8 border border-white/10 group-hover:border-primary/30 transition-all duration-300 overflow-hidden shadow-2xl h-full"
                >
                  {/* Glow effect on hover */}
                  <div className={`absolute -right-12 -top-12 w-32 h-32 rounded-full bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`} />
                  <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />

                  {/* Icon Container */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} p-0.5 flex items-center justify-center mb-6 shadow-lg shadow-black/30 group-hover:scale-110 transition-all duration-300`}>
                    <div className="w-full h-full rounded-[14px] bg-[#05050f] flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white group-hover:text-primary transition-colors" />
                    </div>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Learn More Link Text */}
                  <div className="text-primary text-xs font-semibold uppercase tracking-wider flex items-center gap-1 group-hover:underline">
                    Explore Details &rarr;
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
