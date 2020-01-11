import React from "react";
import { Route } from "react-router-dom";
import Home from "../pages/home/home";
import Help from "../pages/help/help";
import Game from "../pages/game/game";
import Lobby from "../pages/lobby/lobby";

import { StoreProvider } from "../store";
import reducers from "../reducers";
import initialState from "../store/initialState";

const App = () => {
  return (
    <StoreProvider initialState={initialState} reducer={reducers}>
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
    </StoreProvider>
  );
};

export default App;
