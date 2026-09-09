// Renders the shared heading block used at the top of interior pages.
export default function PageIntro({ eyebrow, title, children }) {
  return (
    <section className="page-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      {children && <p className="intro-copy">{children}</p>}
    </section>
  );
}
