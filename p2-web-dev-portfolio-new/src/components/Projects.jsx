import { FiExternalLink } from 'react-icons/fi';
import { FiGithub } from 'react-icons/fi';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "SpendWise",
      image: "/photos/spendwise-logo.png",
      description: "A full-stack web application for managing personal finances with real-time budget tracking, expense categorization, and financial analytics.",
      tech: ["React", "Node.js", "MongoDB", "Express", "TailwindCSS", "MaterialUI"],
      category: "Full-Stack",
      live: "https://spendwiseph.netlify.app/",
      github: "https://github.com/russellfrrr/spendwise-app"
    },
    {
      id: 2,
      title: "SuitLink",
      image: "/photos/suitlink-logo.png",
      description: "A job portal web application designed to bring clarity and structure to the hiring process",
      tech: ["React", "Node.js", "MongoDB", "Express", "TailwindCSS"],
      category: "Full-Stack",
      live: "#",
      github: "https://github.com/russellfrrr/suitlink-job-portal"
    },
    {
      id: 3,
      title: "Amihan",
      image: "/photos/amihan-logo.png",
      description: "Amihan is an air quality monitoring application designed to help users easily understand the air they breathe, anywhere in the world.",
      tech: ["HTML5", "CSS3", "Bootstrap"],
      category: "Frontend",
      live: "https://amihan-winds.vercel.app/",
      github: "https://github.com/russellfrrr/amihan"
    }
  ];

  return (
    <section id="projects" className="bg-black py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold text-white mb-4" style={{fontFamily: 'Poppins'}}>Projects</h2>
          <p className="text-gray-400" style={{fontFamily: 'Inter'}}>work. progress. evolution.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group h-full border border-gray-700 rounded-lg overflow-hidden hover:border-amber-500 transition-all duration-300 bg-gray-900 hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col">
              {/* Project Image/Gradient */}
              <div className="h-80 bg-linear-to-br from-gray-800 to-gray-900 group-hover:from-cyan-900/30 group-hover:to-blue-900/30 transition flex items-center justify-center overflow-hidden">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="text-7xl font-bold text-gray-700 group-hover:text-cyan-500/30 transition">{project.id}</div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col">
                <div className="grow">
                  <span className="inline-block px-3 py-1 bg-amber-500/10 text-amber-400 rounded-full text-xs font-semibold uppercase tracking-wider mb-3" style={{fontFamily: 'Poppins'}}>
                    {project.category}
                  </span>
                  
                  <h3 className="text-xl font-bold text-white mb-3" style={{fontFamily: 'Poppins'}}>
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4" style={{fontFamily: 'Inter'}}>
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6 cursor-default">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs font-medium hover:bg-amber-500/20 hover:text-amber-400 transition" style={{fontFamily: 'Inter'}}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-400 transition" title="Live Demo">
                    <FiExternalLink size={20} />
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-400 transition" title="GitHub Repository">
                    <FiGithub size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
