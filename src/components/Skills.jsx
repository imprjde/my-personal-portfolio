import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import Redux from "../assets/Redux.png";
import Api from "../assets/Api.png";
import Git from "../assets/Git.png";
import JSON from "../assets/JSON.png";
import DSA from "../assets/DSA.png";
import SDE from "../assets/SDE.png";
import Framer from "../assets/Framer.png";
import Node from "../assets/node.png";
import Express from "../assets/express.png";
import Mongo from "../assets/mongo.png";
import Mongoose from "../assets/Mongoosejs.png";

const Experience = () => {
  
  const techs = [
    {
      id: 1,
      src: DSA,
      title: "DSA",
      style: "shadow-teal-700",
    },
    {
      id: 2,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 3,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 4,
      src: tailwind,
      title: "Tailwind CSS",
      style: "shadow-sky-400",
    },
    {
      id: 5,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 6,
      src: reactImage,
      title: "React JS",
      style: "shadow-blue-600",
    },

    {
      id: 7,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 8,
      src: Redux,
      title: "Redux Toolkit",
      style: "shadow-purple-700",
    },
    {
      id: 9,
      src: Node,
      title: "Node JS",
      style: "shadow-green-900",
    },
    {
      id: 10,
      src: Express,
      size: "50px",
      title: "Express JS",
      style: "shadow-gray-500",
    },
    {
      id: 11,
      src: Mongo,
      size: "50px",
      title: "Mongo DB",
      style: "shadow-green-400",
    },
    {
      id: 12,
      src: Mongoose,
      styles: "150px",
      styling: "pt-3",
      title: "Mongoose JS",
      style: "shadow-red-500",
    },
    {
      id: 13,
      src: github,
      title: "GitHub",
      style: "shadow-gray-500",
    },
    {
      id: 14,
      src: Git,
      title: "Git ",
      style: "shadow-orange-700",
    },

    {
      id: 15,
      src: Api,
      title: "API ",
      style: "shadow-pink-700",
    },
    {
      id: 16,
      src: JSON,
      title: "JSON ",
      style: "shadow-rose-700 pt-8",
    },
    {
      id: 17,
      src: Framer,
      title: "Framer Motion ",
      style: "shadow-fuchsia-400 pt-8",
    },

    {
      id: 18,
      src: SDE,
      title: "Software Development",
      style: "shadow-teal-700 pt-10",
    },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-fit pt-[60px] md:pt-[130px]"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl bg- font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style, styles, styling }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500  cursor-pointer py-2 rounded-lg ${style}`}
            >
              <img
                src={src}
                alt=""
                style={{ width: styles }}
                className={`w-20 mx-auto `}
              />
              <p className={`mt-4 S ${styling}`}>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
