import { motion } from "framer-motion";
import { Shield, Lock, Heart, CheckCircle, Award, Users } from "lucide-react";

const trustPoints = [
  {
    icon: Lock,
    title: "Data Privacy & Encryption",
    description: "End-to-end encryption protects all data. We never share your information.",
  },
  {
    icon: Heart,
    title: "Child-Safe Design",
    description: "No distractions, no games. Just essential safety and learning features.",
  },
  {
    icon: CheckCircle,
    title: "School-Friendly Policies",
    description: "Designed to work within school guidelines and policies.",
  },
  {
    icon: Award,
    title: "Compliance Ready",
    description: "Built to meet educational and data protection standards.",
  },
];

const badges = [
  { icon: Shield, label: "Secure" },
  { icon: Lock, label: "Privacy-First" },
  { icon: Users, label: "Parent-Approved" },
];

export default function TrustSection() {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-secondary bg-secondary/10 rounded-full px-4 py-2 mb-4">
            Trust & Safety
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Built on <span className="text-gradient">Trust</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your child's safety and privacy are our top priorities. We've built every feature with trust in mind.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {trustPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl shadow-soft p-6 text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 mx-auto mb-4 flex items-center justify-center">
                <point.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{point.title}</h3>
              <p className="text-sm text-muted-foreground">{point.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-card shadow-soft rounded-full px-6 py-3"
            >
              <badge.icon className="w-5 h-5 text-primary" />
              <span className="font-semibold text-foreground">{badge.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
