import React, { useState } from "react";
import Star from "./Star";

// style inilne star
const containerStayle = {
  display: "flex",
  alignItems: "center",
  gap: "4px",
};

const starContanierStayle = {
  display: "flex",
  // gap: "3px",
};

const textStyle = {
  margin: "0",
  lineHeight: "1",
  FontSize:"9px"
};
export default function RatingStar({ maxRating = 6 ,onSarating}) {
  const [rating, setRating] = useState(0);
  const [hoverStar, setHoverStar] = useState(0);

  const handelrating = (rating) => {
    setRating(rating);
    onSarating(rating)
  };

  return (
    <div className="text-white" style={containerStayle}>
      <div style={starContanierStayle}>
        {Array.from({ length: maxRating }, (_, i) => (
          // <span >⭐</span>
          <Star
            key={i}
            onRating={() => handelrating(i + 1)}
            // full={rating >= i + 1}
            full={hoverStar ? hoverStar >= i + 1 : rating >= i + 1} //harekateh jalebieyeh
            onHoverIn={() => setHoverStar(i + 1)}
            onHoverOut={() => setHoverStar(0)}
          />
          //ba in harehact metoni halgheii dorost koni az tedad setareh k mkhy {Array.from}
        ))}
      </div>
      <p style={textStyle} className="text-yellow-500">{hoverStar|| rating || ""}</p>
    </div>
  );
}
