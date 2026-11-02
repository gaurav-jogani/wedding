export default function OmSymbol({ className = 'w-16 h-16' }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" aria-hidden="true">
        <circle
          cx="50"
          cy="50"
          r="46"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.6"
        />
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.75"
          opacity="0.4"
          strokeDasharray="2 4"
        />
      </svg>
      <span
        className="relative font-display text-gold-gradient select-none"
        style={{ fontSize: '2.4rem', lineHeight: 1 }}
      >
        ॐ
      </span>
    </div>
  );
}
