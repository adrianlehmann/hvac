import { motion } from "framer-motion";
import { Phone, Calendar, Search, ThumbsUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Contact Us",
    desc: "Reach out by phone or through our online form. We respond promptly to all inquiries and emergencies.",
  },
  {
    number: "02",
    icon: Calendar,
    title: "Schedule Service",
    desc: "We work around your schedule to book a convenient appointment — often available same day or next day.",
  },
  {
    number: "03",
    icon: Search,
    title: "Expert Diagnosis",
    desc: "Our trained technician arrives on time, diagnoses the issue thoroughly, and explains the solution clearly.",
  },
  {
    number: "04",
    icon: ThumbsUp,
    title: "Comfort Restored",
    desc: "We complete the work efficiently, clean up, and make sure everything is working perfectly before we leave.",
  },
];

export default function Process() {
  return (
    <section className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 text-orange-500 text-sm font-semibold uppercase tracking-widest mb-4">
            <span className="w-8 h-0.5 bg-orange-500 inline-block" />
            How It Works
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Simple, Stress-Free Process
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Getting your HVAC system serviced should be easy. Here is exactly
            what to expect.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div
            className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-border"
            style={{ top: "3.5rem" }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                className="relative flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                data-testid={`process-step-${i + 1}`}
              >
                {/* Number + icon circle */}
                <div className="relative z-10 mb-6">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-lg"
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(215,80%,22%) 0%, hsl(215,65%,35%) 100%)",
                    }}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div
                    className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs font-extrabold"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {i + 1}
                  </div>
                </div>

                <h3
                  className="text-foreground font-extrabold text-xl mb-3"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                  {step.desc}
                </p>

                {/* Mobile connector */}
                {i < steps.length - 1 && (
                  <div className="sm:hidden w-0.5 h-8 bg-border mt-6" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
