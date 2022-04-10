import { DEFAULT_GENRE_VALUE, HOUR_IN_MINUTES } from './consts';
import { FilmDes } from './types/film';

const getAllGenres = (films: FilmDes[]) => [
  ...new Set([DEFAULT_GENRE_VALUE, ...films.map((film) => film.genre)]),
];
const getFilmsByGenre = (films: FilmDes[], genre: string) => {
  if (genre === DEFAULT_GENRE_VALUE) {
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

const getTimeStrFromMinutes = (minutes: number): string => {
  if (minutes < HOUR_IN_MINUTES) {
    return `${minutes}m`;
  }
  return `${Math.floor(minutes / HOUR_IN_MINUTES)}h ${
    minutes % HOUR_IN_MINUTES
  }m`;
};
const addErrorMessage=(element: HTMLInputElement, message: string)=> {
  if (message) {
    element.setCustomValidity(message);
    element.style.border = '3px solid red';
  } else {
    element.setCustomValidity('');
    element.style.border = '';
  }

  element.reportValidity();
};

const checkValidatePassword = (value: string) => {
  let errorMessage = '';
  if (!/(?=.*\d)(?=.*[a-z])/i.test(value)) {
    errorMessage = 'Пароль должен содержать цифры и буквы';
  }

  return errorMessage;
};
export {
  getFilmsByGenre,
  getAllGenres,
  checkFavoriteOrNot,checkValidatePassword,addErrorMessage,
  getTimeStrFromMinutes
};
