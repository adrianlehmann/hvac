import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Do you provide emergency HVAC service?",
    a: "Yes. We're open 24 hours a day, 7 days a week for urgent heating and cooling issues. HVAC emergencies don't follow a schedule, so whether it's the middle of a heat wave or a cold December evening, we respond quickly — often the same day — to restore your comfort.",
  },
  {
    q: "What areas do you serve?",
    a: "We're based in Little Rock and proudly serve Central Arkansas, including North Little Rock, Sherwood, Maumelle, Jacksonville, Benton, Bryant, Cabot, Conway, and nearby communities. Not sure if you're in our area? Give us a call at (501) 631-3470.",
  },
  {
    q: "Do you install heat pumps?",
    a: "Yes, we provide heat pump installation, replacement, and maintenance services. Our technicians are experienced with a variety of heat pump systems and can recommend the right solution for your home or business.",
  },
  {
    q: "How often should HVAC systems be serviced?",
    a: "Most systems benefit from professional maintenance twice per year — ideally once in the spring before cooling season and once in the fall before heating season. Regular tune-ups help prevent breakdowns, extend equipment life, and maintain efficiency.",
  },
  {
    q: "Can smart thermostats improve efficiency?",
    a: "Smart thermostats can help optimize comfort and reduce energy consumption by learning your schedule, adjusting temperatures automatically, and providing detailed usage reports. Many homeowners see noticeable savings on their utility bills after upgrading.",
  },
  {
    q: "Do you service both residential and commercial systems?",
    a: "Yes, we provide HVAC solutions for homes and businesses of all sizes. Whether you need service for a single-family home or a commercial property, our team has the experience and equipment to get the job done right.",
  },
];

export default function FAQ() {
  return (
    <section className="py-12 bg-secondary/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 text-orange-500 text-sm font-semibold uppercase tracking-widest mb-4">
            <span className="w-8 h-0.5 bg-orange-500 inline-block" />
            FAQ
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Have questions? We have answers. If you don't see yours below, give
            us a call.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/50 data-[state=open]:shadow-sm transition-all duration-200"
                data-testid={`faq-item-${i}`}
              >
                <AccordionTrigger className="text-left font-semibold text-foreground text-base py-5 hover:no-underline hover:text-primary">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
