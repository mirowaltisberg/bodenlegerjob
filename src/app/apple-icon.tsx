import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f1e8dc",
          borderRadius: "30px",
        }}
      >
        <div style={{ width: 120, height: 120, display: "flex", flexWrap: "wrap", gap: 10 }}>
          <span style={{ width: 55, height: 55, background: "#9a4f31" }} />
          <span style={{ width: 55, height: 55, background: "#d5aa70" }} />
          <span style={{ width: 55, height: 55, background: "#3f6657" }} />
          <span style={{ width: 55, height: 55, background: "#e6d7c0" }} />
        </div>
      </div>
    ),
    { ...size }
  );
}
