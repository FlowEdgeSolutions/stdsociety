const About = () => {
  return (
    <section className="section-padding px-6 lg:px-12 bg-muted/30">
      <div className="max-w-content mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-foreground mb-8">
              StudioSociety – Content trifft Strategie.
            </h2>

            <div className="glass-card p-8 md:p-10 space-y-6">
              <p className="text-lg leading-relaxed text-foreground/80">
                StudioSociety ist das Foto- und Videostudio für Marken, die Content nicht 
                als Füllmaterial, sondern als Werkzeug sehen. Wir denken Produktion immer 
                zusammen mit Strategie: Welche Bilder, Formate und Inhalte brauchst du wirklich, 
                damit deine Kanäle funktionieren?
              </p>

              <p className="text-lg leading-relaxed text-foreground/80">
                Hinter StudioSociety steht ein Team aus Produktion, Schnitt und Design, das eng 
                mit FlowEdge Solutions zusammenarbeitet – der Beratung für digitale Prozesse, 
                Automatisierung und IT. Das Ergebnis: Klar strukturierte Projekte, saubere Abläufe, 
                verlässliche Ergebnisse.
              </p>

              <p className="text-lg leading-relaxed text-foreground/80">
                Wir arbeiten für KMU, Brands, Agenturen und Creator, die professionellen Content 
                für Social Media, Websites und Kampagnen benötigen – ohne langen Overhead, dafür 
                mit einem klaren Ansprechpartner.
              </p>
            </div>
          </div>

          {/* Key Facts Sidebar */}
          <div className="space-y-6">
            <h3 className="text-foreground">Key Facts</h3>
            
            <div className="glass-card p-6 space-y-6">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Fokus</p>
                <p className="text-foreground">Social Media, Web & Kampagnen</p>
              </div>

              <div className="border-t border-border/50 pt-6">
                <p className="text-sm text-muted-foreground mb-1">Formate</p>
                <p className="text-foreground">Foto, Video, Design</p>
              </div>

              <div className="border-t border-border/50 pt-6">
                <p className="text-sm text-muted-foreground mb-1">Branchen</p>
                <p className="text-foreground">KMU, Marken, Agenturen, Creator</p>
              </div>

              <div className="border-t border-border/50 pt-6">
                <p className="text-sm text-muted-foreground mb-1">Partner</p>
                <p className="text-foreground">FlowEdge Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
