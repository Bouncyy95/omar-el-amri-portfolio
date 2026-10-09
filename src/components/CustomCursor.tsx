import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const outerRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);

  // Mouse & animation coordinates
  const mousePos = useRef({ x: -200, y: -200 });

  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if device is touch-only
    const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!hasFinePointer) {
      setIsTouchDevice(true);
      return;
    }

    // Enable custom cursor styling on desktop
    document.body.classList.add('custom-cursor-active');

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Check if hovering over an interactive element
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest(
          'button, a, [role="button"], input, textarea'
        ) as HTMLElement | null;

        setIsHovered(Boolean(interactive));
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseLeave = () => {
      setIsVisible(false);
      setIsHovered(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Keep both cursor elements aligned with the actual pointer
    let animationFrameId: number;

    const render = () => {
      if (outerRef.current) {
        outerRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0) translate(-50%, -50%)`;
      }

      // Inner dot follows exact cursor coordinates for clicking precision
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (isTouchDevice) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 pointer-events-none z-[9999] overflow-hidden transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Outer Cursor Ring */}
      <div
        ref={outerRef}
        className={`custom-cursor-ring ${isHovered ? 'is-hovered' : ''} fixed top-0 left-0 rounded-full border border-white/80 pointer-events-none transition-[width,height,background-color,border-color] duration-300 ease-out will-change-transform ${
          isHovered
            ? 'w-[52px] h-[52px] bg-white/15 border-white shadow-[0_0_15px_rgba(255,255,255,0.4)]'
            : isClicking
            ? 'w-[24px] h-[24px] bg-white/20 border-white/90'
            : 'w-[32px] h-[32px] bg-white/[0.04] border-white/60'
        }`}
        style={{
          transform: 'translate3d(-200px, -200px, 0) translate(-50%, -50%)',
        }}
      />

      {/* Inner Precision Dot */}
      <div
        ref={dotRef}
        className={`custom-cursor-dot fixed top-0 left-0 w-[4px] h-[4px] rounded-full bg-white pointer-events-none will-change-transform ${
          isHovered ? 'scale-0 opacity-0' : isClicking ? 'scale-125' : 'scale-100 opacity-100'
        }`}
        style={{
          transform: 'translate3d(-200px, -200px, 0) translate(-50%, -50%)',
        }}
      />
    </div>
  );
};
