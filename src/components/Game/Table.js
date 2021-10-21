import React from "react";
import { Square } from "./Square";

function Table(props) {
  return (
    <div className="game-container">
      {props.board.map((el, idx) => (
        <Square
          key={idx}
          clickHandle={() => {
            props.handleClick(idx);
          }}
          value={props.board[idx]}
        />
      ))}
    </div>
  );
}

export default Table;
