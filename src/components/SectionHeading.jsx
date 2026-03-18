function SectionHeading({ eyebrow, title, description, center = false, light = false }) {
  const headingClass = light ? 'text-white' : 'text-slate-900';
  const copyClass = light ? 'text-slate-200' : 'text-slate-600';
  const eyebrowClass = light ? 'bg-white/10 text-slate-100' : 'bg-teal/10 text-teal';

  return (
    <div className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow ? (
        <span
          className={`inline-flex rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] ${eyebrowClass}`}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2 className={`mt-4 text-balance text-3xl font-semibold sm:text-4xl ${headingClass}`}>{title}</h2>
      {description ? <p className={`mt-5 text-base leading-8 sm:text-lg ${copyClass}`}>{description}</p> : null}
    </div>
  );
}

export default SectionHeading;
