import Link from "next/link";
import { TOP_LANDING_PAGES, getLandingPath } from "@/lib/landing-pages";
import { JsonLd } from "@/components/json-ld";

// SEO-DECISION: Server-rendered content for homepage crawlability.
// This content is always visible to search engines even though the
// main job search is client-rendered.

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://bodenlegerjob.ch";

// FAQ answers target the AI-citation optimum band of 134-167 words per answer.
// Shorter answers get truncated by LLMs into low-context excerpts; longer ones
// get summarized away. The 134-167 range survives both ends intact.
const HOMEPAGE_FAQS = [
  {
    question: "Welche Bodenlegerjobs gibt es auf bodenlegerjob.ch?",
    answer:
      "Auf bodenlegerjob.ch findest du alle relevanten Stellenprofile der Schweizer Bodenbelagsbranche. Dazu gehören die EFZ-Lehrabschluss-Berufe Bodenleger, Parkettleger und Plattenleger, dazu spezialisierte Profile wie Estrichleger, Industriebodenleger, Terrazzoleger, Oberflächenspezialist und Bodenbelagsmonteur. Auf der Planungs- und Projektebene listen wir Bodenbelagsplaner, Projektleiter Bodenbeläge und Bauleiter Bodenbeläge. Service- und Aussendienst-Profile wie Servicetechniker Bodenbeläge sind ebenfalls regelmässig vertreten — sie übernehmen Reparatur, Pflege und Reklamationsbearbeitung an bestehenden Bodenbelägen. Auf der Führungsebene findest du Niederlassungs- und Bereichsleiter sowie Geschäftsführende von Bodenbelagsbetrieben. Lehrstellen, Praktika und Wiedereinsteigerangebote sind separat ausgewiesen, damit Berufsanfängerinnen, Quereinsteiger und Wiedereinsteigende die für sie passenden Inserate schnell finden. Über die Kartenansicht lokalisierst du Stellen zusätzlich nach Postleitzahl und Pendelradius — besonders nützlich in ländlichen Regionen mit wechselnder Baustellenlogik. Die Stellen werden täglich aktualisiert und verteilen sich auf alle 26 Schweizer Kantone, mit besonderer Dichte in Zürich, Bern, Aargau, St. Gallen und der Region Basel.",
  },
  {
    question: "Was verdient ein Bodenleger in der Schweiz?",
    answer:
      "Ein Bodenleger EFZ verdient in der Schweiz im Durchschnitt CHF 65'000 bis 80'000 pro Jahr. Das Gehalt variiert deutlich nach Kanton, Berufserfahrung, Arbeitgebergrösse und Spezialisierung. In den Kantonen Zürich, Zug und Basel-Stadt liegen die Löhne tendenziell 5 bis 10 Prozent über dem Schweizer Mittel; in ländlicheren Kantonen wie Freiburg, Solothurn oder Graubünden 5 bis 8 Prozent darunter. Berufsanfänger nach EFZ-Abschluss starten meist im Bereich CHF 58'000 bis 65'000, mit drei bis fünf Jahren Erfahrung verschiebt sich der Marktwert in den Bereich CHF 70'000 bis 78'000. Spezialisierungen auf Industrieböden, Sportböden oder grossformatige Designbeläge bringen zusätzliche 5 bis 12 Prozent. Vorarbeiter-Verantwortung, Service mit Kundenkontakt und der eidg. dipl. Bodenbelagsmeister heben das Salärband weiter. Im Vergleich zum Nachbarland Deutschland liegen die Schweizer Bruttolöhne durchschnittlich 60 bis 80 Prozent höher; allerdings sind Lebenshaltungskosten und Krankenkassenprämien ebenfalls deutlich höher. Der 13. Monatslohn ist in der Bodenbelagsbranche Standard. Die vollständige Lohnübersicht findest du auf dieser Startseite.",
  },
  {
    question: "Wie finde ich einen Job als Bodenleger in der Schweiz?",
    answer:
      "Auf bodenlegerjob.ch suchst du gezielt mit drei Filtern nach passenden Stellen: Beruf (12 EFZ- und Spezialisten-Profile der Bodenbelagsbranche), Standort (alle 26 Schweizer Kantone plus Ortssuche mit Umkreis-Radius in Kilometern) und Pensum (Vollzeit, 80–100%, 60–80%, Teilzeit). Du kannst zusätzlich nach Anstellungsart (Festanstellung, Temporär, Praktikum, Lehre) filtern und Stellen mit konkretem Lohnband gezielt aufrufen. Der Bewerbungsprozess läuft direkt über die Plattform: Lebenslauf als PDF hochladen, Anschreiben in das Formular tippen oder ebenfalls als PDF beifügen, Sprache und Verfügbarkeit angeben, abschicken. Wir leiten dein Dossier anonymisiert an den Arbeitgeber weiter. Du kannst Suchprofile speichern und erhältst dann eine Benachrichtigung, sobald neue passende Stellen aufgeschaltet werden. Für regional konzentrierte Suchen empfehlen wir die Karte mit Umkreis-Filter — so findest du Stellen innerhalb deines bevorzugten Pendelradius. Branchenmessen wie die DOMOTEX, die Swissbau oder regionale Berufsbildungstage bieten zusätzliche Direktkontakte zu Arbeitgebern; viele Betriebe haben offene Stellen, die sie noch nicht öffentlich ausgeschrieben haben.",
  },
  {
    question: "Welche Kantone haben die meisten Bodenlegerjobs?",
    answer:
      "Die mit Abstand meisten offenen Stellen für Bodenleger-Fachkräfte gibt es in den Kantonen Zürich, Bern, Aargau, Waadt und Basel-Stadt. Diese fünf Kantone vereinen rund 60 Prozent aller publizierten Bodenbelags-Stellenausschreibungen in der Schweiz. Im Mittelfeld folgen St. Gallen, Luzern, Genf, Thurgau und Solothurn. Ländlichere Kantone wie Uri, Glarus, Appenzell Innerrhoden oder Jura haben deutlich weniger offene Stellen, dafür weniger Konkurrenz unter Bewerbern. Die regionale Verteilung folgt Wirtschaftswachstum und Bautätigkeit: Wo Wohnungsbau, Hotelrenovationen und Industrieprojekte zunehmen, steigt auch die Nachfrage nach Bodenlegern, Parkettlegern, Plattenlegern und Industriebodenspezialisten. Für Pendlerregionen lohnt sich ein Blick auf die Nachbarkantone — Aargauer Betriebe rekrutieren häufig in Solothurn und Luzern, Basler in Baselland und Solothurn, Zürcher in Schaffhausen, Thurgau und Schwyz. Eine zweisprachige Bewerbung (Deutsch und Französisch) öffnet zusätzlich den Markt im Kanton Wallis, in der Region Biel/Bienne und in Teilen von Fribourg. Die täglich aktualisierten Stellenzahlen pro Kanton siehst du in unserem Filter.",
  },
  {
    question: "Was ist der Unterschied zwischen Bodenleger und Parkettleger?",
    answer:
      "Der Unterschied liegt in Materialfokus, Lehrinhalt und Arbeitstechnik. Der Bodenleger EFZ absolviert eine 3-jährige Lehre und ist Allrounder für Teppich, Vinyl, Linoleum, Kautschuk, Designbeläge und Laminat — er bereitet Untergründe vor, schneidet zu, klebt, klickt oder verschweisst nach Materialvorgabe. Der Parkettleger EFZ ebenfalls 3-jährige Lehre, aber spezialisiert auf Holz: Verlegung von Massiv-, Mehrschicht- und Tafelparkett, Schleifen mit Teller- und Randmaschine, Behandlung mit Öl, Wachs oder Lack. Beide Berufe sind in der Schweiz gefragt, der Lohnabstand ist gering — Parkettleger landen mit Spezialisierung auf historische Restaurierung oder exotische Hölzer oft im oberen Drittel des Bands. Wechsel zwischen den Berufen ist über eine verkürzte Zusatzlehre möglich, viele Betriebe finanzieren diesen Weg mit. Welcher Beruf besser passt, hängt von Vorliebe für Materialvielfalt versus tiefer Holzkompetenz ab — eine Berufsberatung in deinem Wohnkanton hilft bei der konkreten Wahl. Ergänzende Profile wie Plattenleger EFZ oder Industriebodenleger erweitern das Branchenspektrum zusätzlich.",
  },
  {
    question: "Gibt es auf bodenlegerjob.ch auch Teilzeitstellen?",
    answer:
      "Ja, ein wachsender Teil der Stellen auf bodenlegerjob.ch ist Teilzeitarbeit oder mit reduziertem Pensum verfügbar. Im Filter wählst du zwischen Vollzeit (90–100%), 80–100%, 60–80% oder Teilzeit unter 60%. Teilzeitmodelle sind besonders bei Servicetechnikern Bodenbeläge, Bodenbelagsplanern und in der Projektleitung verbreitet — Elternzeit-Modelle, schrittweiser Wiedereinstieg nach Pause und Vorruhestand mit Reduzierung auf 60 oder 80 Prozent sind in der Schweizer Bodenbelagsbranche zunehmend Standard. Auf der Verlegerseite (Bodenleger EFZ, Parkettleger EFZ, Plattenleger EFZ) bleibt Vollzeit dominant, weil Equipen meist vollständig disponiert werden. In den Bereichen Planung, Beratung und Kundendienst ist Teilzeit hingegen gut etabliert. Job-Sharing-Modelle (zwei Personen teilen sich eine Stelle) werden ebenfalls vereinzelt angeboten. Wer Elternzeit-Wiedereinstieg sucht, profitiert von einer wachsenden Akzeptanz für gestaffelte Pensumserhöhungen — also Start mit 60 Prozent und schrittweise Anhebung über 12 bis 24 Monate. Frage in Erstgesprächen explizit nach diesem Modell, viele Betriebe bieten es ohne aktive Werbung an. Wir kennzeichnen jedes Inserat klar mit dem akzeptierten Pensumband.",
  },
];

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HOMEPAGE_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const SALARY_TABLE = [
  { role: "Bauleiter Bodenbeläge", range: "CHF 85'000 – 115'000" },
  { role: "Projektleiter Bodenbeläge", range: "CHF 80'000 – 105'000" },
  { role: "Bodenbelagsplaner", range: "CHF 75'000 – 95'000" },
  { role: "Industriebodenleger", range: "CHF 68'000 – 85'000" },
  { role: "Oberflächenspezialist", range: "CHF 68'000 – 85'000" },
  { role: "Terrazzoleger", range: "CHF 66'000 – 82'000" },
  { role: "Parkettleger EFZ", range: "CHF 65'000 – 82'000" },
  { role: "Servicetechniker Bodenbeläge", range: "CHF 65'000 – 82'000" },
  { role: "Bodenleger EFZ", range: "CHF 65'000 – 80'000" },
  { role: "Plattenleger EFZ", range: "CHF 65'000 – 80'000" },
  { role: "Estrichleger", range: "CHF 64'000 – 80'000" },
  { role: "Bodenbelagsmonteur", range: "CHF 62'000 – 78'000" },
];

/**
 * Server-rendered SEO content for the homepage.
 * Crawlable by search engines even when JS is disabled.
 * Includes: intro text, FAQ section, salary table, landing page links.
 */
export function HomepageSeoContent() {
  return (
    <section className="bg-white border-t" aria-label="Informationen für Bodenleger-Fachkräfte">
      <JsonLd data={faqPageSchema} />

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 max-w-5xl">
        {/* SEO intro paragraph — AI-citeable, entity-rich */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            Bodenlegerjobs in der Schweiz finden
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-4">
            Auf bodenlegerjob.ch finden Bodenleger-Fachkräfte aktuelle offene Stellen in der ganzen Schweiz
            — von Bodenleger EFZ über Parkettleger und Plattenleger bis hin zu
            Estrichleger, Terrazzoleger und Projektleiter Bodenbeläge. Ob du deinen nächsten Bodenlegerjob
            in Zürich, Bern oder Basel suchst — unsere spezialisierte Jobbörse
            richtet sich an alle Berufsleute der Bodenbelagsbranche.
          </p>
          <p className="text-slate-600 text-base leading-relaxed">
            Ob du in Zürich, Bern, Basel, Luzern, St. Gallen oder einem anderen Schweizer Kanton
            suchst — mit unserer smarten Filterung nach Beruf, Ort, Umkreis und Pensum findest du
            schnell die passende Stelle. Bewirb dich direkt über die Plattform mit wenigen Klicks.
          </p>
        </div>

        {/* Salary table — highly citeable by AI. id="loehne" anchor lets editorial */}
        {/* sections on category pages deep-link via /#loehne. */}
        <div id="loehne" className="mb-12 scroll-mt-24">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
            Lohnübersicht Bodenbelagsberufe Schweiz
          </h2>
          <p className="text-slate-500 text-sm mb-4">
            Durchschnittliche Jahresgehälter für Bodenleger-Fachkräfte in der Schweiz (2025/2026, Richtwerte).
            Quellen:{" "}
            <a href="https://parkett-verband.ch" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-700">ISP (Parkett-Industrie)</a>,{" "}
            <a href="https://igb-verband.ch" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-700">IGB (Bodenbeläge Schweiz)</a>,{" "}
            <a href="https://www.bfs.admin.ch" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-700">BFS</a>.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="py-3 pr-4 text-sm font-semibold text-slate-900">Beruf</th>
                  <th className="py-3 text-sm font-semibold text-slate-900">Jahreslohn (CHF)</th>
                </tr>
              </thead>
              <tbody>
                {SALARY_TABLE.map((row) => (
                  <tr key={row.role} className="border-b border-slate-100">
                    <td className="py-2.5 pr-4 text-sm text-slate-700">{row.role}</td>
                    <td className="py-2.5 text-sm font-medium text-slate-900">{row.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <details className="mt-4 group rounded-lg border border-slate-200 bg-slate-50 overflow-hidden">
            <summary className="flex cursor-pointer items-center justify-between px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100 transition-colors">
              Methodologie — wie wir die Lohnbänder berechnen
              <span
                className="ml-2 shrink-0 text-slate-400 transition-transform group-open:rotate-180"
                aria-hidden="true"
              >
                ▾
              </span>
            </summary>
            <div className="px-4 pb-4 text-sm text-slate-600 leading-relaxed space-y-2">
              <p>
                <strong>Stand:</strong> 2. Mai 2026.
              </p>
              <p>
                <strong>Quellen:</strong> Wir aggregieren öffentlich publizierte
                Lohndaten der Schweizer Bodenbelagsbranche aus den Jahres- und
                Branchenstatistiken der{" "}
                <a
                  href="https://parkett-verband.ch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-slate-800"
                >
                  ISP (Interessengemeinschaft Schweizer Parkett-Industrie)
                </a>
                , der{" "}
                <a
                  href="https://igb-verband.ch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-slate-800"
                >
                  IGB (Interessengemeinschaft Bodenbeläge Schweiz)
                </a>{" "}
                und dem{" "}
                <a
                  href="https://www.bfs.admin.ch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-slate-800"
                >
                  Bundesamt für Statistik (BFS)
                </a>
                . Ergänzend werten wir die täglich auf bodenlegerjob.ch indexierten
                öffentlichen Stellenausschreibungen aus.
              </p>
              <p>
                <strong>Bandbreite und Mittelwert:</strong> Die Tabelle zeigt
                Richtbänder. Der konkrete Lohn wird im Bewerbungsprozess
                individuell verhandelt und hängt von Erfahrung, Spezialisierung,
                Arbeitgebergrösse, Branche und Region ab. Innerhalb eines Bands
                liegt die Mehrheit (rund zwei Drittel) der ausgewerteten
                Vergleichswerte.
              </p>
              <p>
                <strong>Aktualisierung:</strong> Wir überarbeiten die Lohnbänder
                jährlich beziehungsweise sofort, sobald ein Branchenverband neue
                Empfehlungen veröffentlicht oder sich die Marktlage in einer
                Region merklich verändert. Korrekturhinweise nehmen wir gerne
                über die Kontaktseite entgegen.
              </p>
            </div>
          </details>
        </div>

        {/* FAQ section — conversational query targets */}
        <div className="mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
            Häufig gestellte Fragen
          </h2>
          <div className="space-y-4">
            {HOMEPAGE_FAQS.map((faq, index) => (
              <details
                key={index}
                className="group rounded-lg border border-slate-200 bg-slate-50 overflow-hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100 transition-colors">
                  {faq.question}
                  <span
                    className="ml-2 shrink-0 text-slate-400 transition-transform group-open:rotate-180"
                    aria-hidden="true"
                  >
                    ▾
                  </span>
                </summary>
                <div className="px-4 pb-4 text-sm text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Landing page links — crawlable internal links */}
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
            Alle Bodenlegerjobs nach Beruf und Kanton
          </h2>
          <nav aria-label="Beliebte Stellenangebote nach Beruf und Kanton">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {TOP_LANDING_PAGES.map((item) => (
                <Link
                  key={`${item.role}-${item.canton}`}
                  href={getLandingPath(item)}
                  className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 hover:border-primary/40 hover:text-primary transition-colors"
                >
                  {item.role} in {item.canton}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
}
