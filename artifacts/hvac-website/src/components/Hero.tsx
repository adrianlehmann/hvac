import { motion } from "framer-motion";
import { CheckCircle, Shield, Zap } from "lucide-react";

const badges = [
  { icon: Zap, label: "Same-Day Service Available" },
  { icon: Shield, label: "Licensed & Experienced" },
  { icon: CheckCircle, label: "Locally Trusted" },
];

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, hsl(215,80%,14%) 0%, hsl(215,80%,20%) 40%, hsl(220,70%,28%) 100%)",
      }}
    >
      {/* Geometric background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Orange accent glow */}
      <div
        className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ backgroundColor: "hsl(24,100%,50%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 text-orange-400 text-sm font-semibold uppercase tracking-widest mb-6">
              <span className="w-8 h-0.5 bg-orange-400 inline-block" />
              YOUR HVAC Experts
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight mb-6"
            style={{ fontFamily: "Montserrat, sans-serif" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Heating & Air Conditioning{" "}
            <span className="text-orange-400">New Haven</span>
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl text-white/80 font-medium mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            Trusted Heating & Cooling Experts Serving New Haven and Surrounding
            Communities
          </motion.p>

          <motion.p
            className="text-base text-white/60 mb-10 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            Professional HVAC installation, repair, maintenance, boilers,
            furnaces, heat pumps, air conditioning systems, thermostat upgrades,
            and indoor air quality solutions.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <button
              onClick={() => scrollTo("contact")}
              className="cursor-pointer bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-bold text-base px-8 py-4 rounded-lg transition-all duration-200 shadow-lg shadow-orange-500/30"
              data-testid="hero-cta-request-service"
            >
              Request Service
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="cursor-pointer border-2 border-white/30 hover:border-white/70 hover:bg-white/10 text-white font-bold text-base px-8 py-4 rounded-lg transition-all duration-200 backdrop-blur-sm"
              data-testid="hero-cta-free-estimate"
            >
              Get Free Estimate
            </button>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            {badges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full"
              >
                <Icon className="w-4 h-4 text-orange-400" />
                {label}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background:
            "linear-gradient(to bottom, transparent, hsl(210,40%,98%))",
        }}
      />
    </section>
  );
}
