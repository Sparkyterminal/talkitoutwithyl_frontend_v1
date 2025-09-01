/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { Heart, Brain, Compass, Music, Users, HandHeart } from "lucide-react";

const WhatIOffer = () => {
  const services = [
    { title: "Talk Therapy", icon: <Heart className="w-6 h-6" /> },
    {
      title: "Cognitive Behavioural Therapy (CBT)",
      icon: <Brain className="w-6 h-6" />,
    },
    { title: "Mindfulness Practices", icon: <Compass className="w-6 h-6" /> },
    { title: "Dance Movement Therapy", icon: <Music className="w-6 h-6" /> },
    { title: "Person Centred Therapy", icon: <Users className="w-6 h-6" /> },
    {
      title: "Supportive Counselling",
      icon: <HandHeart className="w-6 h-6" />,
    },
  ];

  // Container variants for staggered fade-in of rows
  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
    hidden: {},
  };

  // Card variants for fade and pop up animation
  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
  };

  // Heading fade in from bottom up variant
  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Helper to group services by rows of 3 (for large screens)
  const rows = [];
  for (let i = 0; i < services.length; i += 3) {
    rows.push(services.slice(i, i + 3));
  }

  return (
    <section className="py-16 lg:py-24" style={{ backgroundColor: "#F4D8CC" }}>
      <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl lg:text-5xl font-bold mb-6 leading-tight"
            style={{ color: "#44534C" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.7 }}
          >
            What I offer
          </motion.h2>
          <motion.p
            className="text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto"
            style={{ color: "#44534C" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.7 }}
          >
            A safe and supportive space for healing and growth through.
          </motion.p>
        </div>

        <div className="space-y-8">
          {rows.map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
            >
              {row.map((service, index) => (
                <motion.div
                  key={index}
                  className="rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 group cursor-default"
                  style={{
                    backgroundColor: "#FFF8F3",
                    minHeight: "100px",
                    display: "flex",
                    alignItems: "center",
                  }}
                  variants={cardVariants}
                  custom={rowIndex * 3 + index}
                >
                  <div className="flex items-center space-x-4 w-full">
                    <div
                      className="flex-shrink-0 p-3 rounded-lg"
                      style={{ backgroundColor: "#F4D8CC" }}
                    >
                      <div style={{ color: "#44534C" }}>{service.icon}</div>
                    </div>
                    <div className="flex-1">
                      <h3
                        className="text-xl font-semibold leading-tight"
                        style={{ color: "#44534C" }}
                      >
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIOffer;
