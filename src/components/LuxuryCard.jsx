export default function LuxuryCard({ children, className = '' }) {
  return (
    <div
      className={`relative bg-ivory-card rounded-2xl border border-champagne-500/35 shadow-[0_18px_40px_rgba(107,42,53,0.12)] p-6 sm:p-10 ${className}`}
    >
      {children}
    </div>
  );
}
