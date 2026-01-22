'use client';

import React from "react"

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function WaitlistCTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('[v0] Waitlist submission:', email);
    setSubmitted(true);
    // Here you would typically send the email to your backend
  };

  return (
    <section id="waitlist" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <Card className="mx-auto max-w-3xl overflow-hidden border-2">
          <div className="bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 p-8 md:p-12">
            <div className="text-center">
              <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">
                Be the First to Know When We Launch
              </h2>
              <p className="mb-8 text-pretty text-lg text-muted-foreground">
                Join our waitlist and get early access to Local Eats. Plus, receive exclusive launch offers!
              </p>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="mx-auto max-w-md">
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex-1 h-12 bg-background"
                    />
                    <Button type="submit" size="lg" className="group h-12 sm:w-auto">
                      Join Waitlist
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                  <p className="mt-4 text-xs text-muted-foreground">
                    {'We respect your privacy. No spam, ever.'}
                  </p>
                </form>
              ) : (
                <div className="mx-auto max-w-md rounded-lg bg-background p-6">
                  <div className="flex items-center justify-center gap-3 text-primary">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Check className="h-6 w-6" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold">{"You're on the list!"}</p>
                      <p className="text-sm text-muted-foreground">{"We'll notify you when we launch."}</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-12 grid gap-6 text-center sm:grid-cols-3">
                <div>
                  <div className="mb-2 text-2xl font-bold">🎁</div>
                  <div className="text-sm font-medium">Exclusive Launch Offer</div>
                </div>
                <div>
                  <div className="mb-2 text-2xl font-bold">⚡</div>
                  <div className="text-sm font-medium">Early Access</div>
                </div>
                <div>
                  <div className="mb-2 text-2xl font-bold">💰</div>
                  <div className="text-sm font-medium">Special Discounts</div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            <span className="font-medium">موسى</span> - Your Local Restaurants, Delivered Affordably
          </p>
        </div>
      </div>
    </section>
  );
}
