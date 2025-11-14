import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const packages = [
  {
    name: "Social Starter",
    description: "Perfekt für erste Social-Media-Inhalte",
    features: [
      "Halbtags-Shooting (4 Stunden)",
      "10-15 finalisierte Assets",
      "Basis-Retusche und Farbkorrektur",
      "Social-Media-optimierte Formate",
      "Online-Übergabe via Cloud"
    ],
    note: "Ab 850€"
  },
  {
    name: "Content Sprint",
    description: "Für Kampagnen und Content-Serien",
    features: [
      "Ganztags-Shooting (8 Stunden)",
      "25-30 finalisierte Assets",
      "Professionelle Retusche",
      "Foto + Kurzvideo kombiniert",
      "Konzept & Shotlist inklusive",
      "Strukturierte Asset-Übergabe"
    ],
    note: "Ab 1.650€",
    highlighted: true
  },
  {
    name: "Monthly Content",
    description: "Laufende Content-Produktion",
    features: [
      "Monatlicher Produktionstag",
      "40-50 Assets pro Monat",
      "Foto, Video & Design kombiniert",
      "Kontinuierliche Betreuung",
      "Feste Ansprechperson",
      "Flexibles Rollover-System"
    ],
    note: "Ab 2.400€/Monat"
  }
];

const Packages = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section-padding px-6 lg:px-12">
      <div className="max-w-content mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-foreground">Pakete</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Orientierende Pakete für deinen Einstieg. Individuelle Angebote erstellen wir 
            basierend auf deinem konkreten Bedarf.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`glass-card p-8 space-y-6 hover-lift ${
                pkg.highlighted ? 'glass-card-strong ring-1 ring-foreground/10' : ''
              }`}
            >
              <div className="space-y-2">
                <h3 className="text-foreground">{pkg.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {pkg.description}
                </p>
              </div>

              <ul className="space-y-3">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-foreground/70">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-foreground/50" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-border/50">
                <p className="text-sm font-medium text-foreground mb-4">
                  {pkg.note}
                </p>
                <Button 
                  variant={pkg.highlighted ? "default" : "outline"}
                  className="w-full"
                  onClick={scrollToContact}
                >
                  Anfragen
                </Button>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-12">
          Alle Preise verstehen sich als Richtwerte zzgl. MwSt. 
          Individuelle Angebote basierend auf deinem konkreten Projekt.
        </p>
      </div>
    </section>
  );
};

export default Packages;
