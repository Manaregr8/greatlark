'use client';

import { useState } from 'react';
import { ContactFormModal } from '@/components/ui/ContactFormModal';
import styles from './ContactTrigger.module.css';

interface ContactTriggerProps {
  /** Button label. Defaults to "Book a Consultation" */
  label?: string;
  /** Custom children instead of label + arrow */
  children?: React.ReactNode;
  /** Visual variant */
  variant?: 'primary' | 'forest' | 'light' | 'secondary' | 'ghost' | 'custom';
  /** Whether to show arrow icon (when children is not provided) */
  showArrow?: boolean;
  className?: string;
}

export function ContactTrigger({
  label = 'Book a Consultation',
  children,
  variant = 'primary',
  showArrow = true,
  className,
}: ContactTriggerProps) {
  const [open, setOpen] = useState(false);

  const buttonClasses =
    variant === 'custom'
      ? `${styles.customReset} ${className ?? ''}`
      : `${styles.trigger} ${styles[variant]} ${className ?? ''}`;

  return (
    <>
      <button
        type="button"
        className={buttonClasses}
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
      >
        {children ?? (
          <>
            <span>{label}</span>
            {showArrow && (
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )}
              </>
            )}
          </button>

        <ContactFormModal isOpen={open} onClose={() => setOpen(false)} />
      </>
      );
}
