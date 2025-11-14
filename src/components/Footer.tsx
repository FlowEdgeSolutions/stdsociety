const Footer = () => {
  return (
    <footer className="border-t border-border/50 px-6 lg:px-12 py-12">
      <div className="max-w-content mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h4 className="text-foreground font-normal mb-4">StudioSociety</h4>
            <p className="text-sm text-muted-foreground max-w-md">
              Foto, Video & Social Content auf Agentur-Level – 
              für Marken, die auf Social Media sichtbar bleiben wollen.
            </p>
          </div>

          <div className="flex flex-col md:items-end gap-4">
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Impressum
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Datenschutz
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                AGB
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50">
          <p className="text-xs text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} StudioSociety. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
