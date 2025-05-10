
import Layout from '../components/layout/Layout';
import { Separator } from "@/components/ui/separator";
import { Link } from 'react-router-dom';

const Accessibility = () => {
  return (
    <Layout>
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-playfair text-4xl font-bold mb-8 text-islamic-charcoal">Accessibility Statement</h1>
            
            <div className="prose prose-slate max-w-none">
              <p className="text-islamic-charcoal/80 mb-8">
                Last updated: May 10, 2025
              </p>
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 font-playfair text-islamic-charcoal">Our Commitment to Accessibility</h2>
                <p className="mb-4">
                  Qalb Giving Platform is committed to ensuring digital accessibility for people with disabilities. 
                  We are continually improving the user experience for everyone, and applying the relevant 
                  accessibility standards.
                </p>
              </section>
              
              <Separator className="my-6" />
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 font-playfair text-islamic-charcoal">Compliance Status</h2>
                <p className="mb-4">
                  We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. 
                  These guidelines explain how to make web content more accessible to people with disabilities.
                </p>
                <p>
                  Conformance with these guidelines will help make the web more user-friendly for all people.
                </p>
              </section>
              
              <Separator className="my-6" />
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 font-playfair text-islamic-charcoal">Measures Taken</h2>
                <p className="mb-4">
                  We have taken the following measures to ensure accessibility:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Implemented semantic HTML structure</li>
                  <li>Provided appropriate alternative text for images</li>
                  <li>Ensured sufficient color contrast for text</li>
                  <li>Designed keyboard-accessible navigation</li>
                  <li>Made forms accessible with labels and instructions</li>
                  <li>Ensured content is readable and understandable</li>
                  <li>Provided clear navigation mechanisms</li>
                  <li>Made the site compatible with assistive technologies</li>
                </ul>
              </section>
              
              <Separator className="my-6" />
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 font-playfair text-islamic-charcoal">Accessibility Features</h2>
                <p className="mb-4">
                  Our platform includes the following accessibility features:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Text resizing: You can use your browser's zoom function (usually Ctrl/Cmd + '+' or '-') to increase or decrease text size</li>
                  <li>Keyboard navigation: All functionality is operable through a keyboard interface</li>
                  <li>Screen reader compatibility: Content is structured to work with screen readers</li>
                  <li>Text alternatives: Images have appropriate alternative text</li>
                  <li>Language declaration: The primary language of the page is declared in the HTML</li>
                  <li>Descriptive links: Link text identifies the purpose of each link</li>
                  <li>Clear headings: Content is organized under clear headings and subheadings</li>
                </ul>
              </section>
              
              <Separator className="my-6" />
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 font-playfair text-islamic-charcoal">Technical Specifications</h2>
                <p className="mb-4">
                  Accessibility of our website relies on the following technologies to work:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>HTML</li>
                  <li>WAI-ARIA</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                </ul>
                <p>
                  These technologies are relied upon for conformance with the accessibility standards used.
                </p>
              </section>
              
              <Separator className="my-6" />
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 font-playfair text-islamic-charcoal">Known Limitations</h2>
                <p className="mb-4">
                  Despite our best efforts to ensure accessibility of the Qalb Giving Platform, there may be some limitations. 
                  Below is a description of known limitations, and where appropriate, links to solutions:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Some older PDFs may not be fully accessible. We are working to remediate these documents.</li>
                  <li>Some third-party content may not be fully accessible. We are working with our partners to address these issues.</li>
                  <li>Some interactive maps or data visualizations may have limited accessibility. Alternative formats are provided where possible.</li>
                </ul>
              </section>
              
              <Separator className="my-6" />
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 font-playfair text-islamic-charcoal">Assessment Approach</h2>
                <p className="mb-4">
                  Qalb Giving Platform assesses the accessibility of our website in the following ways:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Self-evaluation using accessibility checkers and tools</li>
                  <li>External evaluation by accessibility experts</li>
                  <li>User testing with people who use assistive technologies</li>
                </ul>
              </section>
              
              <Separator className="my-6" />
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 font-playfair text-islamic-charcoal">Feedback Process</h2>
                <p className="mb-4">
                  We welcome your feedback on the accessibility of the Qalb Giving Platform. Please let us know if you 
                  encounter accessibility barriers on our website:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>Email:</strong> accessibility@qalbgiving.org</li>
                  <li><strong>Phone:</strong> +1 (555) 123-4567</li>
                  <li><strong>Contact form:</strong> <Link to="/contact" className="text-islamic-teal">Contact Us Page</Link></li>
                </ul>
                <p>
                  We try to respond to feedback within 3 business days.
                </p>
              </section>
              
              <Separator className="my-6" />
              
              <section>
                <h2 className="text-2xl font-bold mb-4 font-playfair text-islamic-charcoal">Formal Complaints</h2>
                <p className="mb-4">
                  If you need to file a formal complaint about our accessibility, please contact our Accessibility Officer:
                </p>
                <address className="not-italic mb-4">
                  <div>Accessibility Officer</div>
                  <div>Qalb Giving Platform</div>
                  <div>123 Charity Lane</div>
                  <div>New York, NY 10001</div>
                  <div>United States</div>
                  <div className="mt-2">Email: accessibility@qalbgiving.org</div>
                </address>
                <p>
                  We are committed to addressing accessibility barriers and will respond to your complaint within 10 business days.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Accessibility;
