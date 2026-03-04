// SEO-DECISION: Comprehensive landing page matrix covering 12 roles × 12 cantons = 144 combinations.
// Each page has unique title, description, intro text, and FAQs for content depth and
// geographic targeting without keyword cannibalization.

export interface LandingFaq {
  question: string;
  answer: string;
}

export interface LandingPageConfig {
  role: string;
  canton: string;
  title: string;
  description: string;
  intro: string;
  faqs: LandingFaq[];
}

// --- Role-specific content templates ---
// Used to generate unique content per role × canton combination.

interface RoleContent {
  /** Short role label for titles */
  label: string;
  /** Longer description of what this role does */
  roleDescription: string;
  /** Typical salary range string */
  salaryRange: string;
  /** Key requirements */
  requirements: string;
  /** Career progression options */
  career: string;
  /** Related roles */
  related: string[];
}

const ROLE_CONTENT: Record<string, RoleContent> = {
  "Bodenleger EFZ": {
    label: "Bodenleger EFZ",
    roleDescription:
      "Bodenleger EFZ verlegen und verarbeiten sämtliche Bodenbeläge in Wohn-, Gewerbe- und Industriebauten. Sie arbeiten mit Teppich, Vinyl, Linoleum, Laminat und Kautschuk, bereiten Untergründe vor und sorgen für einwandfreie Verlegequalität.",
    salaryRange: "CHF 65'000 – 80'000",
    requirements:
      "Abgeschlossene 3-jährige Lehre als Bodenleger EFZ, Kenntnisse der gängigen Bodenbelagsmaterialien und Verlegetechniken, handwerkliches Geschick, Fahrausweis Kategorie B.",
    career:
      "Weiterbildung zum Vorarbeiter, Bodenbelagsplaner oder eidg. dipl. Bodenbelagsmeister. Spezialisierung auf Industrie- oder Sportböden möglich.",
    related: ["Parkettleger EFZ", "Plattenleger EFZ", "Bodenbelagsmonteur"],
  },
  "Parkettleger EFZ": {
    label: "Parkettleger EFZ",
    roleDescription:
      "Parkettleger EFZ verlegen, schleifen und versiegeln Holzböden aller Art — von Massivparkett über Fertigparkett bis zu exotischen Hölzern. Sie beraten Kunden bei Holzauswahl und Pflege und führen präzise Verlegemuster aus.",
    salaryRange: "CHF 65'000 – 82'000",
    requirements:
      "Abgeschlossene 3-jährige Lehre als Parkettleger EFZ, Kenntnisse in Holzkunde und Oberflächenbehandlung, präzises handwerkliches Arbeiten, Fahrausweis Kategorie B.",
    career:
      "Spezialisierung auf historische Böden, Restaurierung oder exotische Holzarten. Weiterbildung zum Bodenbelagsmeister oder Betriebsleiter.",
    related: ["Bodenleger EFZ", "Oberflächenspezialist", "Bodenbelagsplaner"],
  },
  "Plattenleger EFZ": {
    label: "Plattenleger EFZ",
    roleDescription:
      "Plattenleger EFZ verlegen keramische Fliesen, Naturstein und Feinsteinzeug in Bädern, Küchen, Aussenanlagen und öffentlichen Gebäuden. Sie bereiten Untergründe vor, setzen Fliesen präzise und führen Fugenarbeiten fachgerecht aus.",
    salaryRange: "CHF 65'000 – 80'000",
    requirements:
      "Abgeschlossene 3-jährige Lehre als Plattenleger EFZ, Kenntnisse in Untergrundbau und Verlegemörteln, gutes Augenmaß und Sinn für Ästhetik, Fahrausweis Kategorie B.",
    career:
      "Weiterbildung zum Vorarbeiter oder Projektleiter. Spezialisierung auf Naturstein, Grossformatplatten oder Aussenbeläge.",
    related: ["Bodenleger EFZ", "Terrazzoleger", "Estrichleger"],
  },
  "Bodenbelagsmonteur": {
    label: "Bodenbelagsmonteur",
    roleDescription:
      "Bodenbelagsmonteure verlegen und montieren industriell gefertigte Bodenbelagssysteme wie Laminat, Designbeläge und Fertigparkett. Sie arbeiten auf Baustellen und in bestehenden Gebäuden und sorgen für termingerechte Fertigstellung.",
    salaryRange: "CHF 62'000 – 78'000",
    requirements:
      "Ausbildung im Bodenbelagsbereich (EFZ oder gleichwertig), handwerkliches Geschick, körperliche Belastbarkeit, Teamfähigkeit.",
    career:
      "Weiterbildung zum Bodenleger EFZ, Vorarbeiter oder Spezialisierung auf bestimmte Bodenbelagstypen.",
    related: ["Bodenleger EFZ", "Parkettleger EFZ", "Servicetechniker Bodenbeläge"],
  },
  "Projektleiter Bodenbeläge": {
    label: "Projektleiter Bodenbeläge",
    roleDescription:
      "Projektleiter Bodenbeläge leiten Bodenbelagsprojekte von der Offertstellung über die Planung bis zur Übergabe. Sie führen Verlegeteams, kontrollieren Kosten und Termine, koordinieren Materiallieferungen und beraten Bauherren und Architekten.",
    salaryRange: "CHF 80'000 – 105'000",
    requirements:
      "Weiterbildung zum Bodenbelagsplaner oder Projektleiter, mehrjährige Berufserfahrung als Bodenleger EFZ, Führungserfahrung, Kenntnisse in Kalkulation und Baukoordination.",
    career:
      "Aufstieg zum Bereichsleiter, Geschäftsführer oder Gründung eines eigenen Bodenbelagsbetriebs.",
    related: ["Bauleiter Bodenbeläge", "Bodenbelagsplaner", "Bodenleger EFZ"],
  },
  "Estrichleger": {
    label: "Estrichleger",
    roleDescription:
      "Estrichleger stellen Unterlagsboden aus Zement, Anhydrit oder Kunstharz her. Sie bereiten den Rohboden vor, verlegen Dämmschichten, schütten und glätten den Estrich und schaffen damit die Grundlage für alle nachfolgenden Bodenbeläge.",
    salaryRange: "CHF 64'000 – 80'000",
    requirements:
      "Ausbildung als Estrichleger EFZ oder vergleichbare Erfahrung, Kenntnisse in Mörteltechnik und Dämmung, körperliche Belastbarkeit, Fahrausweis Kategorie B.",
    career:
      "Weiterbildung zum Vorarbeiter oder Spezialisierung auf Industrieestrich, Fliessestrich oder beheizbare Estrichsysteme.",
    related: ["Bodenleger EFZ", "Plattenleger EFZ", "Industriebodenleger"],
  },
  "Bauleiter Bodenbeläge": {
    label: "Bauleiter Bodenbeläge",
    roleDescription:
      "Bauleiter Bodenbeläge koordinieren und überwachen Bodenbelagsarbeiten auf Grossbaustellen. Sie sind verantwortlich für Terminplanung, Kostenkontrolle, Qualitätssicherung und die Führung von Eigen- und Subunternehmerpersonal.",
    salaryRange: "CHF 85'000 – 115'000",
    requirements:
      "Weiterbildung zum Bodenbelagsmeister oder Bauleiter, mehrjährige Berufserfahrung im Bodenbereich, ausgeprägte Führungskompetenz und Organisationsstärke.",
    career:
      "Aufstieg zum Gesamtprojektleiter, Niederlassungsleiter oder Geschäftsführer eines Bodenbelagsunternehmens.",
    related: ["Projektleiter Bodenbeläge", "Bodenbelagsplaner", "Bodenleger EFZ"],
  },
  "Industriebodenleger": {
    label: "Industriebodenleger",
    roleDescription:
      "Industriebodenleger verarbeiten hochbelastbare Bodenbeschichtungen und Belagsysteme aus Kunstharz, Epoxid oder Polyurethan in Fabriken, Lagerhallen und Gewerbebetrieben. Sie bereiten Betonflächen vor und applizieren mehrschichtige Beschichtungssysteme.",
    salaryRange: "CHF 68'000 – 85'000",
    requirements:
      "Ausbildung als Bodenleger EFZ oder Malerpraktiker, Kenntnisse in Betonvorbereitung und Beschichtungstechnik, Erfahrung mit industriellen Verarbeitungssystemen.",
    career:
      "Spezialisierung auf ESD-Böden, chemisch beständige Beschichtungen oder Sportböden. Weiterbildung zum Beschichtungsspezialist.",
    related: ["Bodenleger EFZ", "Estrichleger", "Oberflächenspezialist"],
  },
  "Terrazzoleger": {
    label: "Terrazzoleger",
    roleDescription:
      "Terrazzoleger stellen und verlegen traditionellen und modernen Terrazzoboden aus Zement, Naturstein und Harzmischungen. Sie beherrschen historische Handwerkstechniken ebenso wie moderne Giessverfahren und erzielen hochwertige, individuelle Oberflächen.",
    salaryRange: "CHF 66'000 – 82'000",
    requirements:
      "Ausbildung als Bodenleger EFZ oder Terrazzoleger, handwerkliches Feingefühl, Kenntnisse in Steinkunde und Oberflächenveredelung, Sinn für Gestaltung.",
    career:
      "Spezialisierung auf Restaurierung historischer Böden, Kunsthandwerk oder Luxusobjekte. Gefragte Nischenkompetenz mit überdurchschnittlichen Verdienstmöglichkeiten.",
    related: ["Parkettleger EFZ", "Plattenleger EFZ", "Oberflächenspezialist"],
  },
  "Bodenbelagsplaner": {
    label: "Bodenbelagsplaner",
    roleDescription:
      "Bodenbelagsplaner erstellen Ausführungspläne und Leistungsverzeichnisse für Bodenbelagsprojekte. Sie beraten Architekten und Bauherren bei Materialwahl, berechnen Mengen und Kosten und begleiten die Ausführung von der Planung bis zur Abnahme.",
    salaryRange: "CHF 75'000 – 95'000",
    requirements:
      "Ausbildung als Bodenleger EFZ mit Weiterbildung zum Bodenbelagsplaner, CAD-Kenntnisse, Verständnis für Raumgestaltung und Materialeigenschaften.",
    career:
      "Aufstieg zum Projektleiter oder Planungsleiter. Spezialisierung auf nachhaltige Bodenbeläge oder Objektberatung für Architektur- und Planungsbüros.",
    related: ["Projektleiter Bodenbeläge", "Bauleiter Bodenbeläge", "Bodenleger EFZ"],
  },
  "Servicetechniker Bodenbeläge": {
    label: "Servicetechniker Bodenbeläge",
    roleDescription:
      "Servicetechniker Bodenbeläge führen Reparaturen, Nachbesserungen und Pflegearbeiten an bestehenden Bodenbelägen durch. Sie analysieren Schäden, beraten Kunden zu Pflege und Instandhaltung und erledigen Aufträge selbstständig mit eigenem Servicefahrzeug.",
    salaryRange: "CHF 65'000 – 82'000",
    requirements:
      "Ausbildung als Bodenleger EFZ, Freude am Kundenkontakt, selbstständige und lösungsorientierte Arbeitsweise, Fahrausweis Kategorie B.",
    career:
      "Spezialisierung auf Holzbodenpflege, Kunstharzböden oder Garantie- und Reklamationsmanagement. Weiterbildung zum Kundendienstleiter.",
    related: ["Bodenleger EFZ", "Parkettleger EFZ", "Oberflächenspezialist"],
  },
  "Oberflächenspezialist": {
    label: "Oberflächenspezialist",
    roleDescription:
      "Oberflächenspezialisten behandeln und veredeln Bodenoberflächen durch Schleifen, Ölen, Wachsen, Lackieren und Versiegeln. Sie arbeiten mit Holz-, Stein- und Betonoberflächen und erzielen hochwertige Ergebnisse für Wohn- und Gewerbeobjekte.",
    salaryRange: "CHF 68'000 – 85'000",
    requirements:
      "Ausbildung als Parkettleger EFZ oder Bodenleger EFZ, vertiefte Kenntnisse in Schleif- und Beschichtungstechnik, Gespür für Materialeigenschaften und Kundenwünsche.",
    career:
      "Spezialisierung auf Betonoptik, Mikrozement oder historische Oberflächenrestaurierung. Gefragte Expertise in der hochwertigen Innenraumgestaltung.",
    related: ["Parkettleger EFZ", "Industriebodenleger", "Terrazzoleger"],
  },
};

// --- Canton-specific content ---

interface CantonContent {
  /** Full canton name for titles */
  name: string;
  /** Short canton abbreviation */
  abbr: string;
  /** Brief economic context for the flooring industry */
  context: string;
}

const CANTON_CONTENT: Record<string, CantonContent> = {
  ZH: {
    name: "Zürich",
    abbr: "ZH",
    context:
      "Der Kanton Zürich ist der grösste Arbeitsmarkt der Schweiz mit zahlreichen Neubauprojekten, Sanierungen und einer hohen Dichte an Bodenbelagsunternehmen — von spezialisierten Handwerksbetrieben bis zu grossen Bodenbelagsgruppen.",
  },
  BE: {
    name: "Bern",
    abbr: "BE",
    context:
      "Im Kanton Bern gibt es eine starke Nachfrage nach Bodenbelagsfachkräften, besonders in der Bundesstadt und im Berner Oberland — von Wohnungssanierungen über öffentliche Bauten bis zu Hotelrenovationen.",
  },
  BS: {
    name: "Basel",
    abbr: "BS",
    context:
      "Basel-Stadt und die Region Nordwestschweiz bieten attraktive Arbeitsbedingungen mit zahlreichen Industrie- und Gewerbeobjekten, Pharmaunternehmen und anspruchsvollen Neubauprojekten, die hochwertige Bodenbelagslösungen erfordern.",
  },
  AG: {
    name: "Aargau",
    abbr: "AG",
    context:
      "Der Kanton Aargau ist ein bedeutender Industriestandort mit vielen Gewerbebauten und einer konstant hohen Nachfrage nach Bodenbelagsfachkräften für Wohn-, Industrie- und Gewerbeprojekte.",
  },
  SG: {
    name: "St. Gallen",
    abbr: "SG",
    context:
      "Die Ostschweiz mit dem Kanton St. Gallen bietet vielfältige Möglichkeiten für Bodenbelagsfachkräfte — von traditionellen Handwerksbetrieben bis zu spezialisierten Unternehmen für Industrie- und Sportböden.",
  },
  LU: {
    name: "Luzern",
    abbr: "LU",
    context:
      "Im Kanton Luzern wächst die Nachfrage nach Bodenbelagsfachkräften stetig — getrieben durch Neubauprojekte, Hotelsanierungen in der Tourismusregion und zunehmend anspruchsvolle Wohnbauvorhaben.",
  },
  SO: {
    name: "Solothurn",
    abbr: "SO",
    context:
      "Der Kanton Solothurn bietet als Industriestandort zwischen Bern und Basel gute Karrierechancen für Bodenbelagsfachkräfte in Produktion, Wohnungsbau und gewerblichen Sanierungsprojekten.",
  },
  ZG: {
    name: "Zug",
    abbr: "ZG",
    context:
      "Der Kanton Zug bietet als wirtschaftsstarker Standort überdurchschnittliche Löhne und anspruchsvolle Projekte im Bereich hochwertiger Bodenbeläge — von Luxuswohnungen bis zu Firmenhauptsitzen internationaler Unternehmen.",
  },
  TG: {
    name: "Thurgau",
    abbr: "TG",
    context:
      "Der Kanton Thurgau bietet als wachsender Wirtschaftsstandort in der Ostschweiz zunehmend Chancen für Bodenbelagsfachkräfte — besonders in Industrie, Wohnungsbau und gewerblichen Neubauten.",
  },
  GR: {
    name: "Graubünden",
    abbr: "GR",
    context:
      "Im Kanton Graubünden sind Bodenbelagsfachkräfte besonders gefragt — von Hotelrenovationen in renommierten Ferienorten über Bergbahninfrastruktur bis zu hochwertigen Chaletbauten in den Tourismusdestinationen.",
  },
  SH: {
    name: "Schaffhausen",
    abbr: "SH",
    context:
      "Der Kanton Schaffhausen bietet als kompakter Industriestandort attraktive Stellen für Bodenbelagsfachkräfte, insbesondere in der Maschinenindustrie, im Gewerbebau und bei Wohnbausanierungen.",
  },
  FR: {
    name: "Fribourg",
    abbr: "FR",
    context:
      "Der zweisprachige Kanton Fribourg wächst dynamisch und bietet Bodenbelagsfachkräften vielfältige Möglichkeiten in Wohnungsbau, gewerblichen Projekten und öffentlicher Infrastruktur.",
  },
};

// --- All role keys ---
const ALL_ROLES = Object.keys(ROLE_CONTENT);
const ALL_CANTONS = Object.keys(CANTON_CONTENT);

// --- Content generation ---

function buildLandingConfig(roleKey: string, cantonKey: string): LandingPageConfig {
  const role = ROLE_CONTENT[roleKey];
  const canton = CANTON_CONTENT[cantonKey];

  if (!role || !canton) {
    throw new Error(`Invalid role "${roleKey}" or canton "${cantonKey}"`);
  }

  const relatedRolesList = role.related.join(", ");

  return {
    role: roleKey,
    canton: cantonKey,
    title: `${role.label} Jobs in ${canton.name}`,
    description: `Aktuelle ${role.label} Stellen im Kanton ${canton.name}. ${role.roleDescription.split(".")[0]}. Jetzt bewerben auf bodenlegerjob.ch.`,
    intro: `Als ${role.label} in ${canton.name} findest du auf bodenlegerjob.ch alle aktuellen Stellenangebote in deiner Region. ${role.roleDescription} ${canton.context} Die Nachfrage nach qualifizierten ${role.label}-Fachkräften im Kanton ${canton.name} ist hoch — Arbeitgeber suchen gezielt nach Kandidaten mit ${role.requirements.split(",")[0].toLowerCase()}. Das durchschnittliche Jahresgehalt für ${role.label} in der Schweiz liegt bei ${role.salaryRange}. Verwandte Berufe wie ${relatedRolesList} bieten zusätzliche Karrieremöglichkeiten in der Bodenbelagsbranche. ${role.career} Nutze unsere smarte Filterung nach Pensum, Umkreis und Anstellungsart, um die passende Stelle zu finden. Bewirb dich direkt online und lade deinen Lebenslauf hoch.`,
    faqs: [
      {
        question: `Was verdient ein ${role.label} im Kanton ${canton.name}?`,
        answer: `Ein ${role.label} verdient in der Schweiz durchschnittlich ${role.salaryRange} pro Jahr. Im Kanton ${canton.name} können die Löhne je nach Arbeitgeber, Erfahrung und Spezialisierung variieren.`,
      },
      {
        question: `Welche Voraussetzungen braucht man als ${role.label}?`,
        answer: role.requirements,
      },
      {
        question: `Welche Karrieremöglichkeiten hat ein ${role.label}?`,
        answer: role.career,
      },
      {
        question: `Wie viele ${role.label} Jobs gibt es in ${canton.name}?`,
        answer: `Auf bodenlegerjob.ch findest du aktuelle ${role.label} Stellen im Kanton ${canton.name}. Die Anzahl verfügbarer Jobs variiert — nutze unsere Suche für die aktuellsten Ergebnisse.`,
      },
    ],
  };
}

// --- Build full matrix ---
export const TOP_LANDING_PAGES: LandingPageConfig[] = ALL_ROLES.flatMap((roleKey) =>
  ALL_CANTONS.map((cantonKey) => buildLandingConfig(roleKey, cantonKey))
);

// --- Slug helpers ---

function normalizeSlug(value: string): string {
  return value
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function toRoleSlug(role: string): string {
  return normalizeSlug(role);
}

export function toCantonSlug(canton: string): string {
  return normalizeSlug(canton);
}

export function getLandingPath(config: LandingPageConfig): string {
  return `/bodenlegerjobs/${toRoleSlug(config.role)}/${toCantonSlug(config.canton)}`;
}

export function findLandingPageBySlug(roleSlug: string, cantonSlug: string): LandingPageConfig | null {
  return (
    TOP_LANDING_PAGES.find(
      (item) => toRoleSlug(item.role) === roleSlug && toCantonSlug(item.canton) === cantonSlug
    ) ?? null
  );
}

/**
 * Get landing pages for the same canton (different roles) or same role (different cantons).
 * Used for cross-linking on landing pages.
 */
export function getRelatedLandingPages(config: LandingPageConfig, limit = 8): LandingPageConfig[] {
  const sameCantonDifferentRole = TOP_LANDING_PAGES.filter(
    (p) => p.canton === config.canton && p.role !== config.role
  );
  const sameRoleDifferentCanton = TOP_LANDING_PAGES.filter(
    (p) => p.role === config.role && p.canton !== config.canton
  );

  // Mix: take some from same canton, some from same role
  const mixed: LandingPageConfig[] = [];
  const maxPerGroup = Math.ceil(limit / 2);
  mixed.push(...sameCantonDifferentRole.slice(0, maxPerGroup));
  mixed.push(...sameRoleDifferentCanton.slice(0, maxPerGroup));
  return mixed.slice(0, limit);
}
