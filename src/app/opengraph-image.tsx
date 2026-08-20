import { ImageResponse } from "next/og";

export const alt = "bodenlegerjob.ch — Bodenbelagjobs Schweiz";
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
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "72px 86px",
          background: "#f1eee6",
          borderTop: "18px solid #9a4f31",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 26 }}>
          <div style={{ width: 90, height: 90, display: "flex", flexWrap: "wrap", gap: 6 }}>
            <span style={{ width: 42, height: 42, background: "#9a4f31" }} />
            <span style={{ width: 42, height: 42, background: "#d5aa70" }} />
            <span style={{ width: 42, height: 42, background: "#3f6657" }} />
            <span style={{ width: 42, height: 42, background: "#e6d7c0" }} />
          </div>
          <div style={{ color: "#9a4f31", fontSize: 24, fontWeight: 800, letterSpacing: 3 }}>
            MATERIAL · HANDWERK · SCHWEIZ
          </div>
        </div>

        {/* Brand name */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 0,
          }}
        >
          <span style={{ fontSize: 84, fontWeight: 900, color: "#2d261f", letterSpacing: -4 }}>
            bodenleger
          </span>
          <span style={{ fontSize: 84, fontWeight: 900, color: "#9a4f31", letterSpacing: -4 }}>
            job
          </span>
          <span style={{ fontSize: 58, fontWeight: 700, color: "#3f6657", letterSpacing: -2 }}>
            .ch
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            color: "#5e5145",
            marginTop: 20,
            letterSpacing: 0.5,
          }}
        >
          Bodenlegerstellen. Fläche für Fläche.
        </div>
      </div>
    ),
    { ...size }
  );
}
