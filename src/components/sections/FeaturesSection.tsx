import { motion } from "framer-motion";
import { 
  Weight, 
  MapPin, 
  Calendar, 
  AlertCircle, 
  Bell,
  Brain,
  MapPinned,
  LayoutDashboard,
  Battery,
  Sparkles
} from "lucide-react";

const coreFeatures = [
  {
    icon: Weight,
    title: "Weight Monitoring",
    description: "Real-time tracking ensures your child's bag never exceeds health-safe limits.",
    color: "primary",
  },
  {
    icon: MapPin,
    title: "GPS Tracking",
    description: "Know your child's location anytime through the secure parent app.",
    color: "secondary",
  },
  {
    icon: Calendar,
    title: "Smart Timetable",
    description: "Daily schedule displayed on the bag's screen so kids never forget what to bring.",
    color: "primary",
  },
  {
    icon: AlertCircle,
    title: "Emergency SOS",
    description: "One-button emergency alert sends location and notification to parents instantly.",
    color: "secondary",
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    description: "Receive notifications for weight limits, arrivals, departures, and more.",
    color: "primary",
  },
];

const advancedFeatures = [
  { icon: Brain, title: "AI Weight Analysis", description: "Predictive insights on bag weight patterns" },
  { icon: MapPinned, title: "Geo-fencing", description: "Alerts when child leaves safe zones" },
  { icon: LayoutDashboard, title: "School Dashboard", description: "Bulk management for institutions" },
  { icon: Battery, title: "Health Monitoring", description: "Battery and device health tracking" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 lg:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Sparkles className="w-4 h-4 inline mr-2" />
            Features
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Everything Your Child Needs, <br />
            <span className="text-gradient">Nothing They Don't</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Carefully designed features that prioritize safety, health, and convenience 
            while keeping children distraction-free.
          </p>
        </motion.div>

        {/* Core Features */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16"
        >
          {coreFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-card rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 p-6 lg:p-8 border border-border/50 hover:border-primary/20"
            >
              <div className={`w-14 h-14 rounded-2xl mb-6 flex items-center justify-center ${
                feature.color === "primary" ? "bg-primary/10" : "bg-secondary/10"
              } group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-7 h-7 ${
                  feature.color === "primary" ? "text-primary" : "text-secondary"
                }`} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Advanced Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-trust rounded-3xl p-8 lg:p-12"
        >
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Advanced Capabilities
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advancedFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-soft"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-bold text-foreground mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
