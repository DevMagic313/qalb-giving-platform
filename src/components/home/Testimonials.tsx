
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    id: 1,
    name: "Ahmed Al-Farsi",
    role: "Regular Donor",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    content: "I've donated to many charities, but Qalb is the first one that lets me actually see my donations in action. The tracking system gives me peace of mind that my money is being used exactly as promised.",
    location: "Dubai, UAE"
  },
  {
    id: 2,
    name: "Fatima Zahra",
    role: "Monthly Contributor",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    content: "The Zakat calculator made it so easy to fulfill my religious obligation. I love that I can track the water well project my family donated to, and even received photos of the completed well!",
    location: "London, UK"
  },
  {
    id: 3,
    name: "Ibrahim Khan",
    role: "Community Leader",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    content: "Our mosque partnered with Qalb for our Ramadan giving campaign. The transparency and real-time reporting helped us raise 40% more than last year because donors trusted where the money was going.",
    location: "Toronto, Canada"
  },
  {
    id: 4,
    name: "Aisha Mohamed",
    role: "Teacher",
    image: "https://randomuser.me/api/portraits/women/29.jpg",
    content: "I use Qalb as an educational tool in my classroom to show students how charitable giving works. We collectively funded a school project and now my students exchange letters with children there!",
    location: "Kuala Lumpur, Malaysia"
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-3">Donor Testimonials</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from donors who have experienced the impact of transparent giving through our platform.
          </p>
        </div>
        
        {/* Desktop Testimonials Grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border border-islamic-sand hover:border-islamic-teal transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-14 h-14 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-playfair font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} • {testimonial.location}
                    </p>
                  </div>
                </div>
                
                <div className="relative">
                  <svg className="w-8 h-8 text-islamic-teal/20 absolute -top-2 -left-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-foreground mb-4 pl-6">{testimonial.content}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Mobile Testimonials Carousel */}
        <div className="md:hidden">
          <Card className="border border-islamic-sand">
            <CardContent className="p-6">
              <div className="flex items-start mb-4">
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].name} 
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-playfair font-bold text-lg">{testimonials[activeIndex].name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[activeIndex].role} • {testimonials[activeIndex].location}
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <svg className="w-8 h-8 text-islamic-teal/20 absolute -top-2 -left-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-foreground mb-4 pl-6">{testimonials[activeIndex].content}</p>
              </div>
            </CardContent>
          </Card>
          
          {/* Navigation dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full ${index === activeIndex ? 'bg-islamic-teal' : 'bg-islamic-teal/30'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-between mt-6">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-islamic-cream hover:bg-islamic-sand transition-colors"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-islamic-cream hover:bg-islamic-sand transition-colors"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
