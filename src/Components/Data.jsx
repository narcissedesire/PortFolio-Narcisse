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
    title: "Clone d’Amazon - Interface e-commerce statique",
    description: `J’ai réalisé ce projet dans le but d’apprendre et de maîtriser Tailwind CSS. Il s’agit d’un site e-commerce statique inspiré d’Amazon, conçu pour reproduire une interface moderne et épurée, tout en mettant en pratique la puissance de Tailwind CSS pour le design et la mise en page.

    🔹 Technologies utilisées : Tailwind CSS, ReactJS, Vite
    🔹 Objectif : Créer une interface e-commerce responsive et attrayante
    🔹 Défis relevés : Gestion des classes utilitaires, respect du design et optimisation de la responsivité
    🔹 Ce que j’ai appris : Structurer un projet avec Tailwind CSS, améliorer l’UI/UX et travailler sur une interface web réaliste`,
    image: "/images/imageProject/amazon.png",
    tag: ["Tous", "Statiques"],
    gitUrl: "https://github.com/narcissedesire/Amazon",
    previewUrl: "https://amazon-ebon-mu.vercel.app",
  },
  {
    id: 3,
    title: "Insolve Plus - Une Plateforme de Santé Moderne et Accessible",
    description: `J’ai conçu ce site web statique pour perfectionner mes compétences en Tailwind CSS et approfondir ma maîtrise du design moderne et responsive. Il s’agit d’une plateforme dédiée aux services de santé, offrant une interface fluide et intuitive pour faciliter la prise de rendez-vous médicaux et la présentation des services de soins.

💡 Pourquoi ce projet ?
    Mon objectif était de créer une interface professionnelle, épurée et accessible, en appliquant les principes de l’UI/UX design et en exploitant la puissance de Tailwind CSS pour une mise en page soignée et réactive.

    ✨ Points forts du site :
    🔹 Design élégant et moderne, garantissant une navigation agréable.
    🔹 Interface 100% responsive, optimisée pour tous les écrans.
    🔹 Expérience utilisateur fluide, avec des animations subtiles et une structure intuitive.
    🔹 Optimisation des performances, grâce à Tailwind CSS et une approche minimaliste du code.

    🚀 Ce que j’ai appris :
    Grâce à ce projet, j’ai renforcé mes compétences en Tailwind CSS, en structuration de contenu et en création de mises en page dynamiques et professionnelles. C’était une excellente opportunité pour travailler sur un site statique performant, tout en respectant les bonnes pratiques du développement web.`,
    image: "/images/imageProject/insolve.png",
    tag: ["Tous", "Statiques"],
    gitUrl: "https://github.com/narcissedesire/Insolve",
    previewUrl: "https://insolve-eight.vercel.app",
  },
  {
    id: 4,
    title: "🚀 Nexcent - Simplifier la Gestion de Communauté",
    description: `J’ai conçu ce site statique pour maîtriser Tailwind CSS et créer une interface moderne et réactive. Nexcent est une plateforme innovante qui centralise la gestion des membres, le suivi des performances et l’automatisation des tâches communautaires.

💡 Objectif :
    Créer une interface épurée et intuitive, en appliquant les principes de l’UI/UX design et en exploitant la puissance de Tailwind CSS pour un rendu professionnel et performant.

    ✨ Points clés :
    🔹 Design moderne et responsive, adapté à tous les écrans.
    🔹 Expérience utilisateur fluide, avec des animations subtiles et une navigation intuitive.
    🔹 Code optimisé grâce à Tailwind CSS, pour des performances rapides.

    🚀 Ce que j’ai appris :
    Ce projet m’a permis de perfectionner mes compétences en Tailwind CSS et en design responsive. J’ai exploré des techniques pour créer des interfaces à la fois esthétiques et fonctionnelles, tout en respectant les bonnes pratiques du développement web. Une expérience enrichissante qui allie apprentissage et créativité !`,
    image: "/images/imageProject/nexcent.png",
    tag: ["Tous", "Statiques"],
    gitUrl: "https://github.com/narcissedesire/Nexent_React",
    previewUrl: "https://nexent-react.vercel.app",
  },
  {
    id: 5,
    title: "🌟 Portfolio de Narcisse Désiré - Développeur Web Passionné",
    description: `J’ai conçu ce site statique pour mettre en avant mon parcours et mes projets tout en perfectionnant mes compétences en Tailwind CSS. Ce portfolio reflète ma passion pour le développement web et mon engagement à créer des interfaces modernes, esthétiques et performantes.

💡 Pourquoi ce projet ?
    Mon objectif était de créer une vitrine personnelle qui présente mes compétences, mes réalisations et ma vision en tant que développeur. J’ai utilisé Tailwind CSS pour concevoir une interface épurée, responsive et facile à naviguer, tout en explorant les fonctionnalités de ce framework.

    ✨ Points forts du site :
    🔹 Design moderne et professionnel, avec une mise en page claire et intuitive.
    🔹 Interface 100% responsive, optimisée pour tous les appareils.
    🔹 Présentation de mes projets, mettant en avant mes compétences en développement web.
    🔹 Utilisation de Tailwind CSS pour un code propre, performant et facile à maintenir.

    🚀 Ce que j’ai appris :
    Ce projet m’a permis de renforcer ma maîtrise de Tailwind CSS et d’améliorer mes compétences en design responsive. J’ai également appris à structurer un portfolio de manière efficace pour mettre en valeur mon travail et mes aspirations professionnelles.

    C’était une excellente opportunité de combiner apprentissage et créativité, tout en créant un site statique qui représente qui je suis et ce que je fais. Un pas de plus dans mon parcours de développement web ! 🚀`,
    image: "/images/imageProject/portfolio.png",
    tag: ["Tous", "Dinamiques"],
    gitUrl: "https://github.com/narcissedesire/PortFolio-Narcisse",
    previewUrl: "https://port-folio-narcisse.vercel.app",
  },
  {
    id: 2,
    title: "🌟 ÉdéConnect - Une Plateforme d'Apprentissage Innovante",
    description: `Dans le cadre de mon projet de mémoire de licence, j’ai conçu Venture Connect, une plateforme dynamique visant à faciliter la vente et l’achat d’entreprises, ainsi que la recherche de co-fondateurs à Madagascar. Ce projet m’a permis d’explorer et de maîtriser des technologies modernes tout en créant une solution pratique et performante pour stimuler l’innovation et la collaboration économique.

    💡 Technologies utilisées :

    Frontend : ReactJS pour une interface dynamique et interactive.

    Styling : Tailwind CSS pour un design moderne et responsive.

    Backend : Laravel pour la gestion des API, des routes et de la logique métier.

    Base de données : MySQL pour une gestion efficace et structurée des données.

    Conception : UML pour modéliser l’architecture et les fonctionnalités de la plateforme.

    ✨ Points forts du projet :
    🔹 Expérience utilisateur fluide : Une interface intuitive et réactive, conçue avec React et Tailwind CSS.
    🔹 Fonctionnalités clés : Marché en ligne pour la vente et l’achat d’entreprises, recherche de co-fondateurs, et soutien aux transactions.
    🔹 Backend robuste : Utilisation de Laravel pour une gestion performante des données et des utilisateurs.
    🔹 Conception structurée : Modélisation UML pour une architecture claire et cohérente.
    🔹 Base de données relationnelle : MySQL pour stocker et gérer efficacement les informations.

    🚀 Ce que j’ai appris :
    Ce projet m’a permis de consolider mes compétences en développement full-stack, en intégrant des technologies comme React, Tailwind CSS, Laravel et MySQL. J’ai également approfondi ma compréhension de la conception d’applications web dynamiques et performantes grâce à l’utilisation d’UML pour la modélisation.

    Venture Connect représente une étape importante dans mon parcours académique et professionnel, alliant innovation, technicité et utilité. Une expérience enrichissante qui m’a préparé à relever des défis plus complexes dans le domaine du développement web. 🚀`,
    image: "/images/imageProject/eduConnect.png",
    tag: ["Tous", "Dinamiques"],
    gitUrl: "https://github.com/narcissedesire/EduConnect_Front",
    previewUrl: "https://educonnect-front.onrender.com",
  },
  {
    id: 6,
    title:
      "🌟 Venture Connect - Une Plateforme Innovante pour l'Entrepreneuriat à Madagascar",
    description: `Dans le cadre de mon projet de mémoire de licence, j’ai conçu Venture Connect, une plateforme dynamique visant à faciliter la vente et l’achat d’entreprises, ainsi que la recherche de co-fondateurs à Madagascar. Ce projet m’a permis d’explorer et de maîtriser des technologies modernes tout en créant une solution pratique et performante pour stimuler l’innovation et la collaboration économique.

💡 Technologies utilisées :

    Frontend : ReactJS pour une interface dynamique et interactive.

    Styling : Tailwind CSS pour un design moderne et responsive.

    Backend : Express pour la gestion des API et des routes.

    Base de données : MySQL avec Prisma ORM pour une gestion efficace et structurée des données.

    ✨ Points forts du projet :
    🔹 Expérience utilisateur fluide : Une interface intuitive et réactive, conçue avec React et Tailwind CSS.
    🔹 Fonctionnalités clés : Marché en ligne pour la vente et l’achat d’entreprises, recherche de co-fondateurs, et soutien aux transactions.
    🔹 Backend robuste : Utilisation d’Express et Prisma pour une gestion performante des données et des utilisateurs.
    🔹 Base de données relationnelle : MySQL pour stocker et gérer efficacement les informations.

    🚀 Ce que j’ai appris :
    Ce projet m’a permis de consolider mes compétences en développement full-stack, en intégrant des technologies comme React, Tailwind CSS, Express, Prisma et MySQL. J’ai également approfondi ma compréhension de la conception d’applications web dynamiques et performantes.

    Venture Connect représente une étape importante dans mon parcours académique et professionnel, alliant innovation, technicité et utilité. Une expérience enrichissante qui m’a préparé à relever des défis plus complexes dans le domaine du développement web. 🚀`,
    image: "/images/imageProject/ventureConnect.png",
    tag: ["Tous", "Dinamiques"],
    gitUrl: "https://github.com/narcissedesire/ventureConnectNouveau",
    previewUrl: "https://ventureconnectnouveau.onrender.com",
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
