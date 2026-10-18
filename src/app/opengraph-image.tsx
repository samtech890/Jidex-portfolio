import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "JIDEX CODER — Creative Developer & AI Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "#050505",
          padding: 80,
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: "#06B6D4",
            letterSpacing: 8,
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          Portfolio
        </div>
        <div
          style={{
            fontSize: 84,
            fontWeight: 700,
            background: "linear-gradient(90deg, #7C3AED, #3B82F6, #06B6D4)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          JIDEX CODER
        </div>
        <div style={{ fontSize: 32, color: "rgba(255,255,255,0.6)", marginTop: 24 }}>
          Creative Developer · AI Automation Engineer
        </div>
      </div>
    ),
    { ...size }
  );
}
