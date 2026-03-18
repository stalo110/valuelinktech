function Logo({ showTagline = true, compact = false, inverted = false }) {
  const textClass = inverted ? 'text-white' : 'text-slate-900 dark:text-white';
  const taglineClass = inverted ? 'text-slate-300' : 'text-slate-500 dark:text-slate-400';

  return (
    <div className="flex items-center gap-3">
      <div className="relative">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(140deg,#0a1929_0%,#1e3a5f_55%,#00bcd4_100%)] text-xs font-semibold uppercase tracking-[0.28em] text-white shadow-[0_12px_30px_-18px_rgba(0,0,0,0.55)] dark:bg-[linear-gradient(140deg,#0a1929_0%,#1e3a5f_55%,#ffb74d_100%)]">
          VL
        </div>
        <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-gold shadow-[0_0_0_4px_rgba(255,255,255,0.85)] dark:shadow-[0_0_0_4px_rgba(6,17,29,0.9)]" />
      </div>
      {!compact ? (
        <div>
          <p className={`text-base font-semibold ${textClass}`}>Valuelink Technologies</p>
          {showTagline ? (
            <p className={`text-xs uppercase tracking-[0.28em] ${taglineClass}`}>Support That Delivers</p>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

export default Logo;
