import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 relative">
        <div className="flex justify-between items-center">
          {/* Logo + Name */}
          <div className="flex items-center gap-2">
            <img src="/photos/logo.png" alt="Russell Ferrero" className="w-14 h-14 drop-shadow-xl hover:rotate-45 transition-transform" />
            <h1 className="text-2xl font-bold text-white drop-shadow-lg glow-text cursor-default" style={{fontFamily: 'Poppins', letterSpacing: '0.01em'}}>
              russellfrrr
            </h1>
          </div>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex gap-6 text-white drop-shadow-lg">
            <li><a href="#home" className="nav-link">home</a></li>
            <li><a href="#about" className="nav-link">about</a></li>
            <li><a href="#skills" className="nav-link">skills</a></li>
            <li><a href="#projects" className="nav-link">projects</a></li>
            <li><a href="#contact" className="nav-link">contact</a></li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden text-white drop-shadow-lg"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute right-4 top-20 bg-black/95 rounded-lg px-6 py-4 w-48 drop-shadow-lg">
            <ul className="flex flex-col gap-4 text-white">
              <li><a href="#home" className="nav-link block" onClick={closeMenu}>home</a></li>
              <li><a href="#about" className="nav-link block" onClick={closeMenu}>about</a></li>
              <li><a href="#skills" className="nav-link block" onClick={closeMenu}>skills</a></li>
              <li><a href="#projects" className="nav-link block" onClick={closeMenu}>projects</a></li>
              <li><a href="#contact" className="nav-link block" onClick={closeMenu}>contact</a></li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header;