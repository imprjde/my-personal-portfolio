import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white pt-[120px] md:pt-0"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-12">
          I'm Prajwal Devadiga, a dedicated Software Developer with a background
          in IT. Armed with a Bachelor's degree in engineering, my passion for
          technology fuels my drive to create innovative solutions. With a keen
          focus on showcasing my expertise and past projects, my portfolio is a
          gateway into my journey as a developer.
        </p>

        <br />

        <p className="text-xl">
          My recent collaboration stands as a testament to my capabilities. I
          along with my senior Dev Team built a dynamic web application for{" "}
          <br /> My-Tyles Pvt Ltd (
          <a
            href="https://mytyles.com/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400"
          >
            {" "}
            mytyles.com{" "}
          </a>
          ) to scale their business online. Rooted in the values of precision
          and creativity, I believe in leveraging technology to shape the future
          while embracing every opportunity to learn and grow.
        </p>
      </div>
    </div>
  );
};

export default About;
