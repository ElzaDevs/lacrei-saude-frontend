'use client';

export function Logo() {
  return (
    <svg
      width="160"
      height="40"
      viewBox="0 0 160 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Lacrei Saúde"
    >
      {/* LS Symbol */}
      <rect x="0" y="4" width="32" height="32" rx="6" fill="#018762" />
      <text
        x="16"
        y="28"
        fontSize="20"
        fontWeight="700"
        fill="white"
        textAnchor="middle"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        LS
      </text>

      {/* Lacrei Saúde Text */}
      <text
        x="40"
        y="22"
        fontSize="16"
        fontWeight="700"
        fill="#018762"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        Lacrei Saúde
      </text>
    </svg>
  );
}
