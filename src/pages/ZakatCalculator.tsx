
import { useState } from 'react';
import Layout from '../components/layout/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useToast } from "@/components/ui/use-toast";

const ZakatCalculator = () => {
  const { toast } = useToast();
  
  // Assets state
  const [cashInHand, setCashInHand] = useState<number>(0);
  const [bankDeposits, setBankDeposits] = useState<number>(0);
  const [goldSilver, setGoldSilver] = useState<number>(0);
  const [investments, setInvestments] = useState<number>(0);
  const [otherAssets, setOtherAssets] = useState<number>(0);
  
  // Liabilities state
  const [loans, setLoans] = useState<number>(0);
  const [taxes, setTaxes] = useState<number>(0);
  const [otherLiabilities, setOtherLiabilities] = useState<number>(0);
  
  // Result state
  const [zakatAmount, setZakatAmount] = useState<number | null>(null);
  
  // Nisab value (example: gold nisab in USD)
  const nisabValue = 5200; // This would typically be fetched from an API with current gold prices
  
  const calculateZakat = () => {
    // Calculate total assets
    const totalAssets = cashInHand + bankDeposits + goldSilver + investments + otherAssets;
    
    // Calculate total liabilities
    const totalLiabilities = loans + taxes + otherLiabilities;
    
    // Calculate net assets
    const netAssets = totalAssets - totalLiabilities;
    
    // Check if net assets are above nisab threshold
    if (netAssets < nisabValue) {
      toast({
        title: "Below Nisab Threshold",
        description: "Your net assets are below the nisab threshold. Zakat is not obligatory.",
        variant: "default",
      });
      setZakatAmount(0);
      return;
    }
    
    // Calculate zakat at 2.5%
    const calculatedZakat = netAssets * 0.025;
    setZakatAmount(calculatedZakat);
    
    toast({
      title: "Zakat Calculated",
      description: `Your estimated Zakat amount is $${calculatedZakat.toFixed(2)}.`,
      variant: "default",
    });
  };

  return (
    <Layout>
      <div className="bg-islamic-cream py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-islamic-charcoal">Zakat Calculator</h1>
            <p className="text-islamic-charcoal/80 max-w-3xl mx-auto">
              Use our Sharia-compliant calculator to determine your annual Zakat obligation. 
              Enter your assets and liabilities below to get started.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Tabs defaultValue="calculator" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="calculator">Calculator</TabsTrigger>
                <TabsTrigger value="guide">Zakat Guide</TabsTrigger>
              </TabsList>
              
              <TabsContent value="calculator" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Calculate Your Zakat</CardTitle>
                    <CardDescription>
                      Enter the values of your assets and liabilities to calculate your Zakat obligation.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium mb-4">Assets</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="cashInHand">Cash in Hand ($)</Label>
                            <Input
                              id="cashInHand"
                              type="number"
                              min="0"
                              value={cashInHand || ''}
                              onChange={(e) => setCashInHand(parseFloat(e.target.value) || 0)}
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="bankDeposits">Bank Deposits ($)</Label>
                            <Input
                              id="bankDeposits"
                              type="number"
                              min="0"
                              value={bankDeposits || ''}
                              onChange={(e) => setBankDeposits(parseFloat(e.target.value) || 0)}
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="goldSilver">Gold & Silver Value ($)</Label>
                            <Input
                              id="goldSilver"
                              type="number"
                              min="0"
                              value={goldSilver || ''}
                              onChange={(e) => setGoldSilver(parseFloat(e.target.value) || 0)}
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="investments">Investments ($)</Label>
                            <Input
                              id="investments"
                              type="number"
                              min="0"
                              value={investments || ''}
                              onChange={(e) => setInvestments(parseFloat(e.target.value) || 0)}
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="otherAssets">Other Assets ($)</Label>
                            <Input
                              id="otherAssets"
                              type="number"
                              min="0"
                              value={otherAssets || ''}
                              onChange={(e) => setOtherAssets(parseFloat(e.target.value) || 0)}
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium mb-4">Liabilities</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="loans">Loans & Debts ($)</Label>
                            <Input
                              id="loans"
                              type="number"
                              min="0"
                              value={loans || ''}
                              onChange={(e) => setLoans(parseFloat(e.target.value) || 0)}
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="taxes">Taxes Due ($)</Label>
                            <Input
                              id="taxes"
                              type="number"
                              min="0"
                              value={taxes || ''}
                              onChange={(e) => setTaxes(parseFloat(e.target.value) || 0)}
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="otherLiabilities">Other Liabilities ($)</Label>
                            <Input
                              id="otherLiabilities"
                              type="number"
                              min="0"
                              value={otherLiabilities || ''}
                              onChange={(e) => setOtherLiabilities(parseFloat(e.target.value) || 0)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col">
                    <Button 
                      onClick={calculateZakat} 
                      className="w-full mb-4 bg-islamic-teal hover:bg-islamic-teal/90"
                    >
                      Calculate Zakat
                    </Button>
                    
                    {zakatAmount !== null && (
                      <div className="border border-islamic-teal/20 rounded-lg p-4 w-full bg-islamic-teal/5">
                        <div className="text-center">
                          <h4 className="text-lg font-medium mb-2">Your Zakat Amount</h4>
                          <p className="text-3xl font-bold text-islamic-teal">${zakatAmount.toFixed(2)}</p>
                          
                          <div className="mt-4">
                            <Button 
                              variant="outline"
                              className="mr-2"
                              onClick={() => {
                                // Reset all values
                                setCashInHand(0);
                                setBankDeposits(0);
                                setGoldSilver(0);
                                setInvestments(0);
                                setOtherAssets(0);
                                setLoans(0);
                                setTaxes(0);
                                setOtherLiabilities(0);
                                setZakatAmount(null);
                              }}
                            >
                              Reset
                            </Button>
                            <Button className="bg-islamic-teal hover:bg-islamic-teal/90">
                              Pay Zakat Now
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardFooter>
                </Card>
              </TabsContent>
              
              <TabsContent value="guide" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Understanding Zakat</CardTitle>
                    <CardDescription>
                      Learn about Zakat, one of the five pillars of Islam, and how to correctly calculate it.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2">What is Zakat?</h3>
                      <p className="text-islamic-charcoal/80">
                        Zakat is an obligatory form of almsgiving in Islam, considered one of the five pillars of the faith. 
                        It is a form of worship through wealth and purification for the soul. Muslims who meet the criteria 
                        of wealth (nisab) are required to pay 2.5% of their qualifying wealth annually.
                      </p>
                    </div>
                    
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Who must pay Zakat?</AccordionTrigger>
                        <AccordionContent>
                          Zakat is obligatory on every adult Muslim who possesses wealth equal to or exceeding the nisab 
                          (minimum threshold) for one lunar year. The nisab is equivalent to the value of 85 grams of gold 
                          or 595 grams of silver.
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-2">
                        <AccordionTrigger>What assets are subject to Zakat?</AccordionTrigger>
                        <AccordionContent>
                          <ul className="list-disc pl-6 space-y-1">
                            <li>Cash and savings</li>
                            <li>Gold, silver and precious metals</li>
                            <li>Stocks and investments</li>
                            <li>Business inventory</li>
                            <li>Rental properties (the rental income)</li>
                            <li>Agricultural produce (with different rates)</li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-3">
                        <AccordionTrigger>What assets are exempt from Zakat?</AccordionTrigger>
                        <AccordionContent>
                          <ul className="list-disc pl-6 space-y-1">
                            <li>Primary residence</li>
                            <li>Vehicles for personal use</li>
                            <li>Household furniture and items</li>
                            <li>Clothes and personal effects</li>
                            <li>Tools of your trade or profession</li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-4">
                        <AccordionTrigger>Who can receive Zakat?</AccordionTrigger>
                        <AccordionContent>
                          The Quran (9:60) specifically mentions eight categories of people eligible to receive Zakat:
                          <ol className="list-decimal pl-6 space-y-1 mt-2">
                            <li>The poor (Al-Fuqarā')</li>
                            <li>The needy (Al-Masākīn)</li>
                            <li>Zakat administrators</li>
                            <li>Those whose hearts are to be reconciled</li>
                            <li>Those in bondage (slaves and captives)</li>
                            <li>The debt-ridden</li>
                            <li>In the cause of Allah (Fi Sabilillah)</li>
                            <li>The wayfarer</li>
                          </ol>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    
                    <div className="bg-islamic-teal/10 p-4 rounded-lg border border-islamic-teal/20">
                      <h4 className="font-medium mb-2">Need More Guidance?</h4>
                      <p className="text-sm mb-3">
                        If you're unsure about your Zakat calculation or have specific questions, our scholars are 
                        available to help you fulfill this important obligation correctly.
                      </p>
                      <Button variant="outline" className="w-full">Consult a Scholar</Button>
                    </div>
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

export default ZakatCalculator;
