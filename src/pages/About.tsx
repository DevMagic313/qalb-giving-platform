
import Layout from '../components/layout/Layout';
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-islamic-teal text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">About Qalb Giving Platform</h1>
          <p className="max-w-3xl mx-auto text-lg">
            A transparent, Sharia-compliant platform connecting donors with impactful projects around the world.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-playfair text-3xl font-bold text-islamic-charcoal mb-6">Our Mission</h2>
              <p className="text-islamic-charcoal/80 mb-4">
                Qalb Giving Platform exists to create a direct, transparent connection between donors and 
                charitable projects worldwide, with a focus on accountability and real impact.
              </p>
              <p className="text-islamic-charcoal/80">
                We believe in the power of sadaqah and zakat to transform lives when every dirham is directed 
                with care, transparency, and ethical responsibility.
              </p>
            </div>
            <div>
              <h2 className="font-playfair text-3xl font-bold text-islamic-charcoal mb-6">Our Vision</h2>
              <p className="text-islamic-charcoal/80 mb-4">
                We envision a world where charitable giving is fully transparent, where donors can see the direct impact 
                of their contributions, and where communities in need receive sustainable support with dignity.
              </p>
              <p className="text-islamic-charcoal/80">
                Our platform aims to revolutionize the way Islamic charity operates online by embracing technology 
                while maintaining the core principles of Islamic philanthropy.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="py-16 bg-islamic-cream">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-3xl font-bold text-islamic-charcoal mb-10 text-center">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-16 h-16 rounded-full bg-islamic-teal/10 text-islamic-teal flex items-center justify-center mb-6 mx-auto">
                <span className="font-arabic text-2xl">ش</span>
              </div>
              <h3 className="font-bold text-xl text-islamic-charcoal mb-4 text-center">Transparency</h3>
              <p className="text-islamic-charcoal/80 text-center">
                Complete openness in how funds are collected, distributed, and used, with real-time tracking
                and regular updates from the field.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-16 h-16 rounded-full bg-islamic-teal/10 text-islamic-teal flex items-center justify-center mb-6 mx-auto">
                <span className="font-arabic text-2xl">أ</span>
              </div>
              <h3 className="font-bold text-xl text-islamic-charcoal mb-4 text-center">Accountability</h3>
              <p className="text-islamic-charcoal/80 text-center">
                We hold ourselves and our partners to the highest standards of financial and operational 
                integrity, with regular audits and reports.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-16 h-16 rounded-full bg-islamic-teal/10 text-islamic-teal flex items-center justify-center mb-6 mx-auto">
                <span className="font-arabic text-2xl">ت</span>
              </div>
              <h3 className="font-bold text-xl text-islamic-charcoal mb-4 text-center">Trust</h3>
              <p className="text-islamic-charcoal/80 text-center">
                Building lasting relationships through consistent delivery of promises, 
                ethical practices, and adherence to Islamic principles.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Team */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-3xl font-bold text-islamic-charcoal mb-10 text-center">Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Aisha Rahman",
                role: "Founder & CEO",
                bio: "Former humanitarian aid worker with 15 years of experience in international development.",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
              },
              {
                name: "Omar Khalid",
                role: "Chief Technology Officer",
                bio: "Tech entrepreneur passionate about using technology for social impact.",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80"
              },
              {
                name: "Fatima Al-Zahra",
                role: "Director of Projects",
                bio: "Expert in sustainable development with focus on water and education initiatives.",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80"
              },
              {
                name: "Yusuf Ibrahim",
                role: "Chief Financial Officer",
                bio: "Certified accountant with expertise in Islamic finance and ethical investment.",
                image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80"
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-lg text-islamic-charcoal">{member.name}</h3>
                <p className="text-islamic-teal font-medium mb-2">{member.role}</p>
                <p className="text-islamic-charcoal/70 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Partners - Improved Section */}
      <div className="py-16 bg-islamic-cream">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-3xl font-bold text-islamic-charcoal mb-4 text-center">Our Trusted Partners</h2>
          <p className="text-islamic-charcoal/80 text-center max-w-3xl mx-auto mb-10">
            We collaborate with leading organizations around the world to maximize impact and ensure the highest standards in humanitarian work.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center">
            {[
              { 
                name: "Islamic Relief",
                logo: "https://i.imgur.com/zcbFTGF.png", 
                description: "Global humanitarian organization" 
              },
              { 
                name: "Charity Water",
                logo: "https://i.imgur.com/CRiGOr3.png", 
                description: "Clean water initiatives"
              },
              { 
                name: "Global Education Fund",
                logo: "https://i.imgur.com/bhofEWI.png", 
                description: "Educational programs worldwide" 
              },
              { 
                name: "Food For All",
                logo: "https://i.imgur.com/eXnUJm2.png", 
                description: "Fighting food insecurity" 
              },
            ].map((partner, index) => (
              <Card key={index} className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
                <div className="p-6 flex flex-col items-center">
                  <div className="h-20 flex items-center justify-center mb-4 w-full">
                    <Avatar className="h-20 w-20 rounded-none">
                      <AvatarImage src={partner.logo} alt={`${partner.name} logo`} className="object-contain" />
                      <AvatarFallback className="text-lg font-bold bg-islamic-teal/10 text-islamic-teal">
                        {partner.name.substring(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="text-islamic-charcoal font-semibold text-center mb-1">{partner.name}</div>
                  <div className="text-islamic-charcoal/70 text-sm text-center">{partner.description}</div>
                </div>
              </Card>
            ))}
          </div>
          
          <Separator className="my-16" />
          
          <div className="text-center">
            <h3 className="font-playfair text-2xl font-bold text-islamic-charcoal mb-6">Join Our Mission</h3>
            <p className="text-islamic-charcoal/80 max-w-2xl mx-auto mb-8">
              We're always looking for partners who share our vision for transparent, impactful charity work.
              Whether you're an NGO working on the ground or a corporate entity looking to fulfill your social
              responsibility, we'd love to hear from you.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-islamic-teal hover:bg-islamic-teal/90 text-white py-3 px-6 rounded-md transition-colors"
            >
              Contact Us to Partner
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
