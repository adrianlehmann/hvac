import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Service Areas", href: "#service-areas" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  "Furnace Repair & Installation",
  "Boiler Services",
  "AC Repair & Installation",
  "Heat Pump Services",
  "Ductless Mini Splits",
  "Air Quality Solutions",
  "Smart Thermostats",
  "HVAC Maintenance Plans",
];

const hours = [
  { days: "Monday – Friday", time: "7:00 AM – 8:00 PM" },
  { days: "Saturday", time: "7:00 AM – 7:00 PM" },
  { days: "Sunday", time: "7:00 AM – 8:00 PM" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer style={{ backgroundColor: "hsl(215,80%,12%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4">
              <p
                className="text-white/70 text-sm font-semibold tracking-wide uppercase"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Heating & Air Conditioning
              </p>
              <p
                className="text-orange-400 text-2xl font-extrabold tracking-wider"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                New Haven
              </p>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Your trusted local HVAC experts serving New Haven and surrounding
              communities. Licensed, experienced, and committed to your comfort.
            </p>
            <div className="flex items-center gap-2 text-white/50 text-sm mb-2">
              <MapPin className="w-4 h-4 flex-shrink-0 text-orange-400" />
              <span>426 Whalley Ave, New Haven, CT 06511</span>
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-white/50 hover:text-orange-400 text-sm transition-colors duration-200"
                    data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              Services
            </h4>
            <ul className="space-y-2">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo("#services")}
                    className="text-white/50 hover:text-orange-400 text-sm transition-colors duration-200 text-left"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-orange-400" />
                Hours
              </span>
            </h4>
            <div className="space-y-3">
              {hours.map(({ days, time }) => (
                <div key={days}>
                  <p className="text-white/70 text-sm font-medium">{days}</p>
                  <p className="text-orange-400 text-sm font-semibold">
                    {time}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider + copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} Heating & Air Conditioning New
            Haven. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            426 Whalley Ave, New Haven, CT 06511
          </p>
        </div>
      </div>
    </footer>
  );
}
