import { ImageResponse } from "next/og";
import { brand } from "@/lib/brand";

export const alt = "ParsisPress — AI-powered startup intelligence";
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
          backgroundColor: brand.ivory,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flex: 1,
            padding: 68,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                display: "flex",
                fontSize: 34,
                color: brand.ink,
                letterSpacing: "-0.02em",
              }}
            >
              Parsis
              <span style={{ color: brand.forest }}>Press</span>
            </div>
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: 999,
                backgroundColor: brand.lime,
              }}
            />
            <div
              style={{
                display: "flex",
                marginLeft: 10,
                fontSize: 15,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: brand.muted,
              }}
            >
              AI-powered startup intelligence
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontSize: 82,
                lineHeight: 1.03,
                letterSpacing: "-0.03em",
                color: brand.ink,
                maxWidth: 980,
              }}
            >
              Find the next big thing. Before everyone else.
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 26,
                fontSize: 26,
                lineHeight: 1.45,
                color: brand.muted,
                maxWidth: 920,
              }}
            >
              Emerging signals, overlooked customer problems, and new
              technologies turned into startup opportunities worth exploring.
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: brand.forestDark,
            paddingLeft: 68,
            paddingRight: 68,
            height: 108,
          }}
        >
          <div style={{ display: "flex", fontSize: 22, color: brand.ivory }}>
            parsispress.com
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontSize: 15,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: brand.lime,
            }}
          >
            <div
              style={{
                width: 7,
                height: 7,
                borderRadius: 999,
                backgroundColor: brand.lime,
              }}
            />
            Illustrative demo data
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}