import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-gray-800 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-white tracking-tighter flex items-center gap-1">
          supplify<span className="w-2 h-2 rounded-full bg-brand-blue mt-2"></span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">Home</a>
          <a href="#features" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">Features</a>
          <a href="#demo" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">Demo</a>
          <a href="#pricing" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">Pricing</a>
          <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-brand-blue transition-colors">
            Get App
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-brand-black border-b border-gray-800 md:hidden p-6 flex flex-col gap-4 animate-fade-in">
            <a href="#" className="text-gray-300 hover:text-white py-2" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#features" className="text-gray-300 hover:text-white py-2" onClick={() => setIsMenuOpen(false)}>Features</a>
            <a href="#demo" className="text-gray-300 hover:text-white py-2" onClick={() => setIsMenuOpen(false)}>Demo</a>
            <a href="#pricing" className="text-gray-300 hover:text-white py-2" onClick={() => setIsMenuOpen(false)}>Pricing</a>
            <button className="bg-brand-blue text-black px-5 py-3 rounded-lg text-sm font-bold w-full">
              Get App
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;