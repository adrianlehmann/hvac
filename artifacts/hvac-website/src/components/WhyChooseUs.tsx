import { motion } from "framer-motion";
import {
  UserCheck,
  Clock,
  DollarSign,
  Package,
  Heart,
  Sun,
} from "lucide-react";

const features = [
  {
    icon: UserCheck,
    title: "Experienced Technicians",
    desc: "Knowledgeable HVAC professionals committed to quality workmanship on every job.",
  },
  {
    icon: Clock,
    title: "Fast Response Times",
    desc: "Prompt scheduling and reliable service when you need it most — including weekends.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    desc: "Upfront estimates with no hidden surprises — you always know what to expect.",
  },
  {
    icon: Package,
    title: "Quality Equipment",
    desc: "Trusted products and proven HVAC solutions backed by manufacturer warranties.",
  },
  {
    icon: Heart,
    title: "Customer Satisfaction",
    desc: "Focused on delivering exceptional service experiences from first call to final walkthrough.",
  },
  {
    icon: Sun,
    title: "Year-Round Comfort",
    desc: "Keeping homes and businesses comfortable in every season, all year long.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-orange-400 text-sm font-semibold uppercase tracking-widest mb-4">
            <span className="w-8 h-0.5 bg-orange-400 inline-block" />
            Why Choose Us
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            The New Haven Standard
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            We built our reputation one satisfied customer at a time. Here is
            what sets us apart.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-7 hover:bg-white/15 transition-all duration-300"
              data-testid={`feature-card-${feature.title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className="w-12 h-12 rounded-lg bg-orange-500/20 border border-orange-400/30 flex items-center justify-center mb-5">
                <feature.icon className="w-6 h-6 text-orange-400" />
              </div>
              <h3
                className="text-white font-bold text-xl mb-3"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {feature.title}
              </h3>
              <p className="text-white/65 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
