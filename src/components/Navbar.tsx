"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";

const NAV_ROUTES = ["Home", "About", "Services", "Skills", "Team", "Contact"];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Futuristic Background Grid
  const FuturisticBackground = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Horizontal Lines */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`h-line-${i}`}
            className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
            style={{
              top: `${10 + i * 10}%`,
              left: 0,
            }}
            animate={{
              x: ["-100%", "100%"],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              repeatType: "mirror",
              delay: i * 0.2,
            }}
          />
        ))}

        {/* Vertical Lines */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`v-line-${i}`}
            className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-purple-500/20 to-transparent"
            style={{
              left: `${10 + i * 10}%`,
              top: 0,
            }}
            animate={{
              y: ["-100%", "100%"],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              repeatType: "mirror",
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#0a192f] px-8 py-4 overflow-hidden">
      {/* Futuristic Background */}
      <FuturisticBackground />

      <div className="relative z-10 max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo with Futuristic Hover Effect */}
        <motion.div
          className="text-2xl font-bold text-cyan-300"
          whileHover={{
            scale: 1.05,
            textShadow: "0 0 10px rgba(103, 232, 249, 0.5)",
          }}
          transition={{ duration: 0.3 }}
        >
          Portfolio
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {NAV_ROUTES.map((route) => (
            <motion.a
              key={route}
              href={`#${route.toLowerCase()}`}
              className="text-gray-300 hover:text-cyan-300 transition-colors duration-300 group flex items-center"
              whileHover={{
                scale: 1.05,
                textShadow: "0 0 8px rgba(103, 232, 249, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              {route}
              <ArrowRight
                className="ml-1 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300 text-cyan-300"
                size={16}
              />
            </motion.a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-cyan-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 right-0 bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#0a192f] shadow-lg"
        >
          <nav className="flex flex-col items-center space-y-4 py-6">
            {NAV_ROUTES.map((route) => (
              <motion.a
                key={route}
                href={`#${route.toLowerCase()}`}
                className="text-gray-300 hover:text-cyan-300 transition-colors duration-300 group flex items-center"
                whileHover={{
                  scale: 1.05,
                  textShadow: "0 0 8px rgba(103, 232, 249, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(false)}
              >
                {route}
                <ArrowRight
                  className="ml-1 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300 text-cyan-300"
                  size={16}
                />
              </motion.a>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
