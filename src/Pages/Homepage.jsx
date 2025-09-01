/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../Components/Header";
import Herosection from "../Components/Herosection";
import AboutSection from "../Components/AboutSection";
import AreasHelpSection from "../Components/AreasHelpSection";
import Footer from "../Components/Footer";
import FAQComponent from "../Components/FAQComponent";
import ContactComponent from "../Components/ContactComponent";
import WhatIOffer from "../Components/Whatioffer";
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};


const Homepage = () => {
  return <>
    <Header scrollToSection={scrollToSection} />
    <section id="home"><Herosection /></section>
    <section id="about"><AboutSection /></section>
    <section id="howihelp"><AreasHelpSection /></section>
    <section id="services"><WhatIOffer/></section>
    <section id="faq"><FAQComponent /></section>
    <section id="contact"><ContactComponent /></section>
    <Footer scrollToSection={scrollToSection} />
  </>;
};


export default Homepage;
// /* eslint-disable no-unused-vars */
// import React, { Suspense } from "react";
// import { motion } from "framer-motion";

// // Lazy load main sections
// const Herosection = React.lazy(() => import("../Components/Herosection"));
// const AboutSection = React.lazy(() => import("../Components/AboutSection"));
// const AreasHelpSection = React.lazy(() => import("../Components/AreasHelpSection"));
// const FAQComponent = React.lazy(() => import("../Components/FAQComponent"));
// const ContactComponent = React.lazy(() => import("../Components/ContactComponent"));
// const Footer = React.lazy(() => import("../Components/Footer"));

// import Header from "../Components/Header";

// const sectionVariants = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
// };

// const Section = ({ children, id }) => (
//   <motion.div
//     id={id}
//     className="scroll-mt-24"
//     initial="hidden"
//     whileInView="visible"
//     viewport={{ once: true, amount: 0.2 }}
//     variants={sectionVariants}
//   >
//     {children}
//   </motion.div>
// );

// const Homepage = () => {
//   return (
//     <div className="scroll-smooth">
//       <Header />
//       <Herosection />
//       <Suspense fallback={<div className="min-h-[40vh] flex items-center justify-center">Loading...</div>}>
//         <Section id="about">
//           <AboutSection />
//         </Section>

//         <Section id="areas-help">
//           <AreasHelpSection />
//         </Section>

//         <Section id="faq">
//           <FAQComponent />
//         </Section>

//         <Section id="contact">
//           <ContactComponent />
//         </Section>

//         <Section>
//           <Footer />
//         </Section>
//       </Suspense>
//     </div>
//   );
// };

// export default Homepage;
