"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  // Futuristic Background Grid with Motion
  const FuturisticBackground = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Horizontal Lines */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`h-line-${i}`}
            className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"
            style={{
              top: `${5 + i * 5}%`,
              left: 0,
            }}
            animate={{
              x: ["-100%", "100%"],
              opacity: [0.2, 0.5, 0.2],
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
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`v-line-${i}`}
            className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-purple-500/30 to-transparent"
            style={{
              left: `${5 + i * 5}%`,
              top: 0,
            }}
            animate={{
              y: ["-100%", "100%"],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              repeatType: "mirror",
              delay: i * 0.2,
            }}
          />
        ))}

        {/* Floating Particles */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 rounded-full bg-white/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0.5, 1, 0.5],
              opacity: [0.2, 0.7, 0.2],
              x: [-10, 10],
              y: [-10, 10],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              repeatType: "mirror",
              delay: i * 0.1,
            }}
          />
        ))}
      </div>
    );
  };

  // Typing Effect (similar to previous implementation)
  const TypingEffect = ({
    text,
    speed = 100,
    eraseSpeed = 50,
    delay = 1000,
  }) => {
    const [displayedText, setDisplayedText] = React.useState("");
    const [isDeleting, setIsDeleting] = React.useState(false);
    const [index, setIndex] = React.useState(0);

    const halfLength = Math.floor(text.length / 2);

    React.useEffect(() => {
      let typingInterval;

      if (!isDeleting && index < text.length) {
        typingInterval = setTimeout(() => {
          setDisplayedText((prev) => prev + text.charAt(index));
          setIndex((prev) => prev + 1);
        }, speed);
      } else if (isDeleting && index > halfLength) {
        typingInterval = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
          setIndex((prev) => prev - 1);
        }, eraseSpeed);
      } else {
        setTimeout(() => setIsDeleting(!isDeleting), delay);
      }

      return () => clearTimeout(typingInterval);
    }, [text, speed, eraseSpeed, delay, index, isDeleting]);

    return <span>{displayedText}</span>;
  };

  return (
    <section className="relative bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#0a192f] text-white min-h-screen flex items-center overflow-hidden">
      {/* Futuristic Background */}
      <FuturisticBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between w-full">
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl text-gray-400"
          >
            Hello, My Name is
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold text-white"
          >
            Muhammad Mubeen
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl text-cyan-400"
          >
            <TypingEffect text="I am a Full Stack Web App Developer" />
          </motion.h2>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px rgba(103, 232, 249, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="bg-cyan-600/20 border border-cyan-500/50 text-cyan-300 px-6 py-3 rounded-full hover:bg-cyan-600/30 transition-colors duration-300 flex items-center justify-center md:justify-start group"
          >
            Let's Talk Now
            <ArrowRight
              className="ml-2 group-hover:translate-x-1 transition-transform text-cyan-300"
              size={20}
            />
          </motion.button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative rounded-full overflow-hidden w-60 h-60 md:w-80 md:h-80 border-4 border-cyan-500/50 shadow-2xl"
          >
            <img
              src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
              alt="Mubeen"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
