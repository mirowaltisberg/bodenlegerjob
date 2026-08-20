import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Boden-Parkettleger Ausbildung Schweiz | EFZ",
  description:
    "Offizielle Grundlagen zur dreijährigen Ausbildung Boden-Parkettleger/in EFZ in der Schweiz.",
  alternates: { canonical: "/bodenleger-ausbildung" },
  openGraph: {
    title: "Boden-Parkettleger Ausbildung Schweiz | EFZ",
    description:
      "Offizielle Grundlagen zur dreijährigen Ausbildung Boden-Parkettleger/in EFZ in der Schweiz.",
    url: "/bodenleger-ausbildung",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boden-Parkettleger Ausbildung Schweiz | EFZ",
    description:
      "Offizielle Grundlagen zur dreijährigen Ausbildung Boden-Parkettleger/in EFZ in der Schweiz.",
  },
};

export const revalidate = 86400;

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://bodenlegerjob.ch";
const REVIEW_DATE = "20. August 2026";

const FAQS = [
  {
    question: "Wie lange dauert die Lehre Boden-Parkettleger/in EFZ?",
    answer:
      "Das offizielle Berufsprofil von berufsberatung.ch nennt eine Dauer von drei Jahren. Der Abschluss ist das eidgenössische Fähigkeitszeugnis EFZ mit Angabe der Fachrichtung.",
  },
  {
    question: "Welche schulische Voraussetzung gilt?",
    answer:
      "berufsberatung.ch nennt als Zulassung die abgeschlossene obligatorische Schule. Lehrbetriebe können im Auswahlverfahren zusätzliche Anforderungen stellen; diese sind nicht schweizweit einheitlich zugesichert.",
  },
  {
    question: "Wie ist die Ausbildung organisiert?",
    answer:
      "Laut Berufsprofil findet die praktische Ausbildung vier Tage pro Woche in einem Fachgeschäft für Bodenbeläge, Parkett oder Innendekoration statt. Ein Tag pro Woche ist für die Berufsfachschule vorgesehen; hinzu kommen überbetriebliche Kurse.",
  },
  {
    question: "Welche Fachrichtungen gibt es?",
    answer:
      "Das offizielle Berufsprofil nennt die Fachrichtungen textile und elastische Beläge sowie Parkett. Die Fachrichtung wird im EFZ ausgewiesen.",
  },
  {
    question: "Welche Weiterbildungen nennt das offizielle Berufsprofil?",
    answer:
      "berufsberatung.ch nennt Kurse von BodenSchweiz, die Berufsprüfungen Chefbodenleger/in BP und Bodenbelagsberater/in BP sowie die höhere Fachprüfung Bodenlegermeister/in HFP. Für jeden Abschluss gelten eigene Zulassungsbedingungen.",
  },
  {
    question: "Wo finde ich Lehrstellen?",
    answer:
      "Die offizielle Lehrstellensuche von berufsberatung.ch listet Lehrstellen nach Beruf und Region. Zusätzlich können Lehrbetriebe eigene Ausschreibungen publizieren. bodenlegerjob.ch verspricht keine vollständige Lehrstellenabdeckung.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Startseite", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Bodenleger Ausbildung",
      item: `${SITE_URL}/bodenleger-ausbildung`,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function AusbildungPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      <main id="main-content" className="bg-background">
        <section className="trade-hero">
          <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 max-w-4xl">
            <nav className="text-sm text-slate-500 mb-3" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-primary">Startseite</Link>
              <span className="mx-2">/</span>
              <span className="text-slate-700">Bodenleger Ausbildung</span>
            </nav>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight mb-4">
              Ausbildung <span className="text-primary">Boden-Parkettleger/in EFZ</span>
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed max-w-3xl">
              Dauer, Organisation und Anschlusswege auf Basis offizieller
              Schweizer Berufsbildungsquellen.
            </p>
            <p className="mt-4 text-sm text-slate-500">Quellen geprüft am {REVIEW_DATE}.</p>
          </div>
        </section>

        <section className="container mx-auto px-4 sm:px-6 py-10 max-w-4xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Die EFZ-Grundbildung</h2>
          <p className="text-slate-600 mb-3 leading-relaxed">
            Die berufliche Grundbildung Boden-Parkettleger/in EFZ dauert drei
            Jahre. berufsberatung.ch nennt als Zulassung die abgeschlossene
            obligatorische Schule und als Abschluss das eidgenössische
            Fähigkeitszeugnis EFZ.
          </p>
          <p className="text-slate-600 mb-3 leading-relaxed">
            Das Berufsprofil beschreibt die Ausbildung an drei Lernorten: im
            Lehrbetrieb, an der Berufsfachschule und in überbetrieblichen Kursen.
            Als Richtaufteilung werden vier Tage pro Woche im Betrieb und ein Tag
            pro Woche an der Schule genannt.
          </p>
          <a
            href="https://www.berufsberatung.ch/de/berufe/boden-parkettleger-in-efz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            Quelle: berufsberatung.ch – Boden-Parkettleger/in EFZ
          </a>
        </section>

        <section className="editorial-surface border-y">
          <div className="container mx-auto px-4 sm:px-6 py-10 max-w-4xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Zwei Fachrichtungen im EFZ</h2>
            <p className="text-slate-600 mb-3 leading-relaxed">
              Das offizielle Berufsprofil unterscheidet die Fachrichtungen
              textile und elastische Beläge sowie Parkett. Beide verbinden die
              Untergrundvorbereitung mit präziser Verlegearbeit; Material und
              Oberflächenbehandlung unterscheiden sich je nach Fachrichtung.
            </p>
            <a
              href="https://www.berufsberatung.ch/de/berufe/boden-parkettleger-in-efz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              Fachrichtungen im offiziellen Berufsprofil prüfen
            </a>
          </div>
        </section>

        <section className="container mx-auto px-4 sm:px-6 py-10 max-w-4xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Weiterbildung nach dem EFZ</h2>
          <ul className="space-y-3 text-slate-700 mb-5">
            <li className="trade-panel p-4">
              <strong className="text-slate-900">Kurse</strong> — Angebote von BodenSchweiz und Berufsfachschulen; Inhalt und Zulassung unterscheiden sich je nach Kurs.
            </li>
            <li className="trade-panel p-4">
              <strong className="text-slate-900">Berufsprüfung</strong> — Chefbodenleger/in BP oder Bodenbelagsberater/in BP gemäss offiziellem Berufsprofil.
            </li>
            <li className="trade-panel p-4">
              <strong className="text-slate-900">Höhere Fachprüfung</strong> — Bodenlegermeister/in HFP gemäss offiziellem Berufsprofil.
            </li>
          </ul>
          <a
            href="https://www.berufsberatung.ch/de/berufe/boden-parkettleger-in-efz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            Weiterbildung im offiziellen Berufsprofil
          </a>
        </section>

        <section className="editorial-surface border-y">
          <div className="container mx-auto px-4 sm:px-6 py-10 max-w-4xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Lehrlingslohn</h2>
            <p className="text-slate-600 leading-relaxed mb-3">
              Das am Prüfdatum aktuelle Berufsprofil nennt monatliche
              Empfehlungen von CHF 850 im ersten, CHF 1’050 im zweiten und CHF
              1’300 im dritten Lehrjahr. Das sind
              Empfehlungen und keine Zusicherung für jeden Lehrvertrag.
            </p>
            <Link href="/lohn-bodenleger-schweiz" className="text-primary underline">
              Lohnquellen und Methodik ansehen
            </Link>
          </div>
        </section>

        <section className="container mx-auto px-4 sm:px-6 py-10 max-w-4xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-5">Häufig gestellte Fragen</h2>
          <div className="space-y-3">
            {FAQS.map((faq) => (
              <details key={faq.question} className="faq-item group overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50">
                  {faq.question}
                  <span className="ml-2 shrink-0 text-slate-400 transition-transform group-open:rotate-180" aria-hidden>▾</span>
                </summary>
                <div className="px-4 pb-4 text-sm text-slate-600 leading-relaxed">{faq.answer}</div>
              </details>
            ))}
          </div>
        </section>

        <section className="bg-primary/5 border-t">
          <div className="container mx-auto px-4 sm:px-6 py-10 max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Nach dem Abschluss Stellen suchen</h2>
            <p className="text-slate-600 mb-5">
              Durchsuche den aktuell verfügbaren Inseratebestand nach
              Bodenbelagstellen.
            </p>
            <Button asChild>
              <Link href="/">Stellen durchsuchen</Link>
            </Button>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
