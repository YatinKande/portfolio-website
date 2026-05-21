import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Yatin Kande — AI & Data Scientist";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: "#0f172a",
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
                {/* Mint glow left */}
                <div
                    style={{
                        position: "absolute",
                        left: "-100px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        width: "500px",
                        height: "500px",
                        borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(32,201,151,0.18) 0%, transparent 70%)",
                    }}
                />
                {/* Coral glow right */}
                <div
                    style={{
                        position: "absolute",
                        right: "-100px",
                        top: "30%",
                        width: "400px",
                        height: "400px",
                        borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(255,107,107,0.12) 0%, transparent 70%)",
                    }}
                />

                {/* Avatar badge */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "80px",
                        height: "80px",
                        borderRadius: "20px",
                        background: "#20c997",
                        marginBottom: "28px",
                    }}
                >
                    <span style={{ color: "white", fontSize: 44, fontWeight: 700 }}>Y</span>
                </div>

                {/* Name */}
                <div
                    style={{
                        fontSize: 72,
                        fontWeight: 700,
                        color: "#ffffff",
                        letterSpacing: "-2px",
                        marginBottom: "12px",
                    }}
                >
                    Yatin Kande
                </div>

                {/* Title */}
                <div
                    style={{
                        fontSize: 30,
                        color: "#20c997",
                        fontWeight: 600,
                        marginBottom: "28px",
                        letterSpacing: "1px",
                    }}
                >
                    AI & Data Scientist
                </div>

                {/* Divider */}
                <div
                    style={{
                        width: "60px",
                        height: "3px",
                        background: "#ff6b6b",
                        borderRadius: "2px",
                        marginBottom: "28px",
                    }}
                />

                {/* Tags row */}
                <div style={{ display: "flex", gap: "12px" }}>
                    {["RAG Systems", "Computer Vision", "MLOps", "AWS"].map((tag) => (
                        <div
                            key={tag}
                            style={{
                                padding: "8px 18px",
                                borderRadius: "20px",
                                border: "1px solid rgba(32,201,151,0.3)",
                                color: "rgba(255,255,255,0.7)",
                                fontSize: 16,
                                fontWeight: 600,
                                background: "rgba(32,201,151,0.08)",
                            }}
                        >
                            {tag}
                        </div>
                    ))}
                </div>

                {/* University tag */}
                <div
                    style={{
                        marginTop: "32px",
                        fontSize: 16,
                        color: "rgba(255,255,255,0.35)",
                        letterSpacing: "3px",
                        textTransform: "uppercase",
                    }}
                >
                    MS Data Science · University of Michigan
                </div>
            </div>
        ),
        { ...size }
    );
}
