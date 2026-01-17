import { motion } from "framer-motion";
import { X, Check, Weight, ShieldAlert, BookOpen, Phone, Eye } from "lucide-react";

const problems = [
  { icon: Weight, text: "Heavy school bags damage spines" },
  { icon: ShieldAlert, text: "Child safety concerns during travel" },
  { icon: BookOpen, text: "Carrying unnecessary books daily" },
  { icon: Phone, text: "No emergency support system" },
  { icon: Eye, text: "No visibility for parents" },
];

const solutions = [
  { icon: Weight, text: "Real-time weight monitoring" },
  { icon: ShieldAlert, text: "GPS tracking in parent app only" },
  { icon: BookOpen, text: "Smart timetable on bag display" },
  { icon: Phone, text: "One-touch SOS alerts" },
  { icon: Eye, text: "Full control via mobile app" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ProblemSolutionSection() {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            The Problem We're <span className="text-gradient">Solving</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every day, millions of children face preventable challenges. 
            Smart School Bag transforms how we protect and support them.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Problems */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-card rounded-2xl shadow-card p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                <X className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Before</h3>
            </div>
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-4 p-4 bg-destructive/5 rounded-xl border border-destructive/10"
                >
                  <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center shrink-0">
                    <problem.icon className="w-5 h-5 text-destructive" />
                  </div>
                  <p className="text-foreground font-medium pt-2">{problem.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-card rounded-2xl shadow-card p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                <Check className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">After</h3>
            </div>
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-4 p-4 bg-secondary/5 rounded-xl border border-secondary/10"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                    <solution.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-foreground font-medium pt-2">{solution.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
