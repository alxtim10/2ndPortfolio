"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export default function Hero({ refs }) {
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <section className="min-h-screen flex flex-col justify-around">
      <section className="flex justify-center lg:justify-between items-center w-full">
        <div className="flex flex-col justify-center items-center lg:items-start font-outfit gap-2 lg:gap-10">
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 2 }}
            className="text-2xl md:text-3xl lg:text-6xl"
          >
            Hi, I&apos;m <span className="text-main">Alexander</span>
          </motion.h1>
          <div className="w-60 md:w-[15rem] lg:w-[50rem]">
            <motion.p
              drag
              dragConstraints={{
                top: -50,
                left: -50,
                right: 50,
                bottom: 50,
              }}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeOut", duration: 2 }}
              className="text-xl md:text-2xl lg:text-8xl text-center lg:text-left"
            >
              <b>Web Alchemist</b>:
              <br />
              Crafting Digital Experiences with Code and Creativity
              <span className="hidden text-lg xl:block">(drag me)</span>
            </motion.p>
          </div>
        </div>
      </section>
      <section className="lg:hidden flex flex-col justify-center items-center">
        <Link href="/">
          <h1 className="text-xl md:text-3xl cursor-pointer">
            <span className="text-main font-extrabold">alex</span>ander timotius
            crespo sitompul
          </h1>
        </Link>
        <div className="flex gap-5 text-md md:text-2xl">
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
      </section>
    </section>
  );
}
