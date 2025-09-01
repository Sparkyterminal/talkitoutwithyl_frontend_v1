import React from "react";

const Footer = () => {
  return (
    <footer className="py-16" style={{ backgroundColor: "#E3EDE9" }}>
      <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left side - Brand name */}
          <div className="mb-4 md:mb-0">
            <h3
              className="font-comrod-regular text-4xl"
              style={{ color: "#CA8080" }}
            >
              talkitoutwithyl
            </h3>
          </div>

          {/* Right side - Navigation menu */}
          <nav className="flex flex-wrap items-center justify-center md:justify-end gap-6 lg:gap-8">
            {["Home", "About", "FAQ", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="font-poppins-regular text-base font-normal transition-all duration-200 hover:opacity-70"
                style={{ color: "#333333" }}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Divider line */}
        <div
          className="w-full h-px my-6"
          style={{ backgroundColor: "#333333", opacity: 0.3 }}
        ></div>

        {/* Copyright text */}
        <div className="text-center">
          <p
            className="font-poppins-regular text-sm"
            style={{ color: "#333333", opacity: 0.7 }}
          >
            © 2025 talkitoutwithyl. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
