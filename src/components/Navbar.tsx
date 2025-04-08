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
        hasScrolled ? "bg-white shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-black rounded-md flex items-center justify-center">
                <span className="text-white font-bold">MA</span>
              </div>
              <span className="text-xl font-bold">Masaic AI Platform</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm hover:text-gray-800 transition-colors">Features</a>
            <a href="#integration" className="text-sm hover:text-gray-800 transition-colors">Integration</a>
            <a href="#security" className="text-sm hover:text-gray-800 transition-colors">Security</a>
            <a href="#about" className="text-sm hover:text-gray-800 transition-colors">About</a>
            <a href="https://openresponses.masaic.ai/faq" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-gray-800 transition-colors">FAQ</a>
            <a href="https://openresponses.masaic.ai/quickstart" target="_blank" rel="noopener noreferrer" className="ml-4">
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
      >
        <div className="flex justify-end p-4">
          <button
            className="text-gray-800 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-6">
          <a href="/" className="flex items-center mb-8">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-black rounded-md flex items-center justify-center">
                <span className="text-white font-bold">MA</span>
              </div>
              <span className="text-xl font-bold">Masaic AI Platform</span>
            </div>
          </a>
          <nav className="flex flex-col space-y-4">
            <a
              href="#features"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 hover:text-mosaic-primary"
            >
              Features
            </a>
            <a
              href="#integration"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 hover:text-mosaic-primary"
            >
              Integration
            </a>
            <a
              href="#security"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 hover:text-mosaic-primary"
            >
              Security
            </a>
            <a
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 hover:text-mosaic-primary"
            >
              About
            </a>
            <a
              href="https://openresponses.masaic.ai/faq"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 hover:text-mosaic-primary"
            >
              FAQ
            </a>
            <a
              href="https://openresponses.masaic.ai/quickstart"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4"
            >
              <Button className="w-full bg-mosaic-primary hover:bg-mosaic-primary/90 text-white">
                Get Started
              </Button>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
