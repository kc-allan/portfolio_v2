import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";
import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";

const Header = () => {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: [0.1, 0.2, 0.3, 0.4, 0.5],
        rootMargin: "-10% 0px -40% 0px",
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <header className="lg:w-1/3 w-full lg:fixed lg:h-screen p-8 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="space-y-6">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 text-transparent bg-clip-text">
            Allan C. Kirui
          </h1>
          <h3 className="text-xl font-medium text-gray-200">
            Software Engineer, Backend
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Building the future through innovative software solutions and
            pioneering tech advancements
          </p>
        </div>

        <nav className="hidden lg:block py-8" aria-label="In-page navigation">
          <ul className="space-y-4">
            {["about", "projects", "contact"].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  onClick={(e) => handleNavClick(e, section)}
                  className={`group flex items-center space-x-2 py-2 transition-all duration-300 ${
                    activeSection === section
                      ? "text-blue-400"
                      : "text-gray-400 hover:text-gray-200"
                  }`}
                >
                  <div className="w-16">
                    <div
                      className={`h-[2px] transition-all duration-300 ${
                        activeSection === section
                          ? "w-12 bg-blue-400"
                          : "w-8 bg-gray-600 group-hover:w-12 group-hover:bg-gray-400"
                      }`}
                    />
                  </div>
                  <span className="text-sm font-medium uppercase tracking-wider">
                    {section}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            {[
              {
                Icon: Twitter,
                href: "https://x.com/allannnoo",
                label: "Twitter",
              },
              {
                Icon: GitHub,
                href: "https://github.com/kc-allan",
                label: "GitHub",
              },
              {
                Icon: LinkedIn,
                href: "https://www.linkedin.com/in/allan-cheruiyot-214b6923a/",
                label: "LinkedIn",
              },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-blue-400 transition-colors duration-300"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          <a
            href="https://calendly.com/kiruiallan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-300"
          >
            <Calendar size={18} />
            <span>Schedule a Call</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
