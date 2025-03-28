"use client";

import React, { useState } from "react";
import { Briefcase, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const MyJourney = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  // Futuristic Background Effect
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

  const journey = [
    {
      year: "2024 - Present",
      title: "Software Developer",
      company: "Techloset",
      description:
        "Building scalable web applications with FastAPI, Next.js, and Tailwind CSS.",
      icon: Briefcase,
      color: "cyan",
    },
    {
      year: "2023 - Present",
      title: "PIAIC Student",
      company: "PIAIC",
      description: "Learning AI, Machine Learning, and Full-Stack Development.",
      icon: GraduationCap,
      color: "blue",
    },
  ];

  return (
    <section className="relative py-16 bg-white text-black overflow-hidden">
      {/* Futuristic Background */}
      <FuturisticBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600 text-center mb-12"
        >
          Professional Journey
        </motion.h2>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500/30 to-blue-500/30"></div>

          {journey.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
              className={`
                relative 
                mb-12 
                flex 
                items-center 
                ${index % 2 === 0 ? "flex-row-reverse" : ""}
                group
              `}
            >
              {/* Icon Container */}
              <motion.div
                className={`
                  absolute 
                  z-20 
                  w-20 
                  h-20 
                  rounded-full 
                  flex 
                  items-center 
                  justify-center 
                  border-4 
                  ${
                    hoveredItem === index
                      ? `border-${item.color}-500 shadow-[0_0_30px_rgba(${
                          item.color === "cyan" ? "0,255,255" : "0,0,255"
                        },0.4)]`
                      : "border-gray-300"
                  }
                  bg-white
                  transform 
                  transition-all 
                  duration-300 
                  group-hover:scale-110
                  left-1/2 
                  transform 
                  -translate-x-1/2
                `}
              >
                <item.icon
                  className={`
                    w-10 
                    h-10 
                    text-${item.color}-500 
                    transition-transform 
                    duration-300 
                    group-hover:scale-125
                  `}
                />
              </motion.div>

              {/* Content Container */}
              <motion.div
                className={`
                  w-[calc(50%-4rem)] 
                  bg-white 
                  p-6 
                  rounded-3xl 
                  shadow-xl 
                  border 
                  transition-all 
                  duration-300
                  ${
                    hoveredItem === index
                      ? `border-${item.color}-500 shadow-[0_0_30px_rgba(${
                          item.color === "cyan" ? "0,255,255" : "0,0,255"
                        },0.2)]`
                      : "border-gray-200"
                  }
                  ${index % 2 === 0 ? "mr-auto" : "ml-auto"}
                  group-hover:scale-[1.02]
                `}
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className={`text-${item.color}-500 font-semibold mb-1`}>
                  {item.company}
                </p>
                <p className="text-gray-500 text-sm mb-3">{item.year}</p>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyJourney;
