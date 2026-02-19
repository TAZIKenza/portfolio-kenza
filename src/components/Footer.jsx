import React from 'react';
import { bio } from '../data.js';

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-white/10 mt-32 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">On travaille ensemble ?</h2>
        <p className="text-slate-400 mb-8 max-w-md mx-auto">
          Je suis actuellement à la recherche d'opportunités en stage ou PFE dans le domaine de l'AI et de la Data.
        </p>
        
        <div className="flex justify-center gap-6 mb-8">
          <a href={`mailto:${bio.email}`} className="p-3 bg-white/5 rounded-full hover:bg-cyan-500/20 hover:text-cyan-400 transition-all border border-white/10">
             📧 Email
          </a>
          <a href={bio.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-cyan-500/20 hover:text-cyan-400 transition-all border border-white/10">
             💼 LinkedIn
          </a>
          <a href={bio.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-cyan-500/20 hover:text-cyan-400 transition-all border border-white/10">
             💻 GitHub
          </a>
        </div>

        <div className="text-slate-500 text-sm">
          © {new Date().getFullYear()} {bio.name}. Conçu avec React & Tailwind.
        </div>
      </div>
    </footer>
  );
};

export default Footer;