'use client';

import { useState, useMemo, useCallback } from 'react';
import Link from 'next/link';
import { Reveal } from '@/components/ui/Reveal';
import styles from './Calculators.module.css';

/* ── Helpers ──────────────────────────────────────────────── */
function fmt(n: number): string {
  return new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }).format(Math.round(n));
}

function pct(val: number, min: number, max: number): string {
  return `${((val - min) / (max - min)) * 100}%`;
}

/* ── Investment Calculator ────────────────────────────────── */
function InvestmentCalculator() {
  const [principal, setPrincipal] = useState(100000);
  const [principalInput, setPrincipalInput] = useState('1,00,000');
  const [annualContrib, setAnnualContrib] = useState(100000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(15);

  const { futureValue, totalContrib, totalInterest, chartBars } = useMemo(() => {
    const r = rate / 100;
    // FV of lump sum + FV of annual contributions (end-of-year)
    const fvPrincipal = principal * Math.pow(1 + r, years);
    const fvContribs = annualContrib === 0 ? 0 : annualContrib * ((Math.pow(1 + r, years) - 1) / r);
    const fv = fvPrincipal + fvContribs;
    const tc = principal + annualContrib * years;
    const ti = fv - tc;

    // Build year-by-year values for mini bar chart (sample 8 points)
    const points = Array.from({ length: 8 }, (_, i) => {
      const yr = Math.round(1 + (i * (years - 1)) / 7);
      const v = principal * Math.pow(1 + r, yr) + (annualContrib === 0 ? 0 : annualContrib * ((Math.pow(1 + r, yr) - 1) / r));
      return v;
    });
    const max = Math.max(...points);
    const bars = points.map(v => ({ height: max > 0 ? (v / max) * 100 : 0 }));

    return { futureValue: fv, totalContrib: tc, totalInterest: ti, chartBars: bars };
  }, [principal, annualContrib, rate, years]);

  const handlePrincipalBlur = () => {
    const raw = principalInput.replace(/,/g, '');
    const val = Math.max(0, parseInt(raw, 10) || 0);
    setPrincipal(val);
    setPrincipalInput(fmt(val));
  };

  return (
    <div className={styles.calcCard}>
      {/* Panels row — left | right partition */}
      <div className={styles.panelsRow}>
        {/* Left — Inputs */}
        <div className={styles.inputPanel}>
          <div className={styles.calcHeader}>
            <h3 className={styles.calcTitle}>Investment Calculator</h3>
            <p className={styles.calcSubtitle}>See how your investments can grow over time.</p>
          </div>

          {/* Initial Investment */}
          <div className={styles.field}>
            <label className={styles.fieldLabel}>Initial Investment</label>
            <p className={styles.fieldHint}>The starting amount of your investment.</p>
            <div className={styles.inputWrap}>
              <span className={styles.inputPrefix}>₹</span>
              <input
                type="text"
                className={styles.input}
                value={principalInput}
                onChange={e => setPrincipalInput(e.target.value)}
                onBlur={handlePrincipalBlur}
                onFocus={() => setPrincipalInput(principalInput.replace(/,/g, ''))}
                aria-label="Initial investment amount"
              />
            </div>
          </div>

          {/* Annual Contribution */}
          <div className={styles.field}>
            <div className={styles.fieldRow}>
              <label className={styles.fieldLabel}>Annual Contribution</label>
              <span className={styles.fieldValue}>₹{fmt(annualContrib)}</span>
            </div>
            <p className={styles.fieldHint}>The amount you will contribute annually.</p>
            <input
              type="range"
              className={styles.slider}
              style={{ '--pct': pct(annualContrib, 0, 10000000) } as React.CSSProperties}
              min={0}
              max={10000000}
              step={10000}
              value={annualContrib}
              onChange={e => setAnnualContrib(Number(e.target.value))}
              aria-label="Annual contribution"
            />
            <div className={styles.rangeLabels}>
              <span>₹0</span><span>₹1,00,00,000</span>
            </div>
          </div>

          {/* Interest Rate */}
          <div className={styles.field}>
            <div className={styles.fieldRow}>
              <label className={styles.fieldLabel}>Interest Rate</label>
              <span className={styles.fieldValue}>{rate}%</span>
            </div>
            <p className={styles.fieldHint}>The annual interest rate (percentage).</p>
            <input
              type="range"
              className={styles.slider}
              style={{ '--pct': pct(rate, 0.5, 20) } as React.CSSProperties}
              min={0.5}
              max={20}
              step={0.5}
              value={rate}
              onChange={e => setRate(Number(e.target.value))}
              aria-label="Interest rate"
            />
            <div className={styles.rangeLabels}>
              <span>0.5%</span><span>20%</span>
            </div>
          </div>

          {/* Investment Duration */}
          <div className={styles.field}>
            <div className={styles.fieldRow}>
              <label className={styles.fieldLabel}>Investment Duration</label>
              <span className={styles.fieldValue}>{years} years</span>
            </div>
            <p className={styles.fieldHint}>The number of years you plan to invest.</p>
            <input
              type="range"
              className={styles.slider}
              style={{ '--pct': pct(years, 1, 30) } as React.CSSProperties}
              min={1}
              max={30}
              step={1}
              value={years}
              onChange={e => setYears(Number(e.target.value))}
              aria-label="Investment duration"
            />
            <div className={styles.rangeLabels}>
              <span>1 years</span><span>30 years</span>
            </div>
          </div>
        </div>

        {/* Right — Results */}
        <div className={styles.resultsPanel}>
          <p className={styles.resultsPanelLabel}>Your Future Value</p>
          <span className={styles.resultsPanelLine} />

          <div className={styles.resultItem}>
            <p className={styles.resultItemTitle}>Future Investment Value</p>
            <p className={styles.resultItemDesc}>The total value of your investment at the end of the term.</p>
            <p className={styles.resultItemValue}>₹{fmt(futureValue)}</p>
          </div>

          <div className={styles.resultItem}>
            <p className={styles.resultItemTitle}>Total Contributions</p>
            <p className={styles.resultItemDesc}>The total amount you have contributed to the investment.</p>
            <p className={styles.resultItemValue}>₹{fmt(totalContrib)}</p>
          </div>

          <div className={styles.resultItem}>
            <p className={styles.resultItemTitle}>Total Interest Earned</p>
            <p className={styles.resultItemDesc}>The interest earned on your investment.</p>
            <p className={styles.resultItemValue}>₹{fmt(totalInterest)}</p>
          </div>
        </div>
      </div>

      {/* CTA — full width of card */}
      <div className={styles.ctaRow}>
        <div className={styles.ctaIcon} aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M3 14l4-4 3 3 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className={styles.ctaText}>
          <p className={styles.ctaTitle}>Maximize Your Investment Potential</p>
          <p className={styles.ctaDesc}>Schedule a consultation with our experts to optimize your investment strategy.</p>
        </div>
        <Link href="/contact" className={styles.ctaBtn}>
          Book a Consultation
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

/* ── EMI Calculator ───────────────────────────────────────── */
function EMICalculator() {
  const [loanInput, setLoanInput] = useState('10,00,000');
  const [loan, setLoan] = useState(1000000);
  const [rate, setRate] = useState(8.5);
  const [term, setTerm] = useState(15);

  const { emi, totalPayment, totalInterest } = useMemo(() => {
    const r = rate / 12 / 100;
    const n = term * 12;
    if (r === 0) {
      const e = loan / n;
      return { emi: e, totalPayment: loan, totalInterest: 0 };
    }
    const e = loan * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
    const tp = e * n;
    const ti = tp - loan;
    return { emi: e, totalPayment: tp, totalInterest: ti };
  }, [loan, rate, term]);

  const handleLoanBlur = () => {
    const raw = loanInput.replace(/,/g, '');
    const val = Math.max(0, parseInt(raw, 10) || 0);
    setLoan(val);
    setLoanInput(fmt(val));
  };

  return (
    <div className={styles.calcCard}>
      {/* Panels row — left | right partition */}
      <div className={styles.panelsRow}>
        {/* Left — Inputs */}
        <div className={styles.inputPanel}>
          <div className={styles.calcHeader}>
            <h3 className={styles.calcTitle}>EMI Calculator</h3>
            <p className={styles.calcSubtitle}>Plan your loan with clarity and confidence.</p>
          </div>

          {/* Loan Amount */}
          <div className={styles.field}>
            <label className={styles.fieldLabel}>Loan Amount</label>
            <p className={styles.fieldHint}>Select the amount of loan in INR.</p>
            <div className={styles.inputWrap}>
              <span className={styles.inputPrefix}>₹</span>
              <input
                type="text"
                className={styles.input}
                value={loanInput}
                onChange={e => setLoanInput(e.target.value)}
                onBlur={handleLoanBlur}
                onFocus={() => setLoanInput(loanInput.replace(/,/g, ''))}
                aria-label="Loan amount"
              />
            </div>
          </div>

          {/* Annual Interest Rate */}
          <div className={styles.field}>
            <div className={styles.fieldRow}>
              <label className={styles.fieldLabel}>Annual Interest Rate</label>
              <span className={styles.fieldValue}>{rate}%</span>
            </div>
            <p className={styles.fieldHint}>Select the annual interest rate in percentage.</p>
            <input
              type="range"
              className={styles.slider}
              style={{ '--pct': pct(rate, 0.5, 20) } as React.CSSProperties}
              min={0.5}
              max={20}
              step={0.1}
              value={rate}
              onChange={e => setRate(Number(e.target.value))}
              aria-label="Annual interest rate"
            />
            <div className={styles.rangeLabels}>
              <span>0.5%</span><span>20%</span>
            </div>
          </div>

          {/* Loan Term */}
          <div className={styles.field}>
            <div className={styles.fieldRow}>
              <label className={styles.fieldLabel}>Loan Term</label>
              <span className={styles.fieldValue}>{term} years</span>
            </div>
            <p className={styles.fieldHint}>Select the duration of the loan in years.</p>
            <input
              type="range"
              className={styles.slider}
              style={{ '--pct': pct(term, 1, 30) } as React.CSSProperties}
              min={1}
              max={30}
              step={1}
              value={term}
              onChange={e => setTerm(Number(e.target.value))}
              aria-label="Loan term"
            />
            <div className={styles.rangeLabels}>
              <span>1 years</span><span>30 years</span>
            </div>
          </div>
        </div>

        {/* Right — Results */}
        <div className={styles.resultsPanel}>
          <p className={styles.resultsPanelLabel}>Your EMI Details</p>
          <span className={styles.resultsPanelLine} />

          <div className={styles.resultItem}>
            <p className={styles.resultItemTitle}>Monthly EMI</p>
            <p className={styles.resultItemDesc}>Monthly payable amount</p>
            <p className={`${styles.resultItemValue} ${styles.resultItemValueLg}`}>₹{fmt(emi)}</p>
          </div>

          <div className={styles.resultItem}>
            <p className={styles.resultItemTitle}>Total Payment</p>
            <p className={styles.resultItemDesc}>Total amount payable over the term</p>
            <p className={styles.resultItemValue}>₹{fmt(totalPayment)}</p>
          </div>

          <div className={styles.resultItem}>
            <p className={styles.resultItemTitle}>Total Interest</p>
            <p className={styles.resultItemDesc}>Total interest payable over the term</p>
            <p className={styles.resultItemValue}>₹{fmt(totalInterest)}</p>
          </div>
        </div>
      </div>

      {/* CTA — full width of card */}
      <div className={styles.ctaRow}>
        <div className={styles.ctaIcon} aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <rect x="3" y="5" width="14" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
            <path d="M3 9h14M7 5V3M13 5V3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </div>
        <div className={styles.ctaText}>
          <p className={styles.ctaTitle}>Take the Next Step Towards Financial Freedom</p>
          <p className={styles.ctaDesc}>Ready to make your dream a reality? Start your loan application process now and get the best rates available.</p>
        </div>
        <Link href="/contact" className={styles.ctaBtn}>
          Talk to an Advisor
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

/* ── Section ──────────────────────────────────────────────── */
export function Calculators() {
  return (
    <section id="calculators" className={styles.section}>
      <div className="container">

        {/* Section Header */}
        <Reveal variant="up">
          <div className={styles.sectionHeader}>
            <div className={styles.headerLeft}>
              <div className={styles.eyebrowWrap}>
                <span className={styles.eyebrow}>Financial Tools</span>
                <span className={styles.eyebrowLine} aria-hidden="true" />
              </div>
              <h2 className={styles.heading}>
                Plan smarter for a{' '}
                <em>brighter tomorrow.</em>
              </h2>
            </div>
            <p className={styles.headerBody}>
              Use our simple calculators to explore possibilities
              and make more informed financial decisions.
            </p>
          </div>
        </Reveal>

        {/* Calculators Grid */}
        <Reveal variant="up" delay={100}>
          <div className={styles.grid}>
            <InvestmentCalculator />
            <EMICalculator />
          </div>
        </Reveal>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.bottomLeft}>
            <span className={styles.bottomDash}>——</span> Powered by Greatlark
          </p>
          <Link href="/contact" className={styles.bottomRight}>
            Plan today. Grow tomorrow.
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
