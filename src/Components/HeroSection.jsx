import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true); // Désactive le bouton

    try {
      // Télécharge le fichier PDF
      const response = await fetch("/CV/CV-Narcisse-DESIRE.pdf");
      const blob = await response.blob();

      // Crée un lien pour déclencher le téléchargement
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "CV-Narcisse-DESIRE.pdf";
      document.body.appendChild(link);
      link.click();

      // Nettoie le lien et réactive le bouton
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Erreur lors du téléchargement du fichier :", error);
    } finally {
      setIsDownloading(false); // Réactive le bouton
    }
  };

  return (
    <section className="lg:py-16" id="home">
      <div className="grid grid-cols-1 md:grid-cols-12 max-md:gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-12 md:col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl sm:leading-snug lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Bonjour, je suis{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={["Narcisse Désiré", 1500, "Développeur Web", 1500]}
              wrapper="span"
              speed={20}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] mb-6 text-lg lg:text-xl">
            Ma passion pour le développement web se reflète dans chaque projet
            que je réalise. J'adore explorer de nouvelles technologies pour
            créer des applications qui allient esthétique et performance.
          </p>
          <div>
            <button
              onClick={handleDownload}
              disabled={isDownloading}
              className={`px-5 py-3 w-full sm:w-fit rounded-full bg-primary-500 transition-all ${
                isDownloading
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-primary-800"
              } text-white border mt-3`}
            >
              {isDownloading ? "Téléchargement en cours..." : "Télécharger CV"}
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-12 md:col-span-4 place-self-center max-md:mt-6 lg:mt-0 flex items-center justify-center w-full"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <img
              src="/images/person.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[170px] md:w-[250px] xl:w-[280px] h-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
