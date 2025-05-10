
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, ArrowLeft, HelpCircle } from 'lucide-react';

const PaymentCanceled = () => {
  return (
    <Layout>
      <div className="bg-islamic-cream py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="h-20 w-20 bg-amber-100 rounded-full flex items-center justify-center">
                <AlertCircle className="h-10 w-10 text-amber-500" />
              </div>
            </div>
            
            <h1 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-islamic-charcoal">
              Payment Canceled
            </h1>
            
            <p className="text-islamic-charcoal/80 mb-8">
              Your payment has been canceled and no funds have been deducted from your account.
            </p>
            
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Why was my payment canceled?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-islamic-charcoal/80 mb-6">
                  Your payment may have been canceled due to one of the following reasons:
                </p>
                
                <ul className="space-y-3 text-left list-disc pl-6 mb-6">
                  <li>You manually canceled the payment process</li>
                  <li>There was an issue with your payment method</li>
                  <li>The transaction timed out</li>
                  <li>There was a technical error during processing</li>
                </ul>
                
                <p className="text-islamic-charcoal/70 text-sm">
                  If you did not intend to cancel your donation, please try again or choose a different payment method.
                </p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button asChild variant="outline" className="flex items-center gap-2">
                  <Link to="/contact">
                    <HelpCircle size={16} />
                    Need Help?
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-islamic-teal hover:bg-islamic-teal/90">
                <Link to="/donate" className="flex items-center gap-2">
                  <ArrowLeft size={16} />
                  Return to Donation
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/">Go to Homepage</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PaymentCanceled;
