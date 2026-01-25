import { FaReact, FaJsSquare, FaNode, FaGitAlt, FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss, SiCss3, SiExpress, SiMongodb, SiMaterialdesign } from 'react-icons/si';

function Skills() {
  const skills = [
    { icon: <FaReact className="text-4xl text-blue-400" />, label: "React", link: "https://react.dev" },
    { icon: <SiTailwindcss className="text-4xl text-cyan-400" />, label: "Tailwind CSS", link: "https://tailwindcss.com" },
    { icon: <FaJsSquare className="text-4xl text-yellow-400" />, label: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { icon: <FaBootstrap className="text-4xl text-purple-500" />, label: "Bootstrap", link: "https://getbootstrap.com" },
    { icon: <SiMaterialdesign className="text-4xl text-blue-500" />, label: "Material UI", link: "https://mui.com" },
    { icon: <SiCss3 className="text-4xl text-blue-500" />, label: "CSS3", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { icon: <FaNode className="text-4xl text-green-400" />, label: "Node.js", link: "https://nodejs.org/en/docs/" },
    { icon: <SiExpress className="text-4xl text-gray-400" />, label: "Express", link: "https://expressjs.com" },
    { icon: <SiMongodb className="text-4xl text-green-500" />, label: "MongoDB", link: "https://docs.mongodb.com" },
    { icon: <FaGitAlt className="text-4xl text-orange-400" />, label: "Git", link: "https://git-scm.com/doc" },
  ];

  return (
    <section id="skills" className="bg-black py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-white mb-20 text-center relative" style={{fontFamily: 'Poppins'}}>My Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-items-center">
          {skills.map((skill, index) => (
            <a key={index} href={skill.link} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-4 hover:scale-110 transition-all duration-300 cursor-pointer group">
              <div className="group-hover:drop-shadow-[0_0_12px_rgba(251,191,36,0.6)] transition-all">
                {skill.icon}
              </div>
              <p className="text-gray-300 text-center font-medium text-sm group-hover:text-amber-400 transition-colors" style={{fontFamily: 'Inter'}}>{skill.label}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills;