import * as game_types from "./game_types";
import * as player_types from "./player_types";

export const loadDeck = deck => ({
  type: game_types.LOAD_DECK,
  payload: deck
});

export const addPlayer = player => ({
  type: player_types.ADD_PLAYER,
  payload: player
});
