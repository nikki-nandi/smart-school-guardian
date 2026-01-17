import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Basic",
    price: "₹4,999",
    period: "one-time",
    description: "Essential safety features for your child",
    features: [
      "Smart school bag",
      "Real-time weight monitoring",
      "Weight limit alerts",
      "LED status indicators",
      "1 year warranty",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: "₹6,999",
    period: "one-time",
    description: "Complete safety + tracking solution",
    features: [
      "Everything in Basic",
      "GPS location tracking",
      "Parent mobile app access",
      "SOS emergency button",
      "Geo-fencing alerts",
      "Smart timetable display",
      "2 year warranty",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "₹99-199",
    period: "/month",
    description: "Advanced AI insights & premium support",
    features: [
      "All Pro features",
      "AI-powered weight analysis",
      "Health insights reports",
      "Priority customer support",
      "School dashboard access",
      "Extended warranty",
    ],
    popular: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 lg:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary bg-primary/10 rounded-full px-4 py-2 mb-4">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Simple, Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your family's needs. All plans include our premium quality smart bag.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-card rounded-2xl shadow-card p-6 lg:p-8 border-2 ${
                plan.popular 
                  ? "border-primary scale-105 lg:scale-110" 
                  : "border-border/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 bg-primary text-primary-foreground text-sm font-semibold px-4 py-1 rounded-full">
                    <Star className="w-4 h-4" fill="currentColor" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-secondary" />
                    </div>
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.popular ? "hero" : "outline"} 
                className="w-full"
                size="lg"
              >
                {plan.period === "/month" ? "Subscribe Now" : "Pre-Order Now"}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
