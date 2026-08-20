import { cn } from "@/lib/utils";

interface SiteBrandProps {
  className?: string;
  inverse?: boolean;
}

/** A compact four-material sample atlas; no external brand asset. */
export function SiteBrand({ className, inverse = false }: SiteBrandProps) {
  return (
    <span
      className={cn("site-brand", inverse && "site-brand--inverse", className)}
      role="img"
      aria-label="bodenlegerjob.ch"
    >
      <svg
        className="site-brand__mark"
        viewBox="0 0 42 42"
        aria-hidden="true"
        focusable="false"
      >
        <rect x="4" y="4" width="15" height="15" />
        <rect x="23" y="4" width="15" height="15" />
        <rect x="4" y="23" width="15" height="15" />
        <path d="M23 23h15v15H23zM8 8l7 7m12-7 7 7M8 34l7-7m12 7 7-7" />
      </svg>
      <span className="site-brand__type">
        <strong>bodenleger</strong>
        <span>job.ch</span>
      </span>
    </span>
  );
}
