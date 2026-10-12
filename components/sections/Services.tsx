import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/lib/data';
import { Reveal } from '@/components/ui/Reveal';
import styles from './Services.module.css';

export function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className="container">

        {/* Top Header */}
        <div className={styles.header}>
          
          {/* Main Title Area */}
          <div className={styles.headerLeft}>
            <Reveal variant="up">
              <div className={styles.eyebrowWrap}>
                <span className={styles.eyebrow}>OUR SERVICES</span>
                <span className={styles.eyebrowLine} aria-hidden="true" />
              </div>
            </Reveal>
            
            <Reveal variant="up" delay={100}>
              <h2 className={styles.heading}>
                A considered range<br />
                of <em>wealth solutions.</em>
              </h2>
            </Reveal>
            
            <Reveal variant="up" delay={200}>
              <p className={styles.headerBody}>
                We offer a comprehensive suite of wealth management services, each designed<br />
                to work in concert — addressing every dimension of your financial life with<br />
                the same level of care.
              </p>
            </Reveal>
          </div>

          {/* Right Core Values */}
          <Reveal variant="fade" delay={300} className={styles.headerRightWrap}>
            <div className={styles.headerRight}>
              <div className={styles.valuesList}>
                <p>PEOPLE</p>
                <p>CAPITAL</p>
                <p>DISCIPLINE</p>
                <p>A BRIGHTER<br/>TOMORROW</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Grid of 6 Cards */}
        <div className={styles.grid}>
          {services.map((service, i) => (
            <Reveal key={service.id} variant="up" delay={i * 100} threshold={0.1} className={styles.cardWrap}>
              <Link href={service.href} className={styles.card}>
                
                {/* Text Content */}
                <div className={styles.cardContent}>
                  <div className={styles.cardTop}>
                    <span className={styles.cardNumber}>{service.number}</span>
                    <span className={styles.cardLine} aria-hidden="true" />
                  </div>
                  
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p className={styles.cardBody}>{service.body}</p>
                  
                  <span className={styles.cardLink}>
                    Learn more
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>

                {/* Image */}
                <div className={styles.imageWrap}>
                  {service.imageSrc && (
                    <Image 
                      src={service.imageSrc} 
                      alt={service.title}
                      fill
                      className={styles.image}
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                  )}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Bottom Bar */}
        <Reveal variant="fade" delay={200}>
          <div className={styles.bottomBar}>
            <p className={styles.bottomTextLeft}>WEALTH FOR A BRIGHTER TOMORROW</p>
            <Link href="/services" className={styles.bottomTextRight}>
              EXPLORE ALL SERVICES
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
