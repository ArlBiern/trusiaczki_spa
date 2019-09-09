import { combineReducers } from 'redux';
import talesReducer from './tales_reducer';
import gamesReducer from './games_reducer';

const reducers = combineReducers( {
  talesReducer,
  gamesReducer
});

export default reducers;