import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="group relative p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300">
      {/* Badge Catégorie */}
      <span className="text-[10px] uppercase tracking-widest text-cyan-400 font-bold">
        {project.category}
      </span>
      
      <h3 className="text-xl font-bold mt-2 mb-3 group-hover:text-cyan-400 transition-colors">
        {project.title}
      </h3>
      
      <p className="text-slate-400 text-sm leading-relaxed mb-4">
        {project.description}
      </p>
      
      {/* Liste des Technos */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((t, index) => (
          <span key={index} className="text-[11px] px-2 py-1 bg-slate-800 rounded text-slate-300 border border-slate-700">
            {t}
          </span>
        ))}
      </div>

      {/* Lien vers le projet */}
      <a href={project.link} className="text-sm font-semibold text-white flex items-center gap-2 group-hover:translate-x-2 transition-transform">
        Voir les détails <span>→</span>
      </a>
    </div>
  );
};

export default ProjectCard;