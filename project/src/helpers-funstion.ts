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
export { getFilmsByGenre, getAllGenres };
