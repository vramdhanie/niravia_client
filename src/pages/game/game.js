import React from "react";
import styled from "styled-components";

import Card from "../../components/card";
import PlayerBoard from "../../components/playerBoard";
import GameMenu from "../../components/gameMenu";

const Game = ({ className, comps }) => {
  return (
    <div className={className}>
      <div className="player1">
        <PlayerBoard name="Nirav" hp={100} at={120} sh={50} />
      </div>
      <div className="player2">
        <PlayerBoard name="Sam" hp={100} at={120} sh={50} />
      </div>
      <div className="player3">
        <PlayerBoard name="Mary" hp={100} at={120} sh={50} />
      </div>
      <div className="player4">
        <PlayerBoard name="Jane" hp={100} at={120} sh={50} />
      </div>
      <div className="gameArea">
        Play the Game
        <Card />
      </div>
      <div className="gameLeft">
        <GameMenu />
      </div>
    </div>
  );
};

export default styled(Game)`
  background: var(--secondaryLight);
  min-height: 100vh;
  display: grid;
  font-size: calc(10px + 2vmin);
  grid-template:
    "player1 player1 player2 player2"
    "gameleft gamecenter gamecenter gameright"
    "player3 player3 player4 player4";
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 4px;
  row-gap: 4px;
  padding: 4px;

  .player1 {
    grid-area: player1;
  }

  .player2 {
    grid-area: player2;
  }
  .player3 {
    grid-area: player3;
  }
  .player4 {
    grid-area: player4;
  }
  .gameArea {
    grid-area: gamecenter;
  }

  .gameLeft {
    grid-area: gameleft;
  }
`;
