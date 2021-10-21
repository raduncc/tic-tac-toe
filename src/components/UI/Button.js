import React from "react";

export const Button = (props) => {
  return (
    <button className="button" onClick={props.onClickHandle}>
      {props.content}
    </button>
  );
};
