import { MessageCircle, Lightbulb, Camera, Package } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    number: "01",
    title: "Briefing & Konzept",
    description: "Kurzes Gespräch über Ziel, Zielgruppe und Kanäle. Danach erstellen wir ein klares Konzept mit Shotlist und Timing."
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Planung",
    description: "Wir planen Produktions- und Shootingtage transparent im Voraus. Du weißt genau, was wann passiert."
  },
  {
    icon: Camera,
    number: "03",
    title: "Produktion",
    description: "Shooting, Aufnahme und Produktion nach abgestimmtem Plan – professionell, effizient und auf den Punkt."
  },
  {
    icon: Package,
    number: "04",
    title: "Nachbearbeitung & Übergabe",
    description: "Schnitt, Retusche und Feinschliff. Finale Dateien erhältst du strukturiert in den benötigten Formaten."
  }
];

const Process = () => {
  return (
    <section className="section-padding px-6 lg:px-12 bg-muted/30">
      <div className="max-w-content mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-foreground">Unser Prozess</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Von der ersten Idee bis zum fertigen Content – klar strukturiert, transparent und verlässlich.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="glass-card p-6 space-y-4 h-full hover-lift">
                <div className="flex items-start justify-between">
                  <div className="p-3 rounded-xl bg-primary/5">
                    <step.icon className="w-5 h-5 text-foreground" />
                  </div>
                  <span className="text-6xl font-extralight text-foreground/10">
                    {step.number}
                  </span>
                </div>
                
                <h4 className="text-foreground">{step.title}</h4>
                
                <p className="text-sm text-foreground/60 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector line (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
