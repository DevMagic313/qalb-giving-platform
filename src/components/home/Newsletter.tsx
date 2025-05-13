
import { useState, useCallback } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast({
        title: "Email Required",
        description: "Please enter your email address.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulating API call
    setTimeout(() => {
      toast({
        title: "Subscription Successful",
        description: "Thank you for subscribing to our newsletter.",
        variant: "default"
      });
      
      setEmail('');
      setIsSubmitting(false);
    }, 500); // Reduced timeout for faster response
  }, [email, toast]);
  
  return (
    <section className="bg-islamic-teal text-white py-16" aria-labelledby="newsletter-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 id="newsletter-heading" className="text-3xl md:text-4xl font-bold font-playfair mb-3">Stay Updated</h2>
          <p className="mb-8 text-islamic-sand">
            Subscribe to our newsletter for updates on new projects, impact stories, and more ways to make a difference.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow bg-white/10 border-white/20 text-white placeholder:text-white/60"
              aria-label="Email address"
              disabled={isSubmitting}
            />
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-islamic-burgundy hover:bg-islamic-burgundy/90 text-white"
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
          
          <div className="mt-4 text-xs text-islamic-sand">
            By subscribing you agree to our Privacy Policy. We promise not to share your information.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
