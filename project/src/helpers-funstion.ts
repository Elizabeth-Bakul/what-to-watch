import { FilmDes } from './types/film';

const getAllGenres = (films: FilmDes[]) => [
  ...new Set(['All genres', ...films.map((film) => film.genre)]),
];
const getFilmsByGenre = (films: FilmDes[], genre: string) => {
  if (genre === 'All genres') {
    return films;
  }

  return films.filter((film) => film.genre === genre);
};
const checkFavoriteOrNot = (film: FilmDes, favoritList: FilmDes[]) => {
  const result = favoritList.filter(
    (filmFromList) => filmFromList.id === film.id,
  );

  if (result.length > 0) {
    return true;
  }

  return false;
};
export { getFilmsByGenre, getAllGenres, checkFavoriteOrNot };
