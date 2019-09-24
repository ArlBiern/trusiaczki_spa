import { GET_GAMES, GET_GAME } from '../actions/games-actions';
import gamesData from '../data/games.json';

const initialState = {
  games: gamesData,
  selectedGame: {}
}

const gamesReducer = function (state = initialState, action) {
  switch (action.type) {
    case GET_GAMES:
      return Object.assign({}, state, {games: state.games});
    case GET_GAME:
      const selectedGame = state.games.find( game => game.id === parseInt(action.id) );
      return Object.assign({}, state, {selectedGame});
    default:
      return state;
  }
}

export default gamesReducer