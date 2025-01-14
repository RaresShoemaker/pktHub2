import React from 'react';

interface GradientBackgroundProps {
  className?: string;
}

const GradientBackground:React.FC<GradientBackgroundProps> = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <div 
        className="absolute w-full h-96 top-full left-1/2 -translate-x-1/2 -translate-y-1/2
        bg-gradient-to-t from-black via-black/95 to-transparent
        opacity-95 blur-3xl -rotate-180"
      />
    </div>
  );
};

export default GradientBackground;