import React, { useEffect, useState } from "react";

const Header = ({ scrollToSection }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bgColor = isSticky ? "#FCF8ED" : "transparent";
  const textColor = isSticky ? "#E28A8A" : "#FFFFFF";

  const menuItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "How I Help", id: "howihelp" },
    { label: "What I Offer", id: "services" },
    { label: "FAQ", id: "faq" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header
      style={{ backgroundColor: bgColor }}
      className={`fixed inset-x-0 top-0 z-30 py-4 xl:py-6 transition-colors duration-300 ${
        isSticky ? "shadow-md" : ""
      }`}
    >
      <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex flex-shrink-0 text-3xl font-comrod-regular"
            style={{ color: textColor }}
          >
            talkitoutwithyl
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="p-2 -m-2 rounded-full focus:outline-none hover:bg-black/10 transition-colors duration-200"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              style={{ color: textColor }}
            >
              {menuOpen ? (
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-10 lg:ml-28">
            {menuItems.map(({ label, id }) => (
              <a
                key={label}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(id);
                }}
                className="font-poppins-regular text-base font-normal transition-all duration-200 rounded focus:outline-none hover:opacity-70"
                style={{ color: textColor }}
              >
                {label}
              </a>
            ))}
            <button
              onClick={() => (window.location.href = "/book-session")}
              className="cursor-pointer inline-flex items-center justify-center px-5 py-2 font-poppins-regular text-base leading-6 transition-all duration-200 border rounded-full focus:outline-none hover:bg-white/10"
              style={{
                color: textColor,
                borderColor: textColor,
              }}
            >
              Book a session
            </button>
          </nav>
        </div>

        {/* Mobile navigation menu */}
        {menuOpen && (
          <div className="md:hidden mt-4">
            <div
              className="rounded-lg p-6 shadow-lg border"
              style={{
                backgroundColor: "#FCF8ED",
                borderColor: "#DBB378",
              }}
            >
              <nav className="flex flex-col space-y-4">
                {menuItems.map(({ label, id }) => (
                  <a
                    key={label}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(id);
                      setMenuOpen(false);
                    }}
                    className="font-poppins-regular text-base font-normal transition-all duration-200 rounded p-2 hover:bg-white/20"
                    style={{ color: "#E28A8A" }}
                  >
                    {label}
                  </a>
                ))}
                <button
                  onClick={() => {
                    window.location.href = "/book-session";
                    setMenuOpen(false);
                  }}
                  className="cursor-pointer inline-flex items-center justify-center px-5 py-3 font-poppins-regular text-base leading-6 transition-all duration-200 border rounded-full focus:outline-none hover:bg-white/10 mt-4"
                  style={{
                    color: "#E28A8A",
                    borderColor: "#E28A8A",
                  }}
                >
                  Book a session
                </button>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
