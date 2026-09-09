import { ArrowUpRight, ChevronRight, Sparkles } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data';

// Renders the landing page, introduction, and featured project cards.
export default function Home({ navigate, setDemo, language }) {
  const isArabic = language === 'ar';
  return <>
    <section className="hero page-section">
      <div className="hero-copy reveal-up">
        <p className="eyebrow"><span className="status-dot" /> Cairo / Remote / UTC+2</p>
        <h1>{isArabic ? <>منتجات رقمية بروح <em>إنسانية.</em></> : <>Digital products with a <em>human pulse.</em></>}</h1>
        <p className="hero-lede">{isArabic ? 'أنا عبدالرحمن، مطوّر Full Stack أحوّل الأفكار المعقدة إلى تجارب هادئة وأنظمة موثوقة.' : 'I am abdelrahman, a full stack developer who turns complicated ideas into calm, useful interfaces and dependable systems.'}</p>
        <div className="hero-actions"><button className="button button-dark" onClick={() => navigate('work')}>{isArabic ? 'استكشف أعمالي' : 'Explore selected work'} <ArrowUpRight size={17} /></button><button className="text-button" onClick={() => navigate('contact')}>{isArabic ? 'ابدأ محادثة' : 'Start a conversation'} <ChevronRight size={17} /></button></div>
        <div className="hero-meta"><span><strong>7+</strong> {isArabic ? 'سنوات خبرة' : 'years building'}</span><span><strong>24</strong> {isArabic ? 'منتجًا تم إطلاقه' : 'products shipped'}</span><span><strong>03</strong> {isArabic ? 'مشاريع تفاعلية' : 'core demos'}</span></div>
      </div>
      <div className="hero-art reveal-in"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="portrait-card"><div className="portrait-sun" /><div className="portrait-initials">AN</div><span>Craft over noise</span></div><div className="floating-note note-top"><Sparkles size={16} /> Systems thinker</div><div className="floating-note note-bottom"><span className="code-chip">&lt;/&gt;</span> Product-minded engineer</div></div>
    </section>
    <section className="marquee-band"><div>RESEARCH <span>+</span> SHIP <span>+</span> REFINE <span>+</span> REPEAT <span>+</span> RESEARCH <span>+</span> SHIP <span>+</span> REFINE <span>+</span></div></section>
    <section className="home-grid page-section"><div><p className="eyebrow">{isArabic ? 'باختصار' : 'The short version'}</p><h2>{isArabic ? <>البرمجيات الجيدة حوار بين <em>الناس</em> و<em>الإمكانيات.</em></> : <>Good software is a conversation between <em>people</em> and <em>possibility.</em></>}</h2></div><div className="home-grid-copy"><p>{isArabic ? 'من أول رسم وحتى آخر API، أعمل عبر الـStack كاملًا لأجعل المنتجات واضحة وسريعة ولها شخصية.' : 'From the first sketch to the last API call, I work across the stack to make products feel obvious, responsive, and distinctly theirs.'}</p><button className="arrow-link" onClick={() => navigate('about')}>{isArabic ? 'اكتشف منهجي' : 'More about my approach'} <ArrowUpRight size={17} /></button></div></section>
    <section className="featured-section page-section"><div className="section-heading"><div><p className="eyebrow">{isArabic ? 'نماذج مختارة' : 'A small selection'}</p><h2>{isArabic ? 'أعمال صنعتها' : 'Things I have made'}</h2></div><button className="arrow-link" onClick={() => navigate('work')}>{isArabic ? 'شاهد كل الأعمال' : 'View all work'} <ArrowUpRight size={17} /></button></div><div className="project-grid">{projects.map((project) => <ProjectCard key={project.id} project={project} onClick={() => { setDemo(project.id); navigate(project.id === 'dash' ? 'dashboard' : 'lab'); }} />)}</div></section>
  </>;
}
