import { motion } from "framer-motion";
import { Scan, Activity, Bus, Building } from "lucide-react";

const roadmapItems = [
  {
    icon: Scan,
    title: "RFID Book Detection",
    description: "Automatic detection of which books are in the bag",
    quarter: "Q3 2025",
  },
  {
    icon: Activity,
    title: "AI Posture Analysis",
    description: "Detect and alert improper carrying posture",
    quarter: "Q4 2025",
  },
  {
    icon: Bus,
    title: "School Bus Integration",
    description: "Track children during transportation",
    quarter: "Q1 2026",
  },
  {
    icon: Building,
    title: "Government & School Partnerships",
    description: "Large-scale deployments with institutions",
    quarter: "Q2 2026",
  },
];

export default function RoadmapSection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary bg-primary/10 rounded-full px-4 py-2 mb-4">
            Roadmap
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What's <span className="text-gradient">Coming Next</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're constantly innovating to bring more features that make a difference.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />

          <div className="space-y-8 md:space-y-0">
            {roadmapItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`relative md:grid md:grid-cols-2 md:gap-8 ${
                  index % 2 === 0 ? "" : "md:direction-rtl"
                }`}
              >
                <div className={`md:${index % 2 === 0 ? "text-right" : "text-left"}`}>
                  <div className={`bg-card rounded-2xl shadow-card p-6 inline-block w-full ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}>
                    <div className={`flex items-center gap-3 mb-3 ${
                      index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}>
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className={index % 2 === 0 ? "md:text-right" : ""}>
                        <span className="text-xs font-semibold text-secondary bg-secondary/10 rounded-full px-2 py-1">
                          {item.quarter}
                        </span>
                      </div>
                    </div>
                    <h3 className={`font-bold text-foreground mb-2 ${
                      index % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}>{item.title}</h3>
                    <p className={`text-sm text-muted-foreground ${
                      index % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}>{item.description}</p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-1/2 top-6 -translate-x-1/2 hidden md:block">
                  <div className="w-4 h-4 rounded-full gradient-hero border-4 border-background" />
                </div>

                <div className="hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
