
import Layout from '../components/layout/Layout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from 'react';

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const faqs = {
    general: [
      {
        question: "What is Qalb Giving Platform?",
        answer: "Qalb Giving Platform is a Sharia-compliant online donation platform that connects donors with charitable projects worldwide. Our platform focuses on transparency, allowing donors to track the progress and impact of their contributions in real-time."
      },
      {
        question: "Is Qalb a registered charity?",
        answer: "Yes, Qalb Giving Platform is a registered 501(c)(3) non-profit organization in the United States. Donations made through our platform are tax-deductible to the extent allowed by law."
      },
      {
        question: "How is Qalb different from other charity platforms?",
        answer: "Qalb distinguishes itself through several key features: (1) Complete transparency with real-time project tracking, (2) Strict adherence to Islamic principles of charity, (3) Direct connection between donors and projects, (4) Low overhead costs with at least 90% of donations going directly to projects, and (5) Regular updates with photos, videos, and impact reports from the field."
      },
      {
        question: "What does 'Qalb' mean?",
        answer: "Qalb (قلب) is an Arabic word meaning 'heart.' We chose this name to represent the heart of giving and compassion that drives charitable actions in the Islamic tradition."
      },
      {
        question: "How can I contact Qalb's team?",
        answer: "You can reach our team through our Contact page, by email at support@qalbgiving.org, or by phone at +1 (555) 123-4567. We aim to respond to all inquiries within 1-2 business days."
      }
    ],
    donations: [
      {
        question: "How can I make a donation?",
        answer: "You can make a donation by clicking the 'Donate Now' button on our website. You'll be able to select a project, choose your donation amount, and complete your payment using credit card, bank transfer, or other available payment methods."
      },
      {
        question: "Are my donations tax-deductible?",
        answer: "Yes, as a registered 501(c)(3) organization, donations to Qalb are tax-deductible for U.S. taxpayers. Donors from other countries should consult their local tax laws regarding charitable deductions. You will receive a tax receipt for your donation."
      },
      {
        question: "What percentage of my donation goes to the projects?",
        answer: "At least 90% of your donation goes directly to the projects. The remaining amount (up to 10%) covers essential administrative costs, maintaining our technology platform, and conducting project verification. You can opt to cover transaction fees separately to ensure 100% of your donation amount goes to your chosen project."
      },
      {
        question: "Can I make recurring donations?",
        answer: "Yes, we offer recurring donation options on a weekly, monthly, quarterly, or annual basis. You can set up a recurring donation during the checkout process and manage or cancel it anytime through your donor account."
      },
      {
        question: "Is there a minimum donation amount?",
        answer: "No, there is no minimum donation amount. We appreciate contributions of any size as every donation makes a difference."
      },
      {
        question: "Can I dedicate my donation to someone?",
        answer: "Yes, you can dedicate your donation in honor or memory of someone. During the donation process, you'll see an option to add a dedication, where you can provide the name of the person you're honoring."
      }
    ],
    projects: [
      {
        question: "How are projects selected for the platform?",
        answer: "Projects undergo a rigorous vetting process before being listed on our platform. We evaluate factors such as community need, sustainability, transparency, adherence to Islamic principles, implementing partner reliability, and measurable impact. Each project is reviewed by our Projects Committee and must meet our strict criteria."
      },
      {
        question: "What types of projects does Qalb support?",
        answer: "Qalb supports a variety of humanitarian and development projects including: water and sanitation, education, healthcare, orphan sponsorship, emergency relief, food security, sustainable livelihoods, and mosque construction. All projects align with Islamic principles and sustainable development goals."
      },
      {
        question: "How do you ensure projects are implemented correctly?",
        answer: "We implement multiple verification measures: (1) Thorough vetting of implementing partners, (2) Regular project milestone reviews with documentation, (3) On-site visits by our staff or trusted representatives, (4) Photo and video evidence of project progress, (5) Financial audits and receipts for all major expenses, and (6) Community feedback and testimonials."
      },
      {
        question: "What happens if a project cannot be completed?",
        answer: "In the rare event that a project cannot be completed as planned (due to security concerns, natural disasters, or other unforeseen circumstances), we follow these steps: (1) Attempt to resolve the issues if possible, (2) If resolution isn't possible, we contact donors with options to either redirect their donation to a similar project or receive a refund, (3) Provide a full explanation of the circumstances and actions taken."
      },
      {
        question: "How long do projects typically take to complete?",
        answer: "Project timelines vary significantly depending on their nature and scope. Small water wells might be completed in 2-3 months, while school construction could take 1-2 years. Each project page provides an estimated timeline, and you'll receive regular updates on progress through your donor dashboard."
      }
    ],
    zakat: [
      {
        question: "What is Zakat?",
        answer: "Zakat is one of the five pillars of Islam and a mandatory charitable contribution for eligible Muslims. It is calculated as 2.5% of one's qualifying wealth held for a full lunar year, provided the wealth exceeds the nisab threshold (minimum amount)."
      },
      {
        question: "How can I calculate my Zakat?",
        answer: "You can use our Zakat Calculator tool to determine your Zakat obligation. The calculator helps you account for your assets (cash, gold, silver, investments) and liabilities to determine the amount due. For complex situations, we recommend consulting with a knowledgeable Islamic scholar."
      },
      {
        question: "Who can receive Zakat?",
        answer: "According to Islamic teachings, Zakat can be distributed to eight categories of recipients as mentioned in the Quran (9:60): the poor, the needy, Zakat administrators, those whose hearts are to be reconciled, those in bondage (captives), those in debt, in the cause of Allah, and travelers in need."
      },
      {
        question: "How does Qalb ensure Zakat compliance?",
        answer: "Qalb adheres to strict Zakat guidelines: (1) We have a dedicated Shariah advisory board that oversees Zakat distribution, (2) Zakat funds are kept in separate accounts and never mixed with general donations, (3) All Zakat is distributed within one lunar year of receipt, (4) Zakat is only given to eligible recipients as defined in Islamic jurisprudence, and (5) We provide detailed reports on how Zakat funds are utilized."
      },
      {
        question: "Can I specify which project my Zakat goes to?",
        answer: "Yes, you can specify which Zakat-eligible project you'd like your funds to support. We clearly mark which projects are Zakat-eligible on our platform. If you don't specify a project, we will allocate your Zakat to the areas of greatest need among eligible recipients."
      },
      {
        question: "When should I pay my Zakat?",
        answer: "Zakat becomes due once your wealth has reached the nisab threshold and has been in your possession for one lunar year (hawl). Many Muslims choose to pay during Ramadan when rewards for good deeds are multiplied, but you can pay it whenever your Zakat anniversary occurs."
      }
    ],
    account: [
      {
        question: "How do I create an account?",
        answer: "You can create an account by clicking the 'Login' button at the top of our website and then selecting 'Register'. You'll need to provide your name, email address, and create a password. Alternatively, you can register during your first donation process."
      },
      {
        question: "What are the benefits of creating an account?",
        answer: "Creating an account allows you to: (1) Track the progress of projects you've donated to, (2) Access your donation history and tax receipts, (3) Set up and manage recurring donations, (4) Save your payment information securely for faster checkout, and (5) Receive personalized impact reports and updates."
      },
      {
        question: "How do I reset my password?",
        answer: "To reset your password, click 'Login', then select 'Forgot password?'. Enter the email address associated with your account, and we'll send you a link to create a new password. If you don't receive the email, please check your spam folder or contact our support team."
      },
      {
        question: "Can I delete my account?",
        answer: "Yes, you can request to delete your account by contacting our support team at support@qalbgiving.org. Please note that while personal information will be removed, we are required to maintain certain donation records for tax and legal purposes."
      },
      {
        question: "Is my personal information secure?",
        answer: "Yes, we take data security very seriously. We use industry-standard encryption and security measures to protect your personal information. We never store complete credit card details on our servers. For more details, please review our Privacy Policy."
      }
    ]
  };
  
  // Function to filter FAQs based on search query
  const filterFaqs = () => {
    const result = {};
    if (!searchQuery.trim()) return faqs;
    
    Object.keys(faqs).forEach(category => {
      const filteredItems = faqs[category].filter(item => 
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.answer.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      if (filteredItems.length > 0) {
        result[category] = filteredItems;
      }
    });
    
    return result;
  };
  
  const filteredFaqs = filterFaqs();
  const hasResults = Object.keys(filteredFaqs).some(category => filteredFaqs[category].length > 0);

  return (
    <Layout>
      <div className="bg-islamic-cream py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-islamic-charcoal">Frequently Asked Questions</h1>
            <p className="text-islamic-charcoal/80 max-w-3xl mx-auto">
              Find answers to common questions about our platform, donation process, and charitable projects. 
              If you can't find what you're looking for, please contact us.
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-10">
            <div className="flex items-center gap-2">
              <Input
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white"
              />
              {searchQuery && (
                <Button 
                  variant="ghost" 
                  onClick={() => setSearchQuery('')}
                  className="flex-shrink-0"
                >
                  Clear
                </Button>
              )}
            </div>
          </div>
          
          {/* FAQ Tabs */}
          <div className="max-w-3xl mx-auto">
            {hasResults ? (
              <Tabs defaultValue="general" className="w-full">
                <TabsList className="flex flex-wrap justify-center mb-6">
                  {Object.keys(filteredFaqs).map(category => 
                    filteredFaqs[category].length > 0 ? (
                      <TabsTrigger key={category} value={category}>
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </TabsTrigger>
                    ) : null
                  )}
                </TabsList>
                
                {Object.keys(filteredFaqs).map(category => (
                  <TabsContent key={category} value={category}>
                    <div className="bg-white rounded-lg shadow p-6">
                      <Accordion type="single" collapsible className="w-full">
                        {filteredFaqs[category].map((item, index) => (
                          <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left text-lg font-medium text-islamic-charcoal hover:text-islamic-teal">
                              {item.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-islamic-charcoal/80 pt-2 pb-4">
                              {item.answer}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            ) : (
              <div className="text-center py-8 bg-white rounded-lg shadow">
                <svg className="mx-auto h-12 w-12 text-islamic-teal/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="mt-4 text-lg font-medium text-islamic-charcoal">No results found</h3>
                <p className="mt-2 text-islamic-charcoal/70">
                  We couldn't find any FAQs matching your search. Please try different keywords or browse our categories.
                </p>
                <Button 
                  className="mt-4 bg-islamic-teal hover:bg-islamic-teal/90"
                  onClick={() => setSearchQuery('')}
                >
                  View All FAQs
                </Button>
              </div>
            )}
          </div>
          
          {/* Still Have Questions */}
          <div className="mt-16 text-center">
            <h2 className="font-playfair text-2xl font-bold mb-4 text-islamic-charcoal">Still Have Questions?</h2>
            <p className="text-islamic-charcoal/80 max-w-2xl mx-auto mb-6">
              Can't find the answer you're looking for? Please contact our support team for assistance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-islamic-teal hover:bg-islamic-teal/90">
                <a href="/contact">Contact Us</a>
              </Button>
              <Button variant="outline">
                <a href="mailto:support@qalbgiving.org">Email Support</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FAQ;
