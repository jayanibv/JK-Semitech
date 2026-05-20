"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, 
  Cpu, 
  Settings, 
  ChevronRight, 
  Zap, 
  Sun, 
  Leaf, 
  CheckCircle, 
  ArrowUpRight,
  BookOpen,
  Award,
  Users,
  Trophy,
  ShieldAlert,
  Send,
  MessageSquare,
  Mail,
  Sparkles,
  Compass
} from "lucide-react";

// Robust Inline Social SVG Icons
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="currentColor"
    {...props}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

// Mappings of Slugs to Highly Creative Curated Content
const serviceDetailsMap: Record<string, any> = {
  "final-year-projects": {
    title: "Final Year Projects Support",
    subtitle: "Turn academic milestones into groundbreaking real-world tech prototypes.",
    tagline: "Industrial-grade hardware/software projects matching modern IEEE and market standards.",
    icon: Cpu,
    color: "from-blue-500 to-cyan-500",
    overview: "We support final year engineering students (CSE, ECE, EEE, IT) in fabricating fully functional research-driven projects. From architectural planning, component procurement, schematics designing, embedded firmware coding, up to final project dissertation writing.",
    features: [
      "Full hardware kit design & supply",
      "Detailed wiring layouts & simulation files",
      "Complete commented source code",
      "Comprehensive research paper drafting support",
      "Plagiarism-free thesis & documentation report",
      "Dedicated viva-voce mock preparation sessions"
    ],
    timeline: [
      { phase: "Phase 1: Topic Selection", desc: "Brainstorming and freezing abstract concepts based on current technology trends." },
      { phase: "Phase 2: Architecture & Specs", desc: "Developing clear schematic block diagrams and choosing correct hardware controllers." },
      { phase: "Phase 3: Coding & Assembly", desc: "Firmware writing, cloud telemetry integration, and physical kit engineering." },
      { phase: "Phase 4: Validation & Report", desc: "Extensive test validations, thesis drafting, and presentation preparation." }
    ],
    techStack: ["IoT", "VLSI", "Power Electronics", "Embedded Systems", "Web Apps"],
  },
  "mini-projects": {
    title: "Mini Projects Accelerator",
    subtitle: "Accelerate your learning through rapid hardware and software builds.",
    tagline: "Short-term targeted prototypes to solidfy foundational technical concepts.",
    icon: Settings,
    color: "from-purple-500 to-indigo-500",
    overview: "Perfect for pre-final year students to master hands-on engineering before taking up complex tasks. We provide guided design and modular source codes for a variety of domains like sensor integration, logic development, and responsive frontends.",
    features: [
      "Guided circuit design tutorials",
      "100% working source code guarantees",
      "Component kit check & debug tips",
      "Compact documentation templates",
      "One-on-one virtual debugging sessions",
      "Practical deployment checklists"
    ],
    timeline: [
      { phase: "Week 1: Concept & Setup", desc: "Choosing a topic and setting up development tools and compilers." },
      { phase: "Week 2: Component Mockups", desc: "Designing mock interfaces or breadboard testing circuit nodes." },
      { phase: "Week 3: Final Deployment", desc: "Integrating parts, code execution, and finalizing short-doc reports." }
    ],
    techStack: ["Arduino", "ESP32", "Python", "Web Hooks", "SQL Lite"],
  },
  "internships": {
    title: "Industrial Internships Hub",
    subtitle: "Bridge the gap between campus lectures and corporate systems.",
    tagline: "Work on live corporate workloads under the guidance of tech experts.",
    icon: Award,
    color: "from-teal-500 to-emerald-500",
    overview: "Get official corporate internship certifications from JK SemiTech. Our interns work directly on active industry projects, join team standups, build portfolios, and receive specialized recommendations and placement support.",
    features: [
      "Authorized Internship Certification",
      "Hands-on mentoring from senior tech leads",
      "Live sandbox coding environments",
      "Weekly performance review meetings",
      "Resume enhancement & mock interview bootcamps",
      "Job recommendation letter for high performers"
    ],
    timeline: [
      { phase: "Month 1: Fundamentals Boot camp", desc: "Intensive training on company codebase standards and tooling setups." },
      { phase: "Month 2: Core Task Assignment", desc: "Owning specialized modules of a live client project sandboxed environment." },
      { phase: "Month 3: Capstone & Portfolio", desc: "Completing assigned sprints, final reviews, and portfolio showcase." }
    ],
    techStack: ["Git", "Full Stack", "Embedded C", "Docker", "Agile Sprints"],
  },
  "trainings": {
    title: "Rigorous Tech Trainings",
    subtitle: "Structured masterclasses built and taught by active developers.",
    tagline: "Move from zero foundation to job-ready engineering proficiency.",
    icon: BookOpen,
    color: "from-rose-500 to-orange-500",
    overview: "Move beyond passive video tutorials. Our technical training programs feature live interactive coding classrooms, practical problem-solving homework, collaborative team assignments, and rigorous code reviews.",
    features: [
      "Live interactive video workshops",
      "Daily coding challenges & tests",
      "Access to exclusive corporate library",
      "Industry standardized curriculum",
      "Direct discord community support with mentors",
      "Internship pathways for graduates"
    ],
    timeline: [
      { phase: "Part 1: Tech Fundamentals", desc: "Drilling core algorithms, math logic, syntax protocols, and data modeling." },
      { phase: "Part 2: Advanced Design", desc: "Architectural design patterns, concurrency controls, and safety parameters." },
      { phase: "Part 3: Practical Deployment", desc: "Production setup, CI/CD integrations, hosting protocols, and monitoring." }
    ],
    techStack: ["AI Models", "VLSI Design", "Embedded RTOS", "Advanced JS"],
  },
  "workshops": {
    title: "Emerging Tech Workshops",
    subtitle: "Fast-paced immersion into next-generation technology breakthroughs.",
    tagline: "Rapid tech masterclasses held during weekends to level up your engineering skills.",
    icon: Users,
    color: "from-amber-500 to-yellow-500",
    overview: "Intensive weekend workshops exploring trending technologies like AI prompt engineering, VLSI verification systems, hydroponics setup, solar integration, and IoT network protocols. Perfect for students and professionals alike.",
    features: [
      "Intense 2-day specialized bootcamp layout",
      "Hands-on interactive lab exercises",
      "Take-home hardware/software templates",
      "Authorized digital participation badge",
      "Q&A session with active corporate speakers",
      "Networking slots with peers and specialists"
    ],
    timeline: [
      { phase: "Day 1: Fundamentals & Labs", desc: "Theoretical deep dives, workspace configurations, and basic code implementation." },
      { phase: "Day 2: Advanced Challenges", desc: "Collaborative builds, mini hackathons, expert assessments, and certifications." }
    ],
    techStack: ["ChatGPT API", "Verilog", "MQTT IoT", "Framer Motion"],
  },
  "hackathons": {
    title: "Innovation Hackathons",
    subtitle: "Ideate, build, and pitch disruptive tech solutions in 48 hours.",
    tagline: "Push your engineering limits, win cash awards, and launch startup dreams.",
    icon: Trophy,
    color: "from-fuchsia-500 to-pink-500",
    overview: "JK SemiTech organizes and partners with universities to run high-stakes hardware-software hackathons. Challenge your creativity, design solutions for corporate use cases, and pitch directly to incubation funds.",
    features: [
      "High-energy interactive 24-48h sprints",
      "Exciting cash pools & award categories",
      "Mentorship checkpoints during building",
      "Pre-event bootcamp sessions",
      "Live presentation demos to tech investors",
      "Startup incubation mentorship channels"
    ],
    timeline: [
      { phase: "Hour 0-12: Ideation & Setup", desc: "Forming teams, brainstorming problem statements, and sketching schemas." },
      { phase: "Hour 12-36: The Build Sprint", desc: "Continuous software coding, hardware soldering, and testing loops." },
      { phase: "Hour 36-48: Pitches & Awards", desc: "Preparing product decks, showing live tech demos, and final judging." }
    ],
    techStack: ["Fast Prototypes", "IoT Sensors", "Cloud Telemetry", "Pitch Decks"],
  },
  "capstone-projects": {
    title: "Premium Capstone Projects",
    subtitle: "Complex, industrial-scale multi-disciplinary masterpieces.",
    tagline: "High-end capstone designs engineered to solve real institutional challenges.",
    icon: Settings,
    color: "from-indigo-500 to-cyan-500",
    overview: "Get comprehensive assistance for complex capstone courses. We guide you through complex mathematical derivations, MATLAB simulations, heavy hardware fabrications, PLC modeling, and advanced sensor integrations with full reliability.",
    features: [
      "Multi-disciplinary engineering support",
      "MATLAB, ANSYS & PLC modeling",
      "Heavy load testing & hardware designs",
      "Premium patent-level documentation support",
      "Plagiarism free technical reports",
      "Dedicated support for research journal submissions"
    ],
    timeline: [
      { phase: "Phase 1: Research Audit", desc: "Reviewing existing patent papers and finalizing advanced concepts." },
      { phase: "Phase 2: Math & Simulation", desc: "Formulating system algorithms and verifying in simulated tools." },
      { phase: "Phase 3: Hardware Forge", desc: "Robust PCB designs, heavy industrial-grade circuit fabrication." },
      { phase: "Phase 4: Publication Setup", desc: "Writing research papers for internationally indexing scientific journals." }
    ],
    techStack: ["MATLAB", "PLC SCADA", "ANSYS", "Python ML", "Altium PCB"],
  },
  "industry-ready-courses": {
    title: "Industry-Ready Masterclasses",
    subtitle: "Guaranteed skill building aligned directly with actual corporate recruitment standards.",
    tagline: "Complete bootcamps designed exclusively to secure job offers.",
    icon: Compass,
    color: "from-emerald-500 to-teal-500",
    overview: "Skip generic educational courses. Our curriculum is tailored directly to the specific job descriptions of tech giants like Intel, Qualcomm, Bosch, and top full-stack companies. Includes live mockup interviews.",
    features: [
      "Job-specific tailored study curriculum",
      "Weekly mock technical board interviews",
      "Direct referral pool with partner companies",
      "Complete GitHub portfolio polishing support",
      "LinkedIn branding & career development tips",
      "1-on-1 career path guidance sessions"
    ],
    timeline: [
      { phase: "Sprint 1: Technical Core", desc: "Deep diving into advanced topics like VLSI, system architecture, or full-stack." },
      { phase: "Sprint 2: Corporate Sandbox", desc: "Building large-scale applications with clean architecture and testing modules." },
      { phase: "Sprint 3: Placement Prep", desc: "Solving real technical interview questions and doing mock tests." }
    ],
    techStack: ["VLSI Verilog", "Next.js", "FastAPI", "Data Structures", "System Design"],
  },
  "hydroponics": {
    title: "Eco-Smart Hydroponics Systems",
    subtitle: "Pioneering sustainable urban farming through clean internet-connected solutions.",
    tagline: "Deep research and fabrication support for smart, automated urban agriculture.",
    icon: Leaf,
    color: "from-green-500 to-emerald-500",
    overview: "Learn how to build next-generation urban food production networks. Our program integrates advanced automated chemistry monitoring, smart IoT agricultural sensors, nutrient-delivery controls, and vertical framing models.",
    features: [
      "pH / EC automated telemetry designs",
      "Smart IoT water level & flow monitoring",
      "Clean nutrient recipe calculations",
      "Vertical hydroponics structure setup support",
      "Energy-efficient smart lighting systems",
      "Fully responsive remote monitoring dashboard panels"
    ],
    timeline: [
      { phase: "Part 1: Chemistry & Plumbing", desc: "Understanding plant nutrients, pipe flows, and water chemistry parameters." },
      { phase: "Part 2: Automation Setup", desc: "Connecting pH, EC, temperature, and light sensors to ESP32 microcontrollers." },
      { phase: "Part 3: Full Automation", desc: "Coding remote telemetry dashboards and smart automation relays." }
    ],
    techStack: ["ESP32 IoT", "Blynk Cloud", "Water Chemistry", "pH Sensors", "LED Spec"],
  }
};

export default function ServicePage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;

  const isSolar = slug === "solar-panel-installation";
  const details = serviceDetailsMap[slug];

  // Primary Contact details
  const companyEmail = "jkelectrocorps@gmail.com";
  const whatsappNumber = "917092639169";

  // Solar Enquiry Form States
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [siteType, setSiteType] = useState("Home/Residential");
  const [kwNeeded, setKwNeeded] = useState("1kW - 3kW");
  const [panelsCount, setPanelsCount] = useState(8);
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Auto-calculated fields for Solar Estimator
  const estimatedArea = panelsCount * 20; // 20 sq ft per panel
  const dailyGeneration = (panelsCount * 330 * 4) / 1000; // 330W panels, 4 hours avg sun

  const handleKwChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setKwNeeded(val);
    if (val === "1kW - 3kW") setPanelsCount(6);
    else if (val === "3kW - 5kW") setPanelsCount(12);
    else if (val === "5kW - 10kW") setPanelsCount(24);
    else setPanelsCount(40);
  };

  const handleSolarSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      alert("Please fill in your Name and Phone number.");
      return;
    }
    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessModal(true);
    }, 1200);
  };

  // Generate Redirection strings
  const getWhatsAppRedirectionUrl = () => {
    const text = `*New Solar Installation Enquiry*%0A------------------------------%0A*Name*: ${name}%0A*Phone*: ${phone}%0A*Email*: ${email}%0A*Site Type*: ${siteType}%0A*Required Capacity*: ${kwNeeded}%0A*Estimated Panels*: ${panelsCount} panels (${dailyGeneration.toFixed(1)} kWh/day)%0A*Installation Address*: ${address}%0A*Message*: ${message}`;
    return `https://wa.me/${whatsappNumber}?text=${text}`;
  };

  const getEmailRedirectionUrl = () => {
    const subject = `Solar Installation Enquiry - ${name}`;
    const body = `Solar Panel Installation Details:\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nSite Type: ${siteType}\nRequired Capacity: ${kwNeeded}\nEstimated Panels: ${panelsCount} panels\nEstimated Area: ${estimatedArea} sq ft\nDaily Generation Estimate: ${dailyGeneration.toFixed(1)} kWh/day\n\nInstallation Address: ${address}\n\nUser Message:\n${message}\n\nSent from JK SemiTech Solar Portal.`;
    return `mailto:${companyEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  if (!isSolar && !details) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center bg-[#05050f] text-white p-6">
        <ShieldAlert className="w-16 h-16 text-rose-500 mb-4 animate-bounce" />
        <h1 className="text-3xl font-extrabold mb-2">Service Not Found</h1>
        <p className="text-slate-400 mb-6">The requested service link does not exist.</p>
        <Link href="/#services" className="px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-xl font-bold flex items-center gap-2">
          <ArrowLeft className="w-5 h-5" /> Back to Services
        </Link>
      </div>
    );
  }

  // --- SOLAR PANEL INSTALLATION PAGE ---
  if (isSolar) {
    return (
      <div className="min-h-screen bg-[#05050f] text-white pb-24 relative overflow-hidden">
        {/* Dynamic Glowing Spotlights */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-yellow-500/10 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full bg-primary/10 blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 pt-12 relative z-10 space-y-12">
          {/* Breadcrumb / Back button */}
          <Link href="/#services" className="inline-flex items-center gap-2 text-slate-400 hover:text-primary transition-colors font-medium">
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </Link>

          {/* Page Title */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-500/20 bg-yellow-500/5 text-yellow-400 text-xs font-semibold uppercase tracking-wider">
              <Sun className="w-3.5 h-3.5 animate-pulse" />
              Green Energy Infrastructure
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-none">
              Solar Panel <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-primary bg-clip-text text-transparent">Installation &amp; Engineering</span>
            </h1>
            <p className="text-slate-300 text-lg sm:text-xl max-w-4xl font-light">
              High-efficiency residential, industrial, and smart agricultural solar networks engineered for extreme durability, maximum yield, and grid independence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-6 items-start">
            
            {/* Left Column: Features & Estimator */}
            <div className="lg:col-span-7 space-y-12">
              
              {/* Core Description Card */}
              <div className="glass-card rounded-3xl p-8 border border-white/10 space-y-6">
                <h3 className="text-2xl font-bold text-white">Advanced Solar Solutions</h3>
                <p className="text-slate-300 leading-relaxed font-light">
                  JK SemiTech provides design, engineering, component procurement, and professional integration of high-performance Solar Energy Systems. We build systems optimized with smart IoT sensors to monitor performance telemetry in real-time.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "On-Grid (Net Metering) systems",
                    "Off-Grid systems with high storage capacity",
                    "Hybrid systems combining the best of both",
                    "Advanced MPPT solar charger configurations",
                    "Smart mobile app system dashboard",
                    "Full mounting framework engineering"
                  ].map((feat) => (
                    <div key={feat} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-yellow-400 shrink-0" />
                      <span className="text-slate-300 text-sm font-light">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive Estimator UI */}
              <div className="glass-card rounded-3xl p-8 border border-white/10 space-y-8 bg-gradient-to-br from-yellow-500/[0.02] to-transparent relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-500/5 rounded-full blur-xl pointer-events-none" />
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-yellow-400" />
                    Quick Solar Estimator
                  </h3>
                  <p className="text-slate-400 text-sm">
                    Move sliders or pick options to estimate solar footprint requirements instantly.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Select Capacity */}
                  <div className="space-y-2">
                    <label className="text-white text-sm font-semibold block">Target System Capacity</label>
                    <select
                      value={kwNeeded}
                      onChange={handleKwChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-yellow-400 focus:outline-none transition-colors text-slate-200 text-sm"
                    >
                      <option className="bg-[#05050f]" value="1kW - 3kW">1kW - 3kW (Small Residential)</option>
                      <option className="bg-[#05050f]" value="3kW - 5kW">3kW - 5kW (Medium Home)</option>
                      <option className="bg-[#05050f]" value="5kW - 10kW">5kW - 10kW (Large Home / Business)</option>
                      <option className="bg-[#05050f]" value="10kW+">10kW+ (Heavy Commercial / Industry)</option>
                    </select>
                  </div>

                  {/* Panel Count Manual Adjust */}
                  <div className="space-y-2">
                    <label className="text-white text-sm font-semibold block flex justify-between">
                      <span>Adjust Panel Count</span>
                      <span className="text-yellow-400">{panelsCount} Panels</span>
                    </label>
                    <input
                      type="range"
                      min={4}
                      max={80}
                      value={panelsCount}
                      onChange={(e) => setPanelsCount(Number(e.target.value))}
                      className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-yellow-400"
                    />
                  </div>
                </div>

                {/* Estimate Dashboard Grid */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/5">
                  <div className="text-center p-3 rounded-2xl bg-white/5 border border-white/5">
                    <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">Estimated Area</div>
                    <div className="text-lg sm:text-xl font-bold text-white">{estimatedArea} sq ft</div>
                  </div>
                  <div className="text-center p-3 rounded-2xl bg-white/5 border border-white/5">
                    <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">Generation/Day</div>
                    <div className="text-lg sm:text-xl font-bold text-yellow-400">~{dailyGeneration.toFixed(1)} kWh</div>
                  </div>
                  <div className="text-center p-3 rounded-2xl bg-white/5 border border-white/5">
                    <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">Standard Output</div>
                    <div className="text-lg sm:text-xl font-bold text-white">{(panelsCount * 330 / 1000).toFixed(1)} kWp</div>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Column: Dynamic Inquiry Form */}
            <div className="lg:col-span-5 relative">
              <div className="sticky top-28 glass-card rounded-3xl p-8 border border-white/10 bg-gradient-to-b from-white/[0.02] to-transparent shadow-2xl space-y-6">
                <div className="border-b border-white/5 pb-4">
                  <h3 className="text-2xl font-bold text-white">Solar Installation Inquiry</h3>
                  <p className="text-slate-400 text-xs mt-1">Get custom corporate plans and engineering quotes.</p>
                </div>

                <form onSubmit={handleSolarSubmit} className="space-y-4">
                  
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label className="text-slate-300 text-xs font-semibold uppercase tracking-wider">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-yellow-400 focus:outline-none transition-colors text-slate-200 text-sm"
                    />
                  </div>

                  {/* Phone field */}
                  <div className="space-y-1.5">
                    <label className="text-slate-300 text-xs font-semibold uppercase tracking-wider">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 9876543210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-yellow-400 focus:outline-none transition-colors text-slate-200 text-sm"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label className="text-slate-300 text-xs font-semibold uppercase tracking-wider">Email Address</label>
                    <input
                      type="email"
                      placeholder="e.g. rahul@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-yellow-400 focus:outline-none transition-colors text-slate-200 text-sm"
                    />
                  </div>

                  {/* Installation Site Selection */}
                  <div className="space-y-1.5">
                    <label className="text-slate-300 text-xs font-semibold uppercase tracking-wider block">Installation Place *</label>
                    <div className="grid grid-cols-3 gap-2">
                      {["Residential Home", "Commercial Industry", "Agricultural Land"].map((opt) => (
                        <label
                          key={opt}
                          className={`px-3 py-2.5 rounded-xl border text-center text-xs font-semibold cursor-pointer transition-all flex items-center justify-center leading-tight ${
                            siteType === opt
                              ? "bg-yellow-400/20 border-yellow-400 text-yellow-400 shadow-md shadow-yellow-500/10"
                              : "bg-white/5 border-white/10 text-slate-400 hover:border-white/20"
                          }`}
                        >
                          <input
                            type="radio"
                            name="siteType"
                            value={opt}
                            checked={siteType === opt}
                            onChange={() => setSiteType(opt)}
                            className="sr-only"
                          />
                          {opt.split(" ")[0]}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Address */}
                  <div className="space-y-1.5">
                    <label className="text-slate-300 text-xs font-semibold uppercase tracking-wider">Installation Address</label>
                    <textarea
                      rows={2}
                      placeholder="Street name, City, State, PIN code"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-yellow-400 focus:outline-none transition-colors text-slate-200 text-sm resize-none"
                    />
                  </div>

                  {/* Additional Questions */}
                  <div className="space-y-1.5">
                    <label className="text-slate-300 text-xs font-semibold uppercase tracking-wider">Any Questions / Specifications?</label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Any roofing material type, subsidy queries, structural designs..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-yellow-400 focus:outline-none transition-colors text-slate-200 text-sm resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-extrabold hover:opacity-90 shadow-xl shadow-yellow-500/10 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer mt-4"
                  >
                    {isSubmitting ? (
                      <span className="w-5 h-5 rounded-full border-2 border-black border-t-transparent animate-spin" />
                    ) : (
                      <>
                        Submit &amp; Generate Details
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                </form>
              </div>
            </div>

          </div>
        </div>

        {/* Dynamic glass success modal */}
        <AnimatePresence>
          {showSuccessModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6 backdrop-blur-md"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="w-full max-w-xl relative rounded-3xl glass-card border border-white/10 p-8 sm:p-12 overflow-hidden shadow-2xl flex flex-col justify-between"
              >
                <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-yellow-400 to-primary" />
                <div className="space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-yellow-400/20 border border-yellow-400/40 flex items-center justify-center shadow-lg shadow-yellow-500/10">
                    <CheckCircle className="w-8 h-8 text-yellow-400 animate-pulse" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Enquiry Drafted Successfully!</h3>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      We have compiled all of your installation details into a highly-formatted specification. Pick your preferred channel below to send it directly to the **JK SemiTech Engineering Team**:
                    </p>
                  </div>
                  
                  {/* Option Buttons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    <a
                      href={getWhatsAppRedirectionUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 px-5 rounded-2xl bg-green-500 text-white font-extrabold text-center hover:opacity-90 shadow-xl shadow-green-500/10 flex items-center justify-center gap-2.5 transition-all active:scale-[0.98]"
                    >
                      <WhatsAppIcon className="w-5 h-5" />
                      Send via WhatsApp
                    </a>
                    <a
                      href={getEmailRedirectionUrl()}
                      className="py-3 px-5 rounded-2xl bg-gradient-to-r from-primary to-secondary text-white font-extrabold text-center hover:opacity-90 shadow-xl shadow-primary/10 flex items-center justify-center gap-2.5 transition-all active:scale-[0.98]"
                    >
                      <Mail className="w-5 h-5" />
                      Send via Email
                    </a>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5 mt-8 flex justify-end">
                  <button
                    onClick={() => {
                      setShowSuccessModal(false);
                      setName("");
                      setPhone("");
                      setEmail("");
                      setAddress("");
                      setMessage("");
                    }}
                    className="px-6 py-2.5 rounded-xl glass border border-white/10 hover:bg-white/5 text-slate-300 text-sm font-semibold transition-all cursor-pointer"
                  >
                    Close Form
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    );
  }

  // --- ALL OTHER 9 DYNAMIC SERVICE PAGES ---
  const Icon = details.icon;
  return (
    <div className="min-h-screen bg-[#05050f] text-white pb-24 relative overflow-hidden">
      {/* Background spotlights */}
      <div className={`absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r ${details.color} opacity-10 blur-[130px] pointer-events-none`} />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full bg-[#7b2cbf]/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-12 relative z-10 space-y-12">
        {/* Navigation / Back Button */}
        <Link href="/#services" className="inline-flex items-center gap-2 text-slate-400 hover:text-primary transition-colors font-medium">
          <ArrowLeft className="w-4 h-4" /> Back to Services
        </Link>

        {/* Section Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            Specialized Engineering Program
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-none flex items-center gap-4">
            <span className={`bg-gradient-to-r ${details.color} bg-clip-text text-transparent`}>
              {details.title}
            </span>
          </h1>
          <p className="text-slate-300 text-lg sm:text-xl max-w-4xl font-light">
            {details.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-6 items-stretch">
          {/* Left Side: Overview & Core Highlights */}
          <div className="lg:col-span-7 space-y-12 flex flex-col justify-between">
            <div className="space-y-8">
              
              {/* Detailed Overview */}
              <div className="glass-card rounded-3xl p-8 border border-white/10 space-y-6">
                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                  <Icon className="w-7 h-7 text-primary" />
                  Overview
                </h3>
                <p className="text-slate-300 leading-relaxed font-light text-base">
                  {details.overview}
                </p>
                <blockquote className="border-l-2 border-primary/40 pl-4 py-1 text-slate-400 italic text-sm">
                  &ldquo;{details.tagline}&rdquo;
                </blockquote>
              </div>

              {/* Core Features / Deliverables Grid */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">What You Will Master / Receive</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {details.features.map((feat: string) => (
                    <div key={feat} className="flex items-center gap-3 glass-card border border-white/5 rounded-2xl p-4">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-slate-300 text-sm font-light leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Right Side: Structured Timeline Phases */}
          <div className="lg:col-span-5 flex items-stretch">
            <div className="w-full glass-card rounded-3xl p-8 border border-white/10 bg-gradient-to-b from-white/[0.02] to-transparent shadow-2xl flex flex-col justify-between">
              <div className="space-y-6">
                <div className="border-b border-white/5 pb-4">
                  <h3 className="text-2xl font-bold text-white">Execution Phases</h3>
                  <p className="text-slate-400 text-xs mt-1">Our structured roadmap from concept initialization to delivery.</p>
                </div>

                {/* Timeline roadmap layout */}
                <div className="relative pl-6 border-l border-white/10 space-y-6">
                  {details.timeline.map((step: any, index: number) => (
                    <div key={step.phase} className="relative">
                      {/* Timeline dot */}
                      <div className="absolute -left-[30px] top-1.5 w-4 h-4 rounded-full bg-[#05050f] border-2 border-primary flex items-center justify-center shadow-lg" />
                      <div className="space-y-1">
                        <h4 className="text-primary font-bold text-sm uppercase tracking-wider">{step.phase}</h4>
                        <p className="text-slate-300 font-light text-sm">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dynamic registration action CTA card */}
              <div className="pt-8 mt-8 border-t border-white/5 space-y-4">
                <div className="flex flex-wrap gap-2">
                  {details.techStack.map((tech: string) => (
                    <span key={tech} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-slate-400 text-xs font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href="https://forms.gle/Hd7pTycBkQisug1cA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-primary to-secondary text-white font-extrabold text-center hover:opacity-90 shadow-xl shadow-primary/20 flex items-center justify-center gap-2.5 group transition-all cursor-pointer active:scale-[0.98]"
                >
                  Register in this Program
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
