import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";
import { tabdata } from "./Data";

export default function About() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <img
          src="/images/apropos.png"
          alt="hero image about"
          className="w-full "
        />
        <div className="mt-4 md:mt-0 flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">
            À propos de moi
          </h2>
          <p className="text-base md:text-lg">
            Bonjour, je suis Narcisse Désiré, un développeur web full-stack. Je
            suis en Master I à l'EMIT Fianarantsoa, j'ai acquis des compétences
            en utilisant des technologies comme CSS, TailwindCSS, JavaScript,
            ReactJS, Node-Express, NextJS, Laravel . Je suis enthousiaste à
            l'idée de créer des projets innovants et d'apprendre
            continuellement. Mon objectif est de contribuer à des projets
            stimulants tout en développant mes compétences dans un environnement
            dynamique.
          </p>
          <div className="flex justify-start flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Technologies
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Formations{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {tabdata.find((t) => t.id === tab).constent}
          </div>
        </div>
      </div>
    </section>
  );
}
