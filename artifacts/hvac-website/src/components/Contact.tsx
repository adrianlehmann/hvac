import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof schema>;

const services = [
  "Furnace Repair",
  "Furnace Installation",
  "Boiler Repair",
  "Boiler Installation",
  "Heat Pump Services",
  "Emergency Heating Repair",
  "AC Repair",
  "AC Installation",
  "AC Maintenance",
  "Ductless Mini Split Systems",
  "Thermostat Installation",
  "Air Quality Solutions",
  "HVAC Maintenance Plan",
  "Energy Efficiency Upgrade",
  "Other / General Inquiry",
];

const hours = [
  { days: "Monday – Sunday", time: "Open 24 Hours" },
  { days: "Emergency Service", time: "Available 24/7" },
];

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = (_values: FormValues) => {
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We will be in touch shortly.",
    });
    form.reset();
  };

  return (
    <section id="contact" className="py-24 bg-background">
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
            Contact Us
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Ready to schedule service or get a free estimate? Reach out — we respond quickly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: info + map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Info cards */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 bg-card border border-border rounded-xl p-5">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-foreground mb-1">Address</p>
                  <p className="text-muted-foreground text-sm">1601 Westpark Dr Ste 7</p>
                  <p className="text-muted-foreground text-sm">Little Rock, AR 72204</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-card border border-border rounded-xl p-5">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-foreground mb-1">Phone</p>
                  <a
                    href="tel:+15016313470"
                    className="text-orange-500 font-semibold hover:text-orange-600 transition-colors"
                    data-testid="contact-phone-link"
                  >
                    (501) 631-3470
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-card border border-border rounded-xl p-5">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div className="w-full">
                  <p className="font-bold text-foreground mb-2">Hours of Operation</p>
                  <div className="space-y-1">
                    {hours.map(({ days, time }) => (
                      <div key={days} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{days}</span>
                        <span className="font-medium text-foreground">{time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>            
          </motion.div>

          {/* Right: form */}
          <motion.div
            className="bg-card border border-border rounded-2xl p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3
              className="text-2xl font-extrabold text-foreground mb-6"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Request Service
            </h3>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="John Smith"
                            {...field}
                            data-testid="input-name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="(501) 555-0100"
                            type="tel"
                            {...field}
                            data-testid="input-phone"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="you@example.com"
                          type="email"
                          {...field}
                          data-testid="input-email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service Requested</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger data-testid="select-service">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {services.map((s) => (
                            <SelectItem key={s} value={s}>
                              {s}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your HVAC issue or what you need..."
                          rows={4}
                          {...field}
                          data-testid="input-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 active:scale-[0.98] text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 text-base"
                  data-testid="button-submit"
                >
                  Send Message
                </button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
