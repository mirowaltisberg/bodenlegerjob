// SEO-DECISION: Per-page editorial content for the highest-traffic role × canton
// combinations. Keyed by `${roleSlug}::${cantonSlug}`. The category page renders
// EditorialIntro only when an entry exists here — pages without an entry fall back
// to the default short layout. Word target per section: ~80 words. Total per
// page: 320+. Swiss orthography only — never use Eszett, always "ss".

export interface EditorialContent {
  /** "Was macht ein/e ROLE in CANTON?" — concrete day-to-day, regional context */
  whatDoes: string;
  /** "Lohn & Aufstiegschancen" — salary band + progression. Deep-links to /#loehne */
  salary: string;
  /** "Welche Betriebe stellen ein?" — anonymized, never names specific companies */
  employers: string;
  /** "Bewerbungs-Tipps" — practical, regional (ÖV, Pendlerregion, Sprache) */
  applicationTips: string;
}

const ENTRIES: Record<string, EditorialContent> = {
  "bodenleger-efz::zh": {
    whatDoes:
      "Ein Bodenleger EFZ in Zürich verlegt täglich Teppich, Vinyl, Linoleum, Kautschuk und Laminat in Wohnungen, Büros, Schulhäusern und Gewerbeflächen. Der Alltag wechselt zwischen Untergrundvorbereitung mit Spachtelmasse, präzisem Zuschnitt der Beläge und sauberer Verlegung mit Klebe- oder Klicksystem. In der Stadt Zürich dominieren Sanierungen in den Stadtkreisen 3, 4 und 6 sowie Wohnungsabnahmen vor dem Mieterwechsel. Daneben prägen Grossüberbauungen in Zürich-West, Glattpark und Affoltern den Auftragsmix. Wer flink, sauber und termingerecht arbeitet, hat in der Region Zürich konstante Auslastung und kurze Wege zwischen den Baustellen.",
    salary:
      "Ein Bodenleger EFZ verdient im Kanton Zürich typisch CHF 70'000 bis 82'000 pro Jahr — leicht über dem Schweizer Mittel von CHF 65'000 bis 80'000. Mit Vorarbeiter-Verantwortung steigt das Salär um 6 bis 10 Prozent. Spezialisierungen auf Sportboden, Designbeläge oder grossformatige Vinyl-Verschweissung bringen weitere Zulagen. Die Weiterbildung zum Bodenbelagsplaner (berufsbegleitend, 2 bis 3 Jahre) öffnet das Band CHF 75'000 bis 95'000, der eidg. dipl. Bodenbelagsmeister landet im Kanton Zürich häufig bei CHF 95'000 bis 115'000. Die vollständige Lohnübersicht steht auf unserer Startseite.",
    employers:
      "Im Kanton Zürich besetzen vor allem KMU mit 5 bis 30 Mitarbeitenden — klassische Bodenbelagsbetriebe, die Wohnungssanierungen, Bürobauten und Gewerbeflächen bedienen. Daneben rekrutieren grössere Bodenbelagsgruppen mit mehreren Filialen regelmässig für Equipen auf Grossbaustellen. Generalunternehmer für Wohnüberbauungen in Zürich-West, Schwamendingen und Glattpark vergeben Aufträge an Bodenleger-Subunternehmen. Liegenschaftsverwaltungen, Hauswartservices und Filialisten der Detailhandelsbranche brauchen Bodenleger für laufende Mieterwechsel und Ladenumbauten. Wir nennen aus Datenschutz- und Vermittlungsgründen keine Firmennamen — die Inserate auf bodenlegerjob.ch sind anonymisiert, der Arbeitgeber wird im Vorgespräch offengelegt.",
    applicationTips:
      "Lege Wert auf einen kompakten Lebenslauf mit klar gelisteten Verlegetechniken, Materialerfahrung und konkreten Referenzobjekten — zum Beispiel «MFH Wipkingen, 24 Wohnungen, Vinyl mit Schweissnaht». Im Kanton Zürich rechnen Arbeitgeber mit täglichem Pendeln zu wechselnden Baustellen: ÖV-Knotenpunkt oder Wohnort plus Fahrausweis Kategorie B prominent angeben. Ein Foto deiner EFZ-Urkunde im Anhang beschleunigt die Vorauswahl, viele Betriebe filtern Inserate ohne sichtbaren Lehrabschluss heraus. Im Erstgespräch werden Pünktlichkeit, körperliche Eignung für knietiefe Verlegearbeit und Erfahrung mit Untergrundvorbereitung vertieft abgefragt — bereite ehrliche Antworten und ein bis zwei Bilder gelungener Arbeiten vor.",
  },

  "parkettleger-efz::be": {
    whatDoes:
      "Ein Parkettleger EFZ im Kanton Bern verlegt, schleift, ölt und versiegelt Holzböden — von Massivparkett über Fertigparkett bis zu exotischen Hölzern und historischen Tafelböden. Der Tag teilt sich auf zwischen Untergrundprüfung mit Feuchtemessung, Verlegung nach Muster (Englischer Verband, Fischgrät, Schiffsboden) und Schleifgängen mit Tellermaschine und Randschleifer. Im Kanton Bern reicht das Auftragsgebiet vom Mittelland über das Berner Oberland bis ins Emmental — viel Sanierungsarbeit in Altbauten und Chalets, dazu Neubauten in den Agglomerationsgemeinden. Wer Holzkunde, Mustertreue und Beratungskompetenz mitbringt, hat hier langfristig stabile Aufträge.",
    salary:
      "Parkettleger EFZ verdienen im Kanton Bern CHF 65'000 bis 80'000 pro Jahr — nahe am Schweizer Mittel. Mit Spezialisierung auf historische Restaurierung, exotische Hölzer oder Designparkett verschiebt sich der Marktwert ins obere Drittel. Vorarbeiter-Verantwortung bringt zusätzlich 6 bis 10 Prozent. Die berufsbegleitende Weiterbildung zum Bodenbelagsplaner oder Oberflächenspezialist öffnet das Band CHF 75'000 bis 95'000. Mit dem eidg. dipl. Bodenbelagsmeister sind im Kanton Bern CHF 95'000 bis 115'000 realistisch. Berufsbegleitende Lehrgänge werden von vielen Betrieben mitfinanziert. Die vollständige Lohnübersicht steht auf unserer Startseite.",
    employers:
      "Im Kanton Bern besetzen mittelgrosse Parkett- und Bodenbelagsbetriebe mit 8 bis 40 Mitarbeitenden den Grossteil der Stellen. Daneben suchen spezialisierte Restaurierungsbetriebe Parkettleger für historische Altbauten in der Berner Innenstadt und im Oberaargau. Hotelbetriebe und Chalet-Vermietungen im Berner Oberland brauchen für saisonale Renovationen erfahrene Parkettleger. Generalunternehmer für Wohnüberbauungen in den Agglomerationsgemeinden Köniz, Ostermundigen und Münsingen vergeben regelmässig Parkett-Aufträge. Liegenschaftsverwaltungen mit eigenem Hausdienst rekrutieren ebenfalls. Wir nennen aus Datenschutz- und Vermittlungsgründen keine Firmennamen — die Inserate sind anonymisiert, den konkreten Arbeitgeber lernst du im persönlichen Erstgespräch kennen.",
    applicationTips:
      "Hänge eine kompakte Auswahl bearbeiteter Objekte an — Bauherrschaft anonymisiert, dafür mit Holzart, Verlegemuster, Quadratmeterzahl und deinem konkreten Anteil. Im Kanton Bern werden weite Anfahrtswege erwartet, besonders für Aufträge im Oberland und Emmental: Wohnort, Pendelbereitschaft und Führerausweis Kategorie B prominent angeben. Sehr gute Deutschkenntnisse inklusive Mundartverständnis sind für die Kundenberatung entscheidend. Im Vorstellungsgespräch werden Holzkunde, Schleiftechnik, Fugenkorrektur und Erfahrung mit Öl- versus Lackversiegelung vertieft abgefragt. Ein Foto deiner EFZ-Urkunde sowie Belege für besuchte Hersteller-Schulungen — etwa Bona, Loba oder Berger-Seidle — erhöhen die Trefferquote im Vorauswahl-Schritt deutlich.",
  },

  "plattenleger-efz::ag": {
    whatDoes:
      "Ein Plattenleger EFZ im Kanton Aargau verlegt keramische Fliesen, Feinsteinzeug und Naturstein in Bädern, Küchen, Eingangsbereichen, Aussenanlagen und öffentlichen Gebäuden. Der Alltag wechselt zwischen Untergrundvorbereitung, präzisem Zuschnitt mit Wasserschneider oder Plattenschneider, Verlegung im Dünnbett- oder Mittelbettverfahren und sauberer Verfugung. Im Kanton Aargau prägen Industrie- und Wohnungsbauprojekte das Auftragsportfolio — Sanierungen in Aarau, Baden, Wettingen und Brugg, dazu Grossformatplatten in Logistikhallen entlang der A1. Wer ein gutes Augenmass, Sinn für Linienführung und körperliche Belastbarkeit mitbringt, ist bei spezialisierten Plattenleger-Betrieben gefragt.",
    salary:
      "Plattenleger EFZ verdienen im Kanton Aargau CHF 65'000 bis 80'000 pro Jahr — im Bereich des Schweizer Mittels. Mit Spezialisierung auf Naturstein, Grossformatplatten oder Aussenbeläge verschiebt sich der Marktwert ins obere Drittel. Vorarbeiter-Verantwortung bringt zusätzlich 6 bis 10 Prozent. Die Weiterbildung zum Projektleiter Bodenbeläge oder Bodenbelagsplaner (berufsbegleitend, 2 bis 3 Jahre) öffnet das Band CHF 80'000 bis 105'000. Mit dem eidg. dipl. Plattenleger- oder Bodenbelagsmeister sind im Kanton Aargau CHF 95'000 bis 115'000 realistisch. Pharma- und Industriestandorte zahlen für Spezialprojekte oft etwas über GAV-Niveau. Die vollständige Lohnübersicht steht auf der Startseite.",
    employers:
      "Im Kanton Aargau besetzen vor allem KMU mit 5 bis 25 Mitarbeitenden — klassische Plattenleger-Betriebe, die Wohnbau, Sanierungen und Gewerbe bedienen. Daneben suchen Generalunternehmer und Baukonsortien Plattenleger-Equipen für Grossbaustellen in Aarau, Baden und im Limmattal. Pharma- und Industriestandorte rund um Sisseln, Stein und Spreitenbach brauchen Fachkräfte für hygienetaugliche Wand- und Bodenbeläge in Reinraum- und Produktionsbereichen. Hotel- und Wellnessbetriebe vergeben regelmässig Aufträge für hochwertige Naturstein- und Mosaikarbeiten. Wir nennen aus Datenschutz- und Vermittlungsgründen keine Firmennamen — die Inserate auf bodenlegerjob.ch sind anonymisiert, den Arbeitgeber lernst du im Erstgespräch kennen.",
    applicationTips:
      "Liste im Lebenslauf konkrete Plattenformate, Verlegemuster und Materialerfahrung auf — Personalverantwortliche im Aargau filtern gezielt danach. Erfahrung mit Grossformatplatten (120×240 cm und grösser), Wasserschneider und Naturstein gehört prominent ins Dossier. Da Aargauer Betriebe oft für Auftraggeber in Zürich, Basel und Luzern arbeiten, wird Mobilität geschätzt: Pendelradius, Fahrausweis Kategorie B und Reisebereitschaft angeben. Im Vorstellungsgespräch werden Untergrundbeurteilung, Fugenplanung, Abdichtungstechnik nach SIA 251 und Erfahrung mit Bodenheizungen vertieft abgefragt. Ein Foto deiner EFZ-Urkunde sowie ein bis zwei Bilder gelungener Referenzobjekte — Bauherrschaft anonymisiert — beschleunigen die Vorauswahl spürbar.",
  },

  "industriebodenleger::zg": {
    whatDoes:
      "Ein Industriebodenleger im Kanton Zug verarbeitet hochbelastbare Bodenbeschichtungen aus Epoxidharz, Polyurethan und Kunstharz in Produktionshallen, Lagerflächen, Reinräumen und Tiefgaragen. Der Tag wechselt zwischen mechanischer Betonvorbereitung mit Diamantschleifern oder Kugelstrahlanlagen, Grundierung, Auftrag der Beschichtungssysteme im Spachtel- oder Selbstverlauf und abschliessender Versiegelung. Im Kanton Zug prägen Hightech-Standorte, Pharmazulieferer und Logistikzentren das Auftragsportfolio: Reinraum-Beschichtungen in Rotkreuz und Risch, ESD-Böden für Elektronikfertigung, chemisch beständige Beläge in Pharma-Produktionsbereichen. Wer systematisch arbeitet, Verarbeitungszeiten genau einhält und sauber dokumentiert, hat in Zug überdurchschnittliche Aufstiegschancen.",
    salary:
      "Industriebodenleger verdienen im Kanton Zug CHF 72'000 bis 88'000 pro Jahr — am oberen Schweizer Durchschnitt. Mit Spezialisierung auf ESD-Böden, chemisch beständige Beschichtungen oder Reinraum-Systeme verschiebt sich der Marktwert in den Bereich CHF 85'000 bis 95'000. Schicht- und Wochenendarbeit für laufende Produktionsbetriebe bringt Inkonvenienzzulagen von 8 bis 15 Prozent. Der Aufstieg zum Beschichtungsspezialist, Vorarbeiter oder Projektleiter Industrieböden öffnet das Band CHF 90'000 bis 110'000. Pharma- und Hightech-Auftraggeber im Kanton Zug zahlen oft marktführend, dafür wird auch Wochenend- und Inbetriebnahmebereitschaft erwartet. Die vollständige Lohnübersicht steht auf unserer Startseite.",
    employers:
      "Im Kanton Zug besetzen spezialisierte Industriebodenbetriebe und Beschichtungsfirmen mit 10 bis 60 Mitarbeitenden den Grossteil der Stellen. Daneben suchen Pharmazulieferer und Reinraumspezialisten ihre eigenen Beschichter für laufende Wartung und Erweiterungen. Logistik- und Distributionszentren rund um Cham und Baar vergeben Grossaufträge für Hallenbeschichtungen. Generalunternehmer für Industrie- und Gewerbebauten besetzen Stellen für Equipen mit Reisebereitschaft. Auffallend stark vertreten sind im Kanton Zug auch internationale Konzerne mit eigenen Werkstechnik-Abteilungen sowie Datacenter-Betreiber, die für leitfähige Doppelböden und ESD-Beschichtungen Spezialisten brauchen. Wir nennen aus Datenschutz- und Vermittlungsgründen keine Firmennamen — die Inserate sind anonymisiert, den konkreten Arbeitgeber lernst du im persönlichen Erstgespräch kennen.",
    applicationTips:
      "Liste im Lebenslauf konkrete Beschichtungssysteme, Hersteller und Quadratmeterleistungen auf, mit denen du gearbeitet hast — Personalverantwortliche im Kanton Zug filtern sehr genau nach Systemerfahrung. Hersteller-Schulungen (Sika, Mapei, BASF, StoCretec) gehören prominent ins Dossier. Englisch in Wort und Schrift wird in den meisten Pharma- und Hightech-Stellen vorausgesetzt: Bewerbung in Deutsch, ergänzende Skills auch in Englisch. Bereitschaft für Schicht-, Wochenend- und Nachteinsätze in laufenden Produktionsbetrieben prominent angeben. Im Vorstellungsgespräch werden Verarbeitungszeiten, Klimagrenzwerte (Temperatur, Taupunkt), Untergrundprüfung und Sicherheitskonzepte für Lösemittelarbeit vertieft abgefragt — bereite ehrliche, faktenbasierte Antworten vor.",
  },

  "projektleiter-bodenbelaege::sg": {
    whatDoes:
      "Ein Projektleiter Bodenbeläge im Kanton St. Gallen führt Bodenbelagsprojekte von der Offertstellung über die Materialdisposition bis zur Übergabe an die Bauherrschaft. Der Alltag teilt sich auf zwischen Bürozeit (Kalkulation, Terminplanung, Architektenkoordination), Baustellenbegehungen in der ganzen Ostschweiz und Führung der Verlegeequipen. Im Kanton St. Gallen prägen mittelgrosse Wohnüberbauungen im Rheintal, Sanierungen in der Stadt St. Gallen sowie Industrie- und Gewerbebauten rund um Wil und Gossau das Auftragsportfolio. Daneben gehören Schulhaus- und Spitalprojekte zum Standardgeschäft. Wer Kalkulationssicherheit, Verhandlungsgeschick und ruhige Mitarbeiterführung mitbringt, hat in der Ostschweiz gute Aufstiegsperspektiven.",
    salary:
      "Projektleiter Bodenbeläge verdienen im Kanton St. Gallen CHF 80'000 bis 100'000 pro Jahr — leicht unter dem Spitzen-Niveau von Zürich oder Zug, dafür mit oft günstigeren Lebenshaltungskosten. Mit grosser Auftragsverantwortung (Mehrjahres-Rahmenverträge, Generalplaner-Mandate) verschiebt sich das Salär in den Bereich CHF 95'000 bis 110'000. Der Aufstieg zum Bauleiter Bodenbeläge öffnet das Band CHF 85'000 bis 115'000, zum Bereichsleiter oder Niederlassungsleiter realistisch CHF 105'000 bis 130'000. Berufsbegleitende Weiterbildungen — eidg. dipl. Bodenbelagsmeister, CAS Baumanagement — werden von den meisten Arbeitgebern mitfinanziert. Die vollständige Lohnübersicht steht auf der Startseite.",
    employers:
      "Im Kanton St. Gallen besetzen vor allem mittelgrosse Bodenbelagsbetriebe mit 20 bis 80 Mitarbeitenden Stellen für Projektleiter. Daneben suchen Generalunternehmer für Wohn- und Gewerbeprojekte im Rheintal, im Linthgebiet und im Toggenburg eigene Projektleiter Bodenbeläge zur internen Steuerung. Industrie- und Logistikstandorte rund um Wil, Uzwil und Buchs vergeben Rahmenverträge an spezialisierte Bodenbelagsfirmen. Schulgemeinden, Spital- und Heimträger sowie kantonale Hochbauämter besetzen Stellen für Bauherrenvertreter und Fachplaner. Wir nennen aus Datenschutz- und Vermittlungsgründen keine Firmennamen — die Inserate auf bodenlegerjob.ch sind anonymisiert, den Arbeitgeber lernst du im persönlichen Erstgespräch kennen.",
    applicationTips:
      "Hänge eine kompakte Projektliste an — Bauherrschaft anonymisiert, dafür mit Auftragsvolumen, Nutzungsart, beteiligten Gewerken und deinem konkreten Verantwortungsbereich. Im Kanton St. Gallen prüfen viele Betriebe Bewerbungsdossiers explizit auf Kalkulationssicherheit (NPK, SIA-Normen) und Erfahrung mit MS Project oder Bauprogramm. Sehr gute Deutschkenntnisse inklusive Mundartverständnis sind für die Bauherren- und Architektenkommunikation Standard. Da Aufträge oft im ganzen Ostschweizer Raum verteilt sind, wird Mobilität geschätzt: Pendelradius, Führerausweis Kategorie B und Bereitschaft für Tagesbaustellenbesuche im Rheintal oder Toggenburg angeben. Im Vorstellungsgespräch werden Konfliktlösung, Termintreue, Subunternehmer-Steuerung und Erfahrung mit Mängelmanagement vertieft abgefragt.",
  },
};

export function getEditorialContent(
  roleSlug: string,
  cantonSlug: string
): EditorialContent | null {
  return ENTRIES[`${roleSlug}::${cantonSlug}`] ?? null;
}

export const EDITORIAL_BYLINE = {
  name: "Redaktion bodenlegerjob.ch",
  href: "/team",
  /** ISO date — formatted at render time */
  publishedAt: "2026-05-02",
} as const;
