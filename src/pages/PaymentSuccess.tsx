
import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { CheckCircle2, Share2, Download, Home } from 'lucide-react';
import { projects } from '../data/projectsData';

const PaymentSuccess = () => {
  const location = useLocation();
  const [paymentDetails, setPaymentDetails] = useState({
    amount: 0,
    type: '',
    projectId: null as number | null,
    receiptId: '',
    date: new Date().toISOString()
  });
  
  // Parse URL parameters
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const amount = parseFloat(params.get('amount') || "0");
    const type = params.get('type') || 'general';
    const projectId = params.get('project') ? parseInt(params.get('project') || "0") : null;
    
    // Generate a random receipt ID
    const receiptId = `RCP-${Math.floor(100000 + Math.random() * 900000)}`;
    
    setPaymentDetails({
      amount,
      type,
      projectId,
      receiptId,
      date: new Date().toISOString()
    });
  }, [location]);

  // Get project details if this donation was for a specific project
  const project = paymentDetails.projectId 
    ? projects.find(p => p.id === paymentDetails.projectId)
    : null;
    
  // Helper function to format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };
  
  const handleDownloadReceipt = () => {
    // In a real app, this would generate a PDF receipt
    alert('Receipt download functionality would be implemented here');
  };
  
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'My Donation to Qalb Giving Platform',
        text: `I just donated $${paymentDetails.amount.toFixed(2)} to ${project ? project.title : 'a great cause'} through Qalb Giving Platform. Join me in making a difference!`,
        url: window.location.origin
      });
    } else {
      alert('Sharing functionality not available in your browser');
    }
  };

  return (
    <Layout>
      <div className="bg-islamic-cream py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="h-20 w-20 bg-islamic-teal/10 rounded-full flex items-center justify-center">
                <CheckCircle2 className="h-10 w-10 text-islamic-teal" />
              </div>
            </div>
            
            <h1 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-islamic-charcoal">
              Donation Successful
            </h1>
            
            <p className="text-islamic-charcoal/80 mb-8">
              Thank you for your generosity. Your donation will help make a significant impact.
            </p>
            
            <Card className="mb-8">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-islamic-charcoal/70">Receipt ID:</span>
                    <span className="font-medium">{paymentDetails.receiptId}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-islamic-charcoal/70">Date:</span>
                    <span>{formatDate(paymentDetails.date)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-islamic-charcoal/70">Amount:</span>
                    <span className="text-xl font-bold text-islamic-teal">
                      ${paymentDetails.amount.toFixed(2)}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-islamic-charcoal/70">Type:</span>
                    <span className="capitalize font-medium">{paymentDetails.type}</span>
                  </div>
                  
                  {project && (
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-islamic-charcoal/70">Project:</span>
                      <span>{project.title}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between items-center py-2">
                    <span className="text-islamic-charcoal/70">Payment Method:</span>
                    <span>••••••••••••4242</span>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="flex gap-4 pt-4 justify-end">
                <Button variant="outline" className="flex items-center gap-2" onClick={handleDownloadReceipt}>
                  <Download size={16} />
                  Receipt
                </Button>
                <Button variant="outline" className="flex items-center gap-2" onClick={handleShare}>
                  <Share2 size={16} />
                  Share
                </Button>
              </CardFooter>
            </Card>
            
            <div>
              <div className="arabic text-islamic-teal text-lg mb-2">
                مَّن ذَا الَّذِي يُقْرِضُ اللَّهَ قَرْضًا حَسَنًا فَيُضَاعِفَهُ لَهُ أَضْعَافًا كَثِيرَةً
              </div>
              <p className="text-sm italic text-islamic-charcoal/70 mb-8">
                "Who is it that would loan Allah a goodly loan so He may multiply it for him many times over." - Quran 2:245
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-islamic-teal hover:bg-islamic-teal/90">
                <Link to="/" className="flex items-center gap-2">
                  <Home size={16} />
                  Return Home
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/projects">Explore More Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PaymentSuccess;
