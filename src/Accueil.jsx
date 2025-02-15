import React from "react";
import HeroSection from "./Components/HeroSection";
import AchievementSection from "./Components/AchievementSection";
import About from "./Components/About";
import ProjectsSection from "./Components/ProjectsSection";
import EmailSection from "./Components/EmailSection";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

export default function Accueil() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AchievementSection />
      <About />
      <ProjectsSection />
      <EmailSection />
      <Footer />
    </div>
  );
}
