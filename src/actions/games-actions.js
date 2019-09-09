export const GET_GAMES = 'GET_GAMES';
export const GET_GAME = 'GET_GAME';

export function getGames() {
  return {
    type: 'GET_GAMES'
  };
};

export function getGame(id) {
  return {
    type: 'GET_GAME',
    id
  };
};