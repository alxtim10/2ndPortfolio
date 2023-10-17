"use client";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Skills from "./Skills";
import HomeProjects from "./HomeProjects";
import Footer from "./Footer";
import { useRef } from "react";

const DummyContent = ({ refs }) => {


  return (
    <>
      <section className="p-5 lg:pl-32">
        <Hero refs={refs}/>
        <AboutMe section={refs.aboutRef} />
        <Experience section={refs.experienceRef} />
      </section>
      <HomeProjects section={refs.projectsRef} />
      <Skills section={refs.skillsRef} />
      <Footer />
    </>
  );
};

export default DummyContent;
