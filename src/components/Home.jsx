import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <motion.h2
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-7xl  w-fit font-bold text-white"
          >
            I'm a Software Developer
          </motion.h2>
          <p className="text-gray-500 py-4 max-w-md">
            I am an aspiring Junior Software Developer hailing from India. My
            professional experience encompasses a proficiency in web
            technologies such as React JS, Next JS, and Redux Toolkit, among
            others.
          </p>

          <div>
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 "
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "spring",
            duration: 2,
            stiffness: "50",
          }}
        >
          <img
            src={HeroImage}
            alt="my profile"
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 1, stiffness: "100" }}
            className="rounded-2xl mx-auto  hover:scale-105 mb-6 mt-[-10px] md:mb-0 md:mt-0 md:pb-0  h-fit duration-300 w-[80%] md:w-full "
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
