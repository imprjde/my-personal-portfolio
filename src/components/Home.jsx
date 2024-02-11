// import React from "react";
// import HeroImage from "../assets/heroImage.png";
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import { Link } from "react-scroll";
// import { motion } from "framer-motion";

// const Home = () => {
//   return (
//     <div
//       name="home"
//       className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800  "
//     >
//       <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-between h-full px-4 md:flex-row">
//         <motion.div
//           initial={{ opacity: 0, y: 200 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="flex flex-col justify-center h-full sm:w-[500px]"
//         >
//           <motion.h2 className="text-4xl sm:text-7xl font-bold text-white">
//             I'm a Software Developer
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: [0.2, 0.5, 0.8, 1] }}
//             transition={{ duration: 3 }}
//             className="text-gray-500 py-4 max-w-md"
//           >
//             I am an aspiring Junior Software Developer hailing from India. My
//             professional experience encompasses a proficiency in web
//             technologies such as React JS, Next JS, and Redux Toolkit, among
//             others.
//           </motion.p>

//           <div>
//             <Link
//               to="portfolio"
//               smooth
//               duration={500}
//               className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
//             >
//               Portfolio
//               <span className="group-hover:rotate-90 duration-300">
//                 <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
//               </span>
//             </Link>
//           </div>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 200 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, type: "tween" }}
//           className="md:w-[355px]  w-[300px]"
//         >
//           <img
//             src={HeroImage}
//             alt="my profile"
//             className="rounded-2xl mx-auto md:w-full"
//           />
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Home;

/////////////////////////////////////////////////////////////////////////////////////////////////

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

  useEffect(() => {
    setTimeout(() => {
      setIsAnimating(false);
    }, 3000);
  }, []);
  console.log(title.length);

  return (
    <motion.div
      initial={{ y: -300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1.5,
        ease: "easeInOut",
        type: "spring",
        bounce: 0.7,
      }}
      id="Y-Transition"
      className="flex m-auto  justify-center items-center w-full h-screen"
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
        <motion.div
          id="radius"
          name="home"
          // className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800  "
          className="h-screen w-full  "
        >
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
                        initial={{ y: -200 }}
                        animate={{ y: 0 }}
                        transition={{
                          duration: 2,
                          type: "spring",
                          bounce: 0.5,
                          delay: i * 0.24,
                        }}
                        className="text-4xl hidden md:flex tracking-wide md:tracking-normal sm:text-7xl font-bold text-white"
                        style={{ marginRight: char === " " ? "0.3em" : 0 }} // Add space between letters
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
                        style={{ marginRight: char === " " ? "0.3em" : 0 }} // Add space between letters
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
                  I am an aspiring Junior Software Developer hailing from India.
                  My professional experience encompasses a proficiency in web
                  technologies such as React JS, Next JS, and Redux Toolkit,
                  among others.
                </p>

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
              </div>
              <div className="md:w-[355px]  w-[300px]">
                <motion.img
                  initial={{ rotateY: 0 }}
                  animate={{ rotateY: 360 }}
                  transition={{ duration: 1, delay: 3 }}
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
  );
};

export default Home;
