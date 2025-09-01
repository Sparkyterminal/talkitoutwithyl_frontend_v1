/* eslint-disable no-unused-vars */

import React from "react";
import { motion } from "framer-motion";

const Herosection = () => {
  return (
    <div>
      <div className="relative min-h-screen bg-black flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            className="object-cover w-full h-full"
            src="/assets/hero5.jpg"
            alt="background"
          />
          {/* Light black gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
        </div>

        <div className="relative">
          <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="tracking-tighter text-white">
                <motion.span
                  className="font-comrod-regular text-5xl block"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                 Healing begins when you talk. Let’s evolve,
                </motion.span>
                <motion.span
                  className="font-comrod-regular text-5xl block mt-5 mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                   find balance, and build a better you.
                </motion.span>
              </h1>
              <motion.p
                className="mt-5 font-poppins-regular text-xl font-normal text-white text-opacity-70"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.4 }}
              >
                Begin your therapy journey here.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;