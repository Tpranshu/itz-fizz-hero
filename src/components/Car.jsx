// Top-down car, drawn as SVG so we don't need any image asset. Faces right.
export default function Car() {
  return (
    <svg viewBox="0 0 300 140" className="h-auto w-full" aria-hidden="true">
      {/* wheels */}
      <rect x="50" y="4" width="48" height="22" rx="7" fill="#15151a" />
      <rect x="205" y="4" width="48" height="22" rx="7" fill="#15151a" />
      <rect x="50" y="114" width="48" height="22" rx="7" fill="#15151a" />
      <rect x="205" y="114" width="48" height="22" rx="7" fill="#15151a" />

      {/* body */}
      <path
        d="M10 42 Q10 24 30 22 L235 22 Q283 30 292 70 Q283 110 235 118 L30 118 Q10 116 10 98 Z"
        fill="#e63946"
      />

      {/* hood line */}
      <path d="M215 30 Q262 38 272 70 Q262 102 215 110" fill="none" stroke="#b92c37" strokeWidth="3" />

      {/* cabin */}
      <path d="M95 32 L180 32 L195 70 L180 108 L95 108 Q82 70 95 32 Z" fill="#1c1f2b" />
      <path d="M120 40 L172 40 L184 70 L172 100 L120 100 Z" fill="#2a2f42" />

      {/* rear spoiler */}
      <rect x="6" y="30" width="14" height="80" rx="4" fill="#b92c37" />

      {/* headlights */}
      <ellipse cx="280" cy="48" rx="6" ry="4" fill="#fff6c9" />
      <ellipse cx="280" cy="92" rx="6" ry="4" fill="#fff6c9" />
    </svg>
  );
}
