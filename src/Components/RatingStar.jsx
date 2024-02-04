import React from "react";

export default function RatingStar() {
  // style inilne star 
  const containerStayle = {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  };

  const starContanierStayle = {
    display: "flex",
    gap: "4px",
  };

  const textStyle = {
    margin: "0",
    lineHeight: "1",
  };
  return (
    <div className="text-white" style={containerStayle}>
      <div style={starContanierStayle}>
        {Array.from({ length: 8 }, (_, i) => (
          <span key={i}>⭐ {i + 1}</span>
          //ba in harehact metoni halgheii dorost koni az tedad setareh k mkhy {Array.from}
        ))}
      </div>
      <p style={textStyle}>10</p>
    </div>
  );
}
