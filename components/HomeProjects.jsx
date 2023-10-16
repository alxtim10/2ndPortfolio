'use client'
import React from "react";
import CarouselContainer from "./Carousel/CarouselContainer";
import { motion } from "framer-motion";

const HomeProjects = () => {
  return (
    <section className="px-[2rem]">
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeOut", duration: 2 }}
        whileInView={true}
        className="pl-[6rem] mt-20 mb-10 text-4xl font-outfit font-semibold text-[#64ffDA]"
      >
        project highlights
      </motion.h1>
      <CarouselContainer />
    </section>
  );
};

export default HomeProjects;
