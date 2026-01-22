import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, Heart, Users } from 'lucide-react';

const features = [
  {
    icon: DollarSign,
    title: 'Lower Fees',
    description: 'Enjoy significantly lower delivery fees compared to national chains. More of your money goes to your favorite restaurants.',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    icon: Heart,
    title: 'Support Local',
    description: 'Directly support your favorite local restaurants and community. Every order helps keep local businesses thriving.',
    color: 'text-accent',
    bgColor: 'bg-accent/10',
  },
  {
    icon: Users,
    title: 'Community Focused',
    description: 'Experience a delivery service built around community values and local connections. We care about your neighborhood.',
    color: 'text-secondary',
    bgColor: 'bg-secondary/10',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-5xl">
            Enjoy Delicious Local Food Without Breaking the Bank
          </h2>
          <p className="text-pretty text-lg text-muted-foreground">
            Discover why Local Eats is the better choice for food delivery
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="relative overflow-hidden border-2 transition-all hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg ${feature.bgColor}`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-2xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-accent/5 p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">50%+</div>
              <div className="text-sm text-muted-foreground">Lower Fees</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">100+</div>
              <div className="text-sm text-muted-foreground">Local Restaurants</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">30min</div>
              <div className="text-sm text-muted-foreground">Avg Delivery Time</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">5★</div>
              <div className="text-sm text-muted-foreground">Customer Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
