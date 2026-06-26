import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.1) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`text-white h-14 md:h-16 lg:h-20 transition-all duration-200 ease-in-out ${
          scrolled ? "bg-[#12DAA8]" : "bg-transparent"
        } flex justify-between items-center px-4 sm:px-6 md:pl-14 lg:pl-28 fixed w-full z-50`}
      >
        {/* Logo */}
        <div className="flex items-center font-['Space_Grotesk'] italic">
          <span
            className={`${scrolled ? "text-black" : "text-[#12DAA8]"} font-bold  text-xl md:text-2xl tracking-tight`}
          >
            N
          </span>
          <span className="text-white font-bold text-xl md:text-2xl">|</span>
          <span className="text-white font-bold text-xl md:text-2xl tracking-tight">
            G
          </span>
        </div>

        {/* Desktop Menu */}
        <div
          className={`hidden md:flex md:text-base lg:text-xl items-center md:gap-10 lg:gap-14 justify-center w-[60%] font-['Space_Grotesk'] italic font-bold ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <span className="block w-6 h-0.5 bg-white rounded"></span>
          <span className="block w-6 h-0.5 bg-white rounded"></span>
          <span className="block w-6 h-0.5 bg-white rounded"></span>
        </button>
      </nav>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 md:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu - Top se aata hai */}
      <div
        className={`fixed top-0 left-0 right-0 bg-[#12DAA8] z-50 transform transition-transform duration-300 ease-in-out  md:hidden ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Logo + X Button */}
        <div className="flex items-center justify-between px-4 sm:px-6 h-14 font-['Space_Grotesk'] italic">
          <div className="flex items-center">
            <span className="text-black font-bold text-xl tracking-tight">
              N
            </span>
            <span className="text-white font-bold text-xl">/</span>
            <span className="text-white font-bold text-xl tracking-tight">
              G
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white text-xl font-bold transition-colors duration-200"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* Links */}
        <ul className="flex flex-col px-4 sm:px-6 pb-6 gap-1  font-['Space_Grotesk'] italic font-bold ">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 px-4 text-black font-medium text-base sm:text-lg rounded-lg hover:bg-white/20 transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
