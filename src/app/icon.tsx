import { ImageResponse } from "next/og";

export const size = { width: 48, height: 48 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: "5px",
        }}
      >
        <div style={{ width: 34, height: 34, display: "flex", flexWrap: "wrap", gap: 3 }}>
          <span style={{ width: 15, height: 15, background: "#9a4f31" }} />
          <span style={{ width: 15, height: 15, background: "#d5aa70" }} />
          <span style={{ width: 15, height: 15, background: "#3f6657" }} />
          <span style={{ width: 15, height: 15, background: "#e6d7c0" }} />
        </div>
      </div>
    ),
    { ...size }
  );
}
