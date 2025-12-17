import React from 'react';

// Assuming the user will replace the src with the actual file path or URL of the attached logo.
// If using the attached file directly is not possible in this environment, this acts as a placeholder.

export const Logo = ({ className = "h-12" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
        {/* Visual representation of the K logo described */}
        <div className="relative w-10 h-10 border-2 border-white rounded-full flex items-center justify-center shrink-0">
            <span className="font-sans font-bold text-white text-xl pb-1">k</span>
            {/* The semi-circle cut effect from the description/image implies a specific graphic, 
                we simulate a clean vector look here */}
            <div className="absolute -bottom-1 w-6 h-2 bg-kyber-black"></div>
        </div>
        <div className="flex flex-col justify-center">
            <span className="font-sans font-bold text-white tracking-[0.2em] text-lg leading-none">KYBER</span>
            <span className="font-sans text-[0.6rem] text-gray-400 tracking-[0.3em] uppercase leading-none mt-1">Industrial</span>
        </div>
    </div>
  );
};