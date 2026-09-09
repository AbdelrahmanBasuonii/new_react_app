import { useState } from 'react';
import SiteFooter from './components/SiteFooter';
import SiteHeader from './components/SiteHeader';
import About from './pages/About';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Lab from './pages/Lab';
import Work from './pages/Work';

export default function App() {
  const [page, setPage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [demo, setDemo] = useState('calc');

  const navigate = (nextPage) => {
    setPage(nextPage);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-shell">
      <SiteHeader page={page} menuOpen={menuOpen} setMenuOpen={setMenuOpen} navigate={navigate} />
      <main>
        {page === 'home' && <Home navigate={navigate} setDemo={setDemo} />}
        {page === 'about' && <About navigate={navigate} />}
        {page === 'work' && <Work navigate={navigate} setDemo={setDemo} />}
        {page === 'lab' && <Lab demo={demo} setDemo={setDemo} />}
        {page === 'dashboard' && <Dashboard navigate={navigate} />}
        {page === 'contact' && <Contact />}
      </main>
      <SiteFooter />
    </div>
  );
}
