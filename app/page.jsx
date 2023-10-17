"use client";
import DummyContent from "@/components/DummyContent";
import Navbar from "@/components/Navbar";
import ScrollContainer from "@/components/ScrollContainer";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function Home() {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);

  const refs = {
    aboutRef,
    experienceRef,
    projectsRef,
    skillsRef,
  };

  return (
    <section className="bg-gradient-to-br from-[#100e1f] to-[#070139]">
      <ScrollContainer>
        <DummyContent refs={refs} />
      </ScrollContainer>
      <Navbar refs={refs} />
    </section>
  );
}
