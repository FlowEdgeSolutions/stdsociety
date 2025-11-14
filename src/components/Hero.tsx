import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-studio.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-12 lg:px-12">
      <div className="max-w-content w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Hero Image */}
        <div className="order-2 lg:order-1">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <img
              src={heroImage}
              alt="StudioSociety photography workspace"
              className="w-full h-full object-cover grayscale"
            />
          </div>
        </div>

        {/* Hero Content - Glassmorphism Card */}
        <div className="order-1 lg:order-2">
          <div className="glass-card-strong p-8 md:p-12 space-y-6 hover-lift">
            <h1 className="text-foreground">
              StudioSociety – Foto, Video & Social Content auf Agentur-Level.
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
              Wir produzieren klaren, hochwertigen Content für Marken, die auf Social Media, 
              Web und in Kampagnen sichtbar bleiben wollen – ohne verwirrende Pakete, 
              ohne Kreativ-Chaos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                variant="default"
                className="w-full sm:w-auto text-base"
                onClick={() => scrollToSection('contact')}
              >
                Projekt anfragen
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="w-full sm:w-auto text-base"
                onClick={() => scrollToSection('portfolio')}
              >
                Portfolio ansehen
              </Button>
            </div>

            <p className="text-sm text-muted-foreground pt-2">
              Antwort in der Regel innerhalb von 24 Stunden an Werktagen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
