"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { CodeIcon, ArrowRight } from "lucide-react";

const projects = [
  {
    id: "1",
    title: "E-Commerce App",
    description: "Full-stack solution with Next.js & FastAPI",
    image:
      "https://t4.ftcdn.net/jpg/09/91/19/65/360_F_991196540_LIpbJRtYL2w5x1Xa6aFf8Ibqvs9vQWyR.jpg",
    technologies: ["Next.js", "FastAPI", "TypeScript"],
  },
  {
    id: "2",
    title: "AI Chatbot",
    description: "Intelligent conversational interface",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg-psyak9obXqQ41wDBqkSCsYkWJTQxy1gHw&s",
    technologies: ["LangChain", "OpenAI", "React"],
  },
  {
    id: "3",
    title: "Portfolio Website",
    description: "Modern responsive personal showcase",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuOppPA23pjsumgqfdJXWWnNm79fjNjVSS6Q&s",
    technologies: ["Next.js", "Tailwind", "Framer Motion"],
  },
  {
    id: "1",
    title: "E-Commerce App",
    description: "Full-stack solution with Next.js & FastAPI",
    image:
      "https://t4.ftcdn.net/jpg/09/91/19/65/360_F_991196540_LIpbJRtYL2w5x1Xa6aFf8Ibqvs9vQWyR.jpg",
    technologies: ["Next.js", "FastAPI", "TypeScript"],
  },
  {
    id: "2",
    title: "AI Chatbot",
    description: "Intelligent conversational interface",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg-psyak9obXqQ41wDBqkSCsYkWJTQxy1gHw&s",
    technologies: ["LangChain", "OpenAI", "React"],
  },
  {
    id: "3",
    title: "Portfolio Website",
    description: "Modern responsive personal showcase",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuOppPA23pjsumgqfdJXWWnNm79fjNjVSS6Q&s",
    technologies: ["Next.js", "Tailwind", "Framer Motion"],
  },
];

const FuturisticProjectsSection = () => {
  const router = useRouter();

  const WavyBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Wavy Lines */}
      {[...Array(10)].map((_, index) => (
        <motion.svg
          key={`wavy-line-${index}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute w-full opacity-20"
          style={{
            top: `${10 + index * 10}%`,
            left: 0,
            transform: `rotate(${index % 2 === 0 ? "" : "-"}${15}deg)`,
          }}
        >
          <motion.path
            fill="rgba(34, 211, 238, 0.1)"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320L240,320L0,320Z"
            animate={{
              x: ["-5%", "5%"],
              y: ["-3%", "3%"],
            }}
            transition={{
              duration: 8 + index * 2,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
        </motion.svg>
      ))}

      {/* Holographic Accent Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-500/5 to-transparent opacity-50 mix-blend-overlay"></div>

      {/* Pulsing Holographic Orbs */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full bg-cyan-500/10 blur-3xl"
          style={{
            width: 300 + Math.random() * 200,
            height: 300 + Math.random() * 200,
            left: `${20 + i * 30}%`,
            top: `${20 + i * 30}%`,
          }}
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
      ))}
    </div>
  );

  return (
    <section className="relative py-16 bg-[#121827] text-white overflow-hidden">
      {/* Futuristic Background */}
      <WavyBackground />

      <div className="max-w-7xl mx-auto px-8 relative z-20">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold mb-16 text-center text-white tracking-wider"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 0.5,
                  delay: index * 0.2,
                },
              }}
              className="group relative transform transition-all duration-500 ease-in-out"
            >
              <div className="absolute -inset-0.5 bg-cyan-500/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>

              <div className="relative bg-[#1E2433] rounded-2xl overflow-hidden border border-gray-800 transition-all duration-500 group-hover:border-cyan-500/50">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-3xl font-bold text-white transition-colors duration-500 group-hover:text-cyan-400">
                      {project.title}
                    </h3>
                    <CodeIcon className="text-gray-400 w-8 h-8 transition-colors duration-500 group-hover:text-cyan-400" />
                  </div>

                  <p className="text-gray-300 text-sm tracking-wider">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full text-gray-300 border border-gray-700 transition-all duration-500 group-hover:border-cyan-500/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <motion.button
                    onClick={() => router.push(`/projects/${project.id}`)}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 15px rgba(103, 232, 249, 0.5)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-cyan-600/20 border border-cyan-500/50 text-cyan-300 px-6 py-3 rounded-full hover:bg-cyan-600/30 transition-colors duration-300 flex items-center justify-center group w-full"
                  >
                    Let's Explore
                    <ArrowRight
                      className="ml-2 group-hover:translate-x-1 transition-transform text-cyan-300"
                      size={20}
                    />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FuturisticProjectsSection;
