export const GET_TALES = 'GET_TALES';
export const GET_TALE = 'GET_TALE';
export const SEARCH_TALES = 'SEARCH_TALES';

export function getTales() {
  return {
    type: GET_TALES
  };
};

export function getTale(id) {
  return {
    type: GET_TALE,
    id
  };
};

export function searchTales(searchText) {
  return {
    type: SEARCH_TALES,
    searchText
  };
};
