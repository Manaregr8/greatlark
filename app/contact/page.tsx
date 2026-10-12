import type { Metadata } from 'next';
import { Reveal } from '@/components/ui/Reveal';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Contact | GreatLark',
  description: 'Connect with our wealth advisors to curate bespoke wealth strategies.',
};

export default function ContactPage() {
  return (
    <section className={styles.contactSection}>
      <div className="container">
        
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <Reveal variant="up">
              <div className={styles.eyebrowWrap}>
                <span className={styles.eyebrow}>GET IN TOUCH</span>
                <span className={styles.eyebrowLine} aria-hidden="true" />
              </div>
            </Reveal>
            
            <Reveal variant="up" delay={100}>
              <h1 className={styles.heading}>
                A dedicated<br />
                <em>partnership.</em>
              </h1>
            </Reveal>
            
            <Reveal variant="up" delay={200}>
              <p className={styles.headerBody}>
                Our seasoned advisors are dedicated to curating bespoke wealth strategies. Whether you seek to preserve legacy, optimize tax efficiency, or navigate complex investments, we provide a sophisticated approach tailored to your most ambitious financial aspirations.
              </p>
            </Reveal>
          </div>

          <Reveal variant="fade" delay={300} className={styles.headerRightWrap}>
             <div className={styles.headerRight}>
               <div className={styles.valuesList}>
                 <p>PRESERVE</p>
                 <p>OPTIMIZE</p>
                 <p>GROW</p>
                 <p>YOUR LEGACY</p>
               </div>
             </div>
          </Reveal>
        </div>

        <div className={styles.grid}>
          {/* Card 1: Registered Office */}
          <Reveal variant="up" delay={100} className={styles.cardWrap}>
            <div className={styles.card}>
              <div className={styles.cardContent}>
                <div className={styles.cardTop}>
                  <span className={styles.cardNumber}>01</span>
                  <span className={styles.cardLine} aria-hidden="true" />
                </div>
                <h2 className={styles.cardTitle}>Registered Office</h2>
                <p className={styles.cardBody}>
                  M-182, Lower Ground floor,<br/>
                  Greater Kailash Part-2,<br/>
                  New Delhi-48, India
                </p>
              </div>
            </div>
          </Reveal>

          {/* Card 2: Corporate Office */}
          <Reveal variant="up" delay={200} className={styles.cardWrap}>
            <div className={styles.card}>
              <div className={styles.cardContent}>
                <div className={styles.cardTop}>
                  <span className={styles.cardNumber}>02</span>
                  <span className={styles.cardLine} aria-hidden="true" />
                </div>
                <h2 className={styles.cardTitle}>Corporate Office</h2>
                <p className={styles.cardBody}>
                  Spacetime, Desein House, Lower ground,<br/>
                  Nearby Punjab National Bank,<br/>
                  Greater Kailash-2, New Delhi-110048
                </p>
              </div>
            </div>
          </Reveal>

          {/* Card 3: Direct Contact */}
          <Reveal variant="up" delay={300} className={styles.cardWrap}>
            <div className={styles.card}>
              <div className={styles.cardContent}>
                <div className={styles.cardTop}>
                  <span className={styles.cardNumber}>03</span>
                  <span className={styles.cardLine} aria-hidden="true" />
                </div>
                <h2 className={styles.cardTitle}>Direct Connect</h2>
                <div className={styles.contactDetails}>
                  <a href="tel:+919953101096" className={styles.cardLink}>
                    +91 99531 01096
                  </a>
                  <a href="mailto:info@greatlark.com" className={styles.cardLink}>
                    info@greatlark.com
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal variant="fade" delay={400}>
          <div className={styles.bottomBar}>
            <p className={styles.bottomTextLeft}>EXCELLENCE IN WEALTH MANAGEMENT</p>
            <a href="mailto:info@greatlark.com" className={styles.bottomTextRight}>
              EMAIL OUR ADVISORS
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
