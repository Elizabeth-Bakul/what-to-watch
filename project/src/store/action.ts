import { createAction } from '@reduxjs/toolkit';
import { FilmDes } from '../types/film';
import { Review } from '../types/review';

export const loadFilms = createAction<FilmDes[]>('films/load');
export const loadPromoFilm = createAction<FilmDes>('data/loadPromoFilm');
export const loadReviews = createAction<Review[]>('data/loadReviews');
export const updateGenre = createAction('main/updateGenre', (genre: string) => ({
  payload: genre,
}));
