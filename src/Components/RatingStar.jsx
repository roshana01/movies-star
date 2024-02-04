import React from "react";

export default function RatingStar() {
  const containerStayle = {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  };

  return (
    <div className="text-white">
      <div>
        {Array.from({ length: 8 }, (_, i) => (
          <span key={i}>⭐ {i + 1}</span>
          //ba in harehact metoni halgheii dorost koni az tedad setareh k mkhy {Array.from}
        ))}
      </div>
    </div>
  );
}
