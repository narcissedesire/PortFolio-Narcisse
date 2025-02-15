import React, { useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import { projectData } from "./Data";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

export default function ProjectsSection() {
  const [tag, setTag] = useState("Tous");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [expandedId, setExpandedId] = useState(null);

  const handleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProject = projectData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariant = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section ref={ref} id="projet">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Mes projets
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Tous"
          isSelected={tag === "Tous"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Statiques"
          isSelected={tag === "Statiques"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Dinamiques"
          isSelected={tag === "Dinamiques"}
        />
      </div>
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {filteredProject.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariant}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              imageUrl={project.image}
              description={project.description}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              isExpanded={expandedId === project.id} // Vérifie si cette carte est ouverte
              onExpand={() => handleExpand(project.id)}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
