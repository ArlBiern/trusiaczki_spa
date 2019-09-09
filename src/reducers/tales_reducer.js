import { GET_TALES, GET_TALE, SEARCH_TALES } from '../actions/tales-actions';
import talesData from '../data/tales.json'

const initialState = {
  tales: talesData
}

const talesReducer = function (state = initialState, action) {
  switch (action.type) {
    case GET_TALES:
      return Object.assign({}, state, {tales: state.tales});
    case GET_TALE:
      const selectedTale = state.tales.find(tale => tale.id === parseInt(action.id));
      return Object.assign({}, state, {tales: selectedTale});
    //case SEARCH_TALES:
    //  const searchedTales = state.tales.filter(tale => {
    //    tale.title.toLowerCase().includes(action.searchText.toLowerCase());
     // });
    //  return Object.assign({}, state, {searchedTales});
    default:
      return state
  }
  //return state;
}

export default talesReducer;