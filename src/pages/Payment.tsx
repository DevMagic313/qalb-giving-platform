
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import { CreditCard, CheckCircle2, AlertCircle } from 'lucide-react';
import { projects } from '../data/projectsData';

// Define our payment form schema with validation rules
const paymentFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  cardNumber: z.string().regex(/^[0-9]{16}$/, "Card number must be 16 digits"),
  expiryDate: z.string().regex(/^(0[1-9]|1[0-2])\/[0-9]{2}$/, "Expiry date must be in format MM/YY"),
  cvv: z.string().regex(/^[0-9]{3,4}$/, "CVV must be 3 or 4 digits"),
  paymentMethod: z.enum(["credit", "paypal", "bank"]),
  savePaymentInfo: z.boolean().optional(),
  agreeToTerms: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms and conditions"
  })
});

type PaymentFormValues = z.infer<typeof paymentFormSchema>;

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({
    amount: 0,
    type: '',
    projectId: null as number | null
  });
  
  // Initialize form with react-hook-form and zod validation
  const form = useForm<PaymentFormValues>({
    resolver: zodResolver(paymentFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      paymentMethod: "credit",
      savePaymentInfo: false,
      agreeToTerms: false
    }
  });
  
  // Parse URL parameters
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const amount = parseFloat(params.get('amount') || "0");
    const type = params.get('type') || 'general';
    const projectId = params.get('project') ? parseInt(params.get('project') || "0") : null;
    
    setPaymentDetails({
      amount,
      type,
      projectId
    });
    
    // If no amount or it's invalid, redirect back
    if (!amount || amount <= 0) {
      toast.error("Invalid donation amount", {
        description: "Please select a valid donation amount"
      });
      navigate('/donate');
    }
  }, [location, navigate]);

  // Get project details if this donation is for a specific project
  const project = paymentDetails.projectId 
    ? projects.find(p => p.id === paymentDetails.projectId)
    : null;
    
  const formatCardNumber = (value: string) => {
    return value
      .replace(/\s/g, '')
      .replace(/\D/g, '')
      .slice(0, 16);
  };
  
  const formatExpiryDate = (value: string) => {
    const cleanValue = value.replace(/\D/g, '').slice(0, 4);
    if (cleanValue.length > 2) {
      return `${cleanValue.slice(0, 2)}/${cleanValue.slice(2)}`;
    }
    return cleanValue;
  };

  const handlePayment = (data: PaymentFormValues) => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      // In a real app, you would make an API call to process the payment
      // and then handle the response accordingly
      
      // For now, we'll just simulate a successful payment
      setIsProcessing(false);
      
      // Navigate to success page with donation details
      navigate(`/payment-success?amount=${paymentDetails.amount}&type=${paymentDetails.type}${
        paymentDetails.projectId ? `&project=${paymentDetails.projectId}` : ''
      }`);
      
      // Show success toast
      toast.success("Payment successful!", {
        description: `Thank you for your ${paymentDetails.type} donation of $${paymentDetails.amount.toFixed(2)}`
      });
    }, 2000);
  };

  return (
    <Layout>
      <div className="bg-islamic-cream py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-playfair text-3xl font-bold mb-6 text-center text-islamic-charcoal">
              Complete Your Donation
            </h1>

            {project && (
              <Card className="mb-6 bg-islamic-teal/5 border-islamic-teal/20">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="h-full w-full object-cover" 
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">{project.title}</h3>
                      <p className="text-sm text-islamic-charcoal/70">{project.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            <Card>
              <CardHeader>
                <CardTitle>Payment Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6 p-4 bg-islamic-teal/5 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="text-islamic-charcoal/80">Donation Amount:</span>
                    <span className="font-semibold">${paymentDetails.amount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-islamic-charcoal/80">Donation Type:</span>
                    <span className="font-semibold capitalize">{paymentDetails.type}</span>
                  </div>
                </div>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(handlePayment)} className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="font-medium">Personal Information</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>First Name</FormLabel>
                              <FormControl>
                                <Input placeholder="John" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Last Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="john.doe@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="space-y-4 pt-4 border-t">
                      <h3 className="font-medium">Payment Method</h3>
                      
                      <FormField
                        control={form.control}
                        name="paymentMethod"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="space-y-3"
                              >
                                <div className="flex items-center space-x-2 border rounded-md p-3 hover:bg-islamic-teal/5 cursor-pointer">
                                  <RadioGroupItem value="credit" id="credit" />
                                  <Label htmlFor="credit" className="cursor-pointer flex items-center gap-2 w-full">
                                    <CreditCard size={18} />
                                    Credit/Debit Card
                                  </Label>
                                </div>
                                <div className="flex items-center space-x-2 border rounded-md p-3 hover:bg-islamic-teal/5 cursor-pointer">
                                  <RadioGroupItem value="paypal" id="paypal" />
                                  <Label htmlFor="paypal" className="cursor-pointer flex items-center gap-2 w-full">
                                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                      <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 3.384a.64.64 0 0 1 .632-.537h6.659c2.837 0 4.81 1.395 4.81 4.541 0 .901-.187 1.958-.715 3.3-.868 2.222-2.685 3.495-5.184 3.495h-2.35c-.436 0-.817.288-.944.713l-1.22 6.172a.639.639 0 0 1-.632.536l.076-.267zm2.595-10.947h1.509c1.434 0 2.292-.551 2.69-2.094.102-.396.168-.776.168-1.068 0-.99-.557-1.486-1.725-1.486H10.66l-.989 4.648z" />
                                      <path d="M22.8 8.743c0 .902-.186 1.958-.714 3.3-.868 2.222-2.685 3.495-5.184 3.495h-2.35c-.436 0-.818.288-.944.713l-1.22 6.172a.64.64 0 0 1-.632.536h-4.5a.641.641 0 0 1-.633-.74l.273-1.367 1.017-5.099a1.41 1.41 0 0 1 1.371-1.095h2.8c3.039 0 5.519-1.673 6.266-4.218.609-2.086.378-3.106-.52-4.035-.266-.277-.6-.494-.99-.649 1.891.462 2.967 1.805 2.967 3.987z" />
                                    </svg>
                                    PayPal
                                  </Label>
                                </div>
                                <div className="flex items-center space-x-2 border rounded-md p-3 hover:bg-islamic-teal/5 cursor-pointer">
                                  <RadioGroupItem value="bank" id="bank" />
                                  <Label htmlFor="bank" className="cursor-pointer flex items-center gap-2 w-full">
                                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                                    </svg>
                                    Bank Transfer
                                  </Label>
                                </div>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      {form.watch("paymentMethod") === "credit" && (
                        <div className="space-y-4">
                          <FormField
                            control={form.control}
                            name="cardNumber"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Card Number</FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="1234 5678 9012 3456" 
                                    {...field}
                                    onChange={e => field.onChange(formatCardNumber(e.target.value))}
                                    maxLength={16}
                                  />
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
                                  <FormLabel>Expiry Date</FormLabel>
                                  <FormControl>
                                    <Input 
                                      placeholder="MM/YY" 
                                      {...field}
                                      onChange={e => field.onChange(formatExpiryDate(e.target.value))}
                                      maxLength={5}
                                    />
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
                                    <Input 
                                      placeholder="123" 
                                      type="password" 
                                      {...field}
                                      onChange={e => field.onChange(e.target.value.replace(/\D/g, '').slice(0, 4))}
                                      maxLength={4}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          
                          <FormField
                            control={form.control}
                            name="savePaymentInfo"
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
                                    Save my payment information for future donations
                                  </FormLabel>
                                </div>
                              </FormItem>
                            )}
                          />
                        </div>
                      )}
                      
                      {form.watch("paymentMethod") === "paypal" && (
                        <div className="bg-blue-50 p-4 rounded-md text-center">
                          <p className="text-sm">
                            You will be redirected to PayPal to complete your donation after submitting this form.
                          </p>
                        </div>
                      )}
                      
                      {form.watch("paymentMethod") === "bank" && (
                        <div className="bg-gray-50 p-4 rounded-md">
                          <p className="text-sm mb-2">
                            Bank transfer details will be provided after submitting this form.
                          </p>
                          <p className="text-sm">
                            Please note that bank transfers may take 1-3 business days to process.
                          </p>
                        </div>
                      )}
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="agreeToTerms"
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
                              I agree to the <a href="/terms" className="text-islamic-teal underline">terms and conditions</a> and <a href="/privacy" className="text-islamic-teal underline">privacy policy</a>
                            </FormLabel>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />
                    
                    <div className="pt-4">
                      <Button 
                        type="submit" 
                        className="w-full bg-islamic-teal hover:bg-islamic-teal/90"
                        disabled={isProcessing}
                      >
                        {isProcessing ? (
                          <span className="flex items-center gap-2">
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </span>
                        ) : (
                          `Complete ${paymentDetails.type} Donation ($${paymentDetails.amount.toFixed(2)})`
                        )}
                      </Button>
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

export default Payment;
