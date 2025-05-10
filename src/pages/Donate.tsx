import { useState } from 'react';
import Layout from '../components/layout/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from 'react-router-dom';

const Donate = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const [donationType, setDonationType] = useState("general");
  const [donationAmount, setDonationAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [recurring, setRecurring] = useState(false);
  const [recurringFrequency, setRecurringFrequency] = useState("monthly");
  const [selectedProject, setSelectedProject] = useState("");
  const [dedicationType, setDedicationType] = useState("");
  const [dedicationName, setDedicationName] = useState("");
  const [coverFees, setCoverFees] = useState(true);
  const [giftAid, setGiftAid] = useState(false);
  const [notes, setNotes] = useState("");
  
  const handleAmountSelect = (amount: string) => {
    setDonationAmount(amount);
    setCustomAmount("");
  };
  
  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDonationAmount("custom");
    setCustomAmount(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Calculate the final amount
    const baseAmount = donationAmount === "custom" 
      ? parseFloat(customAmount || "0") 
      : parseFloat(donationAmount || "0");
      
    const fees = coverFees ? baseAmount * 0.03 : 0; // Assume 3% processing fee
    const totalAmount = baseAmount + fees;
    
    // Validate the amount
    if (totalAmount <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Please select or enter a valid donation amount.",
        variant: "destructive",
      });
      return;
    }
    
    // Navigate to payment page with params
    navigate(`/payment?amount=${totalAmount.toFixed(2)}&type=${donationType}${selectedProject ? `&project=${selectedProject}` : ''}`);
  };

  return (
    <Layout>
      <div className="bg-islamic-cream py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-islamic-charcoal">Donate Now</h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-islamic-charcoal/80 mb-4">
                Your generosity can change lives. All donations are Sharia-compliant and 100% tax-deductible.
              </p>
              <div className="arabic text-islamic-teal text-lg my-4">
                وَمَا تُنفِقُواْ مِنْ خَيْرٍ فَلأنفُسِكُمْ
              </div>
              <p className="text-sm italic text-islamic-charcoal/70">
                "Whatever you spend of good is for yourselves." - Quran 2:272
              </p>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Tabs defaultValue="donation" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="donation">Make a Donation</TabsTrigger>
                <TabsTrigger value="impact">See Your Impact</TabsTrigger>
                <TabsTrigger value="faqs">Donation FAQs</TabsTrigger>
              </TabsList>
              
              <TabsContent value="donation" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Your Donation Details</CardTitle>
                    <CardDescription>
                      Choose how you'd like to make a difference today.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Donation Type */}
                      <div className="space-y-3">
                        <Label>Donation Type</Label>
                        <RadioGroup 
                          defaultValue="general" 
                          className="grid grid-cols-1 md:grid-cols-3 gap-3"
                          value={donationType}
                          onValueChange={setDonationType}
                        >
                          <div className="flex items-center space-x-2 border rounded-md p-3 hover:bg-islamic-teal/5 cursor-pointer">
                            <RadioGroupItem value="general" id="general" />
                            <Label htmlFor="general" className="cursor-pointer w-full">General Donation</Label>
                          </div>
                          <div className="flex items-center space-x-2 border rounded-md p-3 hover:bg-islamic-teal/5 cursor-pointer">
                            <RadioGroupItem value="zakat" id="zakat" />
                            <Label htmlFor="zakat" className="cursor-pointer w-full">Zakat</Label>
                          </div>
                          <div className="flex items-center space-x-2 border rounded-md p-3 hover:bg-islamic-teal/5 cursor-pointer">
                            <RadioGroupItem value="sadaqah" id="sadaqah" />
                            <Label htmlFor="sadaqah" className="cursor-pointer w-full">Sadaqah</Label>
                          </div>
                        </RadioGroup>
                      </div>
                      
                      {/* Donation Amount */}
                      <div className="space-y-3">
                        <Label>Donation Amount</Label>
                        <div className="grid grid-cols-3 gap-3">
                          {["10", "25", "50", "100", "250", "custom"].map((amount) => (
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
                                step="0.01"
                                placeholder="Enter amount"
                                className="pl-7"
                                value={customAmount}
                                onChange={handleCustomAmountChange}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* Recurring Donation */}
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="recurring" 
                            checked={recurring}
                            onCheckedChange={(checked) => setRecurring(checked as boolean)}
                          />
                          <Label htmlFor="recurring">Make this a recurring donation</Label>
                        </div>
                        
                        {recurring && (
                          <div>
                            <Label htmlFor="frequency">Frequency</Label>
                            <Select 
                              value={recurringFrequency} 
                              onValueChange={setRecurringFrequency}
                            >
                              <SelectTrigger id="frequency">
                                <SelectValue placeholder="Select frequency" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="weekly">Weekly</SelectItem>
                                <SelectItem value="monthly">Monthly</SelectItem>
                                <SelectItem value="quarterly">Quarterly</SelectItem>
                                <SelectItem value="annually">Annually</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        )}
                      </div>
                      
                      {/* Project Selection (if not general) */}
                      {donationType !== "general" && (
                        <div className="space-y-3">
                          <Label htmlFor="project">Select a Project</Label>
                          <Select 
                            value={selectedProject} 
                            onValueChange={setSelectedProject}
                          >
                            <SelectTrigger id="project">
                              <SelectValue placeholder="Choose a project (optional)" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="water">Clean Water Wells</SelectItem>
                              <SelectItem value="education">Education for Girls</SelectItem>
                              <SelectItem value="orphan">Orphan Sponsorship</SelectItem>
                              <SelectItem value="food">Emergency Food Relief</SelectItem>
                              <SelectItem value="medical">Medical Aid</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      )}
                      
                      {/* Dedication Options */}
                      <div className="space-y-3">
                        <Label>Dedicate Your Donation (Optional)</Label>
                        <RadioGroup 
                          className="grid grid-cols-1 md:grid-cols-2 gap-3"
                          value={dedicationType}
                          onValueChange={setDedicationType}
                        >
                          <div className="flex items-center space-x-2 border rounded-md p-3 hover:bg-islamic-teal/5 cursor-pointer">
                            <RadioGroupItem value="memory" id="memory" />
                            <Label htmlFor="memory" className="cursor-pointer w-full">In Memory Of</Label>
                          </div>
                          <div className="flex items-center space-x-2 border rounded-md p-3 hover:bg-islamic-teal/5 cursor-pointer">
                            <RadioGroupItem value="honor" id="honor" />
                            <Label htmlFor="honor" className="cursor-pointer w-full">In Honor Of</Label>
                          </div>
                        </RadioGroup>
                        
                        {dedicationType && (
                          <div>
                            <Label htmlFor="dedicationName">Name</Label>
                            <Input
                              id="dedicationName"
                              placeholder="Enter name"
                              value={dedicationName}
                              onChange={(e) => setDedicationName(e.target.value)}
                            />
                          </div>
                        )}
                      </div>
                      
                      {/* Additional Options */}
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="coverFees" 
                            checked={coverFees}
                            onCheckedChange={(checked) => setCoverFees(checked as boolean)}
                          />
                          <Label htmlFor="coverFees">
                            Cover transaction fees (3%) so 100% of my donation goes to the cause
                          </Label>
                        </div>
                        
                        {/* Gift Aid for UK donors */}
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="giftAid" 
                            checked={giftAid}
                            onCheckedChange={(checked) => setGiftAid(checked as boolean)}
                          />
                          <Label htmlFor="giftAid" className="text-sm">
                            I am a UK taxpayer and would like Qalb to claim Gift Aid on my donation
                          </Label>
                        </div>
                      </div>
                      
                      {/* Additional Notes */}
                      <div className="space-y-3">
                        <Label htmlFor="notes">Additional Notes (Optional)</Label>
                        <Textarea
                          id="notes"
                          placeholder="Any special instructions or messages..."
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                        />
                      </div>
                    </form>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">Save for Later</Button>
                    <Button onClick={handleSubmit} className="bg-islamic-teal hover:bg-islamic-teal/90">
                      Proceed to Payment
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              <TabsContent value="impact" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>The Impact of Your Donation</CardTitle>
                    <CardDescription>
                      See how your contribution can make a difference.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
                          <div className="text-4xl font-bold text-islamic-teal mb-2">$25</div>
                          <p className="text-islamic-charcoal">
                            Provides emergency food for a family of four for one week
                          </p>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
                          <div className="text-4xl font-bold text-islamic-teal mb-2">$50</div>
                          <p className="text-islamic-charcoal">
                            Sponsors education for a child for one month
                          </p>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
                          <div className="text-4xl font-bold text-islamic-teal mb-2">$100</div>
                          <p className="text-islamic-charcoal">
                            Provides medical supplies for a rural clinic for two weeks
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-islamic-teal/10 p-6 rounded-lg border border-islamic-teal/20">
                        <h3 className="font-bold text-lg mb-4">Water Well Project Impact</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <ul className="space-y-2">
                              <li className="flex items-start">
                                <svg className="h-5 w-5 text-islamic-teal mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Provides clean water to 500+ people</span>
                              </li>
                              <li className="flex items-start">
                                <svg className="h-5 w-5 text-islamic-teal mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Reduces waterborne diseases by up to 80%</span>
                              </li>
                              <li className="flex items-start">
                                <svg className="h-5 w-5 text-islamic-teal mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Empowers girls to attend school instead of collecting water</span>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <ul className="space-y-2">
                              <li className="flex items-start">
                                <svg className="h-5 w-5 text-islamic-teal mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Transforms entire communities' health and livelihoods</span>
                              </li>
                              <li className="flex items-start">
                                <svg className="h-5 w-5 text-islamic-teal mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Sustainable solution lasting 15+ years</span>
                              </li>
                              <li className="flex items-start">
                                <svg className="h-5 w-5 text-islamic-teal mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Full project cost: $5,000-$12,000 depending on location</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="faqs" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Donation FAQs</CardTitle>
                    <CardDescription>
                      Frequently asked questions about our donation process.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      {
                        question: "Is my donation tax deductible?",
                        answer: "Yes, Qalb Giving Platform is a registered 501(c)(3) nonprofit organization, and all donations are tax-deductible to the extent allowed by law. You will receive a tax receipt after your donation."
                      },
                      {
                        question: "How is my donation used?",
                        answer: "We ensure that at least 90% of your donation goes directly to the projects. The remaining 10% covers essential administrative costs, maintaining our technology platform, and conducting project verification."
                      },
                      {
                        question: "Is my payment secure?",
                        answer: "Absolutely. We use industry-standard encryption and secure payment processing. We never store your full credit card details on our servers."
                      },
                      {
                        question: "Can I cancel my recurring donation?",
                        answer: "Yes, you can cancel your recurring donation at any time by logging into your account or contacting our support team."
                      },
                      {
                        question: "How do I know my donation is being used properly?",
                        answer: "Transparency is our core value. You can track the progress of projects through our real-time updates, photos, and detailed financial reports. We also conduct regular audits by independent third parties."
                      },
                      {
                        question: "Is my donation Sharia-compliant?",
                        answer: "Yes, all our projects and financial operations are reviewed by a board of Islamic scholars to ensure full Sharia compliance. We don't invest in or receive interest from donations."
                      }
                    ].map((faq, index) => (
                      <div key={index} className="border-b pb-4 last:border-b-0 last:pb-0">
                        <h3 className="font-medium text-lg mb-2">{faq.question}</h3>
                        <p className="text-islamic-charcoal/80 text-sm">{faq.answer}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Donate;
