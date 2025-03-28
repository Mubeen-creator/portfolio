"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa6";
import { MdTabletAndroid } from "react-icons/md";
import { SiVorondesign } from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";

const FeatureCards = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Advanced Futuristic Background Effect
  const FuturisticBackground = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        {/* Holographic Grid Lines */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`h-line-${i}`}
            className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
            style={{
              top: `${6 + i * 6}%`,
              left: 0,
            }}
            animate={{
              x: ["-100%", "100%"],
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

        {/* Subtle Particle Effect */}
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 rounded-full bg-blue-500/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0.5, 1, 0.5],
              opacity: [0.1, 0.5, 0.1],
              x: [-10, 10],
              y: [-10, 10],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              repeatType: "mirror",
              delay: i * 0.1,
            }}
          />
        ))}
      </div>
    );
  };

  // Card Data
  const cardData = [
    {
      title: "Web Development",
      description: "Cutting-edge web solutions with next-gen technologies.",
      icon: FaCode,
      color: "cyan",
      borderColor: "cyan-500",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "App Development",
      description:
        "Innovative mobile experiences powered by modern frameworks.",
      icon: MdTabletAndroid,
      color: "red",
      borderColor: "red-500",
      gradient: "from-red-500 to-pink-500",
    },
    {
      title: "UI/UX Design",
      description:
        "Intuitive interfaces that blend aesthetics with functionality.",
      icon: SiVorondesign,
      color: "yellow",
      borderColor: "yellow-500",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      title: "AI Powered",
      description:
        "Intelligent solutions leveraging cutting-edge artificial intelligence.",
      icon: GiArtificialIntelligence,
      color: "blue",
      borderColor: "blue-500",
      gradient: "from-blue-500 to-indigo-500",
    },
  ];

  return (
    <section className="relative bg-white py-16 min-h-screen flex items-center overflow-hidden">
      {/* Futuristic Background */}
      <FuturisticBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600 mb-6"
        >
          Innovative Tech Solutions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg text-gray-500 mb-16 max-w-3xl mx-auto"
        >
          Transforming Ideas into Cutting-Edge Digital Experiences
        </motion.p>

        {/* Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cardData.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group"
            >
              <div
                className={`
                  relative 
                  bg-white 
                  p-6 
                  rounded-3xl 
                  shadow-2xl 
                  border-t-4 
                  border-${card.borderColor}
                  overflow-hidden
                  transition-all 
                  duration-300 
                  cursor-pointer
                  ${
                    hoveredCard === index
                      ? `transform scale-105 shadow-[0_0_40px_rgba(${
                          card.color === "cyan"
                            ? "0,255,255"
                            : card.color === "red"
                            ? "255,0,0"
                            : card.color === "yellow"
                            ? "255,255,0"
                            : "0,0,255"
                        },0.4)]`
                      : "hover:shadow-xl"
                  }`}
              >
                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${card.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                />

                <div className="relative z-10 text-center">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-center mb-4"
                  >
                    <card.icon
                      className={`w-16 h-16 text-${card.borderColor} 
                        transform transition-all duration-300 
                        group-hover:scale-110 group-hover:rotate-12`}
                    />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 min-h-[72px]">
                    {card.description}
                  </p>

                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`
                      inline-block 
                      px-4 
                      py-2 
                      rounded-full 
                      bg-${card.borderColor}/10 
                      text-${card.borderColor} 
                      border 
                      border-${card.borderColor}/30 
                      hover:bg-${card.borderColor}/20 
                      transition-all 
                      duration-300 
                      relative 
                      overflow-hidden
                      group/button
                    `}
                  >
                    {/* Hover Gradient Effect */}
                    <div
                      className={`
                        absolute 
                        inset-0 
                        bg-gradient-to-r 
                        ${card.gradient} 
                        opacity-0 
                        group-hover/button:opacity-20 
                        transition-opacity 
                        duration-300 
                        z-0
                      `}
                    />
                    <span className="relative z-10">Learn More</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
