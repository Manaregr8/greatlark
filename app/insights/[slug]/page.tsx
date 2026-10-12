import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { articles } from '@/lib/data';
import styles from './page.module.css';

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.id,
  }));
}

export default function InsightPage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.id === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <main className={styles.main}>
      <article>
        <div className={styles.hero}>
          {article.image && (
            <Image
              src={article.image}
              alt={article.alt}
              fill
              className={styles.heroImage}
              priority
            />
          )}
          <div className={`container ${styles.heroContent}`}>
            <span className={styles.category}>{article.category}</span>
            <h1 className={styles.title}>{article.title}</h1>
            <div className={styles.meta}>
              <div className={styles.metaItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span>{article.date}</span>
              </div>
              <div className={styles.metaItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <span>By {article.author}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className={styles.contentWrapper}>
            <div className={styles.articleBody}>
              {article.content}
            </div>

            <Link href="/#insights" className={styles.backLink}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ transform: 'rotate(180deg)' }}>
                <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to Insights
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
