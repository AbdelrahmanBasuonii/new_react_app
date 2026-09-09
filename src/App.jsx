import { useEffect, useState } from 'react';
import SiteFooter from './components/SiteFooter';
import SiteHeader from './components/SiteHeader';
import About from './pages/About';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Lab from './pages/Lab';
import Work from './pages/Work';

// Composes the portfolio shell and switches between its six client-side pages.
export default function App() {
  const [page, setPage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [demo, setDemo] = useState('calc');
  const [language, setLanguage] = useState(() => localStorage.getItem('portfolio-language') || 'en');
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('portfolio-theme') === 'dark');

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.classList.toggle('dark-mode', darkMode);
    localStorage.setItem('portfolio-language', language);
    localStorage.setItem('portfolio-theme', darkMode ? 'dark' : 'light');
  }, [language, darkMode]);

  // Changes the active page and returns the user to the top of the view.
  const navigate = (nextPage) => {
    setPage(nextPage);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-shell">
      <SiteHeader page={page} menuOpen={menuOpen} setMenuOpen={setMenuOpen} navigate={navigate} language={language} setLanguage={setLanguage} darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        {page === 'home' && <Home navigate={navigate} setDemo={setDemo} language={language} />}
        {page === 'about' && <About navigate={navigate} />}
        {page === 'work' && <Work navigate={navigate} setDemo={setDemo} />}
        {page === 'lab' && <Lab demo={demo} setDemo={setDemo} />}
        {page === 'dashboard' && <Dashboard navigate={navigate} />}
        {page === 'contact' && <Contact />}
      </main>
      <SiteFooter language={language} />
    </div>
  );
}
