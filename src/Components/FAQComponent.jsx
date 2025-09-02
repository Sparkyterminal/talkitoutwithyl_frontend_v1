/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion } from "framer-motion";

const FAQComponent = () => {
  const [expandedItems, setExpandedItems] = useState(new Set([0])); // First item expanded by default

  const faqData = [
    {
      id: 0,
      question: "What is therapy?",
      answer:
        "Therapy provides a safe space to talk, heal, and grow. It helps you understand your thoughts and emotions while equipping you with tools to cope and thrive.",
    },
    {
      id: 1,
      question: "How do I book a session?",
      answer:
        "Just fill out the contact form or send me a message. I’ll get back to you with available slots to schedule your session.",
    },
    {
      id: 2,
      question: "How many sessions will I need?",
      answer:
        "Everyone’s journey is different. Some people feel better in a few sessions, while others choose longer-term support. We’ll figure out what works best for you together.",
    },
    {
      id: 3,
      question: "Do you provide in-person therapy?",
      answer:
        "Yes, I do offer in-person therapy. Reach out to me for details and to check available slots.",
    },
    {
      id: 4,
      question: "Is everything I share confidential?",
      answer:
        "Absolutely. Your privacy and trust are my priority. Everything shared during sessions stays strictly confidential.",
    },
    {
      id: 5,
      question: "What are the charges?",
      answer:
        "Session charges may vary based on the type and duration of therapy. Contact me directly for details.",
    },
  ];

  const toggleItem = (id) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <section className="py-12 lg:py-24 bg-[#E3EDE9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Title */}
          <motion.div
            className="lg:sticky lg:top-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight max-w-md">
              Frequently asked
              <br />
              <span className="text-5xl font-comrod-regular">questions</span>
            </h1>
          </motion.div>

          {/* Right side - Accordions */}
          <div className="space-y-4">
            {faqData.map((item, idx) => {
              const isExpanded = expandedItems.has(item.id);
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.1 + 0.2,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left rounded-lg focus:outline-none border-t-2 border-b-2 border-t-[#DBB378] border-b-[#DBB378] hover:bg-gray-50 transition-colors duration-200"
                    aria-expanded={isExpanded}
                    aria-controls={`faq-panel-${item.id}`}
                    id={`faq-header-${item.id}`}
                  >
                    <h3 className="text-xl font-semibold text-gray-800 pr-4">
                      {item.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {isExpanded ? (
                        <Minus className="w-6 h-6 text-emerald-600 transition-transform duration-200" />
                      ) : (
                        <Plus className="w-6 h-6 text-emerald-600 transition-transform duration-200" />
                      )}
                    </div>
                  </button>

                  <div
                    id={`faq-panel-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-header-${item.id}`}
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-5 pt-1">
                      <div className="h-px bg-gray-200 mb-4"></div>
                      <p className="text-gray-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
            <motion.button
              type="button"
              className="font-comrod-bold text-xl tracking-wide px-6 py-4 border-2 border-[#DBB378] bg-transparent text-[#3C4946] rounded-4xl shadow-lg hover:scale-105 transition-transform duration-200"
              style={{ cursor: "pointer" }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              onClick={() => (window.location.href = "/book-session")}
            >
              Your healing journey can start today — let’s talk it out.
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQComponent;
