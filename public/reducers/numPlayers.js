const numPlayers = (state = '1', action) => {
  switch (action.type) {
    case 'UPDATE_NUM_PLAYERS':
      return action.payload;
    default:
      return state;
  }
};

export default numPlayers;
