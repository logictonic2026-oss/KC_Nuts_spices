/** Compact KC badge for the nav / footer — crisp at small sizes. */
export default function LogoMark({ size = 38 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="20" r="19" fill="#2a1f15" />
      <circle cx="20" cy="20" r="19" stroke="#c9a24b" strokeWidth="1.4" />
      {/* K */}
      <path d="M11 12 L11 28" stroke="#d9bd7a" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M11 20.5 L18 12" stroke="#d9bd7a" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M11 20.5 L19 28" stroke="#d9bd7a" strokeWidth="2.6" strokeLinecap="round" />
      {/* C */}
      <path
        d="M31 14.5 C26 11.5 22 14 22 20 C22 26 26 28.5 31 25.5"
        stroke="#b9532f"
        strokeWidth="2.6"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="30.5" cy="20" r="1.5" fill="#d9bd7a" />
    </svg>
  );
}
