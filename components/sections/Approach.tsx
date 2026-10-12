'use client';

import { useState } from 'react';
import { approachSteps } from '@/lib/data';
import { Reveal } from '@/components/ui/Reveal';
import styles from './Approach.module.css';

export function Approach() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="approach" className={styles.approach}>
      <div className={`container ${styles.inner}`}>

        {/* Left — Heading */}
        <div className={styles.left}>
          <Reveal variant="up">
            <p className={styles.eyebrow}>Our Process</p>
          </Reveal>
          <Reveal variant="up" delay={120}>
            <h2 className={styles.heading}>
              How we manage
              <br />
              <em>your wealth.</em>
            </h2>
          </Reveal>
          <Reveal variant="up" delay={240}>
            <p className={styles.subheading}>
              Wealth management is a relationship built on trust, transparency
              and long-term thinking. Our approach reflects that.
            </p>
          </Reveal>

          {/* Active step visual indicator */}
          <Reveal variant="up" delay={360} className={styles.indicator}>
            <div className={styles.indicatorTrack}>
              {approachSteps.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.indicatorDot} ${i === activeStep ? styles.indicatorDotActive : ''}`}
                  onClick={() => setActiveStep(i)}
                  aria-label={`Step ${i + 1}`}
                />
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right — Steps */}
        <div className={styles.right}>
          {approachSteps.map((step, i) => (
            <Reveal key={step.number} variant="up" delay={i * 80} threshold={0.06}>
              <div
                className={`${styles.step} ${i === activeStep ? styles.stepActive : ''}`}
                onClick={() => setActiveStep(i === activeStep ? i : i)}
                onMouseEnter={() => setActiveStep(i)}
                role="button"
                tabIndex={0}
                aria-expanded={i === activeStep}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setActiveStep(i); }}
              >
                <div className={styles.stepHeader}>
                  <span className={styles.stepNum}>{step.number}</span>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                </div>
                <div className={`${styles.stepBody} ${i === activeStep ? styles.stepBodyOpen : ''}`}>
                  <p>{step.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
