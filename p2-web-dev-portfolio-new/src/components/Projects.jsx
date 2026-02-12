import { useState, useEffect } from 'react';
import { FiExternalLink, FiGithub, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

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
      live: "https://suitlink.vercel.app/",
      github: "https://github.com/russellfrrr/suitlink-job-portal"
    },
    {
      id: 3,
      title: "typed-env",
      image: "/photos/typed-env-logo.png",
      description: "A TypeScript-first utility for type-safe environment variables with runtime validation, literal-safe enums, and a schema-based API. Published as an npm package with automated tests.",
      tech: ["TypeScript", "Node.js", "Vitest", "ESM"],
      category: "Library",
      live: "https://www.npmjs.com/package/@russellfrrr/typed-env",
      github: "https://github.com/russellfrrr/typed-env"
    },
    {
      id: 4,
      title: "Amihan",
      image: "/photos/amihan-logo.png",
      description: "Amihan is an air quality monitoring application designed to help users easily understand the air they breathe, anywhere in the world.",
      tech: ["HTML5", "CSS3", "Bootstrap"],
      category: "Frontend",
      live: "https://amihan-winds.vercel.app/",
      github: "https://github.com/russellfrrr/amihan"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [projectsPerView, setProjectsPerView] = useState(1);

  useEffect(() => {
    const updateView = () => {
      const width = window.innerWidth;
      setProjectsPerView(width >= 1024 ? 3 : width >= 768 ? 2 : 1);
    };
    updateView();
    window.addEventListener('resize', updateView);
    return () => window.removeEventListener('resize', updateView);
  }, []);

  const maxIndex = Math.max(0, projects.length - projectsPerView);
  const next = () => setCurrentIndex(prevIndex => prevIndex >= maxIndex ? 0 : prevIndex + 1);
  const previous = () => setCurrentIndex(prevIndex => prevIndex <= 0 ? maxIndex : prevIndex - 1);

  return (
    <section id="projects" className="bg-black py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold text-white mb-4" style={{fontFamily: 'Poppins'}}>Projects</h2>
          <p className="text-gray-400" style={{fontFamily: 'Inter'}}>work. progress. evolution.</p>
        </div>

        <div className="relative">
          <button onClick={previous} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800/80 hover:bg-amber-500/20 text-white p-3 rounded-full transition-all hover:text-amber-400 border border-gray-700 hover:border-amber-500" aria-label="Previous project">
            <FiChevronLeft size={24} />
          </button>
          
          <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800/80 hover:bg-amber-500/20 text-white p-3 rounded-full transition-all hover:text-amber-400 border border-gray-700 hover:border-amber-500" aria-label="Next project">
            <FiChevronRight size={24} />
          </button>

          <div className="overflow-hidden mx-12">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * (100 / projects.length)}%)`, width: `${(projects.length / projectsPerView) * 100}%` }}>
              {projects.map((project) => (
                <div key={project.id} className="flex-shrink-0 px-4" style={{ width: `${100 / projects.length}%` }}>
                  <div className="group h-full border border-gray-700 rounded-lg overflow-hidden hover:border-amber-500 transition-all bg-gray-900 hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col">
                    <div className="h-80 bg-gradient-to-br from-gray-800 to-gray-900 group-hover:from-cyan-900/30 group-hover:to-blue-900/30 transition flex items-center justify-center overflow-hidden">
                      {project.image ? (
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                      ) : (
                        <div className="text-7xl font-bold text-gray-700 group-hover:text-cyan-500/30 transition">{project.id}</div>
                      )}
                    </div>
                    
                    <div className="p-6 flex flex-col grow">
                      <span className="self-start px-3 py-1 bg-amber-500/10 text-amber-400 rounded-full text-xs font-semibold uppercase tracking-wider mb-3" style={{fontFamily: 'Poppins'}}>{project.category}</span>
                      <h3 className="text-xl font-bold text-white mb-3" style={{fontFamily: 'Poppins'}}>{project.title}</h3>
                      <p className="text-gray-400 text-sm mb-4 flex-grow" style={{fontFamily: 'Inter'}}>{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech) => (
                          <span key={tech} className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs font-medium hover:bg-amber-500/20 hover:text-amber-400 transition" style={{fontFamily: 'Inter'}}>{tech}</span>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-400 transition" title="Live Demo"><FiExternalLink size={20} /></a>
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-400 transition" title="GitHub Repository"><FiGithub size={20} /></a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: maxIndex + 1 }, (_, i) => (
              <button key={i} onClick={() => setCurrentIndex(i)} className={`w-3 h-3 rounded-full transition-all ${currentIndex === i ? 'bg-amber-500 w-8' : 'bg-gray-600 hover:bg-gray-500'}`} aria-label={`Go to slide ${i + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
