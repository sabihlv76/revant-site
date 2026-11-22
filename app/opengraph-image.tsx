import { ImageResponse } from "next/og";
import { profile } from "@/content/site";

// The preview card shown when the site is shared on social media.
export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#f3f0e8",
          color: "#161513",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 26,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#67635b",
          }}
        >
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 9999,
              background: "#d9431a",
            }}
          />
          {profile.role}
        </div>
        <div style={{ display: "flex", fontSize: 150, letterSpacing: -4 }}>
          {profile.name}
          <span style={{ color: "#d9431a" }}>.</span>
        </div>
      </div>
    ),
    size,
  );
}
