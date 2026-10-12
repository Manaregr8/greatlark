'use client';

import { useEffect, useRef, ReactNode } from 'react';
import styles from './Reveal.module.css';

type RevealVariant = 'up' | 'left' | 'right' | 'scale' | 'fade';

interface RevealProps {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
}

export function Reveal({
  children,
  variant = 'up',
  delay = 0,
  duration = 700,
  threshold = 0.12,
  className = '',
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      el.style.opacity = '1';
      el.style.transform = 'none';
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(styles.visible);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const variantClass = {
    up:    styles.variantUp,
    left:  styles.variantLeft,
    right: styles.variantRight,
    scale: styles.variantScale,
    fade:  styles.variantFade,
  }[variant];

  return (
    <div
      ref={ref}
      className={`${styles.reveal} ${variantClass} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
}
