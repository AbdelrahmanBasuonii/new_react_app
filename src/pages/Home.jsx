import { ArrowUpRight, ChevronRight, Sparkles } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data';

// Renders the landing page, introduction, and featured project cards.
export default function Home({ navigate, setDemo }) {
  return <>
    <section className="hero page-section">
      <div className="hero-copy reveal-up">
        <p className="eyebrow"><span className="status-dot" /> Cairo / Remote / UTC+2</p>
        <h1>Digital products with a <em>human pulse.</em></h1>
        <p className="hero-lede">I am abdelrahman, a full stack developer who turns complicated ideas into calm, useful interfaces and dependable systems.</p>
        <div className="hero-actions"><button className="button button-dark" onClick={() => navigate('work')}>Explore selected work <ArrowUpRight size={17} /></button><button className="text-button" onClick={() => navigate('contact')}>Start a conversation <ChevronRight size={17} /></button></div>
        <div className="hero-meta"><span><strong>7+</strong> years building</span><span><strong>24</strong> products shipped</span><span><strong>03</strong> core demos</span></div>
      </div>
      <div className="hero-art reveal-in"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="portrait-card"><div className="portrait-sun" /><div className="portrait-initials">AN</div><span>Craft over noise</span></div><div className="floating-note note-top"><Sparkles size={16} /> Systems thinker</div><div className="floating-note note-bottom"><span className="code-chip">&lt;/&gt;</span> Product-minded engineer</div></div>
    </section>
    <section className="marquee-band"><div>RESEARCH <span>+</span> SHIP <span>+</span> REFINE <span>+</span> REPEAT <span>+</span> RESEARCH <span>+</span> SHIP <span>+</span> REFINE <span>+</span></div></section>
    <section className="home-grid page-section"><div><p className="eyebrow">The short version</p><h2>Good software is a conversation between <em>people</em> and <em>possibility.</em></h2></div><div className="home-grid-copy"><p>From the first sketch to the last API call, I work across the stack to make products feel obvious, responsive, and distinctly theirs.</p><button className="arrow-link" onClick={() => navigate('about')}>More about my approach <ArrowUpRight size={17} /></button></div></section>
    <section className="featured-section page-section"><div className="section-heading"><div><p className="eyebrow">A small selection</p><h2>Things I have made</h2></div><button className="arrow-link" onClick={() => navigate('work')}>View all work <ArrowUpRight size={17} /></button></div><div className="project-grid">{projects.map((project) => <ProjectCard key={project.id} project={project} onClick={() => { setDemo(project.id); navigate(project.id === 'dash' ? 'dashboard' : 'lab'); }} />)}</div></section>
  </>;
}
