export const NavLink = [
  {
    title: "Accueil",
    path: "home",
  },
  {
    title: "À propos",
    path: "about",
  },
  {
    title: "Projet",
    path: "projet",
  },
  {
    title: "Contact",
    path: "contact",
  },
];

export const tabdata = [
  {
    title: "Skills",
    id: "skills",
    constent: (
      <ul className="list-disc pl-2 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-3">
        <span>
          <img src="/images/icons/js.webp" className="w-20" />
        </span>
        <span>
          <img src="/images/icons/tailwind.webp" className="w-20" />
        </span>
        <span>
          <img src="/images/icons/react.webp" className="w-20" />
        </span>
        <span className="rounded-full bg-[#c5c5c5] w-20 h-20 relative">
          <img
            src="/images/icons/express.png"
            className="w-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </span>
        <span>
          <img src="/images/icons/next.png" className="w-20" />
        </span>
        <span>
          <img src="/images/icons/laravel.png" className="w-20" />
        </span>
        <span>
          <img src="/images/icons/mysql.svg" className="w-32" />
        </span>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    constent: (
      <ul className="list-disc pl-2">
        <li>2024 : Master I</li>
        <li>2023 : Licence</li>
        <li>2019 : Baccalauréat</li>
      </ul>
    ),
  },
];

export const projectData = [
  {
    id: 1,
    title: "React Portfolio web",
    description: "Project 1 description",
    image: "/images/imageProject/projet1.png",
    tag: ["Tous", "Statiques"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "React Portfolio web",
    description: "Project 3 description",
    image: "/images/imageProject/projet3.png",
    tag: ["Tous", "Statiques"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "React Portfolio web",
    description: "Project 4 description",
    image: "/images/imageProject/projet4.png",
    tag: ["Tous", "Dinamiques"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "React Portfolio web",
    description: "Project 5 description",
    image: "/images/imageProject/projet5.png",
    tag: ["Tous", "Dinamiques"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "React Portfolio web",
    description: "Project 2 description",
    image: "/images/imageProject/projet2.png",
    tag: ["Tous", "Statiques"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

export const achievementList = [
  {
    metric: "Baccalauréat",
    value: "4",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Projets",
    value: "9",
  },
  {
    metric: "Deployé",
    value: "3",
  },
  {
    metric: "Expérience",
    value: "6",
  },
];
