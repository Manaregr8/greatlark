import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { services } from '@/lib/data';
import { ContactTrigger } from '@/components/ui/ContactTrigger';
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
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.heroNumber}>{service.number}</span>
          <h1 className={styles.heroTitle}>{service.title}</h1>
          <p className={styles.heroTagline}>{service.detail?.tagline || service.body}</p>
        </div>
      </div>

      <div className={`container ${styles.contentGrid}`}>
        <article className={styles.article}>
          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionTitle}>Overview</h2>
            <p className={styles.description}>{service.detail?.description || service.body}</p>
          </div>

          {service.detail?.highlights && (
            <div className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>Key Capabilities</h2>
              <div className={styles.highlightsGrid}>
                {service.detail.highlights.map((h, i) => (
                  <div key={i} className={styles.highlightCard}>
                    <h3 className={styles.highlightLabel}>{h.label}</h3>
                    <p className={styles.highlightText}>{h.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </article>

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
            <ContactTrigger
              label="Talk to an Advisor"
              variant="forest"
            />
          </div>
        </aside>
      </div>
    </main>
  );
}
