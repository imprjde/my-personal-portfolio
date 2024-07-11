import React, { useEffect, useState } from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Home = () => {
  const [isAnimating, setIsAnimating] = useState(true);

  const title = [
    "I",
    "'",
    "m",
    " ",
    "a",
    " ",
    "S",
    "o",
    "f",
    "t",
    "w",
    "a",
    "r",
    "e",
  ];

  const titileTwo = ["D", "e", "v", "e", "l", "o", "p", "e", "r"];

  useEffect(() => {
    setTimeout(() => {
      setIsAnimating(false);
    }, 3000);
  }, []);

  return (
    <div name="home">
      <div
        id="MobileScreen"
        className="h-screen md:hidden w-full bg-gradient-to-b from-black via-black to-gray-800  "
      >
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-between h-full px-4 md:flex-row">
          <motion.div className="flex overflow-x-hidden flex-col justify-center h-full sm:w-[500px]">
            <div className="flex">
              {title.map((char, i) => (
                <motion.h2
                  key={i}
                  initial={{ x: -300 }}
                  animate={{ x: 0 }}
                  transition={{
                    duration: 2,
                    type: "spring",
                    bounce: 0.4,
                    delay: i * 0.24,
                  }}
                  className="text-4xl sm:text-7xl font-bold text-white"
                  style={{ marginRight: char === " " ? "0.3em" : 0 }}
                >
                  {char}
                </motion.h2>
              ))}
            </div>
            <div className="flex">
              {titileTwo.map((char, i) => (
                <motion.h2
                  key={i}
                  initial={{ x: 350 }}
                  animate={{ x: 0 }}
                  transition={{
                    duration: 2,
                    type: "spring",
                    bounce: 0.4,
                    delay: i * 0.24,
                  }}
                  className="text-4xl sm:text-7xl font-bold text-white"
                  style={{ marginRight: char === " " ? "0.3em" : 0 }}
                >
                  {char}
                </motion.h2>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.2, 0.5, 0.8, 1] }}
              transition={{ duration: 3 }}
              className="text-gray-400 py-4 max-w-md"
            >
              I am an aspiring Junior Software Developer hailing from India. My
              professional experience encompasses a proficiency in web
              technologies such as React JS, Next JS, and Redux Toolkit, among
              others.
            </motion.p>

            <div>
              <Link
                to="projects"
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

          <div className="md:w-[355px]  w-[300px]">
            <motion.img
              src={HeroImage}
              alt="my profile"
              className="rounded-2xl mx-auto md:w-full"
            />
          </div>
        </div>
      </div>

      <motion.div
        name="home"
        id="DesktopScreen"
        initial={{ y: -300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          type: "spring",
          bounce: 0.7,
        }}
        className="hidden md:flex m-auto  justify-center items-center w-full h-screen"
      >
        <motion.div
          initial={{
            height: "70%",
            width: "70%",
            borderRadius: "24px",
          }}
          animate={{
            height: "100%",
            width: "100%",
            borderRadius: "0",
          }}
          transition={{ duration: 0.9, delay: 2 }}
          id="H-W-Transition"
          className="w-[70%] h-[70%] pt-20 md:pt-0 bg-gradient-to-b from-black via-black to-gray-800  flex m-auto justify-center items-center"
        >
          <motion.div id="radius" className="h-screen w-full  ">
            {!isAnimating && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="max-w-screen-lg mx-auto pb-20 md:pb-0 flex flex-col items-center justify-between h-full px-4 md:flex-row"
              >
                <div className="flex flex-col justify-center h-full sm:w-[500px]">
                  <div className=" flex">
                    {title.map((char, i) => (
                      <>
                        <motion.h2
                          key={i}
                          initial={{ y: -300 }}
                          animate={{ y: 0 }}
                          transition={{
                            duration: 2,
                            type: "spring",
                            bounce: 0.5,
                            delay: i * 0.24,
                          }}
                          className="text-4xl hidden md:flex tracking-wide md:tracking-normal sm:text-7xl font-bold text-white"
                          style={{ marginRight: char === " " ? "0.3em" : 0 }}
                        >
                          {char}
                        </motion.h2>
                        <motion.h2
                          key={i}
                          initial={{ y: -142 }}
                          animate={{ y: 0 }}
                          transition={{
                            duration: 2,
                            type: "spring",
                            bounce: 0.5,
                            delay: i * 0.24,
                          }}
                          className="text-4xl md:hidden tracking-wide md:tracking-normal sm:text-7xl font-bold text-white"
                          style={{ marginRight: char === " " ? "0.3em" : 0 }}
                        >
                          {char}
                        </motion.h2>
                      </>
                    ))}
                  </div>
                  <h2 className="text-4xl sm:text-7xl font-bold text-white">
                    Developer
                  </h2>
                  <p className="text-gray-500 py-4 max-w-md">
                    I am an aspiring Junior Software Developer hailing from
                    India. My professional experience encompasses a proficiency
                    in web technologies such as React JS, Next JS, Node JS ,
                    Express JS, MongoDB and Redux Toolkit, among others.
                  </p>

                  <div>
                    <Link
                      to="projects"
                      smooth
                      duration={500}
                      className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                    >
                      Portfolio
                      <span className="group-hover:rotate-90 duration-300">
                        <MdOutlineKeyboardArrowRight
                          size={25}
                          className="ml-1"
                        />
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="md:w-[355px]  w-[300px]">
                  {/* <motion.img
                    initial={{ rotateY: 0 }}
                    animate={{ rotateY: 360 }}
                    transition={{ duration: 1, delay: 3 }}
                    src={HeroImage}
                    alt="my profile"
                    className="rounded-2xl mx-auto md:w-full"
                  /> */}

                  <motion.img
                    initial={{ y: -800 }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 1,
                      delay: 1,
                      type: "easeInOut",
                      bounce: 0.5,
                    }}
                    src={HeroImage}
                    alt="my profile"
                    className="rounded-2xl mx-auto md:w-full"
                  />
                </div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
