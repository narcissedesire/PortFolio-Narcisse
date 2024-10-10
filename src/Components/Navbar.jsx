import React, { useState } from "react";
import { Link } from "react-scroll";
import { NavLink } from "./Data";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed border border-[#33353F] top-0 right-0 z-40 w-full bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          to="home"
          className="text-2xl md:text-4xl lg:text-5xl text-white font-semibold"
        >
          <img src="/images/logo.png" className="h-14" />
        </Link>
        <div className="mobile-menu block md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)} // Toggle state
            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            aria-label={navbarOpen ? "Close menu" : "Open menu"} // Accessibilité
          >
            {navbarOpen ? (
              <XMarkIcon className="h-5 w-5" />
            ) : (
              <Bars3Icon className="h-5 w-5" />
            )}
          </button>
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {NavLink.map((link, index) => (
              <li key={index}>
                {" "}
                {/* Utiliser un identifiant unique si disponible */}
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
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen && <MenuOverlay />} {/* Utilisation d'un opérateur logique */}
    </nav>
  );
}
