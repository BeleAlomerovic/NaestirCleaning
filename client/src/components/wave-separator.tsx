interface WaveSeparatorProps {
  nextSectionColor: 'white' | 'purple';
  className?: string;
}

export function WaveSeparator({ nextSectionColor, className = '' }: WaveSeparatorProps) {
  const fillColor = nextSectionColor === 'white' ? '#FFFFFF' : '#F9F7FC';
  
  return (
    <div className={`wave-separator ${className}`}>
      <svg 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none"
        className="drop-shadow-sm"
      >
        <path 
          d="M0,60 C150,20 350,100 600,60 C850,20 1050,100 1200,60 L1200,120 L0,120 Z" 
          fill={fillColor}
          className="transition-all duration-500"
        />
      </svg>
    </div>
  );
}