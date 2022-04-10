import { store } from '../store/store';
import { FilmDes } from './film';
import { UserData } from './user';
import {AuthorizationStatus} from '../consts';


export type UserProcessType = {
  authStatus: AuthorizationStatus;
  user: UserData | null;
};

export type FilmDataType = {
  films: FilmDes[];
  promoFilm: FilmDes | null;
  isDataLoaded: boolean;
  favoriteList: FilmDes[];
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export type ErrorType = unknown;
