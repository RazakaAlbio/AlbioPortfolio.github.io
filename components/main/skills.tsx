import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { motion } from "framer-motion";
import { SkillText } from "@/components/sub/skill-text";

import { SKILL_DATA } from "@/constants";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export const Skills = () => {
  return (
    <motion.section
      id="skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
      style={{ transform: "scale(0.9)" }}
      className="flex flex-col items-center justify-center gap-2 sm:gap-3 h-full relative overflow-hidden py-10 sm:py-15 md:py-20"
    >
      <motion.div variants={fadeInUp}>
        <SkillText />
      </motion.div>

      <motion.div 
        variants={staggerContainer}
        className="flex flex-row justify-around flex-wrap mt-2 sm:mt-3 md:mt-4 gap-2 sm:gap-3 md:gap-4 lg:gap-5 items-center px-2 sm:px-4 md:px-6"
      >
        {SKILL_DATA.map((skill, i) => (
          <motion.div
            key={skill.skill_name}
            variants={fadeInUp}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <SkillDataProvider
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i}
            />
          </motion.div>
        ))}
      </motion.div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </motion.section>
  );
};
