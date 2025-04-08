import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hasScrolled ? "bg-white shadow-sm py-3" : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-black rounded-md flex items-center justify-center">
                <span className="text-white font-bold">MA</span>
              </div>
              <span className="text-lg sm:text-xl font-bold">Masaic AI Platform</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <a href="#features" className="text-sm hover:text-gray-800 transition-colors">Features</a>
            <a href="#integration" className="text-sm hover:text-gray-800 transition-colors">Integration</a>
            <a href="#security" className="text-sm hover:text-gray-800 transition-colors">Security</a>
            <a href="#about" className="text-sm hover:text-gray-800 transition-colors">About</a>
            <a href="https://openresponses.masaic.ai/faq" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-gray-800 transition-colors">FAQ</a>
            <a href="https://openresponses.masaic.ai/quickstart" target="_blank" rel="noopener noreferrer" className="ml-2 lg:ml-4">
              <Button className="bg-mosaic-primary hover:bg-mosaic-primary/90 text-white">Get Started</Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ paddingTop: "env(safe-area-inset-top)" }}
      >
        <div className="flex justify-end p-4">
          <button
            className="text-gray-800 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-6 flex flex-col gap-5">
          <a href="/" className="flex items-center mb-8" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-black rounded-md flex items-center justify-center">
                <span className="text-white font-bold">MA</span>
              </div>
              <span className="text-xl font-bold">Masaic AI Platform</span>
            </div>
          </a>
          
          <a 
            href="#features" 
            className="text-xl font-medium py-2 border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#integration" 
            className="text-xl font-medium py-2 border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Integration
          </a>
          <a 
            href="#security" 
            className="text-xl font-medium py-2 border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Security
          </a>
          <a 
            href="#about" 
            className="text-xl font-medium py-2 border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="https://openresponses.masaic.ai/faq" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-xl font-medium py-2 border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            FAQ
          </a>
          
          <div className="mt-6">
            <a 
              href="https://openresponses.masaic.ai/quickstart" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Button className="bg-mosaic-primary hover:bg-mosaic-primary/90 text-white w-full py-6">
                Get Started
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
