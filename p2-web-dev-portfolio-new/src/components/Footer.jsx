import { FiLinkedin, FiGithub } from 'react-icons/fi';
import { SiGitlab } from 'react-icons/si';

function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a 
              href="https://www.linkedin.com/in/russellfrrr/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-amber-400 transition duration-300"
              title="LinkedIn"
            >
              <FiLinkedin size={24} />
            </a>
            <a 
              href="https://github.com/russellfrrr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-amber-400 transition duration-300"
              title="GitHub"
            >
              <FiGithub size={24} />
            </a>
            <a 
              href="https://gitlab.com/russellfrrr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-amber-400 transition duration-300"
              title="GitLab"
            >
              <SiGitlab size={24} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-sm text-center" style={{fontFamily: 'Inter'}}>
            © 2026 Russell Ferrero. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
