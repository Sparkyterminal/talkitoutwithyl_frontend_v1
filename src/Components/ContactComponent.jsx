/* eslint-disable no-unused-vars */

import React from "react";
import { motion } from "framer-motion";

const ContactComponent = () => {
  return (
    <section className="py-16 lg:py-24" style={{ backgroundColor: "#FCF8ED" }}>
      <div
        className="max-w-screen-xl mx-auto p-8 min-h-[500px]"
        style={{ backgroundColor: "#FCF8ED" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Image */}
          <motion.div
            className="order-2 lg:order-1 w-full flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div
              className="relative overflow-hidden rounded-2xl shadow-lg group"
              style={{ width: 500, height: 500 }}
            >
              <img
                src="/assets/contactkeer.JPG"
                alt="Professional consultation"
                width={500}
                height={500}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2
                className="text-4xl lg:text-5xl font-bold mb-6 leading-tight"
                style={{ color: "#44534C" }}
              >
                Let's Talk
              </h2>
            </motion.div>

            {/* Contact Information */}
            <div className="space-y-4">
              {[
                {
                  label: "Email",
                  value: (
                    <a
                      href="mailto: ylkeerthana10@gmail.com"
                      className="text-xl transition-opacity duration-200 hover:opacity-80 break-all"
                      style={{ color: "#E28A8A" }}
                    >
                      ylkeerthana10@gmail.com
                    </a>
                  ),
                },
                {
                  label: "Instagram",
                  value: (
                    <a
                      href="https://instagram.com/talkitout_withyl"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl transition-opacity duration-200 hover:opacity-80"
                      style={{ color: "#E28A8A" }}
                    >
                      @talkitout_withyl
                    </a>
                  ),
                },
                {
                  label: "Youtube",
                  value: (
                    <a
                      href="https://www.youtube.com/@keerthanayl438"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl transition-opacity duration-200 hover:opacity-80"
                      style={{ color: "#E28A8A" }}
                    >
                      Keerthana Y L
                    </a>
                  ),
                },
              ].map((info, idx) => (
                <motion.div
                  key={info.label}
                  className="flex items-center space-x-4 group"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.18 + 0.2,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <div>
                    <h3
                      className="text-xl font-semibold mb-1"
                      style={{ color: "#CFA976" }}
                    >
                      {info.label}
                    </h3>
                    {info.value}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;
