import React, { useEffect, useState } from "react"; // Importing React and necessary hooks.
import { Link } from "react-router-dom"; // Importing Link component from react-router-dom for navigation.

import { styles } from "../styles"; // Importing custom styles.
import { navLinks } from "../constants"; // Importing navigation links from constants.
import { logo, menu, close } from "../assets"; // Importing assets for the logo, menu, and close icons.

const Navbar = () => {
  const [active, setActive] = useState(""); // State to track the active navigation link.
  const [toggle, setToggle] = useState(false); // State to manage the mobile menu toggle.
  const [scrolled, setScrolled] = useState(false); // State to track if the page has been scrolled past a certain point.

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // Get the current scroll position.
      if (scrollTop > 100) {
        // If scrolled more than 100 pixels, set scrolled to true.
        setScrolled(true);
      } else {
        // Otherwise, set scrolled to false.
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll); // Add scroll event listener.

    return () => window.removeEventListener("scroll", handleScroll); // Cleanup the event listener on component unmount.
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX // Apply custom padding styles.
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent" // Apply background color based on scroll state.
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive(""); // Reset active link.
            window.scrollTo(0, 0); // Scroll to top of the page.
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />{" "}
          {/* Logo Image */}
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            Govind &nbsp;
            <span className="sm:block hidden">
              {" "}
              | Full Stack developer 👨🏻‍💻{" "}
            </span>{" "}
            {/* Tagline */}
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {" "}
          {/* Desktop Navigation Links */}
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary" // Apply active class based on state.
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)} // Set active link on click.
            >
              <a href={`#${nav.id}`}>{nav.title}</a> {/* Link to section */}
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          {" "}
          {/* Mobile Menu */}
          <img
            src={toggle ? close : menu} // Toggle between menu and close icon.
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)} // Toggle the menu state on click.
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex" // Show or hide the menu based on toggle state.
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {" "}
              {/* Mobile Navigation Links */}
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary" // Apply active class based on state.
                  }`}
                  onClick={() => {
                    setToggle(!toggle); // Close the menu on link click.
                    setActive(nav.title); // Set active link.
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a> {/* Link to section */}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; // Exporting the Navbar component.
