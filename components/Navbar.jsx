"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const Navbar = ({ refs }) => {
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ ease: "easeOut", duration: 2 }}
      className="hidden fixed top-[45%] right-28 lg:flex flex-col justify-center items-end font-outfit"
    >
      <Link href="/">
        <h1 className="text-sm lg:text-3xl cursor-pointer">
          <span className="text-main font-extrabold">alex</span>ander timotius
          crespo sitompul
        </h1>
      </Link>
      <div className="flex gap-5 text-xl">
        <h1
          onClick={() => scrollToSection(refs.aboutRef)}
          className="cursor-pointer hover:-translate-x-2 hover:translate-y-2 hover:text-gray-400 transition-all duration-300"
        >
          about
        </h1>
        <h1
          onClick={() => scrollToSection(refs.experienceRef)}
          className="cursor-pointer hover:-translate-x-2 hover:translate-y-2 hover:text-gray-400 transition-all duration-300"
        >
          experience
        </h1>
        <h1
          onClick={() => scrollToSection(refs.projectsRef)}
          className="cursor-pointer hover:-translate-x-2 hover:translate-y-2 hover:text-gray-400 transition-all duration-300"
        >
          projects
        </h1>

        <h1
          onClick={() => scrollToSection(refs.skillsRef)}
          className="cursor-pointer hover:-translate-x-2 hover:translate-y-2 hover:text-gray-400 transition-all duration-300"
        >
          skills
        </h1>
      </div>
    </motion.section>
  );
};

export default Navbar;
