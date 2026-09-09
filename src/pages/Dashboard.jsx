import { ArrowUpRight, Zap } from 'lucide-react';
import PageIntro from '../components/PageIntro';
import DashboardDemo from '../components/DashboardDemo';

// Presents the dashboard demo with an explanation of its product decisions.
export default function Dashboard({ navigate }) {
  return <><PageIntro eyebrow="05 / Dashboard" title={<>The operational view, <em>with a little air.</em></>} >A closer look at the dashboard pattern: clear hierarchy, useful density, and no mystery about what needs attention.</PageIntro><section className="dashboard-page page-section"><DashboardDemo /><div className="dashboard-note"><div className="note-icon"><Zap size={20} /></div><div><h3>Designed for the next decision.</h3><p>Every metric earns its place by helping a team decide what to do next, not just what happened last.</p></div><button className="arrow-link" onClick={() => navigate('contact')}>Build something useful <ArrowUpRight size={17} /></button></div></section></>;
}
