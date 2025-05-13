
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <Layout>
      <div className="bg-islamic-cream py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-islamic-charcoal text-center">
              Frequently Asked Questions
            </h1>
            <p className="text-islamic-charcoal/80 text-center mb-12">
              Find answers to common questions about Qalb Giving Platform, donations, and Zakat.
            </p>

            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-lg shadow-sm border border-gray-100">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                  How do I know my donation is being used properly?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="mb-4">
                    We maintain full transparency with all donations. Each project has detailed reporting that shows:
                  </p>
                  <ul className="list-disc pl-5 mb-4 space-y-1">
                    <li>Real-time updates on fund usage</li>
                    <li>Photos and videos of project implementation</li>
                    <li>Testimonials from beneficiaries</li>
                    <li>Detailed financial breakdowns</li>
                  </ul>
                  <p>
                    Additionally, our annual reports are available to the public. You can learn more on our{' '}
                    <Link to="/about" className="text-islamic-teal hover:underline">About page</Link>.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-lg shadow-sm border border-gray-100">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                  Is my donation Zakat-eligible?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="mb-4">
                    Yes, we have projects that are specifically Zakat-eligible. When donating, you can select whether 
                    you want your contribution to be allocated as Zakat or Sadaqah.
                  </p>
                  <p>
                    Our{' '}
                    <Link to="/zakat" className="text-islamic-teal hover:underline">Zakat Calculator</Link>{' '}
                    can help you determine the amount of Zakat you owe. If you have specific questions about 
                    Zakat eligibility, please{' '}
                    <Link to="/contact" className="text-islamic-teal hover:underline">contact us</Link>.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-lg shadow-sm border border-gray-100">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                  Can I receive updates about my donation?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="mb-4">
                    Yes! When you make a donation, you can opt to receive updates about the project you've 
                    contributed to. These updates include:
                  </p>
                  <ul className="list-disc pl-5 mb-4 space-y-1">
                    <li>Progress reports</li>
                    <li>Milestones achieved</li>
                    <li>Impact stories</li>
                    <li>Photos from the field</li>
                  </ul>
                  <p>
                    You need to be{' '}
                    <Link to="/login" className="text-islamic-teal hover:underline">logged in</Link>{' '}
                    to receive these updates. If you're having trouble with your account, please visit our{' '}
                    <Link to="/contact" className="text-islamic-teal hover:underline">Contact page</Link>.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-lg shadow-sm border border-gray-100">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                  How do I get a tax receipt for my donation?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p>
                    Tax receipts are automatically emailed to you after your donation is processed. If you didn't 
                    receive your receipt or need a duplicate copy, please{' '}
                    <Link to="/login" className="text-islamic-teal hover:underline">log into your account</Link>{' '}
                    to access your donation history or{' '}
                    <Link to="/contact" className="text-islamic-teal hover:underline">contact our support team</Link>{' '}
                    for assistance.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-lg shadow-sm border border-gray-100">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                  Can I sponsor a specific orphan or family?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="mb-4">
                    Yes, we offer sponsorship programs for orphans and families in need. Through these programs, you can:
                  </p>
                  <ul className="list-disc pl-5 mb-4 space-y-1">
                    <li>Provide monthly support</li>
                    <li>Receive updates about those you sponsor</li>
                    <li>Exchange letters (where appropriate)</li>
                    <li>Make a lasting impact in someone's life</li>
                  </ul>
                  <p>
                    Visit our{' '}
                    <Link to="/projects/orphan" className="text-islamic-teal hover:underline">Orphan Sponsorship page</Link>{' '}
                    to learn more about this program.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white rounded-lg shadow-sm border border-gray-100">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                  What is the difference between Sadaqah and Zakat?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="mb-4">
                    <strong>Zakat</strong> is the obligatory charity that every eligible Muslim must pay annually, 
                    typically 2.5% of wealth held for a full lunar year. It must be distributed to specific 
                    categories of recipients as outlined in the Quran.
                  </p>
                  <p className="mb-4">
                    <strong>Sadaqah</strong> is voluntary charity that can be given at any time, in any amount, 
                    to anyone in need. There are no specific rules regarding who can receive Sadaqah.
                  </p>
                  <p>
                    Use our{' '}
                    <Link to="/zakat" className="text-islamic-teal hover:underline">Zakat Calculator</Link>{' '}
                    to determine your Zakat obligation or{' '}
                    <Link to="/contact" className="text-islamic-teal hover:underline">contact us</Link>{' '}
                    if you have more questions.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="mt-12 text-center">
              <p className="mb-4">Can't find what you're looking for?</p>
              <Link 
                to="/contact" 
                className="inline-block bg-islamic-teal hover:bg-islamic-teal/90 text-white px-6 py-3 rounded-md transition-colors"
              >
                Contact Our Support Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FAQ;
