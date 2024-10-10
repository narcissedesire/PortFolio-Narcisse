import React from "react";
import { NavLink } from "./Data";
import { Link } from "react-scroll";

export default function MenuOverlay() {
  return (
    <u className="flex flex-col py-4 items-center md:hidden">
      {NavLink.map((link, index) => (
        <span key={index}>
          <li key={index}>
            <Link
              to={link.path}
              spy={true}
              smooth={true}
              offset={-100}
              className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white cursor-pointer"
            >
              {link.title}
            </Link>
          </li>
        </span>
      ))}
    </u>
  );
}
