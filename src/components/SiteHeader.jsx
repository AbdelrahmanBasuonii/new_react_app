import { Menu, X } from 'lucide-react';
import { navItems } from '../data';

// Renders branding, responsive navigation, and the availability call to action.
export default function SiteHeader({ page, menuOpen, setMenuOpen, navigate }) {
  return <header className="site-header"><button className="brand" onClick={() => navigate('home')} aria-label="Go home"><span className="brand-mark">AN</span><span>abdelrahman basuonii</span></button><button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X size={20} /> : <Menu size={20} />}</button><nav className={menuOpen ? 'main-nav is-open' : 'main-nav'}>{navItems.map((item) => <button key={item.id} className={page === item.id ? 'nav-link active' : 'nav-link'} onClick={() => navigate(item.id)}>{item.label}</button>)}</nav><button className="header-cta" onClick={() => navigate('contact')}><span className="status-dot" /> Available for select work</button></header>;
}
