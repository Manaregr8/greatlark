import type { Metadata } from 'next';
import '@/app/globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Financial Consulting & Wealth Management Services Delhi NCR | GreatLark',
  description:
    'Discover innovative financial solutions at GreatLark. Expertise in real estate investments, portfolio management, and estate planning for high-net-worth families.',
  keywords: 'wealth management, financial advisory, private wealth, estate planning, Delhi NCR, portfolio management, GreatLark',
  openGraph: {
    title: 'GreatLark — Premium Wealth Management & Financial Advisory',
    description:
      'Expertise in real estate investments, portfolio management, and estate planning for high-net-worth families across Delhi NCR.',
    url: 'https://www.greatlark.com',
    siteName: 'GreatLark',
    type: 'website',
    images: [
      {
        url: 'https://cdn.prod.website-files.com/64bfb177368e3149d602e512/64bfb7345ffb564b68d5370e_logo.svg',
        width: 1200,
        height: 630,
        alt: 'GreatLark Wealth Management',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GreatLark — Premium Wealth Management',
    description: 'Expertise in portfolio management and estate planning for high-net-worth families.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.greatlark.com',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
