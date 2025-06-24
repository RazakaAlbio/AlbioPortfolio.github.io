"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row lg:flex-row items-center justify-center px-2 sm:px-4 md:px-6 lg:px-12 xl:px-20 mt-16 sm:mt-20 md:mt-28 lg:mt-32 xl:mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[6px] sm:py-[8px] px-[5px] sm:px-[7px] border border-[#7042f88b] opacity-[0.9]] w-fit"
        >
          <SparklesIcon className="text-[#b49bff] mr-[8px] sm:mr-[10px] h-4 w-4 sm:h-5 sm:w-5" />
          <h1 className="Welcome-text text-[11px] sm:text-[13px]">
            Bio Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-4 sm:gap-5 md:gap-6 mt-4 sm:mt-5 md:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-bold text-white max-w-[500px] sm:max-w-[550px] md:max-w-[600px] w-auto h-auto"
        >
          <span className="leading-tight">
            Crafting{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              innovative solutions
            </span>{" "}
            with cutting-edge technology.
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 my-3 sm:my-4 md:my-5 max-w-[500px] sm:max-w-[550px] md:max-w-[600px]"
        >
          I&apos;m a Full Stack Developer, IoT Engineer, and Machine Learning Engineer with expertise in web development, embedded systems, and AI solutions. Passionate about creating intelligent applications that bridge the physical and digital worlds.
        </motion.p>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center mt-6 sm:mt-8 md:mt-4 lg:mt-0"
      >
        <Image
          src="/ChatGPT Image Jun 20, 2025, 01_26_57 PM (1).svg"
          alt="work icons"
          height={450}
          width={450}
          draggable={false}
          className="select-none opacity-30 grayscale hover:opacity-50 transition-opacity duration-300 ease-in-out w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px]"
        />
      </motion.div>
    </motion.div>
  );
};
