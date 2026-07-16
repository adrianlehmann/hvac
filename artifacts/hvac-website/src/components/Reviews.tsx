import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const reviews = [
  {
    initials: "JT",
    color: "hsl(215,70%,45%)",
    name: "Jessica T.",
    text: "The experience that I have had with this company has been remarkable. I enjoyed the phone call, the service, just everything. They are awesome at letting you know if they will be running a little late. They are very professional, prompt, and give high quality service. Brandon and Mark have been such a pleasure to do business with! Every time I call they usually come same day which is very much so appreciated with how hot it's been! Don't take my word for it — try them out yourself!",
  },
  {
    initials: "MR",
    color: "hsl(24,85%,50%)",
    name: "Michael R.",
    text: "Brandon was absolutely the best! I called, he came out same day, was very informative, honest and upfront, and got my heat working on a cold December evening. Would definitely recommend!",
  },
  {
    initials: "DC",
    color: "hsl(160,60%,35%)",
    name: "David C.",
    text: "I was awakened this morning to find water gushing out of my yard. The line had burst. I found Cracker Jack, who had great recent reviews, so I gave them a shot and I am so glad I did. I called at 8:30am and got an appointment for 3. David showed up early and the repair was done by 5pm. Brittany, their dispatcher, did a great job keeping me updated. I was presented with pictures showing the problem and the fix. Very pleased.",
  },
  {
    initials: "KS",
    color: "hsl(270,55%,45%)",
    name: "Karen S.",
    text: "I had Crackerjack Pros come out and give an estimate on replacing my duct system. I met with Shane and he was very informative, friendly, plus their price was most reasonable. We had a small glitch at the beginning but they were right on top of it to solve the problem. They came when they said, did a fantastic job, and were done on time. I would highly recommend them to anybody that needs any kind of air conditioning work.",
  },
  {
    initials: "RB",
    color: "hsl(340,70%,45%)",
    name: "Robert B.",
    text: "Called Shane at Cracker Jack Air Pros and had a technician out within a few hours. Storm was professional, punctual, and very knowledgeable. They did an inspection on our unit and gave me all the information needed with several options to fix our issues. He was polite and respectful of our home. We received our invoice and estimates in a timely manner and are happy with our service with all members of the company! Thank you Cracker Jack Air Pros.",
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
            Real words from real Little Rock homeowners who trusted us with their
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
                      Little Rock Area Customer
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
