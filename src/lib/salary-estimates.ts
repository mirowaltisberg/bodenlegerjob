/**
 * Approximate annual CHF salary ranges for Swiss floor-laying trade roles.
 * Used when no salary data is available from the job source.
 */

export interface SalaryRange {
  min: number;
  max: number;
}

/**
 * Pattern → salary range mapping.
 * Checked top-to-bottom; first match wins, so put specific roles before generic ones.
 */
const ROLE_SALARY_MAP: { patterns: string[]; range: SalaryRange }[] = [
  // Leadership / senior roles
  {
    patterns: ["bauleiter"],
    range: { min: 85_000, max: 115_000 },
  },
  {
    patterns: ["projektleiter"],
    range: { min: 80_000, max: 105_000 },
  },
  // Planning / design
  {
    patterns: ["bodenbelagsplaner", "planer boden"],
    range: { min: 75_000, max: 95_000 },
  },
  // Specialized trades
  {
    patterns: ["industriebodenleger", "industrieboden"],
    range: { min: 68_000, max: 85_000 },
  },
  {
    patterns: ["oberflächenspezialist", "oberflaechen"],
    range: { min: 68_000, max: 85_000 },
  },
  {
    patterns: ["terrazzoleger", "terrazzo"],
    range: { min: 66_000, max: 82_000 },
  },
  // Core trades
  {
    patterns: ["parkettleger"],
    range: { min: 65_000, max: 82_000 },
  },
  {
    patterns: ["servicetechniker"],
    range: { min: 65_000, max: 82_000 },
  },
  {
    patterns: ["bodenleger"],
    range: { min: 65_000, max: 80_000 },
  },
  {
    patterns: ["plattenleger", "fliesenleger", "fliesen"],
    range: { min: 65_000, max: 80_000 },
  },
  {
    patterns: ["estrichleger", "estrich"],
    range: { min: 64_000, max: 80_000 },
  },
  {
    patterns: ["bodenbelagsmonteur", "belagsmonteur"],
    range: { min: 62_000, max: 78_000 },
  },
  // Broad fallbacks (keep last)
  {
    patterns: ["boden", "belag"],
    range: { min: 62_000, max: 80_000 },
  },
  {
    patterns: ["parkett"],
    range: { min: 65_000, max: 82_000 },
  },
  {
    patterns: ["techniker"],
    range: { min: 65_000, max: 85_000 },
  },
  {
    patterns: ["monteur"],
    range: { min: 60_000, max: 78_000 },
  },
];

/**
 * Estimate an annual CHF salary range from a job title.
 * Returns `null` when no pattern matches.
 */
export function estimateSalary(title: string): SalaryRange | null {
  const lower = title.toLowerCase();

  for (const entry of ROLE_SALARY_MAP) {
    for (const pattern of entry.patterns) {
      if (lower.includes(pattern)) {
        return entry.range;
      }
    }
  }

  return null;
}

/**
 * Format a salary range as a Swiss-locale string, e.g. "75'000 – 95'000".
 */
export function formatSalaryRange(range: SalaryRange): string {
  const fmt = (n: number) =>
    n.toLocaleString("de-CH", { maximumFractionDigits: 0 });
  return `${fmt(range.min)} – ${fmt(range.max)}`;
}
