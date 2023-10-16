"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <section className="mt-32">
      <h1 className="text-center text-4xl font-outfit font-semibold text-[#64ffDA]">
        skills
      </h1>
      <section className="p-10">
        <div className="flex flex-col xl:flex-row justify-end items-center gap-5">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 1, delay: 0.5 }}
            className=" opacity-50 mt-5  hover:opacity-100 h-full xl:h-[22rem] 2xl:h-[21rem] bg-none w-[20rem] lg:w-1/2 border-b-4 grayscale hover:grayscale-0 hover:border-b-[10px] transition-all duration-500 border-white"
          >
            <h1 className="text-white text-center text-xl font-outfit font-bold mb-5">
              Front End
            </h1>
            <div className="flex flex-wrap justify-center items-center gap-5">
              <figure className="itooltip" title="React">
                <div className="relative w-20 h-20">
                  <Image
                    src="/images/stackimg/atom.png"
                    alt="react"
                    fill={true}
                    className="hover:scale-110 transition-all duration-300 cursor-pointer"
                    priority
                  />
                </div>
              </figure>
              <figure className="itooltip" title="NextJS">
                <div className="relative w-20 h-20">
                  <Image
                    src="/images/stackimg/nextjs.png"
                    alt="nextjs"
                    fill={true}
                    className="hover:scale-110 transition-all duration-300 cursor-pointer"
                    priority
                  />
                </div>
              </figure>
              <figure className="itooltip" title="Tailwind CSS">
                <div className="relative w-20 h-20">
                  <Image
                    src="/images/stackimg/tailwind.png"
                    alt="tailwindcss"
                    fill={true}
                    className="hover:scale-110 transition-all duration-300 cursor-pointer"
                    priority
                  />
                </div>
              </figure>
              <figure className="itooltip" title="Angular">
                <div className="relative w-20 h-20">
                  <Image
                    src="/images/stackimg/angular.png"
                    alt="angular"
                    fill={true}
                    className="hover:scale-110 transition-all duration-300 cursor-pointer"
                    priority
                  />
                </div>
              </figure>
              <figure className="itooltip" title="HTML">
                <div className="relative w-20 h-20">
                  <Image
                    src="/images/stackimg/html.png"
                    alt="html"
                    fill={true}
                    className="hover:scale-110 transition-all duration-300 cursor-pointer"
                    priority
                  />
                </div>
              </figure>
              <figure className="itooltip" title="CSS">
                <div className="relative w-20 h-20">
                  <Image
                    src="/images/stackimg/css.png"
                    alt="css"
                    fill={true}
                    className="hover:scale-110 transition-all duration-300 cursor-pointer"
                    priority
                  />
                </div>
              </figure>
              <figure className="itooltip" title="Javascript">
                <div className="relative w-20 h-20">
                  <Image
                    src="/images/stackimg/javascript.png"
                    alt="js"
                    fill={true}
                    className="hover:scale-110 transition-all duration-300 cursor-pointer"
                    priority
                  />
                </div>
              </figure>
              <figure className="itooltip" title="Typescript">
                <div className="relative w-16 h-16">
                  <Image
                    src="/images/stackimg/typescript.png"
                    alt="ts"
                    fill={true}
                    className="hover:scale-110 transition-all duration-300 cursor-pointer"
                    priority
                  />
                </div>
              </figure>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 1, delay: 0.25 }}
            className="opacity-50 mt-5 hover:opacity-100 h-full xl:h-[22rem] 2xl:h-[21rem] bg-none w-[20rem] lg:w-1/2 border-b-4 grayscale hover:grayscale-0 hover:border-b-[10px] transition-all duration-500 border-white"
          >
            <h1 className="text-white text-center text-xl font-outfit font-bold mb-5">
              Back End
            </h1>
            <div className="flex flex-col items-center">
              <div className="flex flex-wrap items-center gap-5">
                <figure className="itooltip" title=".NET Core">
                  <div className="relative w-20 h-20">
                    <Image
                      src="/images/stackimg/net.png"
                      alt="net"
                      fill={true}
                      className="hover:scale-110 transition-all duration-300 cursor-pointer"
                      priority
                    />
                  </div>
                </figure>
                <figure className="itooltip" title="ExpressJS">
                  <div className="relative w-20 h-20">
                    <Image
                      src="/images/stackimg/express.png"
                      alt="express"
                      fill={true}
                      className="hover:scale-110 transition-all duration-300 cursor-pointer"
                      priority
                    />
                  </div>
                </figure>
              </div>
              <div className="flex flex-wrap items-center gap-5">
                <figure className="itooltip" title="Java Springboot">
                  <div className="relative w-20 h-20">
                    <Image
                      src="/images/stackimg/springboot.png"
                      alt="springboot"
                      fill={true}
                      className="hover:scale-110 transition-all duration-300 cursor-pointer"
                      priority
                    />
                  </div>
                </figure>
                <figure className="itooltip" title="NodeJS">
                  <div className="relative w-20 h-20">
                    <Image
                      src="/images/stackimg/nodejs.png"
                      alt="nodejs"
                      fill={true}
                      className="hover:scale-110 transition-all duration-300 cursor-pointer"
                      priority
                    />
                  </div>
                </figure>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 1, delay: 0.75 }}
            className="opacity-50  mt-5 hover:opacity-100 h-full xl:h-[22rem] 2xl:h-[21rem] bg-none w-[20rem] lg:w-1/2 border-b-4 grayscale hover:grayscale-0 hover:border-b-[10px] transition-all duration-500 border-white"
          >
            <h1 className="text-white text-center text-xl font-outfit font-bold mb-5">
              Database
            </h1>
            <div className="flex flex-col items-center">
              <div className="flex flex-wrap justify-end items-center gap-5">
                <figure className="itooltip" title="PostgreSQL">
                  <div className="relative w-20 h-20">
                    <Image
                      src="/images/stackimg/postgresql.png"
                      alt="postgresql"
                      fill={true}
                      className="hover:scale-110 transition-all duration-300 cursor-pointer"
                      priority
                    />
                  </div>
                </figure>
                <figure className="itooltip" title="MySQL">
                  <div className="relative w-20 h-20">
                    <Image
                      src="/images/stackimg/mysql.png"
                      alt="mysql"
                      fill={true}
                      className="hover:scale-110 transition-all duration-300 cursor-pointer"
                      priority
                    />
                  </div>
                </figure>
              </div>
              <div className="flex flex-wrap justify-end items-center gap-5">
                <figure className="itooltip" title="Firebase">
                  <div className="relative w-20 h-20">
                    <Image
                      src="/images/stackimg/firebase.png"
                      alt="firebase"
                      fill={true}
                      className="hover:scale-110 transition-all duration-300 cursor-pointer"
                      priority
                    />
                  </div>
                </figure>
                <figure className="itooltip" title="MongoDB">
                  <div className="relative w-20 h-20">
                    <Image
                      src="/images/stackimg/mongodb.png"
                      alt="mongodb"
                      fill={true}
                      className="hover:scale-110 transition-all duration-300 cursor-pointer"
                      priority
                    />
                  </div>
                </figure>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </section>
  );
};

export default Skills;
