"use client";

import React, { useRef } from "react";
import "./Projects.css";
import PagesNavbar from "../navigation/PagesNavbar";

const Projects = () => {
  const skenaRef = useRef(null);
  const simudaRef = useRef(null);
  const montraceRef = useRef(null);
  const guitarCaveRef = useRef(null);
  const angklungRef = useRef(null);
  const nikeRef = useRef(null);
  const portfolioRef = useRef(null);
  const breakfastRef = useRef(null);
  const ascRef = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <section>
      <PagesNavbar />

      <div ref={ascRef}>
        <div className="pl-5 lg:pl-20">
          <h1 className="border-b border-black text-4xl font-outfit font-bold w-1/2 lg:w-1/4 mb-2">
            Company Profile Website
          </h1>
          <p className="text-lg">Company Profile Website for PT Antika Setia Cemerlang</p>
          <p className="mb-4">Stack : Next.js</p>
          <a
            href="https://www.antikasetiacemerlang.com"
            className="border border-black py-2 px-3 hover:bg-black hover:text-white transition duration-300"
          >
            Visit
          </a>
        </div>
        <div className="flex justify-center items-center w-full px-5 lg:pl-20 py-10 gap-5">
          <div className="flex flex-col w-full gap-5">
            <img
              src="/images/projects/asc.png"
              alt=""
              className="imgCard w-full rounded-xl"
            />
            <img
              src="/images/projects/asc2.png"
              alt=""
              className="imgCard w-full rounded-xl"
            />
          </div>
          <div className="hidden lg:block w-full"></div>
        </div>
      </div>

      <div ref={simudaRef}>
        <div className="pl-5 lg:pl-20">
          <h1 className="border-b border-black text-4xl font-outfit font-bold w-1/2 lg:w-1/4 mb-2">
            SIMUDA Guest Book
          </h1>
          <p className="text-lg">Event Guest Registration Web for GKI Grand Wisata&apos;s youth community</p>
          <p className="mb-4">Stack : React + Vite, Tailwind, Firebase</p>
          <a
            href="https://simudaguestbook.netlify.app"
            className="border border-black py-2 px-3 hover:bg-black hover:text-white transition duration-300"
          >
            Visit
          </a>
        </div>
        <div className="flex justify-center items-center w-full px-5 lg:pl-20 py-10 gap-5">
          <div className="flex flex-col w-full gap-5">
            <img
              src="/images/projects/projectS1.png"
              alt=""
              className="imgCard w-full rounded-xl"
            />
            <img
              src="/images/projects/projectS2.png"
              alt=""
              className="imgCard w-full rounded-xl"
            />
          </div>
          <div className="hidden lg:block w-full"></div>
        </div>
      </div>

      <div ref={breakfastRef}>
        <div className="pl-5 lg:pl-20">
          <h1 className="border-b border-black text-4xl font-outfit font-bold w-1/2 lg:w-1/4 mb-2">
            Breakfast Generator
          </h1>
          <p className="text-lg">Breakfast Generator CRUD</p>
          <p className="mb-4">Stack : Next.js, GO, Supabase</p>
          <a
            href="https://github.com/alxtim10/breakfast-generator"
            className="border border-black py-2 px-3 hover:bg-black hover:text-white transition duration-300"
          >
            Visit
          </a>
        </div>
        <div className="flex justify-center items-center w-full px-5 lg:pl-20 py-10 gap-5">
          <div className="flex flex-col w-full gap-5">
            <img
              src="/images/projects/projectB1.png"
              alt=""
              className="imgCard w-full rounded-xl"
            />
          </div>
          <div className="hidden lg:block w-full"></div>
        </div>
      </div>

      <div ref={skenaRef}>
        <div className="pl-5 lg:pl-20">
          <h1 className="border-b border-black text-4xl font-outfit font-bold w-1/2 lg:w-1/4 mb-2">
            Skena Hub
          </h1>
          <p className="text-lg">Online Fashion E-Commerce Website</p>
          <p className="mb-4">Stack : React + Vite, Tailwind</p>
          <a
            href="https://skenahub.netlify.app"
            className="border border-black py-2 px-3 hover:bg-black hover:text-white transition duration-300"
          >
            Visit
          </a>
        </div>
        <div className="flex justify-center items-center w-full px-5 lg:pl-20 py-10 gap-5">
          <div className="flex flex-col w-full gap-5">
            <img
              src="/images/projects/projectA1.png"
              alt=""
              className="imgCard w-full rounded-xl"
            />
            <img
              src="/images/projects/projectA5.png"
              alt=""
              className="imgCard w-full rounded-xl"
            />
            <img
              src="/images/projects/projectA3.png"
              alt=""
              className="imgCard w-full rounded-xl"
            />
            <img
              src="/images/projects/projectA4.png"
              alt=""
              className="imgCard w-full rounded-xl"
            />
          </div>
          <div className="hidden lg:block w-full"></div>
        </div>
      </div>

      <div ref={montraceRef}>
        <div className="pl-5 lg:pl-20">
          <h1 className="border-b border-black text-4xl font-outfit font-bold w-1/2 lg:w-1/4 mb-2">
            montrac.e
          </h1>
          <p className="text-lg">Money Tracker Electronic</p>
          <p className="mb-4">Stack : Next.js, Tailwind, Supabase</p>
          <a
            href="https://montrace.vercel.app"
            className="border border-black py-2 px-3 hover:bg-black hover:text-white transition duration-300"
          >
            Visit
          </a>
        </div>
        <div className="flex justify-center items-center w-full px-5 lg:pl-20 py-10 gap-5">
          <div className="flex flex-col w-full gap-5">
            <img
              src="/images/projects/2.png"
              alt=""
              className="imgCard w-full rounded-xl"
            />
            <img
              src="/images/projects/2A.png"
              alt=""
              className="imgCard w-full rounded-xl"
            />
            <img
              src="/images/projects/2B.png"
              alt=""
              className="imgCard w-full rounded-xl"
            />
          </div>
          <div className="hidden lg:block w-full"></div>
        </div>
      </div>

      <div ref={guitarCaveRef}>
        <div className="pl-5 lg:pl-20">
          <h1 className="border-b border-black text-4xl font-outfit font-bold w-1/2 lg:w-1/4 mb-2">
            Guitar Cave
          </h1>
          <p className="text-lg">Guitar Shop Website</p>
          <p className="mb-4">Stack : Next.js, Express.js, Tailwind</p>
          <a
            href="https://guitarcave.netlify.app"
            className="border border-black py-2 px-3 hover:bg-black hover:text-white transition duration-300"
          >
            Visit
          </a>
        </div>
        <div className="flex justify-center items-center w-full px-5 lg:pl-20 py-10 gap-5">
          <div className="flex flex-col w-full gap-5">
            <img
              src="/images/projects/projectG1.png"
              alt=""
              className="imgCard w-full rounded-xl"
            />
            <img
              src="/images/projects/projectG2.png"
              alt=""
              className="imgCard w-full rounded-xl"
            />
          </div>
          <div className="hidden lg:block w-full"></div>
        </div>
      </div>

      <div ref={angklungRef}>
        <div className="pl-5 lg:pl-20">
          <h1 className="border-b border-black text-4xl font-outfit font-bold w-1/2 lg:w-1/4 mb-2">
            Angklung Traditional Instrument VST Plugin
          </h1>
          <p className="text-lg">VST Plugin for Digital Audio Workstation</p>
          <p className="mb-4">Stack : JUCE Framework</p>
          <a
            href="https://github.com/alxtim10"
            className="border border-black py-2 px-3 hover:bg-black hover:text-white transition duration-300"
          >
            GitHub
          </a>
        </div>
        <div className="flex justify-center items-center w-full px-5 lg:pl-20 py-10 gap-5">
          <div className="flex flex-col w-full gap-5">
            <img
              src="/images/projects/projectV1.png"
              alt=""
              className="imgCard w-full rounded-xl"
            />
          </div>
          <div className="hidden lg:block w-full"></div>
        </div>
      </div>

      <div ref={portfolioRef}>
        <div className="pl-5 lg:pl-20">
          <h1 className="border-b border-black text-4xl font-outfit font-bold w-1/2 lg:w-1/4 mb-2">
            Alexander&apos;s Portfolio
            <br />
            (Parallax Style)
          </h1>
          <p className="text-lg">My Personal Portfolio Website</p>
          <p className="mb-4">Stack : Next.js, Tailwind</p>
          <a
            href="https://imotioes2.netlify.app"
            className="border border-black py-2 px-3 hover:bg-black hover:text-white transition duration-300"
          >
            Visit
          </a>
        </div>
        <div className="flex justify-center items-center w-full px-5 lg:pl-20 py-10 gap-5">
          <div className="flex flex-col w-full gap-5">
            <img
              src="/images/projects/portfolio.png"
              alt=""
              className="imgCard w-full rounded-xl"
            />
          </div>
          <div className="hidden lg:block w-full"></div>
        </div>
      </div>

      <div ref={nikeRef}>
        <div className="pl-5 lg:pl-20">
          <h1 className="border-b border-black text-4xl font-outfit font-bold w-1/2 lg:w-1/4 mb-2">
            Nike Clone
          </h1>
          <p className="text-lg">Personal Nike Clone Web</p>
          <p className="mb-4">Stack : React + Vite, Tailwind</p>
          <a
            href="https://alxsnikeclone.netlify.app"
            className="border border-black py-2 px-3 hover:bg-black hover:text-white transition duration-300"
          >
            Visit
          </a>
        </div>
        <div className="flex justify-center items-center w-full px-5 lg:pl-20 py-10 gap-5">
          <div className="flex flex-col w-full gap-5">
            <img
              src="/images/projects/projectN1.png"
              alt=""
              className="imgCard w-full rounded-xl"
            />
          </div>
          <div className="hidden lg:block w-full"></div>
        </div>
      </div>

      <div className="hidden lg:block z-10 right-5 xl:right-24 2xl:right-56 fixed top-[30%] h-32">
        <h1 className="ml-[4rem] xl:ml-0 text-2xl xl:text-3xl font-outfit font-bold mb-2">
          projects / personal works
        </h1>
        <h1
          onClick={() => scrollToSection(ascRef)}
          className="text-2xl font-outfit font-bold ml-20 cursor-pointer mb-2 hover:translate-x-3 transition duration-300"
        >
          pt antika setia cemerlang
        </h1>
        <h1
          onClick={() => scrollToSection(simudaRef)}
          className="text-2xl font-outfit font-bold ml-20 cursor-pointer mb-2 hover:translate-x-3 transition duration-300"
        >
          simuda guest book
        </h1>
        <h1
          onClick={() => scrollToSection(breakfastRef)}
          className="text-2xl font-outfit font-bold ml-20 cursor-pointer mb-2 hover:translate-x-3 transition duration-300"
        >
          breakfast generator
        </h1>
        <h1
          onClick={() => scrollToSection(skenaRef)}
          className="text-2xl font-outfit font-bold ml-20 cursor-pointer mb-2 hover:translate-x-3 transition duration-300"
        >
          skena hub
        </h1>
        <h1
          onClick={() => scrollToSection(montraceRef)}
          className="text-2xl font-outfit font-bold ml-20 cursor-pointer mb-2 hover:translate-x-3 transition duration-300"
        >
          montrac.e
        </h1>
        <h1
          onClick={() => scrollToSection(guitarCaveRef)}
          className="text-2xl font-outfit font-bold ml-20 cursor-pointer mb-2 hover:translate-x-3 transition duration-300"
        >
          guitar cave
        </h1>
        <h1
          onClick={() => scrollToSection(angklungRef)}
          className="text-2xl font-outfit font-bold ml-20 cursor-pointer mb-2 hover:translate-x-3 transition duration-300"
        >
          angklung traditional instrument vst plugin
        </h1>
        <h1
          onClick={() => scrollToSection(portfolioRef)}
          className="text-2xl font-outfit font-bold ml-20 cursor-pointer mb-2 hover:translate-x-3 transition duration-300"
        >
          personal portfolio
        </h1>
        <h1
          onClick={() => scrollToSection(nikeRef)}
          className="text-2xl font-outfit font-bold ml-20 cursor-pointer mb-2 hover:translate-x-3 transition duration-300"
        >
          alxnike
        </h1>
      </div>
    </section>
  );
};

export default Projects;
