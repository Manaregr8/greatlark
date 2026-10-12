import { stats } from '@/lib/data';
import { StatCounter } from '@/components/ui/StatCounter';
import { Reveal } from '@/components/ui/Reveal';
import styles from './StatsStrip.module.css';

export function StatsStrip() {
  return (
    <section className={styles.strip} aria-label="Firm statistics">
      <div className="container">
        <dl className={styles.grid}>
          {stats.map((stat, i) => (
            <Reveal key={stat.label} variant="up" delay={i * 100} className={styles.item}>
              <dt className={styles.label}>{stat.label}</dt>
              <dd className={styles.value}>
                {stat.prefix && <span className={styles.prefix}>{stat.prefix}</span>}
                <StatCounter value={stat.value} suffix={stat.suffix} />
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
