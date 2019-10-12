import { combineReducers } from 'redux';
import talesReducer from './tales_reducer';
import gamesReducer from './games_reducer';
import heroesReducer from './heroes_reducer';

const reducers = combineReducers( {
  talesReducer,
  gamesReducer,
  heroesReducer,
});

export default reducers;