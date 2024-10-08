import React, { useState } from "react";
import First from "../assets/portfolio/First.jpg";
import Second from "../assets/portfolio/Second.jpg";
import Third from "../assets/portfolio/Third.png";
import Fourth from "../assets/portfolio/Fourth.jpg";
import Fifth from "../assets/portfolio/Fifth.png";
import Sixth from "../assets/portfolio/Sixth.png";
import Seventh from "../assets/portfolio/Seventh.png";
import Eight from "../assets/portfolio/Eight.png";
import Ninth from "../assets/portfolio/Ninth.png";
import Tenth from "../assets/portfolio/Tenth.png";
import MERNTODO from "../assets/portfolio/Mern-Todo.png";
import CALCULATOR from "../assets/portfolio/react-calculator.png";
import NOTEKEEPER from "../assets/portfolio/fs-notekeeper.png";
import OCHI from "../assets/portfolio/ochi-clone.png";
import HireO from "../assets/portfolio/Hire-O.png";
import { Element } from "react-scroll";
import TechStacks from "./TechStacks";

// NOTE: "The dimension of the image should be height: 651 px width: 1157 px"

const projectArray = [
  {
    id: 1,
    src: HireO,
    href: "https://hireo-app.vercel.app/",
    repo: "https://github.com/imprjde/HireO-Frontend",
    title: "HireO App",
    extratStyle: "w-full h-36 ",
    stacks: [
      "React JS",
      "Redux Toolkit",
      "Node JS",
      "Express JS",
      "MongoDB",
      "Mongoose JS",
      "Jsonwebtoken",
      "Firebase",
      "Cloudinary",
      "Multer",
      "Nodemailer",
    ],
  },
  {
    id: 2,
    src: First,
    href: "https://prajwal-react-movie-website-mocha.vercel.app/",
    repo: "https://github.com/imprjde/react-movie-website",
    title: "Movies App",
    stacks: [
      "React JS",
      "Redux Toolkit",
      "React Router Dom",
      "React Player",
      "React Circular Progressbar",
      "React Icons",
      "Axios",
      "DayJS",
    ],
  },

  {
    id: 3,
    src: NOTEKEEPER,
    href: "https://fs-notekeeper-frontend.vercel.app/",
    repo: "https://github.com/imprjde/fs-notekeeper-frontend",
    title: "Fullstack Notekeeper App",
    extratStyle: "w-full h-36",
    stacks: [
      "Node JS",
      "Express JS",
      "React JS",
      "Mongoose JS",
      "Mongo DB",
      "React Router Dom",
      "React Toastify",
      "TailwindCSS",
      "Axios",
      "Framer motion",
      "React Icons",
    ],
  },
  {
    id: 4,
    src: OCHI,
    href: "https://ochi-clone.vercel.app/",
    repo: "https://github.com/imprjde/ochi-clone",
    title: "OCHI - Animated Website",
    extratStyle: "w-full h-36",
    stacks: ["React JS", "TailwindCSS", "Locmotive", "Framer Motion"],
  },
  {
    id: 5,
    src: MERNTODO,
    href: "https://mern-fs-todo.vercel.app/login",
    repo: "https://github.com/imprjde/fs-todo-frontend",
    title: "MERN Todo App",
    stacks: [
      "Node JS",
      "Express JS",
      "React JS",
      "Mongoose JS",
      "Mongo DB",
      "React Router Dom",
      "React Toastify",
      "TailwindCSS",
      "Axios",
      "Headlessui",
      "Hero Icons",
    ],
  },
  {
    id: 6,
    src: Third,
    href: "https://react-ecommerce-ap.vercel.app/",
    repo: "https://github.com/imprjde/react-ecommerce",
    title: "React E-Commerce Site",
    extratStyle: "w-full h-36",
    stacks: [
      "React JS",
      "React Router Dom",
      "Axios",
      "React Rating",
      "React Icons",
      "Lodash Debounce",
      "TailwindCSS",
    ],
  },
  {
    id: 7,
    src: Seventh,
    href: "https://farmer-motion.netlify.app/",
    repo: "https://github.com/imprjde/framer-motion-project",
    title: "Challenge Manager (Framer Motion + Redux Tool Kit )",
    stacks: [
      "React JS",
      "React Redux",
      "React Router Dom",
      "React Icons",
      "TailwindCSS",
    ],
  },
  {
    id: 8,
    src: Second,
    href: "https://redux-crud-gules.vercel.app/",
    repo: "https://github.com/imprjde/redux-crud",
    title: "Redux Toolkit CRUD",
    stacks: ["React JS", "Redux Toolkit", "React Router Dom", "Bootstrap"],
  },

  {
    id: 9,
    src: Eight,
    href: "https://react-posts-comment.netlify.app/",
    repo: "https://github.com/imprjde/react-post-comments",
    title: "A Project Using JSON Placeholder Dummy API",
    stacks: [
      "React JS",
      "React Router Dom",
      "React Loading Skeleton",
      "React Icons",
      "TailwindCSS",
    ],
  },
  {
    id: 10,
    src: CALCULATOR,
    href: "https://react-calculator-prj.vercel.app/",
    repo: "https://github.com/imprjde/react-calculator",
    title: "Simple Calculator",
    style: "140px ",
    stacks: ["React JS", "TailwindCSS"],
  },
  {
    id: 11,
    src: Ninth,
    href: "https://react-order-page.netlify.app/",
    repo: "https://github.com/imprjde/order-page",
    title: "React Order Page Project",
    stacks: ["React JS", "TailwindCSS"],
  },
  {
    id: 12,
    src: Fourth,
    href: "https://prajwal-4whc835hu-imprjde7-gmailcom.vercel.app/",
    repo: "https://github.com/imprjde/prajwal",
    title: "React Todo App",
    stacks: ["React JS", "Axios", "TailwindCSS"],
  },
  {
    id: 13,
    src: Tenth,
    href: "https://react-speech-to-text-converter.netlify.app/",
    repo: "https://github.com/imprjde/react-speech-to-text-converter",
    title: "React Speech To Text Converter",
    stacks: [
      "React JS",
      "React Speech Recognition",
      "React Use Clipboard",
      "React Icons",
      "TailwindCSS",
    ],
  },
  {
    id: 14,
    src: Fifth,
    href: "https://react-pagination-mauve-iota.vercel.app/",
    repo: "https://github.com/imprjde/react-pagination",
    title: "React Pagination",
    stacks: ["React JS"],
  },
  {
    id: 15,
    src: Sixth,
    href: "https://imprjde.github.io/tindog/#cta",
    repo: "https://github.com/imprjde/tindog",
    title: "Tindog Website",
    stacks: ["HTML", "CSS"],
  },
];

const Portfolio = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [projects, setProjects] = useState(projectArray.slice(0, 6));
  const [isExpanded, setIsExpanded] = useState(false);

  const handleShowTechStacks = (id) => {
    setModalOpen(true);
    setModalData(projectArray[id - 1]);
  };

  const handleViewAllProjects = () => {
    setIsExpanded(true);
    setProjects(projectArray);
  };

  const handleShowLessProjects = () => {
    setIsExpanded(false);
    setProjects(projectArray.slice(0, 6));
  };
  return (
    <Element
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-fit md:pt-0 pt-[120px]"
    >
      {modalOpen && (
        <TechStacks
          setModalOpen={setModalOpen}
          modalData={modalData}
          setModalData={setModalData}
        />
      )}
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div
          id="MobileScreen"
          className="flex  md:hidden py-12 lg:hidden  lg:grid-cols-3 lg:gap-8 overflow-auto"
        >
          {projectArray.map(
            ({ id, src, href, repo, title, extratStyle, style }) => (
              <div
                key={id}
                className="shadow-md  duration-300
                mx-6 hover:scale-105  shadow-gray-600 rounded-lg"
              >
                <img
                  src={src}
                  alt=""
                  style={style && { height: style }}
                  className={`rounded-md  ${extratStyle && extratStyle} `}
                />

                <div className="absolute inset-0 flex items-center cursor-pointer justify-center pb-12 text-xl font-bold col opacity-0 bg-black bg-opacity-50 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-center">{title}</p>
                </div>

                <div className="flex items-center  justify-center">
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className=" cursor-pointer w-1/2 font-medium px-6 py-3 m-4 z-10 "
                  >
                    Demo
                  </a>
                  <a
                    href={repo}
                    target="_blank"
                    rel="noreferrer"
                    className=" cursor-pointer w-1/2 font-medium px-6 py-3 m-4 z-10   "
                  >
                    Code
                  </a>
                </div>

                <div className="flex items-center mb-1  justify-center">
                  <span
                    onClick={() => handleShowTechStacks(id)}
                    className=" cursor-pointer font-semibold text-sm  -mt-2 text-sky-300 mb-4 z-10 "
                  >
                    View Tech Stacks
                  </span>
                </div>
              </div>
            )
          )}
        </div>

        <div
          id="DesktopScreen"
          className=" hidden fle py-12 lg:grid  lg:grid-cols-3 lg:gap-8 overflow-auto"
        >
          {projects.map(
            ({ id, src, href, repo, title, extratStyle, style }) => (
              <div
                key={id}
                className="shadow-md  duration-300
                mx-6 hover:scale-105  shadow-gray-600 rounded-lg"
              >
                <img
                  src={src}
                  alt=""
                  style={style && { height: style }}
                  className={`rounded-md  ${extratStyle && extratStyle} `}
                />

                <div className="absolute inset-0 flex items-center cursor-pointer justify-center pb-12 text-xl font-bold col opacity-0 bg-black bg-opacity-50 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-center">{title}</p>
                </div>

                <div className="flex items-center  justify-center">
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className=" cursor-pointer w-1/2 font-medium px-6 py-3 m-4 z-10 "
                  >
                    Demo
                  </a>
                  <a
                    href={repo}
                    target="_blank"
                    rel="noreferrer"
                    className=" cursor-pointer w-1/2 font-medium px-6 py-3 m-4 z-10   "
                  >
                    Code
                  </a>
                </div>

                <div className="flex items-center mb-1  justify-center">
                  <span
                    onClick={() => handleShowTechStacks(id)}
                    className=" cursor-pointer font-semibold text-sm  -mt-2 text-sky-300 mb-4 z-10 "
                  >
                    View Tech Stacks
                  </span>
                </div>
              </div>
            )
          )}
        </div>

        <div className="hidden md:flex">
          {!isExpanded ? (
            <div className="cursor-pointer font-semibold text-base   text-sky-300 mb-4 w-full flex justify-center px-7">
              <button onClick={() => handleViewAllProjects()}>
                View all projects
              </button>
            </div>
          ) : (
            <div className="cursor-pointer font-semibold text-base   text-sky-300 mb-4 w-full flex justify-center px-7">
              <button onClick={() => handleShowLessProjects()}>
                View Less
              </button>
            </div>
          )}
        </div>
      </div>
    </Element>
  );
};

export default Portfolio;
