import { ImageResponse } from "next/og";

export const alt = "GPS Nutrition — Personalized one-on-one nutrition consulting";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #14532d 0%, #166534 55%, #15803d 100%)",
          color: "#ffffff",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "#bbf7d0",
            fontWeight: 500,
          }}
        >
          GPS Nutrition
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 88,
              lineHeight: 1.05,
              fontWeight: 600,
              maxWidth: 920,
              letterSpacing: "-0.02em",
            }}
          >
            Simple nutrition guidance for real life.
          </div>
          <div
            style={{
              fontSize: 32,
              color: "#bbf7d0",
              fontStyle: "italic",
              fontWeight: 300,
            }}
          >
            Personalized one-on-one nutrition consulting
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 24,
            color: "#dcfce7",
          }}
        >
          <div>gpsnutrition.ca</div>
          <div style={{ fontStyle: "italic" }}>with Gwen Ganske, CHN</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
