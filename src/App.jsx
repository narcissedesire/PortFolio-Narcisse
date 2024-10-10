import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import AchievementSection from "./Components/AchievementSection";
import About from "./Components/About";
import ProjectsSection from "./Components/ProjectsSection";
import EmailSection from "./Components/EmailSection";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <main className="flex min-h-screen flex-col bg-[#121212]">
        <Navbar />
        <div className="container mx-auto px-5 py-4 mt-24">
          <HeroSection />
          <AchievementSection />
          <About />
          <ProjectsSection />
          <EmailSection />
        </div>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
