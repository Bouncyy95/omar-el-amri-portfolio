import React, { useEffect, useState } from 'react';

interface TopProgressBarProps {
  progress: number; // 0 to 100
  isReady: boolean;
}

export const TopProgressBar: React.FC<TopProgressBarProps> = ({ progress, isReady }) => {
  const [shouldRender, setShouldRender] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    if (isReady && progress >= 100) {
      // Small pause so the user sees the full bar before smooth fade
      const fadeTimer = setTimeout(() => {
        setIsFadingOut(true);
      }, 400);

      // Unmount after fade transition completes
      const unmountTimer = setTimeout(() => {
        setShouldRender(false);
      }, 1100);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(unmountTimer);
      };
    }
  }, [isReady, progress]);

  if (!shouldRender) return null;

  return (
    <div
      aria-hidden="true"
      className={`top-progress-bar-track fixed top-0 left-0 right-0 z-30 h-[2px] w-full bg-white/10 pointer-events-none transition-opacity duration-700 ease-out ${
        isFadingOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div
        className="top-progress-bar-fill h-full bg-white transition-all duration-300 ease-out shadow-[0_0_8px_rgba(255,255,255,0.7)]"
        style={{
          width: `${Math.max(4, Math.min(100, progress))}%`,
        }}
      />
    </div>
  );
};
