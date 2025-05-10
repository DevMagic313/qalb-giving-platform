
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BookOpen, User } from 'lucide-react';

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
            <Link to="/zakat" className="font-medium hover:text-islamic-teal transition-colors">Zakat Calculator</Link>
            <Link to="/contact" className="font-medium hover:text-islamic-teal transition-colors">Contact</Link>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="flex items-center gap-2">
              <User size={18} />
              <span>Login</span>
            </Button>
            <Button className="bg-islamic-teal hover:bg-islamic-teal/90 text-white flex items-center gap-2">
              <BookOpen size={18} />
              <span className="arabic">تبرع الآن</span> <span className="text-xs">(Donate Now)</span>
            </Button>
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
              <Link 
                to="/zakat"
                className="font-medium p-2 rounded hover:bg-islamic-cream transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Zakat Calculator
              </Link>
              <Link 
                to="/contact"
                className="font-medium p-2 rounded hover:bg-islamic-cream transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t">
                <Button variant="outline" className="w-full justify-start">
                  <User size={18} className="mr-2" />
                  Login
                </Button>
                <Button className="w-full justify-start bg-islamic-teal hover:bg-islamic-teal/90">
                  <BookOpen size={18} className="mr-2" />
                  <span className="arabic">تبرع الآن</span> <span className="text-xs">(Donate Now)</span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
