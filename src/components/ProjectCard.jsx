import { ArrowUpRight, ChevronRight } from 'lucide-react';

// Presents a project summary and opens its interactive experience.
export default function ProjectCard({ project, onClick }) {
  const Icon = project.icon;
  return (
    <button className={`project-card ${project.accent}`} onClick={onClick}>
      <div className="card-top"><span>{project.tag}</span><ArrowUpRight size={18} /></div>
      <div className="project-icon"><Icon size={30} strokeWidth={1.5} /></div>
      <h3>{project.title}</h3>
      <p>{project.text}</p>
      <span className="card-action">Open experience <ChevronRight size={16} /></span>
    </button>
  );
}
