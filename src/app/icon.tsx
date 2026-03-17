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
          background: "#c17a3a",
          borderRadius: "10px",
        }}
      >
        {/* Three floor planks icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="30"
          height="30"
        >
          <rect x="4" y="4" width="6" height="24" rx="1" fill="white" transform="rotate(-8 7 16)"/>
          <rect x="13" y="2" width="6" height="28" rx="1" fill="white"/>
          <rect x="22" y="4" width="6" height="24" rx="1" fill="white" transform="rotate(8 25 16)"/>
        </svg>
      </div>
    ),
    { ...size }
  );
}
