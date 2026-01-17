import { motion } from "framer-motion";
import { Cpu, Cloud, Brain, Smartphone, ArrowRight, Radio } from "lucide-react";

const steps = [
  {
    icon: Radio,
    title: "Sensors Collect Data",
    description: "Weight, location, and button sensors gather real-time information from the bag.",
    color: "primary",
  },
  {
    icon: Cpu,
    title: "Microcontroller Processes",
    description: "ESP32 chip processes all sensor data locally and prepares for transmission.",
    color: "secondary",
  },
  {
    icon: Cloud,
    title: "Secure Cloud Sync",
    description: "Data is encrypted and sent to our secure cloud infrastructure.",
    color: "primary",
  },
  {
    icon: Brain,
    title: "AI Analysis",
    description: "Machine learning models analyze patterns and detect anomalies.",
    color: "secondary",
  },
  {
    icon: Smartphone,
    title: "Parent App Alerts",
    description: "Parents receive real-time notifications and insights on their phone.",
    color: "primary",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-secondary bg-secondary/10 rounded-full px-4 py-2 mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            From Bag to <span className="text-gradient">Your Phone</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A seamless end-to-end system that keeps you connected to your child's safety.
          </p>
        </motion.div>

        {/* Desktop Flow */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full -translate-y-1/2 opacity-20" />
            
            <div className="grid grid-cols-5 gap-4">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative"
                >
                  <div className="bg-card rounded-2xl shadow-card p-6 text-center relative z-10">
                    <div className={`w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center ${
                      step.color === "primary" ? "bg-primary/10" : "bg-secondary/10"
                    }`}>
                      <step.icon className={`w-8 h-8 ${
                        step.color === "primary" ? "text-primary" : "text-secondary"
                      }`} />
                    </div>
                    <div className="w-8 h-8 rounded-full gradient-hero text-white font-bold text-sm flex items-center justify-center mx-auto mb-3">
                      {index + 1}
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                  
                  {index < steps.length - 1 && (
                    <div className="absolute top-1/2 -right-4 z-20 -translate-y-1/2">
                      <ArrowRight className="w-8 h-8 text-primary/40" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Flow */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-4 items-start"
            >
              <div className="flex flex-col items-center shrink-0">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  step.color === "primary" ? "bg-primary/10" : "bg-secondary/10"
                }`}>
                  <step.icon className={`w-6 h-6 ${
                    step.color === "primary" ? "text-primary" : "text-secondary"
                  }`} />
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 h-12 bg-border mt-2" />
                )}
              </div>
              <div className="bg-card rounded-xl shadow-soft p-4 flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-full gradient-hero text-white text-xs font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                  <h3 className="font-bold text-foreground">{step.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-card rounded-3xl shadow-card p-8 lg:p-12"
        >
          <h3 className="text-xl font-bold text-foreground text-center mb-8">System Architecture</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <div className="text-center p-4 bg-primary/5 rounded-xl">
              <div className="w-16 h-16 gradient-hero rounded-2xl mx-auto mb-3 flex items-center justify-center">
                <Radio className="w-8 h-8 text-white" />
              </div>
              <p className="font-semibold text-foreground">Smart Bag</p>
              <p className="text-xs text-muted-foreground">Sensors + MCU</p>
            </div>
            
            <ArrowRight className="w-8 h-8 text-muted-foreground rotate-90 md:rotate-0" />
            
            <div className="text-center p-4 bg-secondary/5 rounded-xl">
              <div className="w-16 h-16 bg-secondary rounded-2xl mx-auto mb-3 flex items-center justify-center">
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <p className="font-semibold text-foreground">Cloud + AI</p>
              <p className="text-xs text-muted-foreground">Processing</p>
            </div>
            
            <ArrowRight className="w-8 h-8 text-muted-foreground rotate-90 md:rotate-0" />
            
            <div className="text-center p-4 bg-primary/5 rounded-xl">
              <div className="w-16 h-16 gradient-hero rounded-2xl mx-auto mb-3 flex items-center justify-center">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <p className="font-semibold text-foreground">Parent App</p>
              <p className="text-xs text-muted-foreground">Alerts & Control</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
