"use client";

import { Briefcase, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const journey = [
  {
    year: "2024 - Present",
    title: "Software Developer",
    company: "Techloset",
    description:
      "Building scalable web applications with FastAPI, Next.js, and Tailwind CSS.",
    icon: <Briefcase className="text-green-500 w-8 h-8" />,
  },
  {
    year: "2023 - Present",
    title: "PIAIC Student",
    company: "PIAIC",
    description: "Learning AI, Machine Learning, and Full-Stack Development.",
    icon: <GraduationCap className="text-blue-500 w-8 h-8" />,
  },
];

const MyJourney = () => {
  return (
    <section className="py-16 bg-white text-black">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-green-400">
          My Journey 🚀
        </h2>

        <div className="relative border-l-4 border-green-500 pl-6">
          {journey.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              className="mb-12 flex items-start"
            >
              <div className="bg-gray-800 p-4 rounded-full border-2 border-green-500 shadow-lg">
                {item.icon}
              </div>
              <div className="ml-6">
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="text-green-400">{item.company}</p>
                <p className="text-black text-sm">{item.year}</p>
                <p className="mt-3 text-black">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyJourney;
