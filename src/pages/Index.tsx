
import { Suspense, lazy } from 'react';
import Layout from '../components/layout/Layout';
import { Skeleton } from "@/components/ui/skeleton";

// Lazy load components
const Hero = lazy(() => import('../components/home/Hero'));
const FeaturedProjects = lazy(() => import('../components/home/FeaturedProjects'));
const HowItWorks = lazy(() => import('../components/home/HowItWorks'));
const ImpactStats = lazy(() => import('../components/home/ImpactStats'));
const Testimonials = lazy(() => import('../components/home/Testimonials'));
const Newsletter = lazy(() => import('../components/home/Newsletter'));

// Loading fallbacks
const HeroFallback = () => (
  <div className="bg-islamic-teal h-[60vh] w-full flex items-center justify-center">
    <Skeleton className="h-40 w-2/3 bg-islamic-teal/40" />
  </div>
);

const SectionFallback = () => (
  <div className="py-16 w-full">
    <Skeleton className="h-8 w-1/3 mx-auto mb-8" />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      <Skeleton className="h-64 w-full" />
      <Skeleton className="h-64 w-full" />
      <Skeleton className="h-64 w-full" />
    </div>
  </div>
);

const Index = () => {
  return (
    <Layout>
      <Suspense fallback={<HeroFallback />}>
        <Hero />
      </Suspense>
      
      <Suspense fallback={<SectionFallback />}>
        <FeaturedProjects />
      </Suspense>
      
      <Suspense fallback={<SectionFallback />}>
        <HowItWorks />
      </Suspense>
      
      <Suspense fallback={<SectionFallback />}>
        <ImpactStats />
      </Suspense>
      
      <Suspense fallback={<SectionFallback />}>
        <Testimonials />
      </Suspense>
      
      <Suspense fallback={<SectionFallback />}>
        <Newsletter />
      </Suspense>
    </Layout>
  );
};

export default Index;
