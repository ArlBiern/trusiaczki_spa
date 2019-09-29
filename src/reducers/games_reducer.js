import { GET_GAMES, GET_GAME } from '../actions/games-actions';
import gamesData from '../data/games.json';

const initialState = {
  games: gamesData,
  gamesNames: getNames(),
  selectedGame: {}
}

const gamesReducer = function (state = initialState, action) {
  switch (action.type) {
    case GET_GAMES:
      return Object.assign({}, state, {games: state.games});
    case GET_GAME:
      const selectedGame = state.games.find( game => game.name === action.name);
      return Object.assign({}, state, {selectedGame});
    default:
      return state;
  }
}

function getNames() {
  let namesArray = [];
  for (let i=0; i < gamesData.length; i++) {
    namesArray.push(gamesData[i].name);
  }
  return namesArray;
}

export default gamesReducer