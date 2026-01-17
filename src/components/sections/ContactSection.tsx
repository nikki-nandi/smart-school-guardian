import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Building, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ContactSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-gradient-trust">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-sm font-semibold text-primary bg-primary/10 rounded-full px-4 py-2 mb-4">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Ready to Protect <br />
              <span className="text-gradient">Your Child?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of parents who are already on our waitlist. 
              Be the first to know when Smart School Bag launches.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Email Us</p>
                  <p className="text-muted-foreground">hello@smartschoolbag.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                  <Building className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">School Partnership</p>
                  <p className="text-muted-foreground">schools@smartschoolbag.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Call Us</p>
                  <p className="text-muted-foreground">+91 98765 43210</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Forms */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Email Signup */}
            <div className="bg-card rounded-2xl shadow-card p-6 lg:p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Get Early Access</h3>
              {submitted ? (
                <div className="bg-secondary/10 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 mx-auto mb-4 flex items-center justify-center">
                    <Mail className="w-8 h-8 text-secondary" />
                  </div>
                  <p className="font-semibold text-foreground">Thanks for signing up!</p>
                  <p className="text-sm text-muted-foreground">We'll notify you when we launch.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1"
                    required
                  />
                  <Button type="submit" variant="hero">
                    Join Waitlist
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </form>
              )}
            </div>

            {/* Demo Request */}
            <div className="bg-card rounded-2xl shadow-card p-6 lg:p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Request a Demo</h3>
              <p className="text-muted-foreground mb-4">
                Are you a school administrator? Schedule a demo to see how Smart School Bag 
                can benefit your students.
              </p>
              <Button variant="outline" className="w-full">
                <Building className="w-4 h-4" />
                Schedule School Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
