
import { useState, useEffect } from 'react';

const stats = [
  { id: 1, label: "Projects Funded", value: 315, prefix: "", suffix: "+" },
  { id: 2, label: "Donations Processed", value: 3250000, prefix: "$", suffix: "" },
  { id: 3, label: "Lives Impacted", value: 1450000, prefix: "", suffix: "+" },
  { id: 4, label: "Countries Served", value: 32, prefix: "", suffix: "" }
];

const ImpactStats = () => {
  const [counters, setCounters] = useState(stats.map(() => 0));
  
  useEffect(() => {
    const duration = 2000; // Animation duration in ms
    const frameRate = 30; // Frames per second
    const totalFrames = duration / (1000 / frameRate);
    
    let frame = 0;
    const timerId = setInterval(() => {
      frame++;
      const progress = Math.min(frame / totalFrames, 1);
      const easedProgress = easeOutCubic(progress);
      
      const newCounters = stats.map((stat) => Math.floor(stat.value * easedProgress));
      setCounters(newCounters);
      
      if (progress >= 1) {
        clearInterval(timerId);
      }
    }, 1000 / frameRate);
    
    return () => clearInterval(timerId);
  }, []);
  
  // Easing function for smoother animation
  const easeOutCubic = (x: number): number => {
    return 1 - Math.pow(1 - x, 3);
  };
  
  const formatNumber = (num: number): string => {
    return num.toLocaleString();
  };
  
  return (
    <div className="bg-islamic-charcoal text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">Our Impact Together</h2>
          <div className="h-1 w-24 bg-islamic-gold mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={stat.id} className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold font-playfair text-islamic-gold mb-2">
                {stat.prefix}{formatNumber(counters[index])}{stat.suffix}
              </div>
              <div className="text-islamic-sand">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImpactStats;
