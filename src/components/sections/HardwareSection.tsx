import { motion } from "framer-motion";
import { 
  Gauge, 
  MapPin, 
  Cpu, 
  Battery, 
  AlertCircle, 
  Lightbulb,
  Monitor,
  Wifi
} from "lucide-react";

const components = [
  {
    icon: Gauge,
    name: "Load Cell Sensor",
    description: "High-precision weight sensor for accurate bag weight monitoring",
  },
  {
    icon: MapPin,
    name: "GPS Module",
    description: "Reliable location tracking with low power consumption",
  },
  {
    icon: Cpu,
    name: "ESP32 MCU",
    description: "Powerful microcontroller for data processing and connectivity",
  },
  {
    icon: Battery,
    name: "Power System",
    description: "Rechargeable battery with 7+ days standby time",
  },
  {
    icon: AlertCircle,
    name: "SOS Button",
    description: "Easy-access emergency button for instant alerts",
  },
  {
    icon: Lightbulb,
    name: "LED Indicators",
    description: "Visual status for battery, connection, and alerts",
  },
  {
    icon: Monitor,
    name: "Mini Display",
    description: "Small e-ink screen for timetable and simple info",
  },
  {
    icon: Wifi,
    name: "Connectivity",
    description: "WiFi and cellular options for reliable data sync",
  },
];

export default function HardwareSection() {
  return (
    <section id="hardware" className="py-20 lg:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary bg-primary/10 rounded-full px-4 py-2 mb-4">
            Hardware
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Built with <span className="text-gradient">Premium Components</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every component is carefully selected for reliability, safety, and long-term performance.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {components.map((component, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group bg-card rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 p-6 border border-border/50 hover:border-primary/20"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 mb-4 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <component.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{component.name}</h3>
              <p className="text-sm text-muted-foreground">{component.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-muted/50 rounded-2xl p-6 text-center"
        >
          <p className="text-muted-foreground">
            <span className="font-semibold text-foreground">Note:</span> The bag display is minimal and distraction-free — no maps, no games, just essential information.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
