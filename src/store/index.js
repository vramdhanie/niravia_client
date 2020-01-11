import React, { CreateContext, useContext, useReducer } from "react";

export const GameContext = createContext();

export const StoreProvider = ({ reducer, initialState, children }) => (
  <GameContext.Provider
    value={useReducer(reducer, initialState)}
    children={children}
  />
);

export const useStore = () => useContext(GameContext);
