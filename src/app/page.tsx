import FeatureCards from "@/components/FeatureCards";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MyJourney from "@/components/MyJourney";
import Navbar from "@/components/Navbar";
import ProjectsPreviewSection from "@/components/ProjectsPreviewSection";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeatureCards />
      <ProjectsPreviewSection />
      <MyJourney />
      <Footer />
    </div>
  );
};

export default page;
