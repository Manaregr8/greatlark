import Image from 'next/image';
import { partners } from '@/lib/data';
import { Reveal } from '@/components/ui/Reveal';
import styles from './Partners.module.css';

export function Partners() {
  return (
    <section className={styles.partners} aria-label="Our trusted partners">
      <div className={`container ${styles.layout}`}>
        <div className={styles.header}>
          <Reveal variant="up">
            <p className={styles.eyebrow}>Our Trusted Partners</p>
          </Reveal>
          <Reveal variant="up" delay={100}>
            <h2 className={styles.heading}>Strong relationships. Thoughtful advice.</h2>
            <p className={styles.description}>
              Established financial institutions, working alongside us to support your financial life.
            </p>
          </Reveal>
        </div>

        <Reveal variant="fade" delay={200}>
          <div className={styles.logos}>
            {partners.map((partner) => (
              <div key={partner.name} className={styles.logoWrap}>
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={200}
                  height={80}
                  className={styles.logo}
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
