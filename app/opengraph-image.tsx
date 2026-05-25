import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Yatin Kande — AI/ML Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: "#111318",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "sans-serif",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* Soft white glow — centre */}
                <div
                    style={{
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "700px",
                        height: "700px",
                        borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)",
                    }}
                />

                {/* Avatar badge — white on dark */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "80px",
                        height: "80px",
                        borderRadius: "20px",
                        background: "rgba(255,255,255,0.08)",
                        border: "1.5px solid rgba(255,255,255,0.18)",
                        marginBottom: "28px",
                    }}
                >
                    <span style={{ color: "#ffffff", fontSize: 36, fontWeight: 700, letterSpacing: "-1px" }}>YK</span>
                </div>

                {/* Name */}
                <div
                    style={{
                        fontSize: 80,
                        fontWeight: 800,
                        color: "#ffffff",
                        letterSpacing: "-3px",
                        marginBottom: "14px",
                    }}
                >
                    Yatin Kande
                </div>

                {/* Title — muted white */}
                <div
                    style={{
                        fontSize: 26,
                        color: "rgba(255,255,255,0.5)",
                        fontWeight: 500,
                        marginBottom: "36px",
                        letterSpacing: "1px",
                    }}
                >
                    AI/ML Engineer · RAG · Computer Vision · LLMs
                </div>

                {/* Thin divider */}
                <div
                    style={{
                        width: "48px",
                        height: "2px",
                        background: "rgba(255,255,255,0.25)",
                        borderRadius: "2px",
                        marginBottom: "36px",
                    }}
                />

                {/* Credibility row */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        fontSize: 15,
                        color: "rgba(255,255,255,0.35)",
                        fontWeight: 600,
                        letterSpacing: "2.5px",
                        textTransform: "uppercase",
                    }}
                >
                    <span>MS @ UMich</span>
                    <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
                    <span>3.8 GPA</span>
                    <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
                    <span>Ex-DataZymes</span>
                    <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
                    <span style={{ color: "rgba(255,255,255,0.55)" }}>Open to Full-time</span>
                </div>
            </div>
        ),
        { ...size }
    );
}
