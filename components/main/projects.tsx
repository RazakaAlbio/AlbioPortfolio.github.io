"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "@/components/sub/project-card";

import { PROJECTS } from "@/constants";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export const Projects = () => {
  return (
    <motion.section
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
      className="flex flex-col items-center justify-center py-20"
    >
      <motion.h1 
        variants={{
          hidden: { y: 50, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              type: "spring",
              duration: 1.25,
              ease: [0.25, 0.1, 0.25, 1],
            },
          },
        }}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 sm:py-15 md:py-20 translate-y-[50px] sm:translate-y-[75px] md:translate-y-[100px]"
      >
        My Projects
      </motion.h1>
      <motion.div 
        variants={staggerContainer}
        className="h-full w-full flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10 px-2 sm:px-4 md:px-6 lg:px-10 translate-y-[25px] sm:translate-y-[35px] md:translate-y-[50px]"
      >
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.title}
            variants={{
              hidden: { y: 50, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                  ease: [0.25, 0.1, 0.25, 1],
                },
              },
            }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <ProjectCard
              src={project.image}
              title={project.title}
              description={project.description}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};
