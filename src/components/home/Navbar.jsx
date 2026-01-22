import React, { useEffect, useState } from 'react';
import { Sun, Moon, Menu, X as XIcon } from 'lucide-react';
import { useDarkMode } from "../../hooks/useDarkMode";

const Navbar = () => {
  const { theme, toggleTheme } = useDarkMode();
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'features', 'pricing', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="w-full border-b sticky top-0 z-50" style={{ 
      backgroundColor: 'var(--bg-primary)', 
      borderColor: 'var(--border-color)' 
    }}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="gap-20 flex items-center">
          <div className="text-2xl font-bold" style={{ color: 'var(--accent-color)' }}>
            FLOWBIT
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#home" 
              onClick={(e) => scrollToSection(e, 'home')}
              className="text-sm font-medium border-b-2 pb-1 transition-all" 
              style={{ 
                color: activeSection === 'home' ? 'var(--accent-color)' : 'var(--text-secondary)', 
                borderColor: activeSection === 'home' ? 'var(--accent-color)' : 'transparent'
              }}
            >
              Home
            </a>
            <a 
              href="#features" 
              onClick={(e) => scrollToSection(e, 'features')}
              className="text-sm font-medium border-b-2 pb-1 transition-all" 
              style={{ 
                color: activeSection === 'features' ? 'var(--accent-color)' : 'var(--text-secondary)', 
                borderColor: activeSection === 'features' ? 'var(--accent-color)' : 'transparent'
              }}
            >
              Features
            </a>
            <a 
              href="#pricing" 
              onClick={(e) => scrollToSection(e, '')}
              className="text-sm font-medium border-b-2 pb-1 transition-all" 
              style={{ 
                color: activeSection === 'pricing' ? 'var(--accent-color)' : 'var(--text-secondary)', 
                borderColor: activeSection === 'pricing' ? 'var(--accent-color)' : 'transparent'
              }}
            >
              Pricing
            </a>
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, 'contact')}
              className="text-sm font-medium border-b-2 pb-1 transition-all" 
              style={{ 
                color: activeSection === 'contact' ? 'var(--accent-color)' : 'var(--text-secondary)', 
                borderColor: activeSection === 'contact' ? 'var(--accent-color)' : 'transparent'
              }}
            >
              Contact
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 flex items-center justify-center rounded-md transition-all hover:opacity-70"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <Sun className="w-5 h-5" style={{ color: 'var(--text-secondary)' }} />
            ) : (
              <Moon className="w-5 h-5" style={{ color: 'var(--text-secondary)' }} />
            )}
          </button>

          <a href="#login" className="hidden md:block text-sm font-medium hover:opacity-80 transition-opacity" style={{ 
            color: 'var(--accent-color)' 
          }}>
            Login
          </a>

          <button
            className="hidden md:block px-6 py-2 text-sm font-medium rounded-md hover:opacity-90 transition-opacity"
            style={{
              backgroundColor: "var(--accent-color)",
              color: "var(--bg-primary)",
            }}
          >
            Start Free
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <XIcon className="w-6 h-6" style={{ color: 'var(--text-primary)' }} />
            ) : (
              <Menu className="w-6 h-6" style={{ color: 'var(--text-primary)' }} />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t" style={{ 
          backgroundColor: 'var(--bg-primary)',
          borderColor: 'var(--border-color)' 
        }}>
          <nav className="px-6 py-4 space-y-4">
            <a 
              href="#home" 
              onClick={(e) => scrollToSection(e, 'home')}
              className="block text-sm font-medium" 
              style={{ color: 'var(--text-primary)' }}
            >
              Home
            </a>
            <a 
              href="#features" 
              onClick={(e) => scrollToSection(e, 'features')}
              className="block text-sm font-medium" 
              style={{ color: 'var(--text-primary)' }}
            >
              Features
            </a>
            <a 
              href="#pricing" 
              onClick={(e) => scrollToSection(e, 'pricing')}
              className="block text-sm font-medium" 
              style={{ color: 'var(--text-primary)' }}
            >
              Pricing
            </a>
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, 'contact')}
              className="block text-sm font-medium" 
              style={{ color: 'var(--text-primary)' }}
            >
              Contact
            </a>
            <a 
              href="#login" 
              className="block text-sm font-medium" 
              style={{ color: 'var(--accent-color)' }}
            >
              Login
            </a>
            <button
              className="w-full px-6 py-2 text-sm font-medium rounded-md"
              style={{
                backgroundColor: "var(--accent-color)",
                color: "var(--bg-primary)",
              }}
            >
              Start Free
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;