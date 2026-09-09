import { ArrowUpRight } from 'lucide-react';
import PageIntro from '../components/PageIntro';
import ProjectPreview from '../components/ProjectPreview';
import { projects } from '../data';

export default function Work({ navigate, setDemo }) {
  return <><PageIntro eyebrow="03 / Selected work" title={<>A few projects, <em>properly lived in.</em></>} >Not just screenshots. Open the work, poke around, and see how the pieces behave.</PageIntro><section className="work-list page-section">{projects.map((project, index) => <article className={`work-row ${project.accent}`} key={project.id}><div className="work-index">0{index + 1}</div><div className="work-info"><p className="eyebrow">{project.tag}</p><h2>{project.title}</h2><p>{project.text}</p><div className="work-stack"><span>React</span><span>TypeScript</span><span>Product design</span></div></div><div className="work-preview"><ProjectPreview type={project.id} /></div><button className="preview-open" onClick={() => { setDemo(project.id); navigate(project.id === 'dash' ? 'dashboard' : 'lab'); }} aria-label={`Open ${project.title}`}><ArrowUpRight size={22} /></button></article>)}</section></>;
}
