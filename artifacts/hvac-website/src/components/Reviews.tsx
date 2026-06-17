import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const reviews = [
  {
    initials: "MT",
    color: "hsl(215,70%,45%)",
    name: "M.T.",
    text: "The service from Heating & Air Conditioning New Haven was first-rate. The technician was prompt, courteous, and well-informed. He took the time to describe the issue and his solution. The entire process was simple, and the pricing was reasonable. If we ever require heating assistance, I will give Heating & Air Conditioning New Haven another call.",
  },
  {
    initials: "SR",
    color: "hsl(24,85%,50%)",
    name: "S.R.",
    text: "Working with Heating & Air Conditioning New Haven was a pleasure. They arrived promptly, identified the issue, and immediately got our heater operating again. The technician was professional, kind, and informed. Their excellent customer service and clear prices were greatly appreciated. Without a doubt, I will give Heating & Air Conditioning New Haven another call in the future.",
  },
  {
    initials: "DL",
    color: "hsl(160,60%,35%)",
    name: "D.L.",
    text: "Cannot say enough good things about Heating & Air Conditioning New Haven. I called to inquire about having our boiler wiring tweaked so we would be able to install wireless thermostats. We agreed on a time for the next day, he called in advance, showed up on time, completed the work, verified everything functioned properly, and we were done. Highly recommended.",
  },
  {
    initials: "JK",
    color: "hsl(270,55%,45%)",
    name: "J.K.",
    text: "Excellent experience. My furnace was not heating half of the house. Called on a Sunday and they responded quickly. The technician arrived the next morning, identified the issue fast, completed the repair, and restored heat throughout the home. Great service.",
  },
  {
    initials: "PW",
    color: "hsl(340,70%,45%)",
    name: "P.W.",
    text: "They came out the next day and fixed my AC in under an hour. Outstanding work, fair pricing, and excellent customer service. Highly recommended.",
  },
  {
    initials: "CM",
    color: "hsl(195,75%,35%)",
    name: "C.M.",
    text: "I chose them for a heat pump installation after comparing multiple companies. The process was seamless, the team was professional, and they helped us understand our new smart thermostat. Highly recommend.",
  },
  {
    initials: "RB",
    color: "hsl(45,80%,40%)",
    name: "R.B.",
    text: "We have used this company for years to maintain our heating system. They replaced our boiler and later installed central air conditioning. The workmanship was excellent and everything was completed professionally.",
  },
];

export default function Reviews() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (dir: number) => {
    setDirection(dir);
    setCurrent((c) => (c + dir + reviews.length) % reviews.length);
  };

  const review = reviews[current];

  return (
    <section id="reviews" className="py-12 bg-background">
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
            Customer Reviews
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Real words from real New Haven homeowners who trusted us with their
            comfort.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Main review card */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={current}
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 60 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="bg-card border border-border rounded-2xl p-8 sm:p-12 shadow-sm"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-orange-400 text-orange-400"
                    />
                  ))}
                </div>

                {/* Review text */}
                <blockquote className="text-foreground text-lg leading-relaxed mb-8 italic">
                  "{review.text}"
                </blockquote>

                {/* Reviewer */}
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-base flex-shrink-0"
                    style={{ backgroundColor: review.color }}
                  >
                    {review.initials}
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{review.name}</p>
                    <p className="text-muted-foreground text-sm">
                      New Haven Area Customer
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={() => go(-1)}
              className="w-12 h-12 rounded-full border border-border bg-card hover:bg-secondary flex items-center justify-center transition-colors"
              data-testid="review-prev"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`rounded-full transition-all duration-200 ${
                    i === current
                      ? "w-8 h-2.5 bg-primary"
                      : "w-2.5 h-2.5 bg-border hover:bg-muted-foreground"
                  }`}
                  data-testid={`review-dot-${i}`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => go(1)}
              className="w-12 h-12 rounded-full border border-border bg-card hover:bg-secondary flex items-center justify-center transition-colors"
              data-testid="review-next"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
