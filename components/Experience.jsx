"use client";
import ExperienceCard from "./ExperienceCard";
import { motion } from "framer-motion";

export default function Experience({ section }) {
  const experienceData = [
    {
      title: "Software Engineer I",
      place: "FitAja - PT FitAja Digital Nusantara",
      description: [
        {
          data: "Built a Health Care and Lifestyle Generative AI Agent",
        },
        {
          data: "Built a Health Care and Lifestyle E-Commerce",
        },
        {
          data: "Implementing and setting up Cloud Infrastructure such as GCP and Virtual Machine",
        },
        {
          data: "Tech Stack: Nextjs, Laravel/PHP, PostgreSQL, GCP, Gemini",
        },
      ],
      date: "Present",
    },
    {
      title: "Software Engineer I - II",
      place: "Mandiri Inhealth",
      description: [
        {
          data: "Built a Full Stack Membership App using React and .NET Core",
        },
        {
          data: "Integrated Membership app and other app with Kafka",
        },
        {
          data: "Collaborating with analyst, QA and stakeholders to deliver the application for better business outcome",
        },
        {
          data: "Lead and mentored junior engineers",
        },
        {
          data: "Tech Stack: React, .NET Core, SQL, Kafka, Docker",
        },
      ],
      date: "2023-2024",
    },
    {
      title: "Software Engineer Intern",
      place: "ADINS - PT. Adicipta Inovasi Teknologi",
      description: [
        {
          data: "Undertake project development using Agile Methodology and participated in daily stand-ups, sprint plannings, sprint reviews and sprint retrospectives",
        },
        {
          data: "Developed a fast, clean and responsive website using Angular (TypeScript) and .NET Framework",
        },
        {
          data: "Researched about integration between the project's backend and Camunda Modeler framework (Electron JS)",
        },
        {
          data: "Collaborated with other teams such as RnD, IT Support and Tech Team",
        },
      ],
      date: "2022-2023",
    },
    {
      title: "BINUS University",
      place: "Jakarta",
      description: [
        {
          data: "Bachelor's Degree, Computer Science",
        },
      ],
      date: "2019-2023",
    },
  ];
  return (
    <section ref={section} className="min-h-screen pt-14 mt-32">
      <motion.h1
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
        viewport={{
          once: true,
        }}
        className="text-center lg:text-left text-4xl text-main font-bold"
      >
        experience x education
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 1, delay: 0.3 }}
        viewport={{
          once: true,
        }}
        className="flex justify-center lg:justify-start items-center mt-12"
      >
        <section className="p-10 h-full w-full lg:w-1/2 bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-[#070139]">
          <div className="-my-6">
            {experienceData.map((data, i) => {
              return <ExperienceCard key={data.title} data={data} />;
            })}
          </div>
        </section>
      </motion.div>
    </section>
  );
}
