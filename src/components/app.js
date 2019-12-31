import React from "react";
import { Route } from "react-router-dom";
import Home from "../pages/home/home";
import Help from "../pages/help/help";
import Game from "../pages/game/game";
import Lobby from "../pages/lobby/lobby";

const App = () => {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/lobby">
        <Lobby />
      </Route>
      <Route path="/game">
        <Game />
      </Route>
      <Route path="/help">
        <Help />
      </Route>
    </>
  );
};

export default App;
