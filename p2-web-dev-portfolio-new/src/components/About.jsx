function About() {
  return (
    <section id="about" className="bg-black py-32 transition-transform duration-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              About Me
            </h2>

            <p className="text-lg text-gray-300 mb-4 text-justify leading-relaxed">
              I'm Russell, a full-stack web developer currently focused on 
              mastering the <strong>MERN stack</strong>. I believe technology 
              isn't just about code - it's about creating solutions that can 
              make life better for people. My goal is to grow into a developer
              who build applications that are not only functional and modern,
              but also meaningful and impactful to society.
            </p>

            <p className="text-lg text-gray-300 text-justify leading-relaxed">
              When I'm not coding, you'll probably find me grinding on <strong>games</strong>
              (because debugging is easier than climbing ranked, trust me). I'm also a fan of
              good <strong>whiskey</strong> and <strong>vodka</strong>, and a huge <strong>One Piece</strong>
              follower - still waiting for Luffy to finally find that treasure, just like I'm 
              chasing mine. 
            </p>
          </div>

          <div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 hover:translate-x-2 transition group cursor-pointer">
                <span className="text-white font-semibold group-hover:text-blue-400 transition">→</span>
                <span className="text-gray-200">Full Stack Developer</span>
              </li>
              <li className="flex items-start gap-3 hover:translate-x-2 transition group cursor-pointer">
                <span className="text-white font-semibold group-hover:text-blue-400 transition">→</span>
                <span className="text-gray-200">MERN Stack Specialist</span>
              </li>
              <li className="flex items-start gap-3 hover:translate-x-2 transition group cursor-pointer">
                <span className="text-white font-semibold group-hover:text-blue-400 transition">→</span>
                <span className="text-gray-200">Backend-focused</span>
              </li>
              <li className="flex items-start gap-3 hover:translate-x-2 transition group cursor-pointer">
                <span className="text-white font-semibold group-hover:text-blue-400 transition">→</span>
                <span className="text-gray-200">Problem Solver</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;