import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Phone } from "lucide-react";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import ServiceAreas from "@/components/ServiceAreas";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <WhyChooseUs />
          <About />
          <Reviews />
          <ServiceAreas />
          <Process />
          <FAQ />
          <Contact />
        </main>
        <Footer />

        <a
          href="tel:+15016313470"
          className="lg:hidden fixed bottom-6 right-6 z-50 bg-orange-500 text-white rounded-full py-4 px-6 shadow-2xl flex items-center gap-2 font-bold hover:bg-orange-600 transition-transform hover:scale-105 active:scale-95 animate-bounce-short"
          aria-label="Call Now"
          data-testid="mobile-floating-call"
        >
          <Phone className="w-5 h-5" />
          (501) 631-3470
        </a>

        <style
          dangerouslySetInnerHTML={{
            __html: `
              @keyframes bounce-short {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-5px); }
              }
              .animate-bounce-short {
                animation: bounce-short 3s ease-in-out infinite;
              }
            `,
          }}
        />
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
