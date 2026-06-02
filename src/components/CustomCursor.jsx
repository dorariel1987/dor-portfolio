import React, { useEffect, useRef } from 'react';

const HOVER_SELECTOR =
  'a, button, [role="button"], input, textarea, select, label[for], [data-cursor="hover"]';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    const fineHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fineHover || reducedMotion) return undefined;

    document.body.classList.add('has-custom-cursor');

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return undefined;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let raf = 0;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    };

    const onDown = () => document.body.classList.add('cursor-active');
    const onUp = () => document.body.classList.remove('cursor-active');
    const onLeave = () => {
      dot.style.opacity = '0';
      ring.style.opacity = '0';
    };
    const onEnter = () => {
      dot.style.opacity = '1';
      ring.style.opacity = '1';
    };

    const handleOver = (e) => {
      if (e.target instanceof Element && e.target.closest(HOVER_SELECTOR)) {
        document.body.classList.add('cursor-hover');
      }
    };
    const handleOut = (e) => {
      if (e.target instanceof Element && e.target.closest(HOVER_SELECTOR)) {
        document.body.classList.remove('cursor-hover');
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('mouseleave', onLeave);
    window.addEventListener('mouseenter', onEnter);
    document.addEventListener('mouseover', handleOver, true);
    document.addEventListener('mouseout', handleOut, true);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('mouseenter', onEnter);
      document.removeEventListener('mouseover', handleOver, true);
      document.removeEventListener('mouseout', handleOut, true);
      document.body.classList.remove('has-custom-cursor', 'cursor-hover', 'cursor-active');
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
};

export default CustomCursor;
