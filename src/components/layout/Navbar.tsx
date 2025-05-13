
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BookOpen, User, ChevronDown } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-islamic-teal flex items-center justify-center">
              <span className="text-white font-arabic font-bold text-xl">ق</span>
            </div>
            <div>
              <span className="font-playfair text-xl font-bold text-islamic-teal">Qalb</span>
              <span className="text-xs text-islamic-charcoal block -mt-1">Giving Platform</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="font-medium hover:text-islamic-teal transition-colors">Home</Link>
            <Link to="/projects" className="font-medium hover:text-islamic-teal transition-colors">Projects</Link>
            <Link to="/about" className="font-medium hover:text-islamic-teal transition-colors">About Us</Link>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-medium hover:text-islamic-teal transition-colors bg-transparent">Resources</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            to="/zakat"
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-islamic-cream p-6 no-underline outline-none focus:shadow-md"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium text-islamic-charcoal">
                              Zakat Calculator
                            </div>
                            <p className="text-sm leading-tight text-islamic-charcoal/80">
                              Calculate your annual Zakat obligation with our Sharia-compliant tool.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <Link
                          to="/faq"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-islamic-cream focus:bg-islamic-cream"
                        >
                          <div className="text-sm font-medium leading-none text-islamic-charcoal">FAQ</div>
                          <p className="line-clamp-2 text-sm leading-snug text-islamic-charcoal/70">
                            Find answers to commonly asked questions
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/contact"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-islamic-cream focus:bg-islamic-cream"
                        >
                          <div className="text-sm font-medium leading-none text-islamic-charcoal">Contact Us</div>
                          <p className="line-clamp-2 text-sm leading-snug text-islamic-charcoal/70">
                            Get in touch with our support team
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/terms"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-islamic-cream focus:bg-islamic-cream"
                        >
                          <div className="text-sm font-medium leading-none text-islamic-charcoal">Terms & Privacy</div>
                          <p className="line-clamp-2 text-sm leading-snug text-islamic-charcoal/70">
                            Our terms of service and privacy policies
                          </p>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <Link to="/contact" className="font-medium hover:text-islamic-teal transition-colors">Contact</Link>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link to="/login">
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <User size={18} />
                <span>Login</span>
              </Button>
            </Link>
            <Link to="/donate">
              <Button className="bg-islamic-teal hover:bg-islamic-teal/90 text-white flex items-center gap-2">
                <BookOpen size={18} />
                <span className="arabic">تبرع الآن</span> <span className="text-xs">(Donate Now)</span>
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden flex items-center p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/"
                className="font-medium p-2 rounded hover:bg-islamic-cream transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/projects"
                className="font-medium p-2 rounded hover:bg-islamic-cream transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link 
                to="/about"
                className="font-medium p-2 rounded hover:bg-islamic-cream transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              
              {/* Resources dropdown for mobile */}
              <div className="relative">
                <button 
                  className="flex items-center justify-between w-full font-medium p-2 rounded hover:bg-islamic-cream transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    const submenu = document.getElementById('resources-submenu');
                    if (submenu) {
                      submenu.classList.toggle('hidden');
                    }
                  }}
                >
                  Resources
                  <ChevronDown size={16} />
                </button>
                <div id="resources-submenu" className="hidden pl-4 space-y-2 mt-2">
                  <Link 
                    to="/zakat"
                    className="block p-2 rounded hover:bg-islamic-cream transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Zakat Calculator
                  </Link>
                  <Link 
                    to="/faq"
                    className="block p-2 rounded hover:bg-islamic-cream transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    FAQ
                  </Link>
                  <Link 
                    to="/terms"
                    className="block p-2 rounded hover:bg-islamic-cream transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Terms & Privacy
                  </Link>
                </div>
              </div>
              
              <Link 
                to="/contact"
                className="font-medium p-2 rounded hover:bg-islamic-cream transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t">
                <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full justify-start">
                    <User size={18} className="mr-2" />
                    Login
                  </Button>
                </Link>
                <Link to="/donate" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full justify-start bg-islamic-teal hover:bg-islamic-teal/90">
                    <BookOpen size={18} className="mr-2" />
                    <span className="arabic">تبرع الآن</span> <span className="text-xs">(Donate Now)</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
