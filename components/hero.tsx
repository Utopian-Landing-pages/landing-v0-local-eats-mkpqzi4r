'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist');
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <span>✨</span>
            <span>Coming Soon</span>
          </div>
          
          <h1 className="mb-6 text-balance text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            Tired of High Delivery Fees? Support Local Restaurants!
          </h1>
          
          <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
            Local Eats connects you with your favorite local eateries, offering lower fees and a focus on community.
          </p>
          
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button onClick={scrollToWaitlist} size="lg" className="group w-full sm:w-auto">
              Join the Waitlist
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
              Learn More
            </Button>
          </div>

          <div className="mt-16">
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-muted/30 shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                    <svg
                      className="h-10 w-10 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-muted-foreground">App Preview Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-0 top-0 -z-10 h-full w-full">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-1/4 top-3/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      </div>
    </section>
  );
}
