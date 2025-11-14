import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Wie läuft ein typisches Projekt mit euch ab?",
    answer: "In der Regel starten wir mit einem kurzen Call, in dem wir Ziel, Zielgruppe und Kanäle klären. Danach erstellen wir ein klares Konzept mit Shotlist, Formaten und Timing. Produktions- und Shootingtag(e) planen wir transparent im Voraus. Anschließend folgt Schnitt, Retusche und Übergabe der finalen Dateien in den benötigten Formaten."
  },
  {
    question: "Bietet ihr feste Pakete oder individuelle Angebote an?",
    answer: "Beides. Wir haben orientierende Pakete wie Social Starter, Content Sprint und Monthly Content, damit du ein Gefühl für Umfang und Leistung bekommst. Am Ende erhältst du aber immer ein individuelles Angebot, das sich an deinem Bedarf und deinen Kanälen orientiert – keine überladenen Standard-Pakete."
  },
  {
    question: "Mit welchen Branchen arbeitet ihr?",
    answer: "Wir arbeiten branchenoffen mit Fokus auf KMU, Marken, Agenturen und Creator. Häufige Bereiche sind: Beratung & Dienstleistungen, E-Commerce, Lifestyle & Personal Brands, Bildung und Recruiting. Entscheidend ist, dass du regelmäßigen oder kampagnenbezogenen Content für Social Media und Web brauchst."
  },
  {
    question: "Wie erhalte ich die finalen Dateien?",
    answer: "Du bekommst alle freigegebenen Fotos und Videos in einem strukturierten Online-Ordner – optimiert für Web, Social Media und ggf. Druck. Auf Wunsch legen wir dir eine klare Ordnerstruktur an, die dein Team weiter nutzen kann. Übergabe kann z. B. via Cloud-Link oder eigenem Server erfolgen."
  },
  {
    question: "Übernehmt ihr auch Posting, Kanalbetreuung oder Ads?",
    answer: "Unser Kernfokus liegt auf Produktion und Design: Foto, Video und Social Assets. Für laufende Kanalbetreuung, Performance-Marketing oder umfassende Kampagnen arbeiten wir auf Wunsch mit Partner:innen zusammen oder stimmen uns mit deinem bestehenden Marketingteam ab."
  },
  {
    question: "Wie früh sollte ich euch anfragen?",
    answer: "Für größere Produktionen oder Kampagnen empfehlen wir eine Vorlaufzeit von mindestens 3–4 Wochen. Kurzfristige Social-Shoots sind je nach Auslastung möglich. Am besten: Anfrage senden, Projektart kurz beschreiben, gewünschtes Timing mit angeben – wir melden uns mit einer realistischen Einschätzung."
  }
];

const FAQ = () => {
  return (
    <section className="section-padding px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-foreground">Häufige Fragen</h2>
          <p className="text-xl text-muted-foreground">
            Alles, was du über die Zusammenarbeit mit StudioSociety wissen solltest.
          </p>
        </div>

        <div className="glass-card p-8 md:p-10">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-b border-border/50 last:border-0"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-foreground/70 transition-colors py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
