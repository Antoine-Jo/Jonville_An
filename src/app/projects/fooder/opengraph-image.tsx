import { ImageResponse } from "next/og";

export const alt = "Fooder React Native case study by Antoine Jonville";
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
                    justifyContent: "space-between",
                    padding: "64px 72px",
                    color: "#201915",
                    background: "#f5efe6",
                    fontFamily: "sans-serif",
                }}
            >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 24 }}>
                    <span>ANTOINE JONVILLE / CASE STUDY</span>
                    <span style={{ color: "#733c70" }}>2026</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                    <span style={{ fontSize: 112, fontWeight: 700, letterSpacing: "-5px" }}>Fooder</span>
                    <span style={{ maxWidth: 900, fontSize: 38, lineHeight: 1.25 }}>
                        Private restaurant discovery and realtime matching for two.
                    </span>
                </div>
                <div style={{ display: "flex", gap: 18, fontSize: 22, color: "#766b65" }}>
                    <span>React Native</span><span>/</span><span>Expo</span><span>/</span><span>Supabase</span><span>/</span><span>Google Places</span>
                </div>
            </div>
        ),
        size
    );
}
