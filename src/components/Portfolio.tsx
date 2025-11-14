const Portfolio = () => {
  // Placeholder images - will be replaced with actual portfolio items
  const portfolioItems = Array(6).fill(null).map((_, index) => ({
    id: index + 1,
    title: `Projekt ${index + 1}`,
    category: index % 3 === 0 ? 'Fotografie' : index % 3 === 1 ? 'Videografie' : 'Social Design'
  }));

  return (
    <section id="portfolio" className="section-padding px-6 lg:px-12">
      <div className="max-w-content mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-foreground">Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ausgewählte Arbeiten aus Fotografie, Videografie und Social Media Design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <div 
              key={item.id}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted cursor-pointer hover-lift"
            >
              {/* Placeholder gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-muted via-accent to-muted/50" />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-white p-6">
                  <h4 className="font-normal mb-2">{item.title}</h4>
                  <p className="text-sm text-white/80">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
