import type { Metadata } from 'next';
import { Insights } from '@/components/sections/Insights';

export const metadata: Metadata = {
  title: 'Resources | GreatLark',
  description: 'Explore our latest insights and thought leadership on wealth management.',
};

export default function ResourcesPage() {
  return (
    <main style={{ paddingTop: 'clamp(80px, 10vw, 8rem)', backgroundColor: 'var(--color-warm-white)', minHeight: '100vh' }}>
      <Insights />
    </main>
  );
}
