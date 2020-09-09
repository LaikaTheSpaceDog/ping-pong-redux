import initial from "./initial";

const player1 = state => ({ ...state, player1: state.player1 + 1 });
const player2 = state => ({ ...state, player2: state.player2 + 1 });

const serverChange = state => { 
  return (state.player1 >= 20 && state.player2 >=20) ? 2 : state.alternate;
 }
// Puts numbers into groups of 5 or 2 (e.g. firsr group will be between 0-1, second group will be between 1-2. Then used Math.Floor to assign them all to the same whole numbers (first group will be 0, second group will be 1 etc.), and then used modulo 2 trick so that each group alternates between true and false)
 const server = (state) => {
  return {
    ...state,
    server1: Math.floor((state.player1 + state.player2)/serverChange(state)) % 2 === 0,
  }
};

// const server = state => ({ 
//   ...state, 
//   server1: (((state.player1 >= 20 && state.player2 >=20) && ((state.player1 + state.player2) % 2 === 0))) ? !state.server1 : (((state.player1 + state.player2) % 5 === 0) && ((state.player1 < 20) || (state.player2 < 20 ))) ? !state.server1 : state.server1 
// });

const winner = state => {
  return (state.player1 >= state.winningScore || state.player2 >= state.winningScore) && (state.player1 - state.player2 >= 2 || state.player1 - state.player2 <= -2);
}

const whoWinner = state => ({ 
  ...state, 
  winner: winner(state) ? (state.player1 === 21 ? 1 : 2) : 0,
});

const save = state => (state.winner ? { 
  ...state,
  previousGames: [
    ...state.previousGames,
    {
      player1: {
        score: state.player1,
        won: state.player1 > state.player2
      },
      player2: {
        score: state.player2,
        won: state.player2 > state.player1
      }
    }
  ] 
} : {...state});

const saveSettings = (state, { player1Name, player2Name, winningScore, alternate }) => ({ 
  ...state, 
  player1Name: player1Name,
  player2Name: player2Name,
  winningScore: winningScore,
  alternate: alternate,
  submitted: true
 });

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT_PLAYER_1": return save(whoWinner(server(player1(state))));
    case "INCREMENT_PLAYER_2": return save(whoWinner(server(player2(state))));
    case "RESET": return {
      ...initial,
      previousGames: state.previousGames,
      player1Name: state.player1Name,
      player2Name: state.player2Name,
      winningScore: state.winningScore,
      alternate: state.alternate,
      submitted: true
    };
    case "CLEAR": return {
      ...initial,
    }
    case "SAVE_SETTINGS": return saveSettings(state, action);
    default: return state;
  }
};

export default reducer;