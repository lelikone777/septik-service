interface LogoProps {
  className?: string;
}

// Фирменный знак: капля с волной потока, глянцевым бликом и градиентом бренда.
export function Logo({ className = 'w-10 h-10' }: LogoProps) {
  return (
    <div
      className={`${className} relative rounded-xl bg-gradient-to-br from-emerald-400 via-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:shadow-emerald-500/50 transition-shadow overflow-hidden`}
    >
      {/* глянцевый блик */}
      <span className="absolute -top-3 -left-3 w-8 h-8 bg-white/30 rounded-full blur-md pointer-events-none" />
      {/* нижнее свечение */}
      <span className="absolute -bottom-3 -right-2 w-7 h-7 bg-teal-900/20 rounded-full blur-md pointer-events-none" />

      <svg
        viewBox="0 0 32 32"
        className="w-3/5 h-3/5 relative drop-shadow-sm"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <clipPath id="dropClip">
            <path d="M16 2.5C16 2.5 26.5 13.5 26.5 21A10.5 10.5 0 0 1 5.5 21C5.5 13.5 16 2.5 16 2.5Z" />
          </clipPath>
        </defs>

        {/* капля */}
        <path
          d="M16 2.5C16 2.5 26.5 13.5 26.5 21A10.5 10.5 0 0 1 5.5 21C5.5 13.5 16 2.5 16 2.5Z"
          fill="white"
        />

        {/* волна потока внутри капли */}
        <g clipPath="url(#dropClip)">
          <path
            d="M3 21Q7.5 16.5 12 21T21 21T30 21V33H3Z"
            fill="#0d9488"
            fillOpacity="0.95"
          />
          <path
            d="M3 24Q7.5 19.5 12 24T21 24T30 24V33H3Z"
            fill="#0f766e"
            fillOpacity="0.7"
          />
        </g>
      </svg>
    </div>
  );
}
