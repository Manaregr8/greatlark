import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '@/components/ui/Reveal';
import { articles } from '@/lib/data';
import styles from './Insights.module.css';

export function Insights() {
  return (
    <section id="insights" className={styles.section}>
      <div className="container">

        {/* ── Header ─────────────────────────────────────── */}
        <div className={styles.header}>
          <Reveal variant="up">
            <h2 className={styles.heading}>
              Thoughtful perspectives<br />
              for informed decisions.
            </h2>
          </Reveal>
          <Reveal variant="up" delay={150}>
            <Link href="/insights" className={styles.exploreLink}>
              Explore all insights
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </Reveal>
        </div>

        {/* ── Article Grid ────────────────────────────────── */}
        <div className={styles.grid}>
          {articles.map((article, i) => (
            <Reveal key={article.id} variant="up" delay={i * 100} className={styles.card}>
              <Link href={article.href} className={styles.cardInner}>

                {/* Image */}
                <div className={styles.imageWrap}>
                  <Image
                    src={article.image}
                    alt={article.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className={styles.image}
                  />
                </div>

                {/* Text */}
                <div className={styles.text}>
                  <p className={styles.category}>{article.category}</p>
                  <h3 className={styles.title}>{article.title}</h3>
                  <p className={styles.body}>{article.body}</p>
                  <span className={styles.readLink}>
                    Read
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>

              </Link>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
