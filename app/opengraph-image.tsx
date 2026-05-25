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
                {/* Teal glow — bottom left */}
                <div
                    style={{
                        position: "absolute",
                        left: "-120px",
                        bottom: "-80px",
                        width: "560px",
                        height: "560px",
                        borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(45,212,191,0.13) 0%, transparent 70%)",
                    }}
                />
                {/* Orange glow — top right */}
                <div
                    style={{
                        position: "absolute",
                        right: "-80px",
                        top: "-80px",
                        width: "460px",
                        height: "460px",
                        borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(249,115,22,0.10) 0%, transparent 70%)",
                    }}
                />
                {/* Violet glow — center */}
                <div
                    style={{
                        position: "absolute",
                        left: "38%",
                        top: "30%",
                        width: "320px",
                        height: "320px",
                        borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(167,139,250,0.06) 0%, transparent 70%)",
                    }}
                />

                {/* Avatar badge */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "84px",
                        height: "84px",
                        borderRadius: "24px",
                        background: "#2dd4bf",
                        marginBottom: "30px",
                        boxShadow: "0 0 40px rgba(45,212,191,0.35)",
                    }}
                >
                    <span style={{ color: "#111318", fontSize: 46, fontWeight: 800 }}>YK</span>
                </div>

                {/* Name */}
                <div
                    style={{
                        fontSize: 76,
                        fontWeight: 800,
                        color: "#ffffff",
                        letterSpacing: "-2.5px",
                        marginBottom: "10px",
                    }}
                >
                    Yatin Kande
                </div>

                {/* Title — teal accent */}
                <div
                    style={{
                        fontSize: 28,
                        color: "#2dd4bf",
                        fontWeight: 600,
                        marginBottom: "8px",
                        letterSpacing: "0.5px",
                    }}
                >
                    AI/ML Engineer · RAG · Computer Vision · LLMs
                </div>

                {/* Credibility row */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        marginBottom: "32px",
                        fontSize: 16,
                        color: "rgba(148,163,184,1)",
                        fontWeight: 600,
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                    }}
                >
                    <span>MS @ UMich</span>
                    <span style={{ color: "#2dd4bf" }}>·</span>
                    <span>3.8 GPA</span>
                    <span style={{ color: "#2dd4bf" }}>·</span>
                    <span>Ex-DataZymes</span>
                    <span style={{ color: "#2dd4bf" }}>·</span>
                    {/* Open to Full-time pill */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                            padding: "4px 14px",
                            borderRadius: "999px",
                            background: "rgba(45,212,191,0.12)",
                            border: "1px solid rgba(45,212,191,0.35)",
                            color: "#2dd4bf",
                            fontSize: 14,
                            fontWeight: 700,
                            letterSpacing: "1.5px",
                        }}
                    >
                        <div
                            style={{
                                width: "7px",
                                height: "7px",
                                borderRadius: "50%",
                                background: "#2dd4bf",
                            }}
                        />
                        OPEN TO FULL-TIME
                    </div>
                </div>

                {/* Divider */}
                <div
                    style={{
                        width: "80px",
                        height: "3px",
                        background: "#f97316",
                        borderRadius: "2px",
                        marginBottom: "32px",
                    }}
                />

                {/* Tags row */}
                <div style={{ display: "flex", gap: "12px" }}>
                    {["RAG Pipelines", "AI Agents", "Computer Vision", "AWS · GCP"].map((tag) => (
                        <div
                            key={tag}
                            style={{
                                padding: "9px 20px",
                                borderRadius: "24px",
                                border: "1px solid rgba(45,212,191,0.25)",
                                color: "rgba(255,255,255,0.75)",
                                fontSize: 15,
                                fontWeight: 600,
                                background: "rgba(45,212,191,0.07)",
                            }}
                        >
                            {tag}
                        </div>
                    ))}
                </div>
            </div>
        ),
        { ...size }
    );
}
