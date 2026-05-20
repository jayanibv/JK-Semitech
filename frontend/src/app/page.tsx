import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Domains from "@/components/Domains";
import Contact from "@/components/Contact";

// Robust Inline Social SVG Icons
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

export default function Home() {
  const instaLink = "https://www.instagram.com/jksemitech/";
  const fbLink = "https://www.facebook.com/profile.php?id=61589981457128&sk=about";

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <Services />

      {/* Domains Section */}
      <Domains />

      {/* Contact & Registration Section */}
      <Contact />

      {/* Futuristic Sleek Footer */}
      <footer className="py-12 border-t border-white/5 bg-[#03030c] relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Left: Logo & Details */}
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20">
              <span className="font-bold text-white text-base">JK</span>
            </div>
            <span className="font-bold text-lg tracking-wider text-white">
              JK SemiTech
            </span>
          </div>

          {/* Center: Copyright */}
          <p className="text-slate-500 text-sm text-center order-3 md:order-2">
            &copy; {new Date().getFullYear()} JK SemiTech. All rights reserved. Empowering technology &amp; sustainable development.
          </p>

          {/* Right: Social Media Handles */}
          <div className="flex items-center space-x-4 order-2 md:order-3">
            <a
              href={fbLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center hover:border-primary/50 hover:bg-white/5 transition-all text-slate-400 hover:text-primary"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </a>
            <a
              href={instaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center hover:border-secondary/50 hover:bg-white/5 transition-all text-slate-400 hover:text-secondary"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
          </div>

        </div>
      </footer>
    </div>
  );
}
