function SectionHeading({ eyebrow, title, description, center = false, light = false }) {
  const headingClass = light ? 'text-white' : 'text-stone-950 dark:text-cream';
  const copyClass = light ? 'text-stone-200' : 'text-[color:var(--muted-text)]';
  const eyebrowClass = light ? 'bg-white/10 text-stone-100' : 'bg-ember/10 text-ember dark:bg-ember/15 dark:text-sand';

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
