import Hero from '@/components/hero';
import Features from '@/components/features';
import WaitlistCTA from '@/components/waitlist-cta';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <WaitlistCTA />
      </main>
      <Footer />
    </>
  );
}
