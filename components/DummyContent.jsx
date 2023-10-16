import Link from "next/link";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Skills from "./Skills";
import HomeProjects from "./HomeProjects";
import Footer from "./Footer";

const DummyContent = () => (
  <>
    <section className="p-5 lg:pl-32">
      <Hero />
      <AboutMe />
      <Experience />
    </section>
      <HomeProjects />
    <Skills />
    <Footer />
  </>
);

export default DummyContent;
