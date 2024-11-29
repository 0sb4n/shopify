import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      "name": "yuwan jazua",
      "designation": "Home Appliances Repair Manager",
      "quote": "Our team ensures that your home appliances are repaired with utmost precision and care. Customer satisfaction is our top priority.",
      "src": "/assets/images/yuwan.jpg"
    },
    {
      "name": "elish otake",
      "designation": "Commercial Appliances Repair Manager",
      "quote": "We understand the importance of minimal downtime for businesses. Our engineers are trained to handle commercial appliances efficiently.",
      "src": "/assets/images/elish.jpg"     
    },
    {
  "name": "Mohammad owais",
        "designation": "Industrial Appliances Repair Manager",
        "quote": "Our expertise in industrial appliance repair ensures smooth operations and improved performance for your manufacturing units.",
        
      src: "/assets/images/owais.jpg",
    },
    
    
  ];
  return <AnimatedTestimonials testimonials={testimonials}  />;
}
