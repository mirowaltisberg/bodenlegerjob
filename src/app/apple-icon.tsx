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
          background: "#c17a3a",
          borderRadius: "36px",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="120"
          height="120"
        >
          <rect x="8" y="6" width="8" height="36" rx="2" fill="white" transform="rotate(-8 12 24)"/>
          <rect x="20" y="3" width="8" height="42" rx="2" fill="white"/>
          <rect x="32" y="6" width="8" height="36" rx="2" fill="white" transform="rotate(8 36 24)"/>
        </svg>
      </div>
    ),
    { ...size }
  );
}
