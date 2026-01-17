import { motion } from "framer-motion";
import { MapPin, Weight, Calendar, Bell, History, Shield } from "lucide-react";

const appFeatures = [
  {
    icon: MapPin,
    title: "Live Location",
    description: "Real-time child location on map",
    value: "Sunshine School",
  },
  {
    icon: Weight,
    title: "Weight History",
    description: "Daily bag weight tracking",
    value: "2.3 kg avg",
  },
  {
    icon: Calendar,
    title: "Daily Timetable",
    description: "Sync school schedule",
    value: "Math, Science, Art",
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    description: "Customizable notifications",
    value: "3 new alerts",
  },
  {
    icon: History,
    title: "Emergency Log",
    description: "SOS history and responses",
    value: "All clear ✓",
  },
  {
    icon: Shield,
    title: "Privacy Controls",
    description: "Manage data and access",
    value: "Secure",
  },
];

export default function MobileAppSection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-trust">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-sm font-semibold text-secondary bg-secondary/10 rounded-full px-4 py-2 mb-4">
              Parent Dashboard
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Everything at Your <span className="text-gradient">Fingertips</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Parents see everything. Children stay distraction-free. 
              Our intuitive app puts complete control in your hands while keeping 
              kids focused on learning.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {appFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-xl shadow-soft p-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-foreground text-sm">{feature.title}</h4>
                      <p className="text-xs text-muted-foreground mb-1">{feature.description}</p>
                      <p className="text-sm font-medium text-secondary truncate">{feature.value}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative mx-auto max-w-[300px]">
              {/* Phone Frame */}
              <div className="relative bg-foreground rounded-[3rem] p-3 shadow-elevated">
                <div className="bg-card rounded-[2.5rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="bg-primary/5 px-6 py-3 flex justify-between items-center">
                    <span className="text-xs font-medium text-muted-foreground">9:41</span>
                    <div className="w-20 h-5 bg-foreground rounded-full" />
                    <span className="text-xs text-muted-foreground">100%</span>
                  </div>
                  
                  {/* App Content */}
                  <div className="p-4 space-y-4">
                    <div className="text-center mb-4">
                      <h4 className="font-bold text-foreground">SmartBag</h4>
                      <p className="text-xs text-muted-foreground">Parent Dashboard</p>
                    </div>

                    {/* Location Card */}
                    <div className="bg-secondary/10 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-4 h-4 text-secondary" />
                        <span className="text-sm font-semibold text-foreground">Current Location</span>
                      </div>
                      <div className="bg-muted rounded-lg h-24 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-8 h-8 rounded-full bg-secondary/20 mx-auto mb-1 flex items-center justify-center">
                            <MapPin className="w-4 h-4 text-secondary" />
                          </div>
                          <p className="text-xs font-medium text-foreground">At School</p>
                        </div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-primary/10 rounded-xl p-3 text-center">
                        <Weight className="w-5 h-5 text-primary mx-auto mb-1" />
                        <p className="text-lg font-bold text-foreground">2.5 kg</p>
                        <p className="text-xs text-muted-foreground">Bag Weight</p>
                      </div>
                      <div className="bg-secondary/10 rounded-xl p-3 text-center">
                        <Bell className="w-5 h-5 text-secondary mx-auto mb-1" />
                        <p className="text-lg font-bold text-foreground">3</p>
                        <p className="text-xs text-muted-foreground">Alerts Today</p>
                      </div>
                    </div>

                    {/* SOS Status */}
                    <div className="bg-green-50 border border-green-200 rounded-xl p-3 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                        <Shield className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-green-800">All Clear</p>
                        <p className="text-xs text-green-600">No emergencies</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -left-8 top-1/4 bg-card shadow-card rounded-xl p-3 hidden sm:block"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <Bell className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground">Arrived at school</p>
                    <p className="text-xs text-muted-foreground">Just now</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
