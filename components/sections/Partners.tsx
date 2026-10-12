import Image from 'next/image';
import { partners } from '@/lib/data';
import { Reveal } from '@/components/ui/Reveal';
import styles from './Partners.module.css';

export function Partners() {
  return (
    <section className={styles.partners} aria-label="Our trusted partners">
      <div className="container">
        
        <div className={styles.header}>
          <Reveal variant="up">
            <p className={styles.eyebrow}>Our Trusted Partners</p>
          </Reveal>
          <Reveal variant="up" delay={100}>
            <h2 className={styles.heading}>Partners we&apos;re tied with</h2>
          </Reveal>
        </div>

        <Reveal variant="fade" delay={200}>
          <div className={styles.logos}>
            {partners.map((partner, i) => (
              <div key={i} className={styles.logoWrap}>
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={200}
                  height={80}
                  className={styles.logo}
                />
                <span className="sr-only">{partner.name}</span>
              </div>
            ))}
          </div>
        </Reveal>
        
      </div>
    </section>
  );
}
