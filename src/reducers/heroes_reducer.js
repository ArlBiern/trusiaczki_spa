import { GET_HEROES } from '../actions/hero-actions';
import heroesData from '../data/heroes.json'

const initialState = {
  heroes: heroesData,
  selectedHero: {}
}

const heroesReducer = function (state = initialState, action) {
  switch (action.type) {
    case GET_HEROES:
      const selectedHero = state.heroes.find(hero => hero.id === action.id);
      return Object.assign({}, state, {selectedHero});
    default:
      return state
  }
}

export default heroesReducer;