import React, { useState, useEffect, useRef } from 'react';

export const ExploreIndicator: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const initialPosRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const handleUserInteraction = (e?: Event) => {
      // If mousemove, ensure it's an actual intentional movement, not just initial hovering
      if (e && e.type === 'mousemove') {
        const mouseEvent = e as MouseEvent;
        if (!initialPosRef.current) {
          initialPosRef.current = { x: mouseEvent.clientX, y: mouseEvent.clientY };
          return;
        }
        const deltaX = Math.abs(mouseEvent.clientX - initialPosRef.current.x);
        const deltaY = Math.abs(mouseEvent.clientY - initialPosRef.current.y);
        // Only trigger once mouse has actually moved slightly
        if (deltaX < 15 && deltaY < 15) {
          return;
        }
      }

      setVisible(false);
      cleanup();
    };

    const cleanup = () => {
      window.removeEventListener('mousemove', handleUserInteraction);
      window.removeEventListener('scroll', handleUserInteraction);
      window.removeEventListener('wheel', handleUserInteraction);
      window.removeEventListener('touchstart', handleUserInteraction);
      window.removeEventListener('touchmove', handleUserInteraction);
      window.removeEventListener('keydown', handleUserInteraction);
      window.removeEventListener('click', handleUserInteraction);
    };

    window.addEventListener('mousemove', handleUserInteraction);
    window.addEventListener('scroll', handleUserInteraction, { passive: true });
    window.addEventListener('wheel', handleUserInteraction, { passive: true });
    window.addEventListener('touchstart', handleUserInteraction, { passive: true });
    window.addEventListener('touchmove', handleUserInteraction, { passive: true });
    window.addEventListener('keydown', handleUserInteraction);
    window.addEventListener('click', handleUserInteraction);

    return () => {
      cleanup();
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={() => {
        const el = document.getElementById('projects');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }}
      aria-hidden={!visible}
      className={`fixed bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 select-none transition-all duration-700 ease-out bg-transparent border-0 cursor-pointer ${
        visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-3 pointer-events-none'
      }`}
    >
      <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.22em] text-white/80 font-body drop-shadow-sm hover:text-white transition-colors">
        Scroll to explore
      </span>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white/80 animate-bounce drop-shadow-sm"
      >
        <path
          d="M3 5.25L7 9.25L11 5.25"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};
