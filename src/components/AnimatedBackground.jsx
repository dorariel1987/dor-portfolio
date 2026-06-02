import React, { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const spotRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return undefined;

    const el = spotRef.current;
    if (!el) return undefined;

    let raf = 0;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight * 0.3;
    let currentX = targetX;
    let currentY = targetY;

    const onMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const tick = () => {
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;
      el.style.background = `radial-gradient(600px circle at ${currentX}px ${currentY}px, rgba(0,240,255,0.10), transparent 60%), radial-gradient(800px circle at ${window.innerWidth - currentX}px ${currentY + 120}px, rgba(255,43,214,0.07), transparent 65%)`;
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    window.addEventListener('mousemove', onMove);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-bg-base" />

      {/* Static aurora blobs */}
      <div className="absolute -top-40 -left-32 w-[40rem] h-[40rem] rounded-full bg-neon-cyan/[0.08] blur-3xl animate-float-slow" />
      <div
        className="absolute top-1/3 -right-32 w-[36rem] h-[36rem] rounded-full bg-neon-magenta/[0.07] blur-3xl animate-float-slow"
        style={{ animationDelay: '-2s' }}
      />
      <div
        className="absolute bottom-0 left-1/4 w-[28rem] h-[28rem] rounded-full bg-neon-violet/[0.06] blur-3xl animate-float-slow"
        style={{ animationDelay: '-4s' }}
      />

      {/* Grid */}
      <div className="absolute inset-0 grid-bg opacity-40 mask-fade-b" />

      {/* Mouse-following spotlight */}
      <div ref={spotRef} className="absolute inset-0 transition-[background] duration-300" />

      {/* Scan line */}
      <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/40 to-transparent animate-scan-line" />
    </div>
  );
};

export default AnimatedBackground;
