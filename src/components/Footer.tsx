"use client";

import React, { useEffect, useState } from "react";
import {
  ArrowUp,
  Github,
  Linkedin,
  Twitter,
  Code,
  Home,
  Layers,
  Zap,
  Contact,
  TerminalSquare,
} from "lucide-react";

interface NavItem {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
}

interface SocialLink {
  href: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  color: string;
}

const FuturisticFooter: React.FC = () => {
  const [showScroll, setShowScroll] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScroll(window.scrollY > 200);
    };

    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navItems: NavItem[] = [
    { href: "/", label: "Home", icon: Home },
    { href: "/projects", label: "Projects", icon: Layers },
    { href: "/skills", label: "Skills", icon: TerminalSquare },
    { href: "/contact", label: "Contact", icon: Contact },
  ];

  const socialLinks: SocialLink[] = [
    {
      href: "#",
      icon: Github,
      color: "text-gray-100 hover:text-white hover:animate-pulse",
    },
    {
      href: "#",
      icon: Linkedin,
      color: "text-blue-400 hover:text-blue-200 hover:animate-pulse",
    },
    {
      href: "#",
      icon: Twitter,
      color: "text-cyan-400 hover:text-cyan-200 hover:animate-pulse",
    },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-12 px-6 md:px-20 border-t border-gray-800 shadow-2xl overflow-hidden">
      {/* Futuristic Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-30 blur-3xl"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-center relative z-10">
        {/* Brand Section */}
        <div className="text-center md:text-left space-y-4">
          <div className="flex items-center justify-center md:justify-start space-x-3">
            <Code className="text-cyan-400 animate-bounce" size={32} />
            <h2 className="text-3xl font-bold text-cyan-400 tracking-wider hover:text-cyan-300 transition-colors">
              Mubeen
            </h2>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed flex items-center justify-center md:justify-start">
            <Zap className="mr-2 text-yellow-400 animate-spin" size={18} />
            Innovating the Digital Frontier with Code
          </p>
        </div>

        {/* Navigation Section */}
        <nav className="flex flex-col items-center space-y-3">
          <div className="flex space-x-6">
            {navItems.map(({ href, label, icon: Icon }) => (
              <a
                key={href}
                href={href}
                className="group relative text-gray-300 hover:text-cyan-400 transition flex items-center space-x-2 transform hover:scale-105"
              >
                <Icon
                  className="group-hover:text-cyan-400 transition-colors"
                  size={18}
                />
                <span className="text-sm tracking-wider">{label}</span>
              </a>
            ))}
          </div>
        </nav>

        {/* Social Section */}
        <div className="flex space-x-6 justify-center md:justify-end">
          {socialLinks.map(({ href, icon: Icon, color }) => (
            <a
              key={href}
              href={href}
              className={`${color} transition transform hover:scale-125`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon size={24} />
            </a>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <p className="text-center text-gray-500 text-xs mt-8 tracking-wider">
        © 2024 Mubeen | Digital Innovator. Pioneering Tomorrow's Tech.
      </p>

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          className={`fixed bottom-8 right-8 bg-cyan-500 hover:bg-cyan-600 text-white p-4 rounded-full shadow-2xl transition transform 
            ${isHovered ? "scale-110 rotate-6" : "scale-100"}
            hover:scale-110 hover:rotate-6 active:scale-95 animate-pulse`}
          onClick={scrollToTop}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <ArrowUp size={28} strokeWidth={2.5} />
        </button>
      )}
    </footer>
  );
};

export default FuturisticFooter;
