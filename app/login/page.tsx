'use client';

import { Reveal } from '@/components/ui/Reveal';
import styles from './page.module.css';

const loginOptions = [
  {
    title: 'Client Login',
    description: 'Access your portfolio and wealth insights.',
    href: 'https://portfolio.greatlark.com/client-login',
  },
  {
    title: 'Advisor Login',
    description: 'Manage client portfolios and reporting.',
    href: 'https://portfolio.greatlark.com/advisor-login',
  },
  {
    title: 'Employee Login',
    description: 'Internal access for GreatLark team.',
    href: 'https://portfolio.greatlark.com/emp-login',
  },
];

export default function LoginPage() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={`container ${styles.container}`}>
          <div className={styles.header}>
            <Reveal variant="up">
              <h1 className={styles.title}>Welcome to GreatLark</h1>
            </Reveal>
            <Reveal variant="up" delay={100}>
              <p className={styles.subtitle}>
                Please select your login type to access the portal.
              </p>
            </Reveal>
          </div>

          <div className={styles.grid}>
            {loginOptions.map((option, index) => (
              <Reveal key={option.title} variant="fade" delay={200 + index * 100}>
                <a
                  href={option.href}
                  className={styles.card}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2 className={styles.cardTitle}>{option.title}</h2>
                  <p className={styles.cardDesc}>{option.description}</p>
                  <span className={styles.cardLink}>
                    Login <span aria-hidden="true">→</span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
