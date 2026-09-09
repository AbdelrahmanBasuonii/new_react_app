import { Languages, Menu, Moon, Sun, X } from 'lucide-react';
import { navItems } from '../data';

const arabicLabels = {
  home: 'الرئيسية',
  about: 'عنّي',
  work: 'أعمال مختارة',
  lab: 'مختبر المشاريع',
  dashboard: 'لوحة البيانات',
  contact: 'تواصل',
};

// Renders branding, responsive navigation, language switching, and theme controls.
export default function SiteHeader({ page, menuOpen, setMenuOpen, navigate, language, setLanguage, darkMode, setDarkMode }) {
  const isArabic = language === 'ar';
  return <header className="site-header">
    <button className="brand" onClick={() => navigate('home')} aria-label={isArabic ? 'العودة للرئيسية' : 'Go home'}><span className="brand-mark">AN</span><span>abdelrahman basuonii</span></button>
    <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={isArabic ? 'فتح القائمة' : 'Toggle navigation'}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
    <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'}>{navItems.map((item) => <button key={item.id} className={page === item.id ? 'nav-link active' : 'nav-link'} onClick={() => navigate(item.id)}>{isArabic ? arabicLabels[item.id] : item.label}</button>)}</nav>
    <div className="header-tools">
      <button className="icon-control" onClick={() => { const nextLanguage = isArabic ? 'en' : 'ar'; document.documentElement.lang = nextLanguage; document.documentElement.dir = nextLanguage === 'ar' ? 'rtl' : 'ltr'; setLanguage(nextLanguage); }} aria-label={isArabic ? 'Switch to English' : 'التبديل إلى العربية'} title={isArabic ? 'English' : 'العربية'}><Languages size={16} /><span>{isArabic ? 'EN' : 'عربي'}</span></button>
      <button className="icon-control" onClick={() => setDarkMode(!darkMode)} aria-label={darkMode ? 'Use light mode' : 'Use dark mode'} title={darkMode ? 'Light mode' : 'Dark mode'}>{darkMode ? <Sun size={16} /> : <Moon size={16} />}</button>
      <button className="header-cta" onClick={() => navigate('contact')}><span className="status-dot" /> {isArabic ? 'متاح لمشاريع مختارة' : 'Available for select work'}</button>
    </div>
  </header>;
}
