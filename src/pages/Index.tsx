
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import FeaturedProjects from '../components/home/FeaturedProjects';
import HowItWorks from '../components/home/HowItWorks';
import ImpactStats from '../components/home/ImpactStats';
import Testimonials from '../components/home/Testimonials';
import Newsletter from '../components/home/Newsletter';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedProjects />
      <HowItWorks />
      <ImpactStats />
      <Testimonials />
      <Newsletter />
    </Layout>
  );
};

export default Index;
