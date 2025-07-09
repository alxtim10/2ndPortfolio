"use client";

import Image from "next/image";
import React from "react";
import Contacts from "./Contacts";
import { motion } from "framer-motion";

export default function AboutMe({ section }) {
  return (
    <section id="first-section" ref={section} className="mt-20 lg:mt-28">
      <motion.h1
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
        viewport={{
          once: true,
        }}
        className="text-center lg:text-left text-4xl font-outfit font-bold text-main"
      >
        about me
      </motion.h1>
      <div className="w-full flex flex-col justify-center items-center lg:flex-row lg:justify-start lg:items-start gap-10 lg:gap-20 font-outfit lg:mt-10">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 1, delay: 0.25 }}
          viewport={{
            once: true,
          }}
          className="flex flex-col justify-between items-center"
        >
          <p className="w-[24rem] text-xl text-center lg:text-left tracking-wide p-4 lg:p-0">
            Computer Science graduate from{" "}
            <span className="text-main text-xl font-bold">
              BINUS University
            </span>{" "}
            with 1+ years of experience building high scale applications in the digital market.
            <br className="hidden md:block" /> Experienced working closely with Software Engineering 
            especially in the aspects of frontend, backend and software development things. 
            Infrastructure wise, have an understanding on cloud platform, virtual machine and databases.
          </p>
          <Contacts />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 1, delay: 0.35 }}
          viewport={{
            once: true,
          }}
          className="relative w-52 h-72 md:h-80 md:w-64 shadow-xl"
        >
          <Image
            src="/images/foto.jpeg"
            alt="profile"
            fill={true}
            className="shadow-xl rounded-xl"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
