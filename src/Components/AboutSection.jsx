/* eslint-disable no-unused-vars */

import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="py-16 lg:py-24" style={{ backgroundColor: "#F4D8CC" }}>
      <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content - First on desktop, second on mobile */}
          <motion.div
            className="order-2 lg:order-1"
            style={{ color: "#44534C" }}
            initial={{ opacity: 0, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="font-comrod-regular text-4xl lg:text-5xl mb-6">
              Hi, I'm <span className="font-comrod-bold">Keerthana YL</span>
            </h2>
            <p className="font-poppins-regular text-lg leading-relaxed mb-8">
              a seasoned psychologist with a passion for the arts. With a Master
              degree in Clinical Psychology and certified training in
              psychotherapy and counseling.
            </p>
            {/* Divider line */}
            <div
              className="w-24 h-0.5 mb-8"
              style={{ backgroundColor: "#44534C" }}
            ></div>
            <p className="font-poppins-regular text-lg leading-relaxed mb-6">
              I am committed to providing tailored one-on-one online and offline
              therapy sessions for individuals aged 12 to 40. My approach is
              centered on understanding each person’s unique needs and creating
              a safe, compassionate space for emotional growth.
            </p>
            <p className="font-poppins-regular text-lg leading-relaxed">
              Beyond my professional credentials, I am also a dedicated dancer
              and actor, incorporating elements of creativity and expression
              into my therapeutic approach. In addition to traditional talk
              therapy, I offer dance therapy sessions to explore emotions and
              promote healing through movement. This unique blend of therapy and
              artistic expression allows clients to engage with their emotions
              in a deeper, more creative way.
            </p>
            {/* Additional paragraphs */}
            <p className="font-poppins-regular text-lg leading-relaxed mt-6">
              I completed a month-long internship at Vydehi Institute of Medical
              Sciences & Research Centre, gaining clinical exposure to various
              psychological conditions. Later, I worked as a Behavioral
              Counselor at Orchids International School, supporting students’
              emotional and psychological well-being.
            </p>
            <p className="font-poppins-regular text-lg leading-relaxed">
              My research has explored the impact of child abuse on mental
              health, self-esteem, and quality of life, as well as differences
              in well-being between dancers and non-dancers.
            </p>
            <p className="font-poppins-regular text-lg leading-relaxed mb-0">
              With this diverse experience, I aim to empower individuals toward
              balance, self-awareness, and lasting change through talk therapy
              and dance therapy.
            </p>
          </motion.div>

          {/* Image - Second on desktop, first on mobile */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              className="w-full h-auto rounded-lg shadow-lg object-cover"
              src="/assets/keerthana-photo.JPG"
              alt="Keerthana YL - Clinical Psychologist"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
