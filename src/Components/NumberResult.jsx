import React from "react";

export default function NumberResult({movies}) {
  return (
    <>
      <p>
        result movies <span>{movies?.length}</span>
      </p>
    </>
  );
}
