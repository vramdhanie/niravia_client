/*
 These reducers modify the game section of the state
*/
export const loadDeck = (state, { payload }) => ({
  ...state,
  game: {
    ...state.game,
    deck: payload
  }
});
