import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/lib/data';
import { Reveal } from '@/components/ui/Reveal';
import styles from './About.module.css';

// Show first 6 services in the about section preview
const previewServices = services.slice(0, 6);

export function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={`container ${styles.inner}`}>

        {/* ── Left: Text Column ─────────────────────────── */}
        <div className={styles.textCol}>

          {/* Eyebrow */}
          <Reveal variant="up">
            <div className={styles.eyebrowWrap}>
              <span className={styles.eyebrow}>Who We Are</span>
              <span className={styles.eyebrowLine} aria-hidden="true" />
            </div>
          </Reveal>

          {/* Heading */}
          <Reveal variant="up" delay={100}>
            <h2 className={styles.heading}>
              We Provide Personalised{' '}
              <em>Wealth Management &amp;</em>{' '}
              Investment Advisory Services
            </h2>
          </Reveal>

          {/* Body */}
          <Reveal variant="up" delay={200}>
            <p className={styles.body}>
              Greatlark Finserve is your trusted financial partner committed to helping you
              achieve your financial ambition. Our expert wealth managers provide customized
              strategies to diversify, protect, and grow your investment ensuring a future for you
              and your family.
            </p>
          </Reveal>

          {/* Services Grid */}
          <Reveal variant="up" delay={300}>
            <div className={styles.servicesGrid}>
              {previewServices.map((service) => (
                <div key={service.id} className={styles.serviceItem}>
                  <span className={styles.serviceNum}>{service.number}</span>
                  <span className={styles.serviceName}>{service.title}</span>
                  <span className={styles.serviceArrow} aria-hidden="true">→</span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Bottom Bar */}
          <Reveal variant="fade" delay={400}>
            <div className={styles.bottomBar}>
              <p className={styles.bottomLeft}>Wealth for a brighter tomorrow</p>
              <Link href="/#approach" className={styles.bottomRight}>
                Our Journey
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </Reveal>
        </div>

        {/* ── Right: Image Column ───────────────────────── */}
        <Reveal variant="right" delay={150} className={styles.imageCol}>
          <div className={styles.imageWrapper}>

            {/* Main Photo */}
            <div className={styles.mainPhoto}>
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=900&h=1100"
                alt="GreatLark wealth management office"
                fill
                className={styles.photo}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Values overlay — top-left of photo */}
              <div className={styles.valuesOverlay} aria-hidden="true">
                <div className={styles.valuesInner}>
                  <p>People</p>
                  <p>Discipline</p>
                  <p>Perspective</p>
                  <p>Progress</p>
                  <span className={styles.valuesLine} />
                </div>
              </div>
            </div>

            {/* Accent column — right of photo */}
            <div className={styles.accentCol} aria-hidden="true">
              <div className={styles.accentText}>
                A more considered approach to wealth for a brighter tomorrow
              </div>
              <span className={styles.accentLine} />
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
