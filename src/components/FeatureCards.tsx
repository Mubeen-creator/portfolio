"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa6";
import { MdTabletAndroid } from "react-icons/md";
import { SiVorondesign } from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";

const FeatureCards = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Subtle Background Effect
  const SubtleBackground = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        {/* Soft Grid Lines */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`h-line-${i}`}
            className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-blue-200/30 to-transparent"
            style={{
              top: `${10 + i * 10}%`,
              left: 0,
            }}
            animate={{
              x: ["-100%", "100%"],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              repeatType: "mirror",
              delay: i * 0.2,
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
      description: "Crafting responsive and dynamic web experiences.",
      icon: FaCode,
      color: "cyan",
      borderColor: "cyan-500",
    },
    {
      title: "App Development",
      description: "Creating sleek and functional mobile applications.",
      icon: MdTabletAndroid,
      color: "red",
      borderColor: "red-500",
    },
    {
      title: "UI/UX Design",
      description: "Designing intuitive and user-friendly interfaces.",
      icon: SiVorondesign,
      color: "yellow",
      borderColor: "yellow-500",
    },
    {
      title: "AI Powered",
      description:
        "AI-powered web and mobile app development with seamless experiences.",
      icon: GiArtificialIntelligence,
      color: "blue",
      borderColor: "blue-500",
    },
  ];

  return (
    <section className="relative bg-white py-16 min-h-screen flex items-center">
      {/* Subtle Background */}
      <SubtleBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-gray-800 mb-6"
        >
          What I Offer
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg text-gray-500 mb-16 max-w-3xl mx-auto"
        >
          Powered by Mubeen
          <br />I specialize in building high-performance applications with
          modern technologies
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
                className={`relative bg-white p-6 rounded-2xl shadow-lg 
                  border-t-4 border-${card.borderColor} 
                  transition-all duration-300 
                  cursor-pointer 
                  ${
                    hoveredCard === index
                      ? `transform scale-105 shadow-[0_0_30px_rgba(${
                          card.color === "cyan"
                            ? "0,255,255"
                            : card.color === "red"
                            ? "255,0,0"
                            : card.color === "yellow"
                            ? "255,255,0"
                            : "0,0,255"
                        },0.3)]`
                      : "hover:shadow-md"
                  }`}
              >
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
                    className={`inline-block px-4 py-2 rounded-full 
                      bg-${card.borderColor}/10 text-${card.borderColor} 
                      border border-${card.borderColor}/30 
                      hover:bg-${card.borderColor}/20 
                      transition-all duration-300`}
                  >
                    Learn More
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
