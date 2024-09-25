import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import { useState } from "react";

const Header = () => {
  const [loading, setLoading] = useState(false);

  const handleDownload = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <header className="lg:w-1/3 w-full lg:sticky lg:top-0 lg:h-screen p-4 lg:flex-shrink-0 lg:py-16 lg:ml-24">
      <div>
        <h1 className="text-4xl font-bold text-slate-200 m-4">
          Allan C. Kirui
        </h1>
        <h3 className="text-lg font-medium text-slate-200 ml-4 mb-2">
          Software Engineer, Backend
        </h3>
        <p className="ml-4 mb-8 text-gray-400">
          I strive to build the next big thing in software and pioneer tech
          innovations
        </p>
      </div>
      <a
        href="https://www.upwork.com/freelancers/~01353b004ba45b9a74?mp_source=share"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 py-4 px-8 rounded-full m-2 bg-blue-900 font-bold text-white"
      >
        Book
      </a>
      <nav class="nav px-10 hidden lg:block" aria-label="In-page jump links">
        <ul class="mt-8 w-max">
          <li>
            <a class="group flex items-center py-3 active" href="#about">
              <span class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
              <span class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                About
              </span>
            </a>
          </li>
          <li>
            <a class="group flex items-center py-3 " href="#projects">
              <span class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
              <span class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                Projects
              </span>
            </a>
          </li>
          <li>
            <a class="group flex items-center py-3 " href="#contact">
              <span class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
              <span class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
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
          onClick={handleDownload}
          href={`${process.env.PUBLIC_URL}/assets/downloads/resume.pdf`}
          download
          className="bg-[#253551] inline-block text-white p-4 rounded-lg text-sm font-semibold"
        >
          {loading ? "Fetching..." : "Download Resume"}
        </a>
      </div>
    </header>
  );
};

export default Header;
