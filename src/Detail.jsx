import React from "react";
import { projectData } from "./Components/Data";
import { useParams, Link } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();

  const project = projectData.find(
    (project) => project.id === parseInt(id, 10)
  );

  if (!project) {
    return (
      <div className=" min-h-screen p-8 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-extrabold text-white mb-4">
          Projet non trouvé
        </h1>
        <p className="text-gray-400 mb-6">
          Le projet que vous cherchez n'existe pas.
        </p>
        <Link
          to="/"
          className="mt-4 text-primary-500 hover:underline font-semibold"
        >
          Retourner à la liste des projets
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#121212] min-h-screen p-8 flex flex-col items-center -mt-20">
      <div className="max-w-4xl mx-auto  rounded-lg shadow-2xl p-8 space-y-8">
        <div className="relative rounded-xl overflow-hidden shadow-lg">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-96 object-cover"
          />
        </div>

        <h1 className="text-4xl font-extrabold text-white mb-4">
          {project.title}
        </h1>

        <div className="text-[#ADB7BE] text-lg mb-4 whitespace-pre-line">
          <p>{project.description}</p>
        </div>

        <div className="space-x-4 mt-6 flex flex-wrap justify-center">
          <Link
            to={project.previewUrl}
            target="_blank"
            className="inline-block text-white bg-primary-600 px-6 py-3 rounded-lg hover:bg-primary-700 transition duration-300"
          >
            Voir le projet en ligne
          </Link>
          <Link
            to={project.gitUrl}
            target="_blank"
            className="inline-block text-white bg-primary-600 px-6 py-3 rounded-lg hover:bg-primary-700 transition duration-300"
          >
            Voir le code source en ligne
          </Link>
          <Link
            to="/"
            className="inline-block text-primary-500 px-6 py-3 rounded-lg hover:bg-gray-700 hover:text-white transition duration-300"
          >
            Retour à la liste des projets
          </Link>
        </div>
      </div>
    </div>
  );
}
