"use client";
import { motion } from "framer-motion";
const ExperienceCard = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut", duration: 1, delay: 0.25 }}
      viewport={{
        once: true,
      }}
      className="relative pl-8 sm:pl-32 py-6 group"
    >
      <div className="font-bold text-2xl text-main mb-1 sm:mb-0">
        {data.title}
      </div>

      <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
        <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-main bg-[#070139] rounded-full">
          {data.date}
        </time>
        <div className="text-xl font-semibold text-slate-300">{data.place}</div>
      </div>
      {data.description.map((desc, i) => {
        return (
          <p key={i} className="text-slate-100 text-lg">
            <span className="text-main">&#8227;</span> {desc.data}
          </p>
        );
      })}
    </motion.div>
  );
};

export default ExperienceCard;
