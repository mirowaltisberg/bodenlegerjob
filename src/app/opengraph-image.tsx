import { ImageResponse } from "next/og";

export const alt = "bodenlegerjob.ch — Bodenlegerjobs Schweiz";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Floor planks icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="120"
          height="120"
          style={{ marginBottom: 32 }}
        >
          <rect x="8" y="6" width="8" height="36" rx="2" fill="#c17a3a" transform="rotate(-8 12 24)"/>
          <rect x="20" y="3" width="8" height="42" rx="2" fill="#c17a3a"/>
          <rect x="32" y="6" width="8" height="36" rx="2" fill="#c17a3a" transform="rotate(8 36 24)"/>
        </svg>

        {/* Brand name */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 0,
          }}
        >
          <span style={{ fontSize: 72, fontWeight: 900, color: "#f8fafc", letterSpacing: -1 }}>
            Bodenleger
          </span>
          <span style={{ fontSize: 72, fontWeight: 900, color: "#c17a3a", letterSpacing: -1 }}>
            job
          </span>
          <span style={{ fontSize: 52, fontWeight: 400, color: "#94a3b8", letterSpacing: -1 }}>
            .ch
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            color: "#94a3b8",
            marginTop: 20,
            letterSpacing: 0.5,
          }}
        >
          Die Jobbörse für Bodenleger-Fachkräfte in der Schweiz
        </div>
      </div>
    ),
    { ...size }
  );
}
