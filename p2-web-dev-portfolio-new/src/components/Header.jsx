function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo + Name */}
          <div className="flex items-center gap-2">
            <img src="/photos/logo.png" alt="Russell Ferrero" className="w-14 h-14 drop-shadow-xl hover:rotate-45 transition-transform" />
            <h1 className="text-2xl font-bold text-white drop-shadow-lg">
              russellfrrr
            </h1>
          </div>

          {/* Nav Links */}
          <ul className="flex gap-6 text-white drop-shadow-lg">
            <li><a href="#home" className="hover:opacity-70 transition">Home</a></li>
            <li><a href="#projects" className="hover:opacity-70 transition">Projects</a></li>
            <li><a href="#skills" className="hover:opacity-70 transition">Skills</a></li>
            <li><a href="#contact" className="hover:opacity-70 transition">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header;