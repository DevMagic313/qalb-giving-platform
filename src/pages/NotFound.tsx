
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center bg-islamic-cream pattern-bg">
        <div className="text-center px-4 max-w-xl">
          <div className="mb-6 text-islamic-teal">
            <svg className="w-24 h-24 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-5xl font-bold mb-4 font-playfair">404</h1>
          <p className="text-xl text-islamic-charcoal mb-8">
            We couldn't find the page you're looking for. Perhaps you were guided here by fate, but this path leads nowhere.
          </p>
          <div className="flex justify-center">
            <Button asChild className="bg-islamic-teal hover:bg-islamic-teal/90">
              <Link to="/">Return to Home</Link>
            </Button>
          </div>
          <div className="mt-12 arabic text-center text-islamic-charcoal opacity-70">
            <p className="mb-2">إِنَّا لِلَّٰهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ</p>
            <p className="italic text-sm">Indeed, to Allah we belong and to Him we shall return.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
