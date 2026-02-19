import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/50 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          KT.
        </div>

        {/* Liens */}
        <div className="flex gap-8 text-sm font-medium text-slate-300">
          <a href="#home" className="hover:text-cyan-400 transition-colors">Accueil</a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">Projets</a>
          <a href="#contact" className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/50 rounded-lg hover:bg-cyan-500/20 transition-all">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; // L'export indispensable !