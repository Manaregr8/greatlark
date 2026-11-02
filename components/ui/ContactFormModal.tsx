'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { services } from '@/lib/data';
import styles from './ContactFormModal.module.css';

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const COUNTRY_CODES = [
  { flag: '🇮🇳', code: '+91', country: 'India' },
  { flag: '🇺🇸', code: '+1',  country: 'USA' },
  { flag: '🇬🇧', code: '+44', country: 'UK' },
  { flag: '🇦🇪', code: '+971', country: 'UAE' },
  { flag: '🇸🇬', code: '+65', country: 'Singapore' },
  { flag: '🇨🇦', code: '+1',  country: 'Canada' },
  { flag: '🇦🇺', code: '+61', country: 'Australia' },
];

export function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
  const [mounted, setMounted]           = useState(false);
  const [firstName, setFirstName]       = useState('');
  const [lastName, setLastName]         = useState('');
  const [email, setEmail]               = useState('');
  const [phone, setPhone]               = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [countryCode, setCountryCode]   = useState(COUNTRY_CODES[0]);
  const [countryOpen, setCountryOpen]   = useState(false);
  const [serviceOpen, setServiceOpen]   = useState(false);
  const [submitted, setSubmitted]       = useState(false);
  const [submitting, setSubmitting]     = useState(false);

  const overlayRef    = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);
  const countryRef    = useRef<HTMLDivElement>(null);
  const serviceRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  /* Close on Escape */
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      setTimeout(() => firstInputRef.current?.focus(), 120);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleKeyDown]);

  /* Close dropdowns on outside click */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (countryRef.current && !countryRef.current.contains(e.target as Node)) {
        setCountryOpen(false);
      }
      if (serviceRef.current && !serviceRef.current.contains(e.target as Node)) {
        setServiceOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  /* Reset form when closed */
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setFirstName(''); setLastName(''); setEmail('');
        setPhone(''); setSelectedService('');
        setSubmitted(false); setSubmitting(false);
      }, 400);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    /* Simulate network delay */
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setSubmitted(true);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  if (!mounted || (!isOpen && !submitted)) return null;

  return createPortal(
    <div
      ref={overlayRef}
      className={styles.overlay}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label="Contact form"
    >
      <div className={styles.modal}>

        {/* Decorative accent */}
        <div className={styles.accentBar} aria-hidden="true" />

        {/* Close button */}
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <path d="M2 2l14 14M16 2L2 16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
          </svg>
        </button>

        {submitted ? (
          /* ── Success State ── */
          <div className={styles.successWrap}>
            <div className={styles.successIcon} aria-hidden="true">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="15" stroke="var(--color-champagne)" strokeWidth="1.5"/>
                <path d="M9 16.5l4.5 4.5 9-9" stroke="var(--color-champagne)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 className={styles.successTitle}>Request Sent</h2>
            <p className={styles.successBody}>
              Thank you. We will be in touch within one business day.
            </p>
            <button className={styles.btnPrimary} onClick={onClose} style={{ marginTop: '2rem' }}>
              Close
            </button>
          </div>
        ) : (
          /* ── Form State ── */
          <>
            {/* Header */}
            <div className={styles.header}>
              <span className={styles.eyebrow}>GET IN CONTACT</span>
              <h2 className={styles.title}>
                Get in contact <em>with Greatlark</em>
              </h2>
              <p className={styles.subtitle}>
                We reply within one business day.
              </p>
            </div>

            <form className={styles.form} onSubmit={handleSubmit} noValidate>

              {/* Row 1 – Name */}
              <div className={styles.row}>
                <div className={styles.fieldGroup}>
                  <label className={styles.label} htmlFor="firstName">First name</label>
                  <input
                    ref={firstInputRef}
                    id="firstName"
                    className={styles.input}
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First name"
                    required
                    autoComplete="given-name"
                  />
                </div>
                <div className={styles.fieldGroup}>
                  <label className={styles.label} htmlFor="lastName">Last name</label>
                  <input
                    id="lastName"
                    className={styles.input}
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last name"
                    required
                    autoComplete="family-name"
                  />
                </div>
              </div>

              {/* Row 2 – Email */}
              <div className={styles.fieldGroup}>
                <label className={styles.label} htmlFor="email">
                  Email&nbsp;<span className={styles.optional}>(Optional)</span>
                </label>
                <input
                  id="email"
                  className={styles.input}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@gmail.com"
                  autoComplete="email"
                />
              </div>

              {/* Row 3 – Phone */}
              <div className={styles.fieldGroup}>
                <label className={styles.label} htmlFor="phone">Phone number</label>
                <div className={styles.phoneRow}>

                  {/* Country code picker */}
                  <div ref={countryRef} className={styles.countryPicker}>
                    <button
                      type="button"
                      className={styles.countryBtn}
                      onClick={() => setCountryOpen(!countryOpen)}
                      aria-expanded={countryOpen}
                      aria-haspopup="listbox"
                    >
                      <span className={styles.flag}>{countryCode.flag}</span>
                      <span className={styles.countryCode}>{countryCode.code}</span>
                      <svg
                        className={`${styles.chevron} ${countryOpen ? styles.chevronOpen : ''}`}
                        width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"
                      >
                        <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>

                    {countryOpen && (
                      <ul className={styles.countryDropdown} role="listbox" aria-label="Country code">
                        {COUNTRY_CODES.map((c) => (
                          <li
                            key={`${c.country}-${c.code}`}
                            role="option"
                            aria-selected={countryCode.code === c.code && countryCode.country === c.country}
                            className={`${styles.countryOption} ${countryCode.country === c.country ? styles.countryOptionActive : ''}`}
                            onClick={() => { setCountryCode(c); setCountryOpen(false); }}
                          >
                            <span>{c.flag}</span>
                            <span>{c.country}</span>
                            <span className={styles.optionCode}>{c.code}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <input
                    id="phone"
                    className={`${styles.input} ${styles.phoneInput}`}
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Write your phone number"
                    required
                    autoComplete="tel"
                  />
                </div>
              </div>

              {/* Row 4 – Service */}
              <div className={styles.fieldGroup} ref={serviceRef}>
                <label className={styles.label} htmlFor="service">Select Service</label>
                <div className={styles.selectWrap}>
                  <button
                    type="button"
                    id="service"
                    className={`${styles.selectBtn} ${!selectedService ? styles.selectPlaceholder : ''}`}
                    onClick={() => setServiceOpen(!serviceOpen)}
                    aria-expanded={serviceOpen}
                    aria-haspopup="listbox"
                  >
                    <span>{selectedService || 'Select a service'}</span>
                    <svg
                      className={`${styles.chevron} ${serviceOpen ? styles.chevronOpen : ''}`}
                      width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"
                    >
                      <path d="M2 5l5 5 5-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>

                  {serviceOpen && (
                    <ul className={styles.serviceDropdown} role="listbox" aria-label="Service options">
                      {services.map((s) => (
                        <li
                          key={s.id}
                          role="option"
                          aria-selected={selectedService === s.title}
                          className={`${styles.serviceOption} ${selectedService === s.title ? styles.serviceOptionActive : ''}`}
                          onClick={() => { setSelectedService(s.title); setServiceOpen(false); }}
                        >
                          <span className={styles.serviceNum}>{s.number}</span>
                          {s.title}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className={styles.btnPrimary}
                disabled={submitting || !firstName || !lastName || !phone}
              >
                {submitting ? (
                  <>
                    <span className={styles.spinner} aria-hidden="true" />
                    Sending…
                  </>
                ) : (
                  <>
                    Send my Request
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </>
                )}
              </button>

              <p className={styles.replyNote}>
                We reply within one business day.
              </p>
            </form>
          </>
        )}
      </div>
    </div>,
    document.body
  );
}
