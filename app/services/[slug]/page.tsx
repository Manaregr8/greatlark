import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { services } from '@/lib/data';
import styles from './page.module.css';

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.id,
  }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.id === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        {service.imageSrc && (
          <Image
            src={service.imageSrc}
            alt={service.title}
            fill
            className={styles.heroImage}
            priority
          />
        )}
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.eyebrowWrap}>
            <span className={styles.eyebrow}>Our Services</span>
            <span className={styles.eyebrowLine} />
          </div>
          <h1 className={styles.title}>{service.title}</h1>
          <p className={styles.tagline}>{service.detail?.tagline || service.body}</p>
        </div>
      </div>

      <div className={`container ${styles.contentGrid}`}>
        <div className={styles.mainContent}>
          <p className={styles.description}>
            {service.detail?.description || service.body}
          </p>
          
          {service.detail?.highlights && (
            <div className={styles.highlights}>
              {service.detail.highlights.map((highlight, idx) => (
                <div key={idx} className={styles.highlightItem}>
                  <h3 className={styles.highlightLabel}>{highlight.label}</h3>
                  <p className={styles.highlightText}>{highlight.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <aside className={styles.sidebar}>
          <h2 className={styles.sidebarTitle}>All Services</h2>
          <nav className={styles.sidebarLinks}>
            {services.map((s) => (
              <Link 
                key={s.id} 
                href={s.href}
                className={`${styles.sidebarLink} ${s.id === service.id ? styles.sidebarLinkActive : ''}`}
              >
                {s.title}
              </Link>
            ))}
          </nav>
          
          <div className={styles.contactBox}>
            <p className={styles.contactText}>Ready to discuss your financial goals?</p>
            <Link href="/contact" className={styles.contactBtn}>
              Contact Us
            </Link>
          </div>
        </aside>
      </div>
    </main>
  );
}
