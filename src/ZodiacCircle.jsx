import React from "react";

const zodiacSigns = [
  "aries",
  "taurus",
  "gemini",
  "cancer",
  "leo",
  "virgo",
  "scorpio",
];

const radius = 150; // circle radius
const size = 50; // icon size

export default function ZodiacCircle() {
  return (
    <div
      style={{
        position: "relative",
        width: radius * 2 + size,
        height: radius * 2 + size,
        margin: "50px auto",
        animation: "spin 20s linear infinite",
      }}
    >
      {zodiacSigns.map((sign, i) => {
        const angle = (i / zodiacSigns.length) * 2 * Math.PI;
        const x = radius + radius * Math.cos(angle);
        const y = radius + radius * Math.sin(angle);

        return (
          <img
            key={sign}
            src={`/zodiac/${sign}.svg`}
            alt={sign}
            style={{
              width: size,
              height: size,
              position: "absolute",
              top: y,
              left: x,
              transform: "translate(-50%, -50%)",
            }}
            className="animate__animated animate__fadeIn"
          />
        );
      })}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
