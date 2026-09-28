import { ImageResponse } from "next/og";
import { site } from "@/data/portfolio";

export const alt = `${site.fullName} – ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px",
          background: "#f8fafc",
          color: "#0f172a",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#0f766e",
            fontWeight: 600,
          }}
        >
          {site.role}
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            marginTop: 18,
            lineHeight: 1.05,
          }}
        >
          {site.firstName}
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: "#0f766e",
            lineHeight: 1.05,
          }}
        >
          {site.lastName}
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 28,
            color: "#334155",
            maxWidth: 820,
          }}
        >
          Web products, e-commerce, and explainable AI.
        </div>
      </div>
    ),
    { ...size }
  );
}
