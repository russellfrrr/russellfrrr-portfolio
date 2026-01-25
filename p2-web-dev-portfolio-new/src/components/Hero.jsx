import Typewriter from 'typewriter-effect';

function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden cursor-default">
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-bg2.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4">
        <div className="text-center max-w-2xl grow flex flex-col justify-center">
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-12" style={{fontFamily: 'Poppins', letterSpacing: '0.03em', fontWeight: 700}}>
            Russell Ferrero
          </h2>
          <div className="h-12 mb-12 text-xl md:text-2xl text-white" style={{fontFamily: 'Inter'}}>
            <Typewriter
              options={{
                strings: [
                  'a web developer.',
                  'a full-stack engineer.',
                  'a problem solver.',
                  'a tech enthusiast.'
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </div>
        </div>
        <a href="#projects" className="text-gray-400 px-6 py-2 rounded-lg hover:text-amber-400 transition-all font-medium mb-12 cursor-pointer" style={{fontFamily: 'Poppins'}}>
          see what i've built 
        </a>
      </div>
    </section>
  )
}

export default Hero;