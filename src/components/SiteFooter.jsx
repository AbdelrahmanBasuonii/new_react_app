// Renders the shared footer content in the selected interface language.
export default function SiteFooter({ language }) {
  const isArabic = language === 'ar';
  return <footer className="site-footer"><span>abdelrahman basuonii / {isArabic ? 'مطوّر Full Stack' : 'Full stack developer'}</span><span>{isArabic ? 'بُني بشغف وفضول.' : 'Built with curiosity and too much coffee.'}</span><span>© 2025</span></footer>;
}
