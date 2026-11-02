/** A simple, respectful line-art rendition of Lord Ganesha for the invitation header. */
export default function GaneshaIcon({ className = 'w-16 h-16' }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <circle cx="50" cy="50" r="47" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.35" />

      {/* crown */}
      <path
        d="M38 20 Q50 8 62 20 L59 26 Q50 18 41 26 Z"
        fill="currentColor"
        opacity="0.9"
      />
      <circle cx="50" cy="14" r="2.6" fill="currentColor" opacity="0.9" />

      {/* ears */}
      <path d="M26 38 Q10 38 12 56 Q14 70 30 62 Q24 50 26 38 Z" fill="currentColor" opacity="0.85" />
      <path d="M74 38 Q90 38 88 56 Q86 70 70 62 Q76 50 74 38 Z" fill="currentColor" opacity="0.85" />

      {/* head */}
      <path
        d="M50 24 Q70 24 72 46 Q73 58 66 64 L66 70 Q66 76 60 76 L56 76 L56 70 Q50 73 44 70 L44 76 L40 76 Q34 76 34 70 L34 64 Q27 58 28 46 Q30 24 50 24 Z"
        fill="currentColor"
        opacity="0.92"
      />

      {/* trunk */}
      <path
        d="M50 54 Q46 62 50 70 Q54 78 48 84 Q44 88 38 86"
        fill="none"
        stroke="currentColor"
        strokeWidth="4.2"
        strokeLinecap="round"
        opacity="0.92"
      />

      {/* tusk + tilak */}
      <path d="M58 58 Q64 60 62 66" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
      <circle cx="50" cy="42" r="1.6" fill="#fff" opacity="0.8" />
    </svg>
  );
}
