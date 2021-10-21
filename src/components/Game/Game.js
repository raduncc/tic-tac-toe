import React, { useState, useEffect } from "react";
import { Button } from "../UI/Button";
import { Wrapper } from "../UI/Wrapper";
import { StatsBoard } from "./StatsBoard";
import Table from "./Table";

const INITIAL_PLAYER = "X";
const INITIAL_BOARD = [null, null, null, null, null, null, null, null, null];

export const Game = (props) => {
  const [isGameOver, setIsGameOver] = useState(false);
  const [player, setPlayer] = useState(INITIAL_PLAYER);
  const [board, setBoard] = useState(INITIAL_BOARD);

  const checkTie = () => {
    return board.filter((el) => el !== null).length === INITIAL_BOARD.length;
  };

  const resetGame = () => {
    let verdict = null;
    if (isGameOver) {
      verdict = player === "X" ? "WIN_0" : "WIN_X";
    } else if (checkTie()) {
      verdict = "TIE";
    }
    props.updateStatsHandler(verdict);
    setBoard(INITIAL_BOARD);
    setPlayer(INITIAL_PLAYER);
    setIsGameOver(false);
  };

  useEffect(() => {
    const checkWinningState = () => {
      // checking horizontal lines
      for (let i = 0; i <= 6; i += 3) {
        if (board[i]) {
          if (board[i] === board[i + 1] && board[i + 1] === board[i + 2]) {
            setIsGameOver(true);
            return;
          }
        }
      }
      // checking vertical lines
      for (let i = 0; i <= 2; ++i) {
        if (board[i]) {
          if (board[i] === board[i + 3] && board[i + 3] === board[i + 6]) {
            setIsGameOver(true);
            return;
          }
        }
      }
      // checking diagonal lines
      if (board[4]) {
        if (board[0] === board[4] && board[4] === board[8]) {
          setIsGameOver(true);
          return;
        }

        if (board[2] === board[4] && board[4] === board[6]) {
          setIsGameOver(true);
          return;
        }
      }
    };

    checkWinningState();
  }, [board, player]);

  const handleClick = (idx) => {
    if (!board[idx] && !isGameOver) {
      setPlayer((prev) => {
        prev === "X" ? setPlayer("O") : setPlayer("X");
      });
      setBoard((prev) => {
        return [...prev.slice(0, idx), player, ...prev.slice(idx + 1)];
      });
    }
  };

  return (
    <>
      <Wrapper>
        <StatsBoard gameStats={props.gameStats} />
        <div className="info-container">
          {isGameOver && (
            <div>
              <p>Game Over!</p>
              <h1>{"Player " + (player === "X" ? "0" : "X") + " wins!"}</h1>
            </div>
          )}
          {!isGameOver && !checkTie() && <h1>Current Player: {player}</h1>}
          {!isGameOver && checkTie() && (
            <div>
              <p>Game Over!</p>
              <h1>Tie!</h1>
            </div>
          )}
          <Button onClickHandle={resetGame} content="Reset Game." />
        </div>
      </Wrapper>

      <Table board={board} handleClick={handleClick} />
    </>
  );
};
