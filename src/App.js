import { useState } from "react";
import { Game } from "./components/Game/Game";
import "./index.css";

function App() {
  const [gameStats, setGameStats] = useState({
    gamesPlayed: 0,
    gamesWonBy0: 0,
    gamesWonByX: 0,
    ties: 0,
  });

  const updateStatsHandler = (result) => {
    if (result === "WIN_X") {
      setGameStats((prevStats) => {
        return {
          ...prevStats,
          gamesPlayed: prevStats.gamesPlayed + 1,
          gamesWonByX: prevStats.gamesWonByX + 1,
        };
      });
    }
    if (result === "WIN_0") {
      setGameStats((prevStats) => {
        return {
          ...prevStats,
          gamesPlayed: prevStats.gamesPlayed + 1,
          gamesWonBy0: prevStats.gamesWonBy0 + 1,
        };
      });
    }
    if (result === "TIE") {
      setGameStats((prevStats) => {
        return {
          ...prevStats,
          gamesPlayed: prevStats.gamesPlayed + 1,
          ties: prevStats.ties + 1,
        };
      });
    }
  };
  return <Game updateStatsHandler={updateStatsHandler} gameStats={gameStats} />;
}

export default App;
