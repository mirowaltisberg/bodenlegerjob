export interface BodenlegerCity {
  slug: string;
  name: string;
  cantonAbbr: string;
  cantonSlug: string;
  population: string;
  intro: string;
  districts: string[];
  commuterTowns: string[];
  region: string;
  salaryBand: string;
}

export const BODENLEGER_CITIES: BodenlegerCity[] = [
  {
    slug: "zuerich",
    name: "Zürich",
    cantonAbbr: "ZH",
    cantonSlug: "zuerich",
    population: "ca. 440'000",
    region: "Grossraum Zürich",
    intro:
      "Zürich hat den dichtesten Markt für Bodenleger und Plattenleger der Schweiz — Wohnbau-Boom, Bürorenovationen und Hotelausbauten treiben Aufträge das ganze Jahr.",
    districts: ["City", "Oerlikon", "Altstetten", "Wiedikon", "Schwamendingen", "Affoltern"],
    commuterTowns: ["Winterthur", "Uster", "Dübendorf", "Wetzikon", "Wädenswil", "Bülach"],
    salaryBand: "CHF 68'000 – 90'000",
  },
  {
    slug: "basel",
    name: "Basel",
    cantonAbbr: "BS",
    cantonSlug: "basel",
    population: "ca. 175'000",
    region: "Nordwestschweiz",
    intro:
      "Basel ist Pharma- und Chemiestandort der Schweiz. Roche, Novartis, Syngenta und ihre Zulieferer beschäftigen Bodenleger-Fachkräfte mit überdurchschnittlichen Saläre. Der grenznahe Markt zu Frankreich und Deutschland macht trinationale Karrieren attraktiv.",
    districts: ["Innenstadt", "Kleinbasel", "Gundeldingen", "Bachletten", "St. Johann"],
    commuterTowns: ["Liestal", "Allschwil", "Münchenstein", "Riehen", "Reinach", "Pratteln"],
    salaryBand: "CHF 66'000 – 87'000",
  },
  {
    slug: "bern",
    name: "Bern",
    cantonAbbr: "BE",
    cantonSlug: "bern",
    population: "ca. 145'000",
    region: "Mittelland",
    intro:
      "Bern vereint Bundesverwaltung, kantonale Bauämter und ein breites Spektrum an Gewerbe- und Wohnbauprojekten. Bodenleger-Aufträge im öffentlichen Bau sind stabil und ganzjährig vorhanden, mit Lohnniveaus auf Schweizer Mittel.",
    districts: ["Innenstadt", "Länggasse", "Breitenrain", "Wankdorf", "Bümpliz"],
    commuterTowns: ["Biel", "Thun", "Köniz", "Münsingen", "Burgdorf", "Lyss"],
    salaryBand: "CHF 62'000 – 82'000",
  },
  {
    slug: "luzern",
    name: "Luzern",
    cantonAbbr: "LU",
    cantonSlug: "luzern",
    population: "ca. 83'000",
    region: "Zentralschweiz",
    intro:
      "Luzern wächst dynamisch — Tourismus-Infrastruktur (Hotels, Bergbahnen, KKL), Gewerbe in Emmen/Kriens und der Wohnbau-Boom in der Seeregion treiben die Nachfrage nach Bodenleger-Fachkräften. Die Nähe zu Zug eröffnet zusätzlich Pendelchancen mit Top-Saläre.",
    districts: ["Innenstadt", "Tribschen", "Sentimatt", "Würzenbach", "Maihof"],
    commuterTowns: ["Emmen", "Kriens", "Sursee", "Hochdorf", "Stans", "Zug"],
    salaryBand: "CHF 61'000 – 81'000",
  },
  {
    slug: "st-gallen",
    name: "St. Gallen",
    cantonAbbr: "SG",
    cantonSlug: "st-gallen",
    population: "ca. 80'000",
    region: "Ostschweiz",
    intro:
      "St. Gallen ist Industriestandort und Tor zur Ostschweiz. Maschinenindustrie, Lebensmittelverarbeitung (Bühler-Cluster) und ein wachsender Bildungssektor beschäftigen Bodenleger-Fachkräfte in stabilen Festanstellungen. Saläre liegen leicht unter dem Schweizer Mittel, dafür sind Mietpreise tiefer.",
    districts: ["Innenstadt", "St. Fiden", "Bruggen", "Riethüsli", "Heiligkreuz"],
    commuterTowns: ["Wil", "Rorschach", "Gossau", "Herisau", "Rapperswil", "Buchs SG"],
    salaryBand: "CHF 58'000 – 77'000",
  },
];

export function findBodenlegerCity(slug: string): BodenlegerCity | null {
  return BODENLEGER_CITIES.find((c) => c.slug === slug) ?? null;
}
