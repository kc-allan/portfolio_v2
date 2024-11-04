import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      name: "Brainwave Campus",
      description: "Collaborative platform for peers to connect and share thoughts, ideas, and resources. The platform is built for students and work colleagues looking to connect outside the office.",
      thumbnail: `${process.env.PUBLIC_URL}/assets/images/brainwave.png`,
      technologies: ["Flask", "TailwindCSS", "Zoom API"],
    },
    {
      name: "CleanPro Services",
      description: "Platform that connects home workers to clients that may need cleaning or grooming services around the household",
      thumbnail: `${process.env.PUBLIC_URL}/assets/images/cleanpro.png`,
      technologies: ["React", "Flask", "TailwindCSS", "MPESA Integration"],
    },
    {
      name: "Bridge Health",
      description: "Web platform tailored for expectant mothers, prioritizing privacy while offering personalized healthcare management. Expectant mothers can create secure profiles on the platform.",
      thumbnail: `${process.env.PUBLIC_URL}/assets/images/bridgehealth.png`,
      technologies: ["React", "PHP", "TailwindCSS"],
    },
    {
      name: "FarmTrace",
      description: "A system designed to ensure the integrity of fertilizers by tracking their movement in the supply chain. A seamless integration of QR codes is implemented to verify product information and authenticity.",
      thumbnail: `${process.env.PUBLIC_URL}/assets/images/farmtrace.png`,
      technologies: ["Flask", "TailwindCSS"],
    },
  ];

  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold text-gray-200 mb-8">Featured Projects</h2>
      <div className="grid gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 transition-all duration-300 hover:border-blue-500/50"
          >
            <div className="flex flex-col lg:flex-row gap-6 p-6">
              <div className="lg:w-2/3 space-y-4">
                <div className="flex items-center space-x-2">
                  <h3 className="text-xl font-semibold text-gray-200">
                    {project.name}
                  </h3>
                  <ExternalLink className="w-4 h-4 text-gray-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                
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