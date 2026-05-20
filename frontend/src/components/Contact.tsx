"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowUpRight, CheckCircle2 } from "lucide-react";

// Robust Inline SVG Icons
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function Contact() {
  const googleFormLink = "https://forms.gle/Hd7pTycBkQisug1cA";

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone Support",
      values: [
        { display: "+91 7092639169", link: "https://wa.me/917092639169?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20the%20training%20programs%20and%20projects%20offered%20at%20JK%20SemiTech." },
        { display: "+91 7200837269", link: "https://wa.me/917200837269?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20the%20training%20programs%20and%20projects%20offered%20at%20JK%20SemiTech." },
        { display: "+91 7200837275", link: "https://wa.me/917200837275?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20the%20training%20programs%20and%20projects%20offered%20at%20JK%20SemiTech." }
      ],
      description: "Mon-Fri from 9am to 6pm IST (Click to WhatsApp us)",
    },
    {
      icon: Mail,
      label: "Email Query",
      values: [
        { display: "jkelectrocorps@gmail.com", link: "mailto:jkelectrocorps@gmail.com" },
        { display: "jksemitech@gmail.com", link: "mailto:jksemitech@gmail.com" }
      ],
      description: "Our support team replies within 24 hours",
    },
    {
      icon: MapPin,
      label: "Corporate Office",
      values: [
        { display: "JK SemiTech, No;3B, 2nd Street, Sivanandha Nagar, Senthil Nagar, Kolathur, Chennai - 600099", link: "https://maps.google.com/?q=JK+SemiTech,+Kolathur,+Chennai" }
      ],
      description: "Stop by for a coffee and discuss your final year vision",
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#03030c]">
      {/* Background Neon Spotlights */}
      <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">

          {/* Left: Contact Info Placeholders */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-12">
            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-5xl font-bold tracking-tight"
              >
                Let&apos;s Build <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Something Great</span> Together
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-slate-400 text-lg leading-relaxed"
              >
                Have questions about our project guidance, internships, or technical courses? Reach out directly or jumpstart your application.
              </motion.p>
            </div>

            {/* Info Cards */}
            <div className="space-y-8">
              {contactInfo.map((info, idx) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex gap-5 items-start group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/40 transition-colors shadow-lg shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-white font-bold text-base">{info.label}</h4>
                      <div className="flex flex-col gap-1.5">
                        {info.values.map((val) => (
                          <a
                            key={val.display}
                            href={val.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-300 hover:text-primary transition-colors font-medium text-sm sm:text-base w-fit hover:underline"
                          >
                            {val.display}
                          </a>
                        ))}
                      </div>
                      <p className="text-slate-500 text-xs pt-1">{info.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Social Media Connections */}
            <div className="space-y-4 pt-6 border-t border-white/5">
              <h4 className="text-white/60 font-bold text-xs uppercase tracking-wider">Connect With Us</h4>
              <div className="flex items-center space-x-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61589981457128&sk=about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl glass border border-white/10 flex items-center justify-center hover:border-primary/50 hover:bg-white/5 transition-all text-slate-400 hover:text-primary shadow-lg"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/jksemitech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl glass border border-white/10 flex items-center justify-center hover:border-secondary/50 hover:bg-white/5 transition-all text-slate-400 hover:text-secondary shadow-lg"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Premium CTA Card to Google Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex items-center"
          >
            <div className="w-full relative rounded-3xl glass-card border border-white/10 p-8 sm:p-12 overflow-hidden shadow-2xl flex flex-col justify-between h-full bg-gradient-to-br from-white/[0.03] to-transparent">
              {/* Outer decorative line glow */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary to-secondary" />

              <div className="space-y-8">
                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    Ready to Start?
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    Submit your application details via our secure enrollment form to reserve your seat in the upcoming batch.
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-4">
                  {[
                    "Direct access to industry mentors",
                    "Official course/internship certification",
                    "Hands-on project development setup",
                    "Placement & recruitment support assistance",
                  ].map((feat) => (
                    <div key={feat} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
                      <span className="text-slate-300 text-sm sm:text-base font-light">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Large GForm Action CTA */}
              <div className="pt-8">
                <a
                  href={googleFormLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-primary to-secondary text-white font-extrabold text-center hover:opacity-90 shadow-xl shadow-primary/20 hover:shadow-primary/30 flex items-center justify-center gap-3 group transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  Register Here
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <p className="text-center text-slate-500 text-xs mt-4">
                  *Redirects to official JK SemiTech Registration Form
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
