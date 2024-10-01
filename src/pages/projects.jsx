const Projects = () => {
  const projects = [
    {
      name: "Brainwave Campus",
      description:
        "Collaborative platform for peers to connect and share thoughts, ideas, and resources. The platform is built for students and work colleagues looking to connect outside the office.",
      thumbnail: `${process.env.PUBLIC_URL}/assets/images/brainwave.png`,
      technologies: ["Flask", "TailwindCSS", "Zoom API"],
    },
    {
      name: "CleanPro Services",
      description:
        "Platform that connects home workers to clients that may need cleaning or grooming services around the household",
      thumbnail: `${process.env.PUBLIC_URL}/assets/images/cleanpro.png`,
      technologies: ["React", "Flask", "TailwindCSS", "MPESA Integration"],
    },
    {
      name: "Bridge Health",
      description:
        "Web platform tailored for expectant mothers, prioritizing privacy while offering personalized healthcare management. Expectant mothers can create secure profiles on the platform. Timely prompts enable symptom recording, appointment tracking, and access to essential health education materials, empowering informed decision-making. An integrated feature facilitates direct emergency communication with on-call doctors, ensuring prompt medical assistance.",
      thumbnail: `${process.env.PUBLIC_URL}/assets/images/bridgehealth.png`,
      technologies: ["React", "PHP", "TailwindCSS"],
    },
    {
      name: "FarmTrace",
      description:
        "A system designed to ensure the integrity of fertilizers by tracking their movement in the supply chain. A seamless integration of QR codes is implemented to verify product information and authenticity.",
      thumbnail: `${process.env.PUBLIC_URL}/assets/images/farmtrace.png`,
      technologies: ["Flask", "TailwindCSS"],
    },
  ];

  return (
    <div id="projects" className="flex flex-col">
      {projects.map((project, index) => (
        <div
          key={index}
          className="my-4 p-4 flex lg:flex-row flex-col hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-gray-800 hover:opacity-90 cursor-pointer rounded-md"
        >
          
          <div className="lg:w-2/3">
            <a
              id="project-link"
              href="/"
              className="font-semibold text-lg text-white hover:text-teal-400 group"
            >
              {project.name}
              <span
                id="linkArrow"
                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover:translate-y-!2 group-hover:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </a>
            <p className="text-sm py-4">{project.description}</p>
            <div className="pt-4 space-x-2">
              {project.technologies.map((tech, techIndex) => (
                <span
                  className="p-1 px-2 bg-teal-700 rounded-lg text-gray-300 text-white text-xs"
                  key={techIndex}
                >
                  {tech}
                </span>
              ))}
            </div>

          </div>
          <img
            className="lg:w-1/3 object-contain h-full my-4 mx-2 lg:hover:scale-150 transition-all duration-300 mr-4"
            src={project.thumbnail}
            alt="Thumbnail"
          />
        </div>
      ))}
    </div>
  );
};

export default Projects;
