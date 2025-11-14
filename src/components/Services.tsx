import { Camera, Video, Palette } from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "Fotografie",
    description: "Präzise, reduzierte Bildwelten für Marken, Teams und Produkte – vom Studio-Setup bis On-Location.",
    features: [
      "Business-Portraits & Team-Shootings",
      "Produkt- & Still-Life-Fotografie",
      "Kampagnen-Motive für Web & Social",
      "Event- & Location-Fotografie"
    ]
  },
  {
    icon: Video,
    title: "Videografie",
    description: "Kurze, klare Bewegtbildformate für Social Media, Websites und Kampagnen – auf den Punkt geschnitten.",
    features: [
      "Social-Media-Spots für Reels, TikTok & Ads",
      "Produkt- & Brand-Videos für Landingpages",
      "Recruiting- & Employer-Branding-Clips",
      "Content-Serien für laufende Kanäle"
    ]
  },
  {
    icon: Palette,
    title: "Social Media Design",
    description: "Konsistente Feeds, wiedererkennbare Formate und klare Templates für deinen Markenauftritt.",
    features: [
      "Post- & Story-Designs für Instagram, LinkedIn & Co.",
      "Ad-Visuals für Kampagnen & Performance-Marketing",
      "Thumbnails & Cover-Designs für Video & Playlists",
      "Design-Grids und Template-Systeme für Teams"
    ]
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding px-6 lg:px-12 bg-muted/30">
      <div className="max-w-content mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-foreground">Leistungen</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Content-Produktion von der Idee bis zum finalen Asset – für Social Media, 
            Web und Kampagnen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="glass-card p-8 space-y-6 hover-lift"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-primary/5">
                  <service.icon className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-foreground">{service.title}</h3>
              </div>

              <p className="text-foreground/70 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-foreground/60">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-foreground/40 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
