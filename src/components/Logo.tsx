/** Logo "Rp" putih di kotak teal, garis kunyit di bawahnya (sama dengan AppLogo). */
export function Logo({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 96 96"
      role="img"
      aria-label="Logo RupiahRapi"
    >
      <rect width="96" height="96" rx="26" fill="#0F6E66" />
      <text
        x="48"
        y="58"
        textAnchor="middle"
        fontSize="38"
        fontWeight="800"
        fill="#fff"
        fontFamily="inherit"
      >
        Rp
      </text>
      <rect x="26" y="68" width="44" height="6" rx="3" fill="#F2B544" />
    </svg>
  );
}
