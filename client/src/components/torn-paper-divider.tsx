import React from 'react';

interface TornPaperDividerProps {
  className?: string;
}

export function TornPaperDivider({ className = '' }: TornPaperDividerProps) {
  return (
    <div className={`absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-[2px] ${className}`}>
      {/* Torn Paper Effect SVG */}
      <svg
        className="w-full h-full"
        viewBox="0 0 4 100"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main torn edge path */}
        <path
          d="M2 0L1.5 3L2.5 6L1.8 9L2.2 12L1.7 15L2.3 18L1.9 21L2.1 24L1.6 27L2.4 30L1.8 33L2.2 36L1.7 39L2.3 42L1.9 45L2.1 48L1.6 51L2.4 54L1.8 57L2.2 60L1.7 63L2.3 66L1.9 69L2.1 72L1.6 75L2.4 78L1.8 81L2.2 84L1.7 87L2.3 90L1.9 93L2.1 96L2 100"
          stroke="rgba(180, 180, 180, 0.4)"
          strokeWidth="1"
          fill="none"
        />
        {/* Secondary torn edge for more realistic effect */}
        <path
          d="M2 0L2.2 2L1.8 5L2.1 8L1.9 11L2.3 14L1.7 17L2.2 20L1.8 23L2.1 26L1.9 29L2.3 32L1.7 35L2.2 38L1.8 41L2.1 44L1.9 47L2.3 50L1.7 53L2.2 56L1.8 59L2.1 62L1.9 65L2.3 68L1.7 71L2.2 74L1.8 77L2.1 80L1.9 83L2.3 86L1.7 89L2.2 92L1.8 95L2.1 98L2 100"
          stroke="rgba(160, 160, 160, 0.3)"
          strokeWidth="0.8"
          fill="none"
        />
        {/* Paper fiber texture lines */}
        <path
          d="M1.2 5L2.8 5M1.4 12L2.6 12M1.3 19L2.7 19M1.5 26L2.5 26M1.2 33L2.8 33M1.4 40L2.6 40M1.3 47L2.7 47M1.5 54L2.5 54M1.2 61L2.8 61M1.4 68L2.6 68M1.3 75L2.7 75M1.5 82L2.5 82M1.2 89L2.8 89M1.4 96L2.6 96"
          stroke="rgba(200, 200, 200, 0.2)"
          strokeWidth="0.3"
        />
      </svg>
      
      {/* Subtle shadow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-300/10 to-transparent"></div>
    </div>
  );
}