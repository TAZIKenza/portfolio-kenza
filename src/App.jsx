import React from 'react';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';
import { bio, projects, skills } from './data.js';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 selection:bg-cyan-500/30">
      {/* Barre de navigation fixe */}
      <Navbar />
      
      {/* Contenu principal avec espacement vertical entre sections */}
      <main className="pt-32 px-6 max-w-6xl mx-auto space-y-32">
        
        {/* SECTION 1 : HERO (Accueil) */}
        <section id="home" className="space-y-6 animate-in fade-in duration-1000">
          <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            Disponible pour stage / PFE
          </div>
          
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-500 bg-clip-text text-transparent">
            {bio.name}
          </h1>
          
          <h2 className="text-3xl md:text-5xl font-bold text-slate-400">
            {bio.title}
          </h2>
          
          <p className="max-w-2xl text-lg text-slate-400 leading-relaxed">
            {bio.description}
          </p>
          
          <div className="flex gap-4 pt-4">
            <a href="#projects" className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold rounded-xl transition-all shadow-lg shadow-cyan-500/20">
              Voir mes projets
            </a>
            <button className="px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-all">
              Mon CV (PDF)
            </button>
          </div>
        </section>

        {/* SECTION 2 : SKILLS (Expertises) */}
        <section id="skills" className="space-y-12">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold">Expertises</h2>
            <div className="h-[1px] flex-1 bg-white/10"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 group">
                <h3 className="text-cyan-400 font-bold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-900/50 border border-slate-800 rounded-lg text-sm text-slate-300 group-hover:text-white transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3 : PROJECTS (Grille de projets) */}
        <section id="projects" className="space-y-12 pb-20">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold">Projets Sélectionnés</h2>
            <div className="h-[1px] flex-1 bg-white/10"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

      </main>

      {/* Pied de page et Contact */}
      <Footer />
    </div>
  );
}

export default App;