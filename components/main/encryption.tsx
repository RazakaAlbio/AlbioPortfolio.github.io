"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { slideInFromTop } from "@/lib/motion";

export const Encryption = () => {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-[120vh] w-full h-full pb-20 -z-20">
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          Professional{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Experience
          </span>
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center translate-y-[250px] absolute z-[20] w-full max-w-4xl px-4">
        <div className="relative min-h-[700px]">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-500 opacity-60"></div>
          
          {/* Timeline Items */}
          <div className="space-y-20 py-12">
            {/* First Experience - Right Side */}
            <div className="flex items-center">
               <div className="w-1/2 pr-12 text-right">
                 <div className="bg-gradient-to-l from-purple-900/30 to-transparent backdrop-blur-sm border-r-2 border-purple-500/50 pr-8 py-6">
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
              
              {/* Timeline Node */}
              <div className="relative z-10">
                <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full border-4 border-gray-900 shadow-lg shadow-purple-500/50"></div>
              </div>
              
              <div className="w-1/2 pl-12"></div>
            </div>
            
            {/* Second Experience - Left Side */}
            <div className="flex items-center">
              <div className="w-1/2 pr-12"></div>
              
              {/* Timeline Node */}
              <div className="relative z-10">
                <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full border-4 border-gray-900 shadow-lg shadow-cyan-500/50"></div>
              </div>
              
              <div className="w-1/2 pl-12">
                 <div className="bg-gradient-to-r from-cyan-900/30 to-transparent backdrop-blur-sm border-l-2 border-cyan-500/50 pl-8 py-6">
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
          </div>
        </div>
      </div>

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
    </div>
  );
};
