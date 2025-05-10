
import { useState } from 'react';
import Layout from '../components/layout/Layout';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { CreditCard, DollarSign } from "lucide-react";
import { projects } from '../data/projectsData';

const paymentFormSchema = z.object({
  cardName: z.string().min(2, { message: "Name on card is required" }),
  cardNumber: z.string().regex(/^\d{16}$/, { message: "Please enter a valid 16-digit card number" }),
  expiryDate: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, { message: "Please use format MM/YY" }),
  cvv: z.string().regex(/^\d{3,4}$/, { message: "CVV must be 3 or 4 digits" }),
  saveCard: z.boolean().optional(),
  agreeTerms: z.boolean().refine(val => val === true, { message: "You must agree to the terms" })
});

type PaymentFormValues = z.infer<typeof paymentFormSchema>;

const PaymentForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const projectId = searchParams.get('project');
  const amount = searchParams.get('amount');
  const donationType = searchParams.get('type') || 'sadaqah';
  
  const project = projectId ? projects.find(p => p.id === parseInt(projectId)) : null;

  const form = useForm<PaymentFormValues>({
    resolver: zodResolver(paymentFormSchema),
    defaultValues: {
      cardName: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      saveCard: false,
      agreeTerms: false,
    },
  });

  const onSubmit = async (values: PaymentFormValues) => {
    setIsSubmitting(true);
    
    // In a real application, this would communicate with your payment processor
    // For this demo, we'll simulate a successful payment after a delay
    setTimeout(() => {
      toast({
        title: "Payment Successful",
        description: `Thank you for your ${donationType} donation of $${amount}`,
        variant: "default",
      });

      setIsSubmitting(false);
      // Navigate to a thank you page
      navigate('/payment-success');
    }, 2000);
  };

  return (
    <Layout>
      <div className="bg-islamic-cream py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="font-playfair text-4xl font-bold mb-4 text-islamic-charcoal">Complete Your Donation</h1>
              <p className="text-islamic-charcoal/80">
                Your generosity helps us make a difference. Please complete your payment details below.
              </p>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Payment Details</CardTitle>
                <CardDescription>
                  Secure payment processing for your {donationType} donation
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Donation Summary */}
                <div className="mb-6 p-4 bg-islamic-teal/5 rounded-md">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium text-lg">Donation Summary</h3>
                      {project && (
                        <p className="text-islamic-charcoal/70 text-sm">
                          {project.title}
                        </p>
                      )}
                      <p className="text-islamic-charcoal/70 text-sm">
                        {donationType.charAt(0).toUpperCase() + donationType.slice(1)}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-2xl text-islamic-teal flex items-center">
                        <DollarSign className="h-5 w-5" />
                        {amount}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Payment Form */}
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-4">
                      <FormField
                        control={form.control}
                        name="cardName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name on Card</FormLabel>
                            <FormControl>
                              <Input placeholder="John Smith" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="cardNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Card Number</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-islamic-charcoal/50" />
                                <Input placeholder="1234 5678 9012 3456" className="pl-10" {...field} />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="expiryDate"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Expiration Date</FormLabel>
                              <FormControl>
                                <Input placeholder="MM/YY" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="cvv"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>CVV</FormLabel>
                              <FormControl>
                                <Input type="password" placeholder="123" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                    
                    {/* Save Card */}
                    <FormField
                      control={form.control}
                      name="saveCard"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-4 bg-islamic-cream/50">
                          <FormControl>
                            <Checkbox 
                              checked={field.value} 
                              onCheckedChange={field.onChange} 
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              Save card for future donations
                            </FormLabel>
                            <p className="text-sm text-islamic-charcoal/70">
                              Your payment information will be securely stored for future donations.
                            </p>
                          </div>
                        </FormItem>
                      )}
                    />
                    
                    {/* Terms Agreement */}
                    <FormField
                      control={form.control}
                      name="agreeTerms"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox 
                              checked={field.value} 
                              onCheckedChange={field.onChange} 
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              I agree to the terms and conditions
                            </FormLabel>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div>
                      <Button 
                        type="submit" 
                        className="w-full bg-islamic-teal hover:bg-islamic-teal/90"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Processing..." : "Complete Donation"}
                      </Button>
                    </div>
                    
                    <div className="text-center text-xs text-islamic-charcoal/70">
                      <p>Your payment is secured with industry-standard encryption.</p>
                      <p>All donations are tax-deductible and Sharia-compliant.</p>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PaymentForm;
