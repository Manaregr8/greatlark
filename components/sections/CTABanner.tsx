import Link from 'next/link';
import { siteConfig } from '@/lib/data';
import { Reveal } from '@/components/ui/Reveal';
import styles from './CTABanner.module.css';

export function CTABanner() {
  return (
    <section className={styles.ctaBanner} aria-label="Book a consultation">
      
      {/* Decorative background element */}
      <div className={styles.decorativeCircle} aria-hidden="true" />
      
      <div className={`container ${styles.inner}`}>
        
        <Reveal variant="up">
          <h2 className={styles.headline}>
            Ready to maximise <em>your wealth returns?</em>
          </h2>
        </Reveal>

        <Reveal variant="up" delay={100}>
          <p className={styles.subline}>
            Speak with our expert team of wealth managers to discover how we can 
            diversify your portfolio, reduce risk, and enhance your returns.
          </p>
        </Reveal>

        <Reveal variant="up" delay={200}>
          <Link href={siteConfig.consultationUrl} className={styles.btnPrimary}>
            Book a Consultation
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </Reveal>

      </div>
    </section>
  );
}
