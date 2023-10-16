import Image from "next/image";
import React from "react";

const Contacts = () => {
  return (
    <div className="flex justify-center lg:justify-start items-center w-full gap-5 mt-5">
      <div className="flex justify-center items-center gap-2 bg-[#3b3a3a] p-1 rounded-lg w-24">
        <a href="https://www.linkedin.com/in/alxtim/">
          <div className="relative w-8 h-8">
            <Image
              src="/images/footer/linkedin.png"
              alt="linkedin"
              fill={true}
              className="grayscale hover:grayscale-0 hover:scale-105 transition-all cursor-pointer"
              priority
            />
          </div>
        </a>
        <a href="https://github.com/alxtim10">
          <div className="relative w-9 h-9">
            <Image
              src="/images/footer/github.png"
              alt="github"
              fill={true}
              className="grayscale hover:grayscale-0 hover:scale-105 transition-all cursor-pointer"
              priority
            />
          </div>
        </a>
      </div>
      <span className="text-center text-white">
        |{" "}
        <a
          href="mailto:alxtim10@gmail.com"
          className="ml-3 hover:underline cursor-pointer"
        >
          alxtim10@gmail.com
        </a>
      </span>
    </div>
  );
};

export default Contacts;
