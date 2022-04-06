import { store } from '../store/index';
import { FilmDes } from './film';
import { Review } from '../types/review';

export type State = {
  films: FilmDes[];
  genre: string;
  promoFilm: FilmDes| null;
  reviews: Review[];
  isDataLoaded: boolean;
};

export type AppDispatch = typeof store.dispatch;
