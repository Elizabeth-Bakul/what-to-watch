import { store } from '../store/index';
import { FilmDes } from './film';
import { Review } from './review';
import { UserData } from './user';
import {AuthorizationStatus} from '../consts';

export type State = {
  films: FilmDes[];
  genre: string;
  promoFilm: FilmDes | null;
  reviews: Review[];
  isDataLoaded: boolean;
  authStatus: AuthorizationStatus;
  user: UserData | null;
};

export type AppDispatch = typeof store.dispatch;
export type ErrorType = unknown;
