import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Layout from '../components/layout/Layout';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircle, Clock, Users, MapPin, Share2 } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

// Import project data from Projects page
import { projects, projectCategories } from '../data/projectsData';

const ProjectDetails = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [donationAmount, setDonationAmount] = useState("50");
  const [customAmount, setCustomAmount] = useState("");
  const [donationType, setDonationType] = useState("sadaqah");
  
  // Find project by ID
  const project = projects.find(p => p.id === parseInt(id || "0"));
  
  // If project not found
  if (!project) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <AlertCircle className="h-16 w-16 text-islamic-teal mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <p className="mb-6">The project you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/projects">Browse All Projects</Link>
          </Button>
        </div>
      </Layout>
    );
  }
  
  const category = projectCategories.find(c => c.id === project.category);
  const percentFunded = (project.raised / project.goal) * 100;
  
  const handleAmountSelect = (amount: string) => {
    setDonationAmount(amount);
    setCustomAmount("");
  };
  
  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDonationAmount("custom");
    setCustomAmount(e.target.value);
  };
  
  const handleDonate = () => {
    const amount = donationAmount === "custom" ? parseFloat(customAmount || "0") : parseFloat(donationAmount);
    
    if (!amount || amount <= 0) {
      toast({
        variant: "destructive",
        title: "Invalid Amount",
        description: "Please enter a valid donation amount.",
      });
      return;
    }
    
    // Navigate to payment form with project info
    navigate(`/payment?project=${project.id}&amount=${amount}&type=${donationType}`);
  };
  
  return (
    <Layout>
      <div className="bg-islamic-cream py-8">
        <div className="container mx-auto px-4">
          {/* Project Hero */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md mb-8">
            <div className="h-80 overflow-hidden relative">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 space-x-2">
                {project.featured && (
                  <Badge className="bg-islamic-gold text-white">Featured</Badge>
                )}
                <Badge variant="outline" className="bg-white/80 backdrop-blur-sm">
                  {category?.name}
                </Badge>
              </div>
            </div>
            
            <div className="p-6">
              <h1 className="text-3xl font-bold font-playfair mb-3">{project.title}</h1>
              <p className="text-islamic-charcoal/70 flex items-center mb-4">
                <MapPin size={16} className="mr-2" /> {project.location}
              </p>
              
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-bold text-lg">${project.raised.toLocaleString()} raised</span>
                  <span className="text-islamic-charcoal/70">of ${project.goal.toLocaleString()} goal</span>
                </div>
                <Progress value={percentFunded} className="h-3 bg-gray-200" />
                
                <div className="flex justify-between mt-3 text-sm text-islamic-charcoal/80">
                  <div className="flex items-center">
                    <Users size={16} className="mr-1" /> 
                    <span>{project.donorsCount} donors</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" /> 
                    <span>{project.daysLeft} days left</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project Information */}
            <div className="md:col-span-2">
              <Tabs defaultValue="about" className="w-full">
                <TabsList className="w-full grid grid-cols-3">
                  <TabsTrigger value="about">About</TabsTrigger>
                  <TabsTrigger value="updates">Updates</TabsTrigger>
                  <TabsTrigger value="donors">Donors</TabsTrigger>
                </TabsList>
                
                <TabsContent value="about" className="bg-white rounded-lg p-6 shadow-sm mt-2">
                  <h2 className="text-xl font-bold mb-4">About This Project</h2>
                  <p className="mb-4">
                    {project.description}
                  </p>
                  
                  <p className="mb-4">
                    This project aims to provide essential support to the community in {project.location}. 
                    With your generous donations, we can make a significant impact on the lives of many individuals.
                  </p>
                  
                  <h3 className="font-bold text-lg mt-6 mb-3">Project Goals</h3>
                  <ul className="list-disc pl-5 space-y-2 mb-6">
                    <li>Provide sustainable solutions to local challenges</li>
                    <li>Create lasting impact for the community</li>
                    <li>Ensure transparent use of all donated funds</li>
                    <li>Complete the project within the scheduled timeframe</li>
                  </ul>
                  
                  <div className="border-t pt-4 mt-6">
                    <Button variant="outline" className="flex items-center">
                      <Share2 size={16} className="mr-2" /> Share This Project
                    </Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="updates" className="bg-white rounded-lg p-6 shadow-sm mt-2">
                  <h2 className="text-xl font-bold mb-4">Project Updates</h2>
                  <div className="space-y-6">
                    <div className="border-l-2 border-islamic-teal pl-4 py-1">
                      <p className="text-sm text-islamic-charcoal/70">2 weeks ago</p>
                      <h3 className="font-bold">Construction Begins</h3>
                      <p className="mt-2">
                        We are excited to announce that construction has begun on the project. 
                        The local team has started the initial groundwork and preparations.
                      </p>
                    </div>
                    
                    <div className="border-l-2 border-islamic-teal pl-4 py-1">
                      <p className="text-sm text-islamic-charcoal/70">1 month ago</p>
                      <h3 className="font-bold">Funding Milestone Reached</h3>
                      <p className="mt-2">
                        Thanks to your generous donations, we have reached 50% of our funding goal. 
                        This allows us to begin initial preparations for the project implementation.
                      </p>
                    </div>
                    
                    <div className="border-l-2 border-islamic-teal pl-4 py-1">
                      <p className="text-sm text-islamic-charcoal/70">2 months ago</p>
                      <h3 className="font-bold">Project Launched</h3>
                      <p className="mt-2">
                        We're thrilled to announce the launch of this important initiative. 
                        The local community is excited about the positive changes this project will bring.
                      </p>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="donors" className="bg-white rounded-lg p-6 shadow-sm mt-2">
                  <h2 className="text-xl font-bold mb-4">Recent Donors</h2>
                  <div className="space-y-4">
                    {[
                      { name: "Ahmad R.", amount: 250, message: "May Allah accept this donation." },
                      { name: "Fatima K.", amount: 100, message: "For the sake of Allah." },
                      { name: "Mohammed S.", amount: 500, message: "In memory of my parents." },
                      { name: "Anonymous", amount: 1000, message: null },
                      { name: "Omar and Aisha", amount: 75, message: "May this help those in need." },
                    ].map((donor, i) => (
                      <div key={i} className="border-b last:border-b-0 pb-3 last:pb-0">
                        <div className="flex justify-between">
                          <span className="font-medium">{donor.name}</span>
                          <span className="font-bold">${donor.amount}</span>
                        </div>
                        {donor.message && (
                          <p className="text-sm text-islamic-charcoal/70 mt-1">{donor.message}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Donation Card */}
            <div>
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Support This Project</CardTitle>
                  <CardDescription>Your donation will help make a difference</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Donation Type */}
                    <div>
                      <Label>Donation Type</Label>
                      <RadioGroup 
                        defaultValue="sadaqah" 
                        className="grid grid-cols-2 gap-2 mt-2"
                        value={donationType}
                        onValueChange={setDonationType}
                      >
                        <div className="flex items-center space-x-2 border rounded-md p-2 hover:bg-islamic-teal/5 cursor-pointer">
                          <RadioGroupItem value="sadaqah" id="sadaqah" />
                          <Label htmlFor="sadaqah" className="cursor-pointer">Sadaqah</Label>
                        </div>
                        <div className="flex items-center space-x-2 border rounded-md p-2 hover:bg-islamic-teal/5 cursor-pointer">
                          <RadioGroupItem value="zakat" id="zakat" />
                          <Label htmlFor="zakat" className="cursor-pointer">Zakat</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    
                    {/* Donation Amount */}
                    <div>
                      <Label>Select Amount</Label>
                      <div className="grid grid-cols-3 gap-2 mt-2">
                        {["25", "50", "100", "200", "500", "custom"].map((amount) => (
                          <Button
                            key={amount}
                            type="button"
                            variant={donationAmount === amount ? "default" : "outline"}
                            className={`${
                              donationAmount === amount ? "bg-islamic-teal text-white" : ""
                            }`}
                            onClick={() => handleAmountSelect(amount)}
                          >
                            {amount === "custom" ? "Custom" : `$${amount}`}
                          </Button>
                        ))}
                      </div>
                      
                      {donationAmount === "custom" && (
                        <div className="mt-3">
                          <Label htmlFor="customAmount">Custom Amount ($)</Label>
                          <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-islamic-charcoal/70">
                              $
                            </span>
                            <Input
                              id="customAmount"
                              type="number"
                              min="1"
                              step="1"
                              placeholder="Enter amount"
                              className="pl-7"
                              value={customAmount}
                              onChange={handleCustomAmountChange}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Donate Button */}
                    <Button 
                      className="w-full bg-islamic-teal hover:bg-islamic-teal/90 text-white"
                      onClick={handleDonate}
                    >
                      Donate Now
                    </Button>
                    
                    <div className="text-center text-xs text-islamic-charcoal/70">
                      <p>All donations are tax-deductible and Sharia-compliant</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectDetails;
