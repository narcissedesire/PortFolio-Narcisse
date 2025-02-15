import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function ProjectCard({
  id,
  imageUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  isExpanded,
  onExpand,
}) {
  return (
    <div className="rounded-xl bg-[#1f1f1f] overflow-hidden shadow-lg">
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imageUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute gap-5 top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            to={`${gitUrl}`}
            className="h-14 w-14 border-2 border-[#ADB7BE] relative rounded-full hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white" />
          </Link>
          <Link
            to={`${previewUrl}`}
            className="h-14 w-14 border-2 border-[#ADB7BE] relative rounded-full hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white" />
          </Link>
        </div>
      </div>

      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2 cursor-default">{title}</h5>

        <p
          className="text-[#ADB7BE] whitespace-pre-line overflow-hidden transition-all duration-300 cursor-default"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: isExpanded ? "unset" : 3,
            WebkitBoxOrient: "vertical",
          }}
        >
          {description}
        </p>

        <Link to={`/${id}`} className="text-blue-500 mt-2 hover:underline">
          Voir les détails
        </Link>
      </div>
    </div>
  );
}
