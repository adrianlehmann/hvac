import { useState } from "react";
import { motion } from "framer-motion";
import {
  Flame,
  Wind,
  ThermometerSun,
  Wrench,
  Zap,
  AlertTriangle,
  Snowflake,
  AirVent,
  Settings,
  Star,
  Wifi,
  Calendar,
  Leaf,
  Activity,
} from "lucide-react";

const categories = [
  {
    id: "heating",
    label: "Heating Services",
    icon: Flame,
    services: [
      {
        icon: Wrench,
        name: "Furnace Repair",
        desc: "Fast, reliable furnace diagnostics and repairs to restore your home's heat.",
      },
      {
        icon: Flame,
        name: "Furnace Installation",
        desc: "Expert installation of high-efficiency furnaces tailored to your space.",
      },
      {
        icon: Activity,
        name: "Boiler Repair",
        desc: "Professional boiler diagnostics and repairs for consistent warmth.",
      },
      {
        icon: Settings,
        name: "Boiler Installation",
        desc: "Complete boiler installation and commissioning for residential and commercial properties.",
      },
      {
        icon: ThermometerSun,
        name: "Heat Pump Services",
        desc: "Comprehensive heat pump service, from routine maintenance to full replacements.",
      },
      {
        icon: AlertTriangle,
        name: "Emergency Heating Repair",
        desc: "Urgent heating repairs when you need them most — available 7 days a week.",
      },
    ],
  },
  {
    id: "cooling",
    label: "Cooling Services",
    icon: Snowflake,
    services: [
      {
        icon: Wrench,
        name: "AC Repair",
        desc: "Accurate AC diagnostics and prompt repairs to get you cool again fast.",
      },
      {
        icon: Snowflake,
        name: "AC Installation",
        desc: "Professional installation of energy-efficient air conditioning systems.",
      },
      {
        icon: Calendar,
        name: "AC Maintenance",
        desc: "Preventive tune-ups and inspections to maximize AC performance and lifespan.",
      },
      {
        icon: AirVent,
        name: "Ductless Mini Split Systems",
        desc: "Expert installation and service for versatile ductless mini split systems.",
      },
      {
        icon: ThermometerSun,
        name: "Heat Pump Cooling",
        desc: "Efficient heat pump cooling solutions for year-round comfort.",
      },
      {
        icon: Wifi,
        name: "Thermostat Installation",
        desc: "Smart and programmable thermostat installation for precise climate control.",
      },
    ],
  },
  {
    id: "comfort",
    label: "Indoor Comfort",
    icon: Wind,
    services: [
      {
        icon: Leaf,
        name: "Air Quality Solutions",
        desc: "Filtration, purification, and ventilation solutions for healthier indoor air.",
      },
      {
        icon: Wifi,
        name: "Smart Thermostats",
        desc: "Upgrade to smart thermostats for convenient, efficient temperature management.",
      },
      {
        icon: Calendar,
        name: "HVAC Maintenance Plans",
        desc: "Scheduled maintenance programs to keep your systems running at peak efficiency.",
      },
      {
        icon: Zap,
        name: "Energy Efficiency Upgrades",
        desc: "Targeted upgrades to reduce energy consumption and lower utility bills.",
      },
      {
        icon: Wind,
        name: "Ventilation Services",
        desc: "Proper ventilation design and installation for fresh, healthy air circulation.",
      },
      {
        icon: Star,
        name: "Seasonal Tune-Ups",
        desc: "Pre-season inspections and adjustments to prepare your HVAC for peak demand.",
      },
    ],
  },
];

export default function Services() {
  const [active, setActive] = useState("heating");
  const activeCategory = categories.find((c) => c.id === active)!;

  return (
    <section id="services" className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-orange-500 text-sm font-semibold uppercase tracking-widest mb-4">
            <span className="w-8 h-0.5 bg-orange-500 inline-block" />
            Our Services
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Complete HVAC Solutions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From emergency repairs to full system installations, we handle every
            aspect of your home comfort.
          </p>
        </div>

        {/* Tab buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActive(id)}
              className={`flex items-center cursor-pointer gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 ${
                active === id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/10"
              }`}
              data-testid={`services-tab-${id}`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeCategory.services.map((service) => (
            <div
              key={service.name}
              className="bg-card border border-border rounded-xl p-6 cursor-default"
              data-testid={`service-card-${service.name.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3
                className="font-bold text-foreground text-lg mb-2"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {service.name}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
