'use client';

import { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { siteConfig } from '@/lib/data';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Programs', href: '/#services' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 60);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header
        className={`${styles.nav} ${scrolled || !isHome ? styles.navScrolled : styles.navTransparent}`}
        role="banner"
      >
        <div className={`container ${styles.inner}`}>

          {/* Logo */}
          <Link href="/" className={styles.logo} aria-label="GreatLark — Home">
            <span className={styles.logoMain}>GreatLark</span>
            <span className={styles.logoSub}>Institute</span>
          </Link>

          {/* Desktop Links */}
          <nav className={styles.links} role="navigation" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} className={styles.link}>
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className={styles.actions}>
            <Link href="/login" className={styles.ctaBtnSecondary}>
              Login
            </Link>
            <a href={siteConfig.dematUrl} target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
              Open a Demat A/c
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className={styles.toggle}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            <span className={mobileOpen ? styles.barOpen1 : styles.bar} />
            <span className={mobileOpen ? styles.barOpen2 : styles.bar} />
            <span className={mobileOpen ? styles.barOpen3 : styles.bar} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ''}`}
        aria-hidden={!mobileOpen}
        role="dialog"
        aria-label="Navigation menu"
      >
        <nav className={styles.mobileLinks}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={styles.mobileLink}
              onClick={closeMobile}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className={styles.mobileBottom}>
            <Link href="/login" className={styles.mobileCtaSecondary} onClick={closeMobile}>
              Login
            </Link>
          <a href={siteConfig.dematUrl} target="_blank" rel="noopener noreferrer" className={styles.mobileCta} onClick={closeMobile}>
            Open a Demat A/c →
          </a>
        </div>
      </div>
    </>
  );
}
