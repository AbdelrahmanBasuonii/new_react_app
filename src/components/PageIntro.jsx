// Renders the shared heading block used at the top of interior pages.
const arabicCopy = {
  '02 / About': { eyebrow: '02 / عنّي', title: <>مطوّر <em>يستمع</em> أولًا.</>, description: 'أفضل قرار تقني هو الذي يمنح الناس ثقة أكبر. مهمتي أن أصل إليه.' },
  '03 / Selected work': { eyebrow: '03 / أعمال مختارة', title: <>مشاريع قليلة، <em>لكنها حقيقية.</em></>, description: 'ليست مجرد صور. افتح المشاريع وجرب كيف تتحرك التفاصيل.' },
  '04 / Project lab': { eyebrow: '04 / مختبر المشاريع', title: <>جرّب العمل. <em>صُمّم ليتحرك.</em></>, description: 'ثلاث تجارب تفاعلية توضّح كيف أفكر في التفاعل المفيد.' },
  '05 / Dashboard': { eyebrow: '05 / لوحة البيانات', title: <>نظرة تشغيلية، <em>بمساحة للتنفس.</em></>, description: 'لوحة بيانات واضحة، عملية، وتخبرك بما يحتاج إلى قرار.' },
  '06 / Contact': { eyebrow: '06 / تواصل', title: <>هل لديك مشكلة تستحق <em>الحل؟</em></>, description: 'أخبرني بما تعطل، أو ما ينمو، أو ما يجب أن يوجد بعد ذلك.' },
};

// Renders a page introduction in the active interface language.
export default function PageIntro({ eyebrow, title, children }) {
  const translation = document.documentElement.lang === 'ar' ? arabicCopy[eyebrow] : null;
  return (
    <section className="page-intro">
      <p className="eyebrow">{translation?.eyebrow || eyebrow}</p>
      <h1>{translation?.title || title}</h1>
      <p className="intro-copy">{translation?.description || children}</p>
    </section>
  );
}
