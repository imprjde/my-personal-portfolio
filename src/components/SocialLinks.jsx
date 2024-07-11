import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";

import { VscChromeClose, VscMenu } from "react-icons/vsc";
import { motion } from "framer-motion";

const SocialLinks = () => {
  const [show, setShow] = useState("hidden");

  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/prajwal-s-devadiga",
      style: "rounded-t-none md:rounded-tr-md  ",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/imprjde",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:prajwal.devadigaa@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/PrajwalResume.pdf",
      download: true,
    },
    {
      id: 5,
      child: (
        <>
          Twitter <FaTwitter size={30} />
        </>
      ),
      href: "https://twitter.com/prajwal_devv",
      style: "rounded-br-md",
    },
  ];

  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 2, delay: 4 }}
      className={` lg:flex flex-col  top-[50%] md:top-[35%] left-0 fixed`}
    >
      <ul>
        <motion.li
          className={`md:hidden rounded-tr-md ${
            show ? " rounded-br-md" : "rounded-br-none"
          }  rounded-l-none  flex justify-between items-center w-[60px] h-14 px-4  hover:rounded-md duration-300 bg-gray-500`}
        >
          <button
            onClick={() => setShow(!show)}
            className="flex justify-center items-center w-full text-white"
            target="_blank"
            rel="noreferrer"
          >
            {!show ? <VscChromeClose size={30} /> : <VscMenu size={30} />}
          </button>
        </motion.li>

        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={` ${
              show ? "hidden" : ""
            }  md:flex flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 ${style}`}
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SocialLinks;
