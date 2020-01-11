import * as GAME from "./game";
import * as PLAYER from "./player";
import * as types from "../actions/types";

const createReducer = handlers => (state, action) => {
  if (!handlers.hasOwnProperty(action.type)) {
    return state;
  }

  return handlers[action.type](state, action);
};

export default createReducer({
  [types.LOAD_DECK]: GAME.loadDeck,
  [types.ADD_PLAYER]: PLAYER.addPlayer
});
