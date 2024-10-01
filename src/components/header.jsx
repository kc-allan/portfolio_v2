import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import { useState, useEffect } from "react";

const Header = () => {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = document.querySelectorAll("section, #about, #projects, #contact");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // Adjust threshold to trigger based on how much of the section is visible
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <header className="lg:w-1/3 w-full lg:sticky lg:top-0 lg:h-screen p-4 lg:flex-shrink-0 lg:py-16 lg:ml-24">
      <div>
        <h1 className="text-4xl font-bold text-slate-200 m-4">Allan C. Kirui</h1>
        <h3 className="text-lg font-medium text-slate-200 ml-4 mb-2">
          Software Engineer, Backend
        </h3>
        <p className="ml-4 mb-8 text-gray-400">
          I strive to build the next big thing in software and pioneer tech
          innovations
        </p>
      </div>
      <nav className="nav px-10 hidden lg:block" aria-label="In-page jump links">
        <ul className="mt-8 w-max">
          <li>
            <a
              className={`group flex items-center py-3 ${
                activeSection === "about" ? "active-nav" : ""
              }`}
              href="#about"
            >
              <span
                className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 ${
                  activeSection === "about" ? "bg-slate-200 w-16" : ""
                }`}
              ></span>
              <span
                className={`nav-text text-xs font-bold uppercase tracking-widest ${
                  activeSection === "about"
                    ? "text-slate-200"
                    : "text-slate-500 group-hover:text-slate-200"
                }`}
              >
                About
              </span>
            </a>
          </li>
          <li>
            <a
              className={`group flex items-center py-3 ${
                activeSection === "projects" ? "active-nav" : ""
              }`}
              href="#projects"
            >
              <span
                className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 ${
                  activeSection === "projects" ? "bg-slate-200 w-16" : ""
                }`}
              ></span>
              <span
                className={`nav-text text-xs font-bold uppercase tracking-widest ${
                  activeSection === "projects"
                    ? "text-slate-200"
                    : "text-slate-500 group-hover:text-slate-200"
                }`}
              >
                Projects
              </span>
            </a>
          </li>
          <li>
            <a
              className={`group flex items-center py-3 ${
                activeSection === "contact" ? "active-nav" : ""
              }`}
              href="#contact"
            >
              <span
                className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 ${
                  activeSection === "contact" ? "bg-slate-200 w-16" : ""
                }`}
              ></span>
              <span
                className={`nav-text text-xs font-bold uppercase tracking-widest ${
                  activeSection === "contact"
                    ? "text-slate-200"
                    : "text-slate-500 group-hover:text-slate-200"
                }`}
              >
                Contact
              </span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="my-6 py-2">
        <a
          href="https://x.com/allannnoo"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4"
        >
          <Twitter />
        </a>
        <a
          href="https://github.com/kc-allan"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4"
        >
          <GitHub />
        </a>
        <a
          href="https://www.linkedin.com/in/allan-cheruiyot-214b6923a/"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4"
        >
          <LinkedIn />
        </a>
        <a
          href="https://calendly.com/kiruiallan"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 py-4 px-8 rounded-full m-2 bg-blue-900 font-bold text-white"
        >
          Book
        </a>
      </div>
    </header>
  );
};

export default Header;
