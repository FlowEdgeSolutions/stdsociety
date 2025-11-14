import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isSticky, setIsSticky] = useState(false);

  const navItems = [
    { label: "Leistungen", id: "services" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Prozess", id: "process" },
    { label: "Über uns", id: "about" },
    { label: "FAQ", id: "faq" },
    { label: "Kontakt", id: "contact" },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isSticky ? 'glass-card-strong shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-content mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between py-4">
          <a href="/" className="flex items-center gap-3">
            <img src="/logoweis.jpeg" alt="StudioSociety" className="h-10 w-auto rounded" />
            <span className="text-lg font-semibold text-foreground">StudioSociety</span>
          </a>
          
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(item.id)}
                className="text-foreground/70 hover:text-foreground hover:bg-foreground/5"
              >
                {item.label}
              </Button>
            ))}
          </div>

          <Button
            variant="default"
            size="sm"
            onClick={() => scrollToSection('contact')}
            className="hidden md:inline-flex"
          >
            Anfrage
          </Button>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => scrollToSection('services')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
