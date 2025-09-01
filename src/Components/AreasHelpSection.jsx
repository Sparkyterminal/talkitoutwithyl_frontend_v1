/* eslint-disable no-unused-vars */

import React from "react";
import { motion } from "framer-motion";

const AreasHelpSection = () => {
  const areas = [
    {
      title: "Anxiety & Panic Attack",
      description: "when worries and fears start to feel overwhelming",
      image: "/assets/anxiety.png",
    },
    {
      title: "Stress",
      description: "helping you manage pressure and find balance in daily life",
      image: "/assets/stress.png",
    },
    {
      title: "Relationship Issues",
      description: "navigating conflicts, communication, or emotional distance",
      image: "/assets/relationship.png",
    },
    {
      title: "ADHD",
      description:
        "finding strategies to cope with focus, attention, and organization",
      image: "/assets/adhd.jpg",
    },
    {
      title: "Trauma & PTSD",
      description: "gently working through painful experiences from the past",
      image: "/assets/trauma.png",
    },
    {
      title: "Depression & Mood Disorders",
      description: "supporting you when low mood or hopelessness takes over",
      image: "/assets/depression.png",
    },
  ];
  return (
    <section className="py-16 lg:py-24" style={{ backgroundColor: "#FCF8ED" }}>
      <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2
            className="font-comrod-regular text-4xl lg:text-5xl mb-6"
            style={{ color: "#44534C" }}
          >
            Concerns I work with
          </h2>
          <p
            className="font-poppins-regular text-lg lg:text-xl max-w-5xl mx-auto"
            style={{ color: "#DBB378" }}
          >
            I’m here to support you through a wide range of challenges
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.18 + 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="mb-6 flex justify-center">
                <img
                  className="w-60 h-60 object-cover rounded-full"
                  src={area.image}
                  alt={`${area.title} illustration`}
                />
              </div>
              {/* Title */}
              <h3
                className="font-comrod-regular text-2xl mb-4 text-center"
                style={{ color: "#44534C" }}
              >
                {area.title}
              </h3>
              {/* Description */}
              {/* <p 
                className="font-poppins-regular text-base text-center leading-relaxed"
                style={{ color: "#44534C", opacity: 0.8 }}
              >
                {area.description}
              </p> */}
            </motion.div>
          ))}
        </div>

        {/* Footer text */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p
            className="font-poppins-regular text-lg italic"
            style={{ color: "#DBB378" }}
          >
            …Other emotional and mental health concerns — because your mental
            health matters.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AreasHelpSection;
