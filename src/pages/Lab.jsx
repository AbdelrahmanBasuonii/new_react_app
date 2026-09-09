import PageIntro from '../components/PageIntro';
import Calculator from '../components/Calculator';
import Store from '../components/Store';
import DashboardDemo from '../components/DashboardDemo';
import { projects } from '../data';

// Switches between the calculator, storefront, and dashboard experiences.
export default function Lab({ demo, setDemo }) {
  return <><PageIntro eyebrow="04 / Project lab" title={<>Try the work. <em>It is meant to move.</em></>} >Three small experiences, each built to show how I think about useful interaction.</PageIntro><section className="lab-tabs page-section"><div className="tab-list">{projects.map((project) => <button key={project.id} className={demo === project.id ? 'tab active' : 'tab'} onClick={() => setDemo(project.id)}>{project.tag}<strong>{project.title}</strong></button>)}</div>{demo === 'calc' && <Calculator />}{demo === 'store' && <Store />}{demo === 'dash' && <DashboardDemo />}</section></>;
}
