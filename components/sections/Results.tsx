import { Reveal } from '@/components/ui/Reveal';
import styles from './Results.module.css';

export function Results() {
  return (
    <section className={styles.results}>
      <div className={`container ${styles.container}`}>
        
        <Reveal variant="up">
          <h2 className={styles.heading}>
            Delivering <em>Impressive Results</em>
          </h2>
        </Reveal>
        
        <div className={styles.grid}>
          {/* Stat 1 */}
          <Reveal variant="up" delay={100} className={styles.cardWrap}>
            <div className={styles.card}>
              <div className={styles.statValue}>18-22%</div>
              <div className={styles.statLabel}>CAGR</div>
              <p className={styles.statDesc}>
                for PMS AIFs & Equity Mutual Funds
              </p>
            </div>
          </Reveal>

          {/* Stat 2 */}
          <Reveal variant="up" delay={200} className={styles.cardWrap}>
            <div className={styles.card}>
              <div className={styles.statValue}>7-10%</div>
              <div className={styles.statLabel}>CAGR</div>
              <p className={styles.statDesc}>
                for Debt Investments
              </p>
            </div>
          </Reveal>

          {/* Stat 3 */}
          <Reveal variant="up" delay={300} className={styles.cardWrap}>
            <div className={styles.card}>
              <div className={styles.statValue}>Premium</div>
              <div className={styles.statLabel}>Advisory</div>
              <p className={styles.statDesc}>
                Insurance Advisory in Partnership with Ideal Insurance, Broking Industry Leaders
              </p>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
