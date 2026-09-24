import { ImageResponse } from "next/og";
import { venue } from "@/lib/venue";

export const alt = "Club Vault, nightclub and private event venue in Hollywood, FL";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0b0a08",
          color: "#f2ebdd",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 190,
            fontWeight: 900,
            lineHeight: 0.84,
            letterSpacing: -4,
            backgroundImage: "linear-gradient(100deg, #7a5a24 0%, #e6c783 35%, #fff4d6 45%, #c9a256 60%, #6d5020 100%)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          <span>CLUB</span>
          <span>VAULT</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 30, color: "#aaa190" }}>
          <span>{venue.tagline}</span>
          <span style={{ color: "#d6b268" }}>
            {venue.address.city}, {venue.address.region} · {venue.phone.display}
          </span>
        </div>
      </div>
    ),
    size,
  );
}
