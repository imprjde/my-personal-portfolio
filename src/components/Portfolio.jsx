import React from "react";
import First from "../assets/portfolio/First.jpg";
import Second from "../assets/portfolio/Second.jpg";
import Third from "../assets/portfolio/Third.jpg";
import Fourth from "../assets/portfolio/Fourth.jpg";
import Fifth from "../assets/portfolio/Fifth.png";
import Sixth from "../assets/portfolio/Sixth.png";
import Seventh from "../assets/portfolio/Seventh.png";
import Eight from "../assets/portfolio/Eight.png";
import Ninth from "../assets/portfolio/Ninth.png";
import { Element } from "react-scroll";

// NOTE: "The dimension of the image should be height: 651 px width: 1157 px"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: First,
      href: "https://prajwal-react-movie-website-mocha.vercel.app/",
      repo: "https://github.com/imprjde/react-movie-website",
      title: "Movies App",
    },
    {
      id: 2,
      src: Second,
      href: "https://redux-crud-gules.vercel.app/",
      repo: "https://github.com/imprjde/redux-crud",
      title: "Redux Toolkit CRUD",
    },
    {
      id: 3,
      src: Seventh,
      href: "https://farmer-motion.netlify.app/",
      repo: "https://github.com/imprjde/framer-motion-project",
      title: "Challenge Manager (Framer Motion + Redux Tool Kit )",
    },
    {
      id: 4,
      src: Third,
      href: "https://ecommerce-site-lime-alpha.vercel.app/",
      repo: "https://github.com/imprjde/ecommerce-site",
      title: "React E-Commerce Site",
    },
    {
      id: 5,
      src: Eight,
      href: "https://react-posts-comment.netlify.app/",
      repo: "https://github.com/imprjde/react-post-comments",
      title: "A Project Using JSON Placeholder Dummy API",
    },
    {
      id: 6,
      src: Ninth,
      href: "https://react-order-page.netlify.app/",
      repo: "https://github.com/imprjde/order-page",
      title: "React Order Page Project",
    },
    {
      id: 7,
      src: Fourth,
      href: "https://prajwal-4whc835hu-imprjde7-gmailcom.vercel.app/",
      repo: "https://github.com/imprjde/prajwal",
      title: "React Todo App",
    },
    {
      id: 8,
      src: Fifth,
      href: "https://react-pagination-mauve-iota.vercel.app/",
      repo: "https://github.com/imprjde/react-pagination",
      title: "React Pagination",
    },
    {
      id: 9,
      src: Sixth,
      href: "https://imprjde.github.io/tindog/#cta",
      repo: "https://github.com/imprjde/tindog",
      title: "Tindog Website",
    },
  ];
  return (
    <Element
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-fit md:pt-0 pt-[120px]"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="flex flex-row py-12 lg:grid  lg:grid-cols-3 lg:gap-8 overflow-auto">
          {portfolios.map(({ id, src, href, repo, title }) => (
            <div
              key={id}
              className="shadow-md duration-300
                mx-6 hover:scale-105  shadow-gray-600 rounded-lg"
            >
              <img src={src} alt="" className="rounded-md " />

              <div className="absolute inset-0 flex items-center cursor-pointer justify-center pb-12 text-xl font-bold col opacity-0 bg-black bg-opacity-50 hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-center">{title}</p>
              </div>

              <div className="flex items-center justify-center">
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className=" cursor-pointer w-1/2 px-6 py-3 m-4 z-10 duration-200 hover:scale-105"
                >
                  Demo
                </a>
                <a
                  href={repo}
                  target="_blank"
                  rel="noreferrer"
                  className=" w-1/2 px-6 py-3 m-4 z-10 duration-200 hover:scale-105 cursor-pointer "
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Portfolio;
