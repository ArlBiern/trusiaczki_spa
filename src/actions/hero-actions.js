export const GET_HEROES = 'GET_HEROES';


export function getHeroes(id) {
  return {
    type: 'GET_HEROES',
    id
  };
};
