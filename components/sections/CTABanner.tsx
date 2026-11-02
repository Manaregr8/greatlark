import { Reveal } from '@/components/ui/Reveal';
import { ContactTrigger } from '@/components/ui/ContactTrigger';
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
          <ContactTrigger
            label="Book a Consultation"
            variant="primary"
            className={styles.btnPrimary}
          />
        </Reveal>

      </div>
    </section>
  );
}
