/*
These reducers modify the players section of the state
*/

export const addPlayer = (state, { payload }) => ({
  ...state,
  players: [...state.players, payload]
});
