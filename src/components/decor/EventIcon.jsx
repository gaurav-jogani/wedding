const icons = {
  carnival: (
    <>
      <path d="M32 54 L32 30" />
      <circle cx="32" cy="22" r="8" />
      <path d="M32 30 L18 42 M32 30 L46 42 M32 38 L16 38 M32 38 L48 38" />
    </>
  ),
  sangeet: (
    <>
      <path d="M22 42 V16 L44 10 V36" />
      <circle cx="18" cy="44" r="6" />
      <circle cx="40" cy="38" r="6" />
    </>
  ),
  baraat: (
    <>
      <path d="M12 46 L20 24 L28 46" />
      <path d="M36 46 L44 20 L52 46" />
      <circle cx="20" cy="18" r="4" />
      <circle cx="44" cy="14" r="4" />
      <path d="M8 50 H56" />
    </>
  ),
  phere: (
    <>
      <circle cx="24" cy="32" r="12" />
      <circle cx="40" cy="32" r="12" />
    </>
  ),
  reception: (
    <>
      <path d="M12 48 Q32 20 52 48" />
      <path d="M32 28 V48" />
      <circle cx="32" cy="20" r="5" />
    </>
  ),
};

export default function EventIcon({ type, className = 'w-8 h-8' }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[type] || icons.phere}
    </svg>
  );
}
