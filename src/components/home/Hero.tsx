
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80")', 
        }}
        aria-hidden="true"
      >
        {/* Dark overlay with opacity */}
        <div className="absolute inset-0 bg-islamic-teal/80"></div>
        
        {/* Islamic pattern overlay with reduced opacity */}
        <div className="absolute inset-0 pattern-bg opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
        <div className="max-w-2xl mx-auto md:mx-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Change Lives Through <span className="text-islamic-sand">Transparent Giving</span>
          </h1>
          
          <p className="text-islamic-cream text-lg md:text-xl mb-8">
            Support Sharia-compliant projects and see the real-time impact of your generosity with our transparent tracking and reporting system.
          </p>
          
          <div className="arabic text-islamic-sand text-lg md:text-xl mb-8 p-4 border-l-4 border-islamic-sand bg-islamic-teal/50 rounded">
            <p className="mb-2">مَن تَصَدَّقَ بِعَدْلِ تَمْرَةٍ مِنْ كَسْبٍ طَيِّبٍ</p>
            <p className="text-white text-base md:text-lg italic">
              "Whoever gives charity equal to a date from good earnings..."
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-islamic-burgundy hover:bg-islamic-burgundy/90 text-white">
              <Link to="/projects">Explore Projects</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              <Link to="/about">Learn How It Works</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Wave shape divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-16 w-full bg-transparent" aria-hidden="true">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.92,146.53,111.31,216.6,92.83,271.15,78.45,328.17,64.28,383.09,85.37Z" 
                className="fill-white">
          </path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
