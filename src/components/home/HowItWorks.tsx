
const steps = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: "Browse Projects",
    description: "Explore a variety of Sharia-compliant charity projects across different categories and regions."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Make Donation",
    description: "Contribute any amount through our secure, Sharia-compliant payment system that ensures no interest is involved."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "Track Progress",
    description: "Follow your donation's journey with real-time updates, photos, and progress reports directly from the field."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "See Impact",
    description: "Receive completion reports with detailed breakdowns of how funds were used and the lives that were changed."
  }
];

const HowItWorks = () => {
  return (
    <div className="py-16 bg-islamic-cream pattern-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-3">How It Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our platform makes charitable giving transparent and rewarding.
            Follow your donation's journey from start to finish.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm text-center relative group hover:shadow-md transition-all duration-300"
            >
              {/* Step number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-islamic-teal text-white flex items-center justify-center font-bold text-sm">
                {index + 1}
              </div>
              
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-islamic-teal/30 -translate-y-1/2 -z-10"></div>
              )}
              
              {/* Icon */}
              <div className="mb-4 text-islamic-teal flex justify-center">
                {step.icon}
              </div>
              
              {/* Content */}
              <h3 className="font-playfair font-bold text-xl mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
