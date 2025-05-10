
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const PaymentSuccess = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="bg-islamic-cream py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="border-islamic-teal/20">
              <CardHeader>
                <div className="mx-auto mb-4">
                  <CheckCircle className="h-16 w-16 text-islamic-teal" />
                </div>
                <CardTitle className="text-3xl">Thank You for Your Donation!</CardTitle>
                <CardDescription>Your generous contribution will help make a difference</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-islamic-charcoal">
                  Your donation has been successfully processed. A receipt has been sent to your email address.
                </p>
                
                <div className="p-4 bg-islamic-teal/5 rounded-md my-6">
                  <div className="arabic text-islamic-teal text-lg my-4 text-center">
                    مَن ذَا الَّذِي يُقْرِضُ اللَّهَ قَرْضًا حَسَنًا فَيُضَاعِفَهُ لَهُ أَضْعَافًا كَثِيرَةً
                  </div>
                  <p className="text-center text-sm italic text-islamic-charcoal/70">
                    "Who is it that would loan Allah a goodly loan so He may multiply it for him many times over?" - Quran 2:245
                  </p>
                </div>
                
                <p className="text-islamic-charcoal">
                  Your contribution will help us continue our mission to provide assistance to those in need. 
                  We will keep you updated on the progress of the project you've supported.
                </p>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="outline">
                  <Link to="/projects">View More Projects</Link>
                </Button>
                <Button asChild className="bg-islamic-teal hover:bg-islamic-teal/90">
                  <Link to="/">Return to Homepage</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PaymentSuccess;
