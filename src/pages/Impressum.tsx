const Impressum = () => {
  return (
    <main className="min-h-screen px-6 lg:px-12 py-12">
      <div className="max-w-content mx-auto">
        <h1 className="text-2xl font-bold mb-6">Impressum</h1>

        <section className="prose">
          <h2>Angaben gemäß § 5 TMG</h2>
          <p>
            StudioSociety
            <br />
            FlowEdge Solutions
            <br />
            Musterstraße 1
            <br />
            12345 Musterstadt
          </p>

          <h3>Vertreten durch</h3>
          <p>Max Mustermann</p>

          <h3>Kontakt</h3>
          <p>
            Telefon: +49 123 456789
            <br />
            E-Mail: info@studiosociety.de
          </p>

          <h3>Umsatzsteuer-ID</h3>
          <p>USt-IdNr. DE123456789</p>

          <h3>Haftung für Inhalte</h3>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen
            Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir
            als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte
            fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf
            rechtswidrige Tätigkeiten hinweisen.
          </p>

          <h3>Streitschlichtung</h3>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
            bereit: https://ec.europa.eu/consumers/odr. Unsere E-Mail-Adresse finden Sie
            oben im Impressum.
          </p>
        </section>
      </div>
    </main>
  );
};

export default Impressum;
