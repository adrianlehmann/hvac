import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  Phone,
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
  { days: "Monday – Sunday", time: "Open 24 Hours" },
  { days: "Emergency Service", time: "Available 24/7" },
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
                className="text-white text-2xl font-extrabold tracking-wider"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                CrackerJack
              </p>
              <p
                className="text-orange-400 text-lg font-extrabold tracking-widest uppercase"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Air Pros
              </p>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Your trusted local HVAC experts serving Little Rock and Central
              Arkansas. Responsive, professional, and available 24 hours a day
              for your comfort.
            </p>
            <div className="flex items-center gap-2 text-white/50 text-sm mb-2">
              <MapPin className="w-4 h-4 flex-shrink-0 text-orange-400" />
              <span>1601 Westpark Dr Ste 7, Little Rock, AR 72204</span>
            </div>
            <div className="flex items-center gap-2 text-white/50 text-sm">
              <Phone className="w-4 h-4 flex-shrink-0 text-orange-400" />
              <a
                href="tel:+15016313470"
                className="hover:text-orange-400 transition-colors"
              >
                (501) 631-3470
              </a>
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
            &copy; {new Date().getFullYear()} CrackerJack Air Pros. All rights
            reserved.
          </p>
          <p className="text-white/20 text-xs">
            1601 Westpark Dr Ste 7, Little Rock, AR 72204
          </p>
        </div>
      </div>
    </footer>
  );
}
