import { BusinessTypesSection } from './_components/BusinessTypesSection';
import { CTASection } from './_components/CTASection';
import { FeaturesSection } from './_components/FeaturesSection';
import { Footer } from './_components/Footer';
import { HeroSection } from './_components/HeroSection';
import { HowItWorksSection } from './_components/HowItWorksSection';

export default function Home() {
  return (
    <main className='relative'>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <BusinessTypesSection />
      <CTASection />
      <Footer />
    </main>
  );
}
