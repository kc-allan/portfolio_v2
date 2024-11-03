import { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Calendar } from 'lucide-react';

const Header = () => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    // Update observer to target the sections directly
    const sections = document.querySelectorAll('section[id]');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { 
        threshold: 0.3,
        rootMargin: '-20% 0px -70% 0px' // Adjust these values to control when the section is considered "active"
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
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
            Building the future through innovative software solutions and pioneering tech advancements
          </p>
        </div>

        <nav className="hidden lg:block py-8" aria-label="In-page navigation">
          <ul className="space-y-4">
            {['about', 'projects', 'contact'].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  onClick={(e) => handleNavClick(e, section)}
                  className={`group flex items-center space-x-4 py-2 transition-all duration-300 ${
                    activeSection === section ? 'text-blue-400' : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  <span className={`h-[2px] w-8 transition-all duration-300 ${
                    activeSection === section ? 'w-16 bg-blue-400' : 'bg-gray-600 group-hover:w-12 group-hover:bg-gray-400'
                  }`} />
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
              { Icon: Twitter, href: 'https://x.com/allannnoo', label: 'Twitter' },
              { Icon: Github, href: 'https://github.com/kc-allan', label: 'GitHub' },
              { Icon: Linkedin, href: 'https://www.linkedin.com/in/allan-cheruiyot-214b6923a/', label: 'LinkedIn' }
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