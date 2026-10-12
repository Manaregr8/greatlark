import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/lib/data';
import { StatCounter } from '@/components/ui/StatCounter';
import styles from './Hero.module.css';

const trustItems = [
  { label: '150+', desc: 'Active Clients' },
  { label: '20+', desc: 'Financial Partners' },
  { label: '₹150Cr+', desc: 'AUM' },
  { label: '05', desc: 'Awards Won' },
];

export function Hero() {
  return (
    <section className={styles.hero} aria-label="Hero">

      {/* Background Image */}
      <div className={styles.bgWrap}>
        <Image
          src="/images/hero-bg.jpg"
          alt="Misty mountain landscape at dusk"
          fill
          priority
          quality={90}
          className={styles.bgImage}
          sizes="100vw"
        />
        {/* Dark overlay — heavier on left, lighter on right */}
        <div className={styles.bgOverlay} aria-hidden="true" />
      </div>

      {/* Vertical column panels — right side accent (from reference) */}
      <div className={styles.columns} aria-hidden="true">
        <div className={styles.col1} />
        <div className={styles.col2} />
        <div className={styles.col3} />
      </div>

      {/* Right accent text — "DISCIPLINE CREATES FREEDOM" */}
      <div className={styles.accentText} aria-hidden="true">
        <span>Discipline</span>
        <span>Creates</span>
        <span>Freedom</span>
      </div>

      {/* Main Content */}
      <div className={`container ${styles.content}`}>
        <div className={styles.inner}>

          <h1 className={styles.headline}>
            Ready to maximize<br />
            your wealth returns.
          </h1>

          <p className={styles.subline}>
            Redefine your financial journey with our expert knowledge.
            We diversify your portfolio, reduce risk, enhance returns,
            and provide stability with our expert team of wealth managers.
          </p>

          <div className={styles.actions}>
            <Link href="/#services" className={styles.btnPrimary}>
              Our Services
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link href="/contact" className={styles.btnSecondary}>
              Let&apos;s Talk
            </Link>
          </div>

        </div>
      </div>

      {/* Trust Bar */}
      <div className={styles.trustBar}>
        <div className={`container ${styles.trustInner}`}>
          {trustItems.map((item, i) => (
            <div key={i} className={styles.trustItem}>
              <span className={styles.trustValue}>{item.label}</span>
              <span className={styles.trustLabel}>{item.desc}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
