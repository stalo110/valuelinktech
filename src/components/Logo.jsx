import logoImage from '../assets/logo.jpeg';

function Logo({ showTagline = true, compact = false, inverted = false }) {
  const imageHeightClass = compact ? 'h-10 sm:h-11' : 'h-11 sm:h-12';
  const frameClass = inverted ? 'rounded-[22px] bg-white/[0.04] px-3 py-2 ring-1 ring-white/10' : '';
  const taglineClass = inverted ? 'text-stone-300' : 'text-[color:var(--muted-text)]';

  return (
    <div className="flex flex-col items-start gap-2">
      <div className={frameClass}>
        <img
          src={logoImage}
          alt="Valuelink Technologies"
          className={`${imageHeightClass} w-auto max-w-none object-contain drop-shadow-[0_10px_18px_rgba(0,0,0,0.18)]`}
          decoding="async"
        />
      </div>
      {showTagline && !compact ? (
        <p className={`text-[11px] font-semibold uppercase tracking-[0.28em] ${taglineClass}`}>Support That Delivers</p>
      ) : null}
    </div>
  );
}

export default Logo;
