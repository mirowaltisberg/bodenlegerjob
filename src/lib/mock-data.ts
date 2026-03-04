export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string; // e.g. "Full-time", "Part-time"
  workload: string; // e.g. "80-100%"
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  datePosted: string;
  isUrgent?: boolean;
  isNew?: boolean;
}

export const mockJobs: Job[] = [
  {
    id: "1",
    title: "Bodenleger EFZ (m/w/d)",
    company: "Parkett Design AG",
    location: "Zürich, ZH",
    type: "Full-time",
    workload: "100%",
    description: "Wir suchen einen engagierten Bodenleger für spannende Neubau- und Renovationsprojekte im Raum Zürich.",
    responsibilities: [
      "Verlegen von Parkett, Laminat und Vinylböden",
      "Vorbereiten des Untergrunds inkl. Spachteln und Nivellieren",
      "Zuschneiden und Einpassen von Bodenbelägen",
      "Dokumentation der ausgeführten Arbeiten"
    ],
    requirements: [
      "Abgeschlossene Lehre als Bodenleger EFZ",
      "Einige Jahre Berufserfahrung von Vorteil",
      "Gute Deutschkenntnisse",
      "Führerausweis Kategorie B"
    ],
    benefits: [
      "Überdurchschnittliches Gehalt",
      "Modernes Firmenfahrzeug",
      "5 Wochen Ferien",
      "Weiterbildungsmöglichkeiten"
    ],
    datePosted: "2026-02-24",
    isNew: true,
  },
  {
    id: "2",
    title: "Parkettleger EFZ",
    company: "Holzboden GmbH",
    location: "Bern, BE",
    type: "Full-time",
    workload: "80-100%",
    description: "Unterstützen Sie unser Team bei der Verlegung hochwertiger Parkettböden in Wohn- und Gewerbebauten.",
    responsibilities: [
      "Verlegen von Massivparkett und Fertigparkett",
      "Schleifen und Versiegeln von Holzböden",
      "Restauration von bestehenden Parkettböden",
      "Sockelleisten-Montage und Abschlussarbeiten"
    ],
    requirements: [
      "Abgeschlossene Ausbildung als Parkettleger EFZ",
      "Handwerkliches Geschick und Zuverlässigkeit",
      "Teamfähigkeit und genaue Arbeitsweise"
    ],
    benefits: [
      "Junges und dynamisches Team",
      "Flache Hierarchien",
      "Gute Sozialleistungen"
    ],
    datePosted: "2026-02-20",
  },
  {
    id: "3",
    title: "Projektleiter Bodenbeläge (w/m)",
    company: "Swiss Floor Systems SA",
    location: "Basel, BS",
    type: "Full-time",
    workload: "100%",
    description: "Leiten Sie anspruchsvolle Bodenprojekte von der Offerte über die Planung bis zur Übergabe.",
    responsibilities: [
      "Projektleitung von A bis Z inklusive Kostenkontrolle",
      "Kundenberatung und Offertenerstellung",
      "Führung der Verlege-Teams",
      "Qualitätssicherung und Abnahme"
    ],
    requirements: [
      "Weiterbildung zum Projektleiter oder gleichwertig",
      "Führungserfahrung in einer ähnlichen Position",
      "Kenntnisse verschiedener Bodenbelagssysteme",
      "Verhandlungsgeschick und souveränes Auftreten"
    ],
    benefits: [
      "Attraktives Bonusmodell",
      "Geschäftsauto auch zur privaten Nutzung",
      "Flexible Arbeitszeiten"
    ],
    datePosted: "2026-02-23",
    isUrgent: true,
  },
  {
    id: "4",
    title: "Plattenleger EFZ / Fliesenleger",
    company: "Fliesen Stein Group",
    location: "Luzern, LU",
    type: "Full-time",
    workload: "100%",
    description: "Sie verlegen Wand- und Bodenfliesen in Neubauten und Umbauten — von Naturstein bis Grossformat-Keramik.",
    responsibilities: [
      "Verlegen von Keramik-, Naturstein- und Mosaikplatten",
      "Vorbereiten und Abdichten von Untergründen",
      "Verfugen und Versiegeln",
      "Zuschneiden mit Nassschneidemaschine"
    ],
    requirements: [
      "Berufsabschluss als Plattenleger EFZ oder Fliesenleger",
      "Exaktes und sorgfältiges Arbeiten",
      "Selbständige und präzise Arbeitsweise"
    ],
    benefits: [
      "Moderne Werkzeuge und Maschinen",
      "Geregelte Arbeitszeiten",
      "Gute Anbindung an den ÖV"
    ],
    datePosted: "2026-02-18",
  },
  {
    id: "5",
    title: "Servicetechniker Bodenbeläge",
    company: "BodenService 24",
    location: "St. Gallen, SG",
    type: "Part-time",
    workload: "60-80%",
    description: "Als Servicetechniker führen Sie Reparatur- und Wartungsarbeiten an Bodenbelägen direkt beim Kunden durch.",
    responsibilities: [
      "Reparatur von beschädigten Bodenbelägen bei Privat- und Geschäftskunden",
      "Kleinere Ausbesserungen und Nachversiegelungen",
      "Beratung der Kunden zu Pflege und Unterhalt",
      "Zustandsbeurteilungen und Offerten vor Ort"
    ],
    requirements: [
      "Ausbildung als Bodenleger EFZ oder Parkettleger EFZ",
      "Freude am Kundenkontakt und gepflegtes Auftreten",
      "Lösungsorientierte Denkweise",
      "Gültiger Fahrausweis"
    ],
    benefits: [
      "Hohe Selbständigkeit",
      "Umfassend ausgerüstetes Servicefahrzeug",
      "Leistungsgerechte Entlöhnung"
    ],
    datePosted: "2026-02-25",
    isNew: true,
  }
];
