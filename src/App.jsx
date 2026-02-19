import React from 'react';
import Navbar from './components/Navbar';
import { bio } from './data.js';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <Navbar />
      
      <main className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
        <section id="home" className="space-y-6">
          <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            Disponible pour stage / PFE
          </div>
          
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight">
            {bio.name}
          </h1>
          
          <h2 className="text-3xl md:text-5xl font-bold text-slate-400">
            {bio.title}
          </h2>
          
          <p className="max-w-2xl text-lg text-slate-400 leading-relaxed">
            {bio.description}
          </p>
          
          <div className="flex gap-4 pt-4">
            <button className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold rounded-xl transition-all">
              Voir mes projets
            </button>
            <button className="px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-all">
              Mon CV (PDF)
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;