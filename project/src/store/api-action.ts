import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from './store';
import { store } from './store';
import { saveToken,dropToken } from '../services/token';
import { Favorite, FilmDes } from '../types/film';
import { AuthData, UserData } from '../types/user';
import {
  redirectToRoute
} from './action';
import { APIRoute, AppRoute, AuthorizationStatus } from '../consts';
import { errorHandle } from '../services/error-handler';
import {
  dataIsLoading,
  loadFilms,
  loadPromoFilm
} from './film-data/film-data';
import {
  requireAuthorization,
  resetUser,
  setUser
} from './user-process/user-process';
import { loadFavoriteList } from './favorite-data/favorite-data';

export const fetchFilmsAction = createAsyncThunk(
  'data/fetchFilms',
  async () => {
    try {
      store.dispatch(dataIsLoading());
      const { data } = await api.get<FilmDes[]>(APIRoute.Films);
      store.dispatch(loadFilms(data));
    }catch (error) {
      errorHandle(error);
    }},
);

export const fetchPromoFilmAction = createAsyncThunk(
  'data/fetchPromoFilm',
  async () => {
    try {
      store.dispatch(dataIsLoading());
      const { data } = await api.get<FilmDes>(APIRoute.Promo);
      store.dispatch(loadPromoFilm(data));
    } catch (error) {
      errorHandle(error);
    }},
);

export const checkAuthAction = createAsyncThunk('user/checkAuth', async () => {
  try {
    const { data } = await api.get(APIRoute.Login);
    store.dispatch(fetchFavoriteListAction());
    store.dispatch(setUser(data));
    store.dispatch(requireAuthorization(AuthorizationStatus.Authorized));
  } catch (error) {
    errorHandle(error);
    store.dispatch(requireAuthorization(AuthorizationStatus.NotAuthorized));
  }
});

export const loginAction = createAsyncThunk(
  'user/login',
  async ({ email, password }: AuthData) => {
    try {
      const { data } = await api.post<UserData>(APIRoute.Login, {
        email,
        password,
      });
      saveToken(data.token);
      store.dispatch(requireAuthorization(AuthorizationStatus.Authorized));
      store.dispatch(redirectToRoute(AppRoute.Main));
      store.dispatch(setUser(data));
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NotAuthorized));
    }
  },
);

export const logoutAction = createAsyncThunk('user/logout', async () => {
  try {
    await api.delete(APIRoute.Logout);
    dropToken();
    store.dispatch(resetUser());
    store.dispatch(requireAuthorization(AuthorizationStatus.NotAuthorized));
  } catch (error) {
    errorHandle(error);
  }
});
export const addFavoriteAction = createAsyncThunk(
  'data/addFavorite',
  async ({ filmId, type }: Favorite) => {
    try {
      await api.post<FilmDes>(`${APIRoute.Favorite}/${filmId}/${type}`);
      store.dispatch(fetchFavoriteListAction());
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchFavoriteListAction = createAsyncThunk(
  'data/fetchFavoriteList',
  async () => {
    const { data } = await api.get<FilmDes[]>(`${APIRoute.Favorite}`);
    store.dispatch(loadFavoriteList(data));
  },
);

