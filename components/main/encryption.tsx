"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { slideInFromTop, fadeInUp, staggerContainer } from "@/lib/motion";

export const Encryption = () => {
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
      className="flex flex-row relative items-center justify-center min-h-[150vh] w-full h-full pb-32 z-10"
    >
      <div className="absolute w-auto h-auto top-0  z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-2xl sm:text-3xl lg:text-[40px] font-medium text-center text-gray-200 px-4"
        >
          Professional{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Experience
          </span>
        </motion.div>
      </div>

      <motion.div 
        variants={{
          hidden: { y: 100, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              type: "spring",
              duration: 1.25,
              ease: "easeOut"
            }
          }
        }}
        className="flex flex-col items-center justify-center -translate-y-[50px] sm:translate-y-[200px] md:translate-y-[220px] lg:translate-y-[300px] absolute z-[20] w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl px-2 sm:px-4"
      >
        <div className="relative min-h-[600px] sm:min-h-[700px] lg:min-h-[900px] w-full">
          {/* Timeline Line - Desktop only */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-40 w-1 h-[90%] bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-500 opacity-60"></div>
          
          {/* Timeline Items */}
          <motion.div 
            variants={staggerContainer}
            className="space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-24 py-12 sm:py-16 mt-16 lg:mt-32"
          >
            {/* First Experience */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    type: "spring",
                    duration: 1.25,
                    ease: "easeOut"
                  }
                }
              }}
              className="relative flex items-center"
            >
              {/* Mobile & Tablet Layout */}
              <div className="lg:hidden w-full flex flex-col items-center">
                <div className="bg-gradient-to-r from-purple-900/30 to-transparent backdrop-blur-sm border border-purple-500/50 rounded-lg p-6 sm:p-8 mb-6 w-full max-w-md">
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2 text-center">Supervisor & Mentor</h3>
                  <p className="text-cyan-400 text-sm mb-3 text-center">Mandiri Digital Universe</p>
                  <p className="text-purple-300 text-xs mb-3 text-center">Feb 2023 – Jun 2023</p>
                  <div className="text-gray-300 text-sm space-y-2">
                    <p>Led multimedia team to &quot;Team of the Month&quot;</p>
                    <p>Supervised university client projects</p>
                    <p>Mentored interns through challenges</p>
                    <p>Enhanced UX/UI for conversions</p>
                  </div>
                </div>
                
              </div>
              
              {/* Desktop Layout */}
              <div className="hidden lg:flex w-full items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-gradient-to-l from-purple-900/30 to-transparent backdrop-blur-sm border-r-2 border-purple-500/50 pr-8 py-8 rounded-l-lg">
                    <h3 className="text-xl font-semibold text-white mb-3">Supervisor & Mentor</h3>
                    <p className="text-cyan-400 text-base mb-4">Mandiri Digital Universe</p>
                    <p className="text-purple-300 text-sm mb-4">Feb 2023 – Jun 2023</p>
                    <div className="text-gray-300 text-sm space-y-2">
                      <p>• Led multimedia team to &quot;Team of the Month&quot;</p>
                      <p>• Supervised university client projects</p>
                      <p>• Mentored interns through challenges</p>
                      <p>• Enhanced UX/UI for conversions</p>
                    </div>
                  </div>
                </div>
                <div className="relative z-10">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full border-4 border-gray-900 shadow-lg shadow-purple-500/50"></div>
                </div>
                <div className="w-1/2 pl-8"></div>
              </div>
            </motion.div>
            
            {/* Second Experience */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    type: "spring",
                    bounce: 0.4,
                    duration: 0.8
                  }
                }
              }}
              className="relative flex items-center"
            >
              {/* Mobile & Tablet Layout */}
              <div className="lg:hidden w-full flex flex-col items-center">
                <div className="bg-gradient-to-r from-cyan-900/30 to-transparent backdrop-blur-sm border border-cyan-500/50 rounded-lg p-6 sm:p-8 w-full max-w-md">
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2 text-center">Freelance Developer</h3>
                  <p className="text-purple-400 text-sm mb-3 text-center">Self Employed</p>
                  <p className="text-cyan-300 text-xs mb-3 text-center">Nov 2024 – Present</p>
                  <div className="text-gray-300 text-sm space-y-2">
                    <p>ML model for poultry detection (YOLO v11)</p>
                    <p>Museum website for Ministry of Culture of indonesia gov</p>
                    <p>Native PHP and vanilla JavaScript</p>
                    <p>Research fieldwork assistance</p>
                  </div>
                </div>
              </div>
              
              {/* Desktop Layout */}
              <div className="hidden lg:flex w-full items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="relative z-10">
                  <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full border-4 border-gray-900 shadow-lg shadow-cyan-500/50"></div>
                </div>
                <div className="w-1/2 pl-8">
                  <div className="bg-gradient-to-r from-cyan-900/30 to-transparent backdrop-blur-sm border-l-2 border-cyan-500/50 pl-8 py-8 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-white mb-3">Freelance Developer</h3>
                    <p className="text-purple-400 text-base mb-4">Self Employed</p>
                    <p className="text-cyan-300 text-sm mb-4">Nov 2024 – Present</p>
                    <div className="text-gray-300 text-sm space-y-2">
                      <p>• ML model for poultry detection (YOLO v11)</p>
                      <p>• Museum website for Ministry of Culture of indonesia gov</p>
                      <p>• Native PHP and vanilla JavaScript</p>
                      <p>• Research fieldwork assistance</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <div className="w-full flex items-start justify-center absolute top-0 left-0 min-h-[200vh] h-auto">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full min-h-[200vh] h-auto object-cover opacity-30 scale-150"
        >
          <source src="/videos/encryption-bg.webm" type="video/webm" />
        </video>
      </div>
    </motion.div>
  );
};
