"use client";

import {
  ArrowUp,
  Github,
  Linkedin,
  Twitter,
  Code,
  Globe,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-12 px-6 md:px-20 border-t border-gray-800 shadow-2xl">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-center">
        {/* Brand Section */}
        <div className="text-center md:text-left space-y-4">
          <div className="flex items-center justify-center md:justify-start space-x-3">
            <Code className="text-cyan-400" size={32} />
            <h2 className="text-3xl font-bold text-cyan-400 tracking-wider">
              Mubeen
            </h2>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed flex items-center justify-center md:justify-start">
            <Zap className="mr-2 text-yellow-400" size={18} />
            Building the Future, One Line of Code at a Time
          </p>
        </div>

        {/* Navigation Section */}
        <nav className="flex flex-col items-center space-y-3">
          <div className="flex space-x-6">
            {[
              { href: "/", label: "Home", icon: Globe },
              { href: "/projects", label: "Projects", icon: Code },
              { href: "/skills", label: "Skills", icon: Zap },
              { href: "/contact", label: "Contact", icon: Globe },
            ].map(({ href, label, icon: Icon }) => (
              <a
                key={href}
                href={href}
                className="group relative text-gray-300 hover:text-cyan-400 transition flex items-center space-x-2"
              >
                <Icon
                  className="group-hover:text-cyan-400 transition"
                  size={18}
                />
                <span className="text-sm tracking-wider">{label}</span>
              </a>
            ))}
          </div>
        </nav>

        {/* Social Section */}
        <div className="flex space-x-6 justify-center md:justify-end">
          {[
            {
              href: "#",
              icon: Github,
              color: "text-white hover:text-gray-300",
            },
            {
              href: "#",
              icon: Linkedin,
              color: "text-blue-500 hover:text-blue-600",
            },
            {
              href: "#",
              icon: Twitter,
              color: "text-cyan-500 hover:text-cyan-600",
            },
          ].map(({ href, icon: Icon, color }) => (
            <a
              key={href}
              href={href}
              className={`${color} transition transform hover:scale-110`}
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
        © 2024 Mubeen | Developer. All Rights Reserved.
      </p>

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          className={`fixed bottom-8 right-8 bg-cyan-500 hover:bg-cyan-600 text-white p-4 rounded-full shadow-2xl transition transform 
            ${isHovered ? "scale-110 rotate-6" : "scale-100"}
            hover:scale-110 hover:rotate-6 active:scale-95`}
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

export default Footer;
