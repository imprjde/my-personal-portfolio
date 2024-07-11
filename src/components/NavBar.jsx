import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [bar, setBar] = useState(1);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "projects",
    },
    {
      id: 4,
      link: "skills",
    },
    // {
    //   id: 5,
    //   link: "contact",
    // },
  ];
  return (
    <>
      <motion.div
        id="MobileScreen"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeIn", delay: 3.5 }}
        className="flex justify-between md:hidden items-center z-20 w-full h-20 px-4 text-white bg-black fixed "
      >
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: "tween" }}
        >
          <h1 className="text-[40px] md:text-5xl font-signature ml-2 mt-2">
            Prajwal Devadiga
          </h1>
        </motion.div>
        <motion.ul
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: "tween" }}
          className="hidden md:flex"
        >
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize flex flex-col justify-center items-center font-medium text-gray-500"
            >
              <Link to={link} onClick={() => setBar(id)} smooth duration={500}>
                {link.toUpperCase()}
              </Link>
              {bar === id && (
                <motion.span
                  layoutId="Tab_Indicator"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 w-12 h-[3px] rounded-sm "
                ></motion.span>
              )}
            </li>
          ))}
        </motion.ul>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden "
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={100}
                >
                  {link.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </motion.div>
      <motion.div
        id="DesktopScreen"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeIn", delay: 6 }}
        className="justify-between hidden md:flex items-center z-20 w-full h-20 px-4 text-white bg-black fixed "
      >
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: "tween" }}
        >
          <h1 className="text-[40px] md:text-5xl font-signature ml-2 mt-2">
            Prajwal Devadiga
          </h1>
        </motion.div>
        <motion.ul
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: "tween" }}
          className="hidden md:flex"
        >
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize flex flex-col justify-center items-center font-medium text-gray-500"
            >
              <Link to={link} onClick={() => setBar(id)} smooth duration={500}>
                {link.toUpperCase()}
              </Link>
              {bar === id && (
                <motion.span
                  layoutId="Tab_Indicator"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 w-12 h-[3px] rounded-sm "
                ></motion.span>
              )}
            </li>
          ))}
        </motion.ul>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden "
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={100}
                >
                  {link.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </motion.div>
    </>
  );
};

export default NavBar;
