function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-bg2.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="absolute inset-0 flex items-center justify-center z-20 px-4">
        <div className="text-center max-w-2xl">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Russell Ferrero
          </h2>
          <p className="text-xl text-gray-100 mb-8 leading-relaxed">
            a web developer.
          </p>
          <a href="#projects" className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition font-semibold">
            View My Work
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero;