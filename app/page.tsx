import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { StatsStrip } from '@/components/sections/StatsStrip';
import { ValueProps } from '@/components/sections/ValueProps';
import { Services } from '@/components/sections/Services';
import { Results } from '@/components/sections/Results';
import { Calculators } from '@/components/sections/Calculators';
import { Approach } from '@/components/sections/Approach';
import { Partners } from '@/components/sections/Partners';
import { Testimonials } from '@/components/sections/Testimonials';
import { Insights } from '@/components/sections/Insights';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <StatsStrip />
      <ValueProps />
      <Services />
      <Results />
      <Calculators />
      <Approach />
      <Partners />
      <Testimonials />
      <Insights />
    </>
  );
}
