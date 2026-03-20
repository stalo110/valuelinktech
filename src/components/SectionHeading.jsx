function SectionHeading({ eyebrow, title, description, center = false, light = false }) {
  const headingClass = light ? 'text-white' : 'text-[color:var(--page-text)]';
  const copyClass = light ? 'text-white/74' : 'text-[color:var(--muted-text)]';
  const eyebrowClass = light
    ? 'border-white/15 bg-white/10 text-stone-100'
    : 'border-[color:var(--surface-border-strong)] bg-white/76 text-ember';

  return (
    <div className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow ? (
        <span
          className={`inline-flex rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] backdrop-blur-sm ${eyebrowClass}`}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={`mt-5 font-display text-balance text-3xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-4xl lg:text-[3rem] ${headingClass}`}
      >
        {title}
      </h2>
      {description ? <p className={`mt-5 text-base leading-8 sm:text-lg ${copyClass}`}>{description}</p> : null}
    </div>
  );
}

export default SectionHeading;
