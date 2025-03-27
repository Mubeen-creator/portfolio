"use client";

import { useParams } from "next/navigation";

const projects = {
  "1": {
    title: "E-Commerce App",
    description: "Built with Next.js & FastAPI",
    details: "Full description of the project...",
  },
  "2": {
    title: "AI Chatbot",
    description: "Uses LangChain & OpenAI",
    details: "How I built this chatbot...",
  },
  "3": {
    title: "Portfolio Website",
    description: "Built with Next.js 15 & Tailwind",
    details: "Details about this portfolio...",
  },
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects[id];

  if (!project)
    return <div className="text-center text-red-500">Project not found!</div>;

  return (
    <section className="py-12 bg-gray-900 text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-8">
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <p className="mt-4 text-gray-400">{project.details}</p>
      </div>
    </section>
  );
};

export default ProjectDetails;
