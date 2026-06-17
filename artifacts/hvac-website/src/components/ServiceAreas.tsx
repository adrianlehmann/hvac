import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const areas = [
  "New Haven",
  "West Haven",
  "Hamden",
  "East Haven",
  "North Haven",
  "Branford",
  "Orange",
  "Milford",
  "Woodbridge",
  "Guilford",
];

export default function ServiceAreas() {
  return (
    <section id="service-areas" className="py-12 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 text-orange-500 text-sm font-semibold uppercase tracking-widest mb-4">
            <span className="w-8 h-0.5 bg-orange-500 inline-block" />
            Service Areas
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Serving Greater New Haven
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Providing dependable HVAC services throughout the Greater New Haven
            area and surrounding communities.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {areas.map((area, i) => (
            <motion.div
              key={area}
              className="flex items-center gap-3 bg-card border border-border rounded-xl px-5 py-4 hover:border-primary/50 hover:shadow-sm transition-all duration-200"
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              data-testid={`service-area-${area.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <MapPin className="w-4 h-4 text-orange-500 flex-shrink-0" />
              <span className="font-semibold text-foreground text-sm">
                {area}
              </span>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          className="rounded-2xl p-8 sm:p-12 text-center flex flex-col items-center gap-4"
          style={{
            background:
              "linear-gradient(135deg, hsl(215,80%,20%) 0%, hsl(215,70%,30%) 100%)",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <MapPin className="w-10 h-10 text-orange-400" />
          <h3
            className="text-2xl sm:text-3xl font-extrabold text-white"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Not sure if we cover your area?
          </h3>
          <p className="text-white/70 text-base max-w-md">
            Give us a call or send a message — we serve many communities
            throughout Connecticut and are happy to discuss your needs.
          </p>
          <button
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-lg transition-colors duration-200 mt-2"
            data-testid="service-areas-contact-cta"
          >
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
}
