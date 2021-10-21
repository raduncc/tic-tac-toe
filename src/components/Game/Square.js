import React from "react";

export const Square = ({ clickHandle, value }) => {
  return (
    <div
      className="item"
      onClick={() => {
        clickHandle();
      }}
    >
      {value}
    </div>
  );
};
