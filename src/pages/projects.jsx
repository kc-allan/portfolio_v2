import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      name: "StudentX",
      meta: "Startup",
      // submeta: "Launching Soon",
      url: "https://studentx.co.ke",
      description:
        "A coupon sharing and management platform that gives access to thousands of verified student deals from verified brands. All inclusive of a comprehensive portal for partnered brands",
      thumbnail: `${process.env.PUBLIC_URL}/assets/images/studentx-project-thumbnail.webp`,
      technologies: ["React", "Python/Flask", "Google Analytics", "KYC"],
    },
    {
      name: "Whiskr",
      meta: "Startup",
      submeta: "Launching Soon",
      url: "https://whiskr.kiruiallan.me",
      description:
        "A platform that connects pet owners to pet sitters and pet care services including vets. Users can book pet sitters, groomers, and other pet care services.",
      thumbnail: `${process.env.PUBLIC_URL}/assets/images/paw-partner.webp`,
      technologies: ["React", "TypeScript", "Django"],
    },
    {
      name: "AI Learning Hub",
      url: "https://ailearninghub.kiruiallan.me",
      description:
        "A platform that provides a wide range of courses and resources for students and professionals looking to learn more about Artificial Intelligence and Machine Learning.",
      thumbnail: `${process.env.PUBLIC_URL}/assets/images/ai-learning-hub.webp`,
      technologies: ["React", "Django", "TailwindCSS", "Stripe API"],
    },
    {
      name: "FarmTrace",
      url: "https://farmtrace.kiruiallan.me",
      description:
        "A system designed to ensure the integrity of fertilizers by tracking their movement in the supply chain. A seamless integration of QR codes is implemented to verify product information and authenticity.",
      thumbnail: `${process.env.PUBLIC_URL}/assets/images/farmtrace.webp`,
      technologies: ["Flask", "TailwindCSS"],
    },
    {
      name: "CleanPro Services",
      url: "#",
      description:
        "Platform that connects home workers to clients that may need cleaning or grooming services around the household",
      thumbnail: `${process.env.PUBLIC_URL}/assets/images/cleanpro.webp`,
      technologies: ["React", "Flask", "TailwindCSS", "MPESA Integration"],
    },
  ];

  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold text-gray-200 mb-8">
        Featured Projects
      </h2>
      <div className="grid gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 transition-all duration-300 hover:border-blue-500/50"
          >
            <div className="flex flex-col lg:flex-row gap-6 p-6">
              <div className="lg:w-2/3 space-y-4">
                {/* eslint-disable-next-line */}
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                  <h3 className="text-xl font-semibold text-gray-200 hover:text-blue-400">
                    {project.name}
                  </h3>
                  <ExternalLink className="w-4 h-4 text-gray-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  {project.meta && (
                    <span className="bg-orange-800 shadow-md text-slate-300 rounded-full px-2 text-xs font-semibold">
                      {project.meta}
                    </span>
                  )}
                  {project.submeta && (
                    <span className="bg-green-800 shadow-md text-slate-300 rounded-full px-2 text-xs font-semibold">
                      {project.submeta}
                    </span>
                  )}
                </a>

                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-900/30 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:w-1/3 relative">
                <img
                  loading="lazy"
                  src={project.thumbnail}
                  alt={project.name}
                  className="w-full h-48 lg:h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
