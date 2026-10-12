'use client';

import { useEffect, useRef, useState } from 'react';
import { Reveal } from '@/components/ui/Reveal';
import styles from './ValueProps.module.css';

/* ── Fires once when element enters the viewport ── */
function useInView(threshold = 0.25) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export function ValueProps() {
  const { ref: card1Ref, inView: card1In } = useInView(0.2);
  const { ref: card2Ref, inView: card2In } = useInView(0.2);
  const { ref: card3Ref, inView: card3In } = useInView(0.2);

  const bars = [
    { year: '2021', h: 20 },
    { year: '2022', h: 32 },
    { year: '2023', h: 48 },
    { year: '2024', h: 68 },
    { year: '2025', h: 56 },
  ];

  const advisors = [
    { title: 'Portfolio Strategy', exp: '12+ years exp.', initials: 'PS' },
    { title: 'Equity Research', exp: '10+ years exp.', initials: 'ER' },
    { title: 'Risk & Insurance', exp: '8+ years exp.', initials: 'RI' },
  ];

  return (
    <section className={styles.section} id="about">
      <div className="container">

        {/* ── Section Header ─────────────────────────────── */}
        <div className={styles.header}>
          <Reveal variant="up" className={styles.headerLeft}>
            <h2 className={styles.heading}>
              Strategies designed<br />
              around your goals.
            </h2>
          </Reveal>
          <Reveal variant="up" delay={150} className={styles.headerRight}>
            <p className={styles.headerBody}>
              We diversify your portfolio and reduce risk, enhance returns,
              and provide stability — with an expert team of wealth managers
              working exclusively for your financial future.
            </p>
          </Reveal>
        </div>

        {/* ── Cards Grid ─────────────────────────────────── */}
        <div className={styles.grid}>

          {/* ── Card 1: Markets ──────────────────────────── */}
          <Reveal variant="up" delay={0} className={`${styles.card} ${styles.cardHover}`}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardHeading}>
                Diversified<br />
                portfolio returns.
              </h3>
              <p className={styles.cardSubline}>
                18–22% CAGR on PMS AIFs &amp; Equity Mutual Funds.
              </p>
            </div>
            <div className={styles.cardBody} ref={card1Ref}>
              {/* Mini chart */}
              <div className={styles.chartWrap}>
                <div className={styles.chartTop}>
                  <span className={styles.chartLabel}>Portfolio Growth</span>
                  <span className={`${styles.chartBadge} ${card1In ? styles.badgePop : ''}`}>
                    +22% CAGR
                  </span>
                </div>
                <svg
                  viewBox="0 0 260 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.chartSvg}
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#1a2e1a" stopOpacity="0.15" />
                      <stop offset="100%" stopColor="#1a2e1a" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 70 L20 65 L45 68 L65 55 L85 58 L105 45 L125 50 L140 38 L160 30 L180 20 L200 25 L220 15 L240 18 L260 10 L260 80 L0 80 Z"
                    fill="url(#chartGrad)"
                    className={`${styles.chartArea} ${card1In ? styles.chartAreaIn : ''}`}
                  />
                  <path
                    d="M0 70 L20 65 L45 68 L65 55 L85 58 L105 45 L125 50 L140 38 L160 30 L180 20 L200 25 L220 15 L240 18 L260 10"
                    stroke="#1a2e1a"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`${styles.chartLine} ${card1In ? styles.chartLineIn : ''}`}
                  />
                </svg>
                <div className={styles.chartAxis}>
                  {['Y1', 'Y2', 'Y3', 'Y4', 'Y5', 'Y6'].map(m => (
                    <span key={m} className={styles.axisLabel}>{m}</span>
                  ))}
                </div>
              </div>

              <div className={styles.cardStat}>
                <p className={styles.statCaption}>Assets Under Management</p>
                <p className={`${styles.statValue} ${styles.statValueBold}`}>₹150Cr+</p>
                <p className={styles.statNote}>Compounding across 12 asset classes.</p>
              </div>
            </div>
          </Reveal>

          {/* ── Card 2: Experts ──────────────────────────── */}
          <Reveal variant="up" delay={120} className={`${styles.card} ${styles.cardHover}`}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardHeading}>
                Expert advisors,<br />
                proven results.
              </h3>
              <p className={styles.cardSubline}>
                Managed by seasoned professionals with deep domain expertise.
              </p>
            </div>
            <div className={styles.cardBody} ref={card2Ref}>
              <div className={styles.expertList}>
                {advisors.map((expert, i) => (
                  <div
                    key={expert.title}
                    className={`${styles.expertItem} ${card2In ? styles.expertItemIn : ''}`}
                    style={{ transitionDelay: card2In ? `${i * 120}ms` : '0ms' }}
                  >
                    <div className={styles.expertAvatar}>{expert.initials}</div>
                    <div className={styles.expertInfo}>
                      <p className={styles.expertTitle}>{expert.title}</p>
                    </div>
                    <span className={styles.expertBadge}>{expert.exp}</span>
                  </div>
                ))}
              </div>

              <div className={`${styles.cardStat} ${styles.cardStatRow}`}>
                <div>
                  <p className={styles.statValue}>150+</p>
                  <p className={styles.statNote}>Active clients &amp; growing</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* ── Card 3: Skills ───────────────────────────── */}
          <Reveal variant="up" delay={240} className={`${styles.card} ${styles.cardHover}`}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardHeading}>
                Stable returns,<br />
                lower risk.
              </h3>
              <p className={styles.cardSubline}>
                7–10% CAGR on debt investments with capital protection.
              </p>
            </div>
            <div className={styles.cardBody} ref={card3Ref}>
              <div className={styles.barChartWrap}>
                <div className={styles.barChartTop}>
                  <span className={styles.chartLabel}>Debt Portfolio</span>
                  <span className={styles.barValue}>₹150Cr+</span>
                  <span className={`${styles.growthBadge} ${card3In ? styles.badgePop : ''}`}>
                    10% CAGR
                  </span>
                </div>
                <div className={styles.barChart} aria-hidden="true">
                  {bars.map((bar, i) => (
                    <div key={bar.year} className={styles.barCol}>
                      <div
                        className={`${styles.bar} ${i === 3 ? styles.barActive : ''}`}
                        style={{
                          height: card3In ? `${bar.h}px` : '0px',
                          transitionDelay: card3In ? `${i * 80}ms` : '0ms',
                        }}
                      />
                      <span className={styles.barLabel}>{bar.year}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.cardStat}>
                <p className={styles.statValue}>20+</p>
                <p className={styles.statNote}>Curated financial partners &amp; institutions.</p>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
