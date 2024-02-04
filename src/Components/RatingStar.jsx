import React from "react";
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
export default function RatingStar({ maxRating }) {
  return (
    <div className="text-white" style={containerStayle}>
      <div style={starContanierStayle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <span key={i}>⭐</span>
          //ba in harehact metoni halgheii dorost koni az tedad setareh k mkhy {Array.from}
        ))}
      </div>
      <p style={textStyle}>{maxRating}</p>
    </div>
  );
}
