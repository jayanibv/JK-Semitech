"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [logoError, setLogoError] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Domains", href: "#domains" },
    { name: "Contact", href: "#contact" },
  ];

  const googleFormLink = "https://forms.gle/Hd7pTycBkQisug1cA";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
          ? "bg-[#05050f]/80 backdrop-blur-md border-b border-white/10 shadow-lg py-4"
          : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-2 group"
        >
          {logoError ? (
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform duration-300">
              <span className="font-bold text-white text-xl">JK</span>
            </div>
          ) : (
            <img
              src="/logo.jpeg"
              alt="JK SemiTech Logo"
              className="w-10 h-10 object-contain group-hover:scale-105 transition-transform duration-300"
              onError={() => setLogoError(true)}
            />
          )}
          <span className="font-bold text-xl tracking-wider bg-gradient-to-r from-white via-slate-200 to-primary bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
            SemiTech
          </span>
        </motion.a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-slate-300 hover:text-primary transition-colors duration-200 font-medium text-sm relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </div>

        {/* Desktop CTA */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:block"
        >
          <a
            href={googleFormLink}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-semibold rounded-xl group bg-gradient-to-br from-primary to-secondary text-white hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-800"
          >
            <span className="relative px-6 py-2.5 transition-all ease-in duration-75 bg-[#05050f] rounded-[10px] group-hover:bg-transparent group-hover:bg-opacity-0 flex items-center gap-1">
              Register
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
            {/* Pulsing ring */}
            <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary to-secondary animate-ping -z-10 opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
          </a>
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-primary focus:outline-none transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#05050f]/95 backdrop-blur-lg border-b border-white/10"
          >
            <div className="px-6 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-slate-300 hover:text-primary text-base font-medium py-2 transition-colors border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={googleFormLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full text-center bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-xl font-semibold shadow-lg shadow-primary/20 hover:opacity-90 transition-all flex items-center justify-center gap-2"
              >
                Register Now
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
