import { Award, Users, ThumbsUp, Zap, Clock, DollarSign } from "lucide-react";

const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "2,500+", label: "Jobs Completed" },
  { value: "4.9★", label: "Average Rating" },
  { value: "100%", label: "Satisfaction Focus" },
];

const values = [
  { icon: Zap, label: "Responsiveness" },
  { icon: Clock, label: "Punctuality" },
  { icon: Award, label: "Quality" },
  { icon: Users, label: "Professionalism" },
  { icon: DollarSign, label: "Value" },
  { icon: ThumbsUp, label: "Honest Recommendations" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: visual */}
          <div className="relative">
            {/* Main image placeholder */}
            <div
              className="rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center relative"
              style={{
                background: "linear-gradient(135deg, hsl(215,80%,18%) 0%, hsl(215,60%,30%) 100%)",
              }}
            >
              {/* HVAC-themed SVG illustration */}
              <svg
                viewBox="0 0 400 300"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background gradient rect */}
                <rect width="400" height="300" fill="url(#bgGrad)" />
                <defs>
                  <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="hsl(215,80%,18%)" />
                    <stop offset="100%" stopColor="hsl(215,60%,30%)" />
                  </linearGradient>
                </defs>

                {/* HVAC unit body */}
                <rect x="100" y="60" width="200" height="130" rx="12" fill="hsl(215,30%,38%)" />
                <rect x="114" y="74" width="172" height="102" rx="8" fill="hsl(215,30%,30%)" />

                {/* Fan grill circles */}
                <circle cx="200" cy="125" r="42" fill="none" stroke="hsl(215,30%,42%)" strokeWidth="3" />
                <circle cx="200" cy="125" r="30" fill="none" stroke="hsl(215,30%,42%)" strokeWidth="2" />
                <circle cx="200" cy="125" r="16" fill="hsl(215,60%,45%)" />
                <circle cx="200" cy="125" r="6" fill="hsl(24,100%,55%)" />

                {/* Fan blades */}
                {[0, 60, 120, 180, 240, 300].map((angle) => (
                  <line
                    key={angle}
                    x1="200"
                    y1="125"
                    x2={200 + 36 * Math.cos((angle * Math.PI) / 180)}
                    y2={125 + 36 * Math.sin((angle * Math.PI) / 180)}
                    stroke="hsl(215,40%,50%)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                ))}

                {/* Control panel */}
                <rect x="114" y="178" width="172" height="12" rx="4" fill="hsl(215,30%,35%)" />
                <circle cx="270" cy="184" r="4" fill="hsl(24,100%,55%)" />
                <circle cx="255" cy="184" r="4" fill="hsl(120,60%,50%)" />

                {/* Duct pipes */}
                <rect x="60" y="100" width="40" height="20" rx="4" fill="hsl(215,20%,45%)" />
                <rect x="300" y="100" width="40" height="20" rx="4" fill="hsl(215,20%,45%)" />

                {/* Ground/base */}
                <rect x="80" y="195" width="240" height="12" rx="6" fill="hsl(215,25%,35%)" />

                {/* Technician silhouette */}
                <ellipse cx="330" cy="240" rx="25" ry="8" fill="hsl(215,30%,25%)" />
                <rect x="318" y="180" width="24" height="60" rx="6" fill="hsl(215,50%,40%)" />
                <circle cx="330" cy="168" r="14" fill="hsl(30,40%,75%)" />
                {/* Hard hat */}
                <path d="M316 168 Q330 150 344 168" fill="hsl(24,100%,50%)" />

                {/* Tool in hand */}
                <rect x="342" y="200" width="18" height="5" rx="2" fill="hsl(215,20%,60%)" />

                {/* Air flow lines */}
                {[0, 1, 2].map((i) => (
                  <path
                    key={i}
                    d={`M${70 + i * 6} 90 Q${65 + i * 6} 80 ${70 + i * 6} 70`}
                    fill="none"
                    stroke="hsl(200,80%,70%)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    opacity="0.6"
                  />
                ))}
                {[0, 1, 2].map((i) => (
                  <path
                    key={i}
                    d={`M${326 + i * 5} 90 Q${321 + i * 5} 80 ${326 + i * 5} 70`}
                    fill="none"
                    stroke="hsl(200,80%,70%)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    opacity="0.6"
                  />
                ))}

                {/* Stars / rating */}
                {[0, 1, 2, 3, 4].map((i) => (
                  <text
                    key={i}
                    x={156 + i * 22}
                    y="268"
                    fontSize="16"
                    fill="hsl(24,100%,55%)"
                    textAnchor="middle"
                  >
                    ★
                  </text>
                ))}
                <text x="200" y="288" fontSize="11" fill="white" textAnchor="middle" opacity="0.7">
                  Trusted by Little Rock Homeowners
                </text>
              </svg>

              {/* Floating stat badges */}
              <div className="absolute top-4 left-4 bg-white rounded-lg px-3 py-2 shadow-lg">
                <p className="text-primary font-extrabold text-xl" style={{ fontFamily: "Montserrat, sans-serif" }}>15+</p>
                <p className="text-muted-foreground text-xs">Years Experience</p>
              </div>
              <div className="absolute bottom-4 right-4 bg-orange-500 rounded-lg px-3 py-2 shadow-lg">
                <p className="text-white font-extrabold text-xl" style={{ fontFamily: "Montserrat, sans-serif" }}>2,500+</p>
                <p className="text-white/80 text-xs">Happy Customers</p>
              </div>
            </div>
          </div>

          {/* Right: content */}
          <div>
            <span className="inline-flex items-center gap-2 text-orange-500 text-sm font-semibold uppercase tracking-widest mb-4">
              <span className="w-8 h-0.5 bg-orange-500 inline-block" />
              About Us
            </span>
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-foreground mb-6"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Your Local HVAC Specialists in Little Rock
            </h2>

            <p className="text-muted-foreground text-base leading-relaxed mb-6">
              CrackerJack Air Pros provides dependable heating, cooling, and indoor comfort services for residential and commercial customers across Little Rock and Central Arkansas. Our team is dedicated to delivering tailored HVAC solutions that maximize comfort, efficiency, and reliability.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              From emergency repairs to complete system installations, we focus on responsiveness, punctuality, and quality workmanship every step of the way. Open 24 hours, our technicians — like Brandon, Mark, Shane, and Storm — show up on time, communicate clearly, and treat your home with respect.
            </p>

            {/* Mission */}
            <div className="border-l-4 border-orange-500 pl-4 mb-8">
              <p className="text-foreground font-semibold italic">
                "Our mission is simple: deliver honest, high-quality HVAC service that keeps Little Rock families comfortable all year long — day or night."
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {values.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 bg-card border border-border rounded-lg px-4 py-3">
                  <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-semibold text-foreground">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center bg-card border border-border rounded-xl py-8 px-4"
            >
              <p
                className="text-4xl font-extrabold text-primary mb-2"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {stat.value}
              </p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
