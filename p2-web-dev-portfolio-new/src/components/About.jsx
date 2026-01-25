import { FiDownload } from 'react-icons/fi';

function About() {
  const handleVideoContextMenu = (e) => {
    e.preventDefault();
  };

  return (
    <section id="about" className="bg-black py-32 transition-transform duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

          <div>
            <h2 className="text-5xl font-bold text-white mb-8 relative inline-block" style={{fontFamily: 'Poppins'}}>
              About Me
              <div className="absolute bottom-0 left-0 h-1 bg-linear-to-r from-amber-400 to-amber-600" style={{width: '60%'}}></div>
            </h2>

            <p className="text-lg text-gray-300 mb-8 text-justify leading-8" style={{fontFamily: 'Inter'}}>
              I'm Russell, a <span className="text-amber-400 font-semibold">full-stack web developer</span> currently focused on 
              mastering the <span className="text-amber-400 font-semibold">MERN stack</span>. I believe technology 
              isn't just about writing code, it's about building solutions that
              make life better for people.
            </p>

            <p className="text-lg text-gray-300 mb-8 text-justify leading-8" style={{fontFamily: 'Inter'}}>
              <span className="text-amber-400 font-semibold">My goal</span> is to grow into a developer who creates applications that are
              not only functional and modern, but <span className="text-amber-400 font-semibold">meaningful</span> and <span className="text-amber-400 font-semibold">impactful</span> to society.
            </p>

            <p className="text-lg text-gray-300 mb-8 text-justify leading-8" style={{fontFamily: 'Inter'}}>
              When I'm not coding, you'll probably find me grinding on <span className="text-amber-400 font-semibold">games</span> (because 
              debugging is easier than climbing ranked, trust me). I'm also a fan of
              good <span className="text-amber-400 font-semibold">whiskey</span> and <span className="text-amber-400 font-semibold">vodka</span>, and a huge <span className="text-amber-400 font-semibold">One Piece</span> follower - still waiting for Luffy to finally find that treasure, just like I'm 
              chasing mine.
            </p>

            <a 
              href="files/RussellFerrero_2026_Resume.pdf" 
              download 
              className="inline-flex items-center gap-2 text-gray-400 hover:text-amber-400 transition cursor-pointer font-medium"
              title="Download Resume"
              style={{fontFamily: 'Poppins'}}
            >
              <FiDownload size={20} />
              Resume
            </a>
          </div>

          <div>
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              disablePictureInPicture
              onContextMenu={handleVideoContextMenu}
              className="w-full h-96 object-cover rounded-lg"
              controlsList="nofullscreen nodownload"
            >
              <source src="/videos/about-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;