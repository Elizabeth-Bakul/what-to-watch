import { createAction } from '@reduxjs/toolkit';
import { FilmDes } from '../types/film';
import { Review } from '../types/review';
import { AppRoute, AuthorizationStatus } from '../consts';
import { UserData } from '../types/user';

export const loadFilms = createAction<FilmDes[]>('films/load');
export const loadPromoFilm = createAction<FilmDes>('data/loadPromoFilm');
export const loadReviews = createAction<Review[]>('data/loadReviews');
export const requireAuthorization = createAction<AuthorizationStatus>(
  'user/requireAuthorization',
);
export const redirectToRoute = createAction<AppRoute>('user/redirectToRoute');
export const updateGenre = createAction('main/updateGenre', (genre: string) => ({
  payload: genre,
}));
export const setUser = createAction<UserData>('user/setUser');
export const resetUser = createAction('user/resetUser');
