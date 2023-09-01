

import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800  "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-between h-full px-4 md:flex-row">
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center h-full sm:w-[500px]"
        >
          <motion.h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Software Developer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.2, 0.5, 0.8, 1] }}
            transition={{ duration: 3 }}
            className="text-gray-500 py-4 max-w-md"
          >
            I am an aspiring Junior Software Developer hailing from India. My
            professional experience encompasses a proficiency in web
            technologies such as React JS, Next JS, and Redux Toolkit, among
            others.
          </motion.p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "tween" }}
          className="md:w-[355px]  w-[300px]"
        >
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto md:w-full"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
