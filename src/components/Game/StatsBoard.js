import React from "react";

export const StatsBoard = (props) => {
  return (
    <div className="stats-container">
      <p> Games played: {props.gameStats.gamesPlayed}</p>
      <p> Games won by X: {props.gameStats.gamesWonByX}</p>
      <p> Games won by 0: {props.gameStats.gamesWonBy0}</p>
      <p> Games tied: {props.gameStats.ties}</p>
    </div>
  );
};
