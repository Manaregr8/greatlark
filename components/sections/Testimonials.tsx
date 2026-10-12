'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { testimonials } from '@/lib/data';
import { Reveal } from '@/components/ui/Reveal';
import styles from './Testimonials.module.css';

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const total = testimonials.length;

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 6000);
  }, [total]);

  const stopTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  useEffect(() => {
    startTimer();
    return stopTimer;
  }, [startTimer]);

  const go = (dir: 1 | -1) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => setAnimating(false), 450);
    setCurrent((prev) => (prev + dir + total) % total);
    startTimer();
  };

  const t = testimonials[current];

  return (
    <section id="testimonials" className={styles.section} aria-label="Student Testimonials">
      <div className="container">
        <Reveal variant="up">
          <div
            className={styles.card}
            onMouseEnter={stopTimer}
            onMouseLeave={startTimer}
          >
            {/* Portrait */}
            <div className={styles.portrait}>
              <div className={`${styles.portraitFrame} ${animating ? styles.portraitOut : ''}`}>
                <Image
                  key={t.id}
                  src={t.imageSrc}
                  alt={t.imageAlt}
                  fill
                  sizes="160px"
                  className={styles.portraitImg}
                />
              </div>
            </div>

            {/* Quote block */}
            <div className={`${styles.quoteBlock} ${animating ? styles.quoteOut : ''}`}>
              {/* Big open-quote mark */}
              <span className={styles.openQuote} aria-hidden="true">&ldquo;</span>

              <blockquote className={styles.quote}>
                {t.quote}
              </blockquote>

              {/* Author + nav row */}
              <div className={styles.footer}>
                <div className={styles.author}>
                  <p className={styles.name}>{t.name}</p>
                  <p className={styles.role}>{t.role}</p>
                </div>

                <div className={styles.nav}>
                  <button
                    className={styles.navBtn}
                    onClick={() => go(-1)}
                    aria-label="Previous testimonial"
                  >
                    ←
                  </button>
                  <button
                    className={styles.navBtn}
                    onClick={() => go(1)}
                    aria-label="Next testimonial"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

