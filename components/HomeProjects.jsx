"use client";
import React from "react";
import CarouselContainer from "./Carousel/CarouselContainer";
import { motion } from "framer-motion";
import Link from "next/link";

const HomeProjects = ({ section }) => {
  return (
    <section ref={section} className="mt-32 px-[2rem]">
      <div>
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 2 }}
          whileInView={true}
          className="text-center  mt-20 text-3xl lg:text-4xl font-outfit font-semibold text-[#64ffDA]"
        >
          project highlights
        </motion.h1>
        <Link href="/projects">
          <h1 className="text-center mb-10 text-lg hover:underline cursor-pointer">
            see all projects
          </h1>
        </Link>
      </div>
      <CarouselContainer />
    </section>
  );
};

export default HomeProjects;
