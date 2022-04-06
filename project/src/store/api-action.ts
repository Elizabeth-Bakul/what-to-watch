import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../store';
import { store } from '../store';
import { FilmDes } from '../types/film';
import { Review } from '../types/review';
import { loadPromoFilm, loadFilms, loadReviews } from './action';
import { APIRoute } from '../consts';

export const fetchFilmsAction = createAsyncThunk(
  'data/fetchFilms',
  async () => {
    const { data } = await api.get<FilmDes[]>(APIRoute.Films);
    store.dispatch(loadFilms(data));
  },
);

export const fetchPromoFilmAction = createAsyncThunk(
  'data/fetchPromoFilm',
  async () => {
    const { data } = await api.get<FilmDes>(APIRoute.Promo);
    store.dispatch(loadPromoFilm(data));
  },
);
export const fetchReviewsAction = createAsyncThunk(
  'data/fetchReviews',
  async (id: number | null) => {
    const { data } = await api.get<Review[]>(`${APIRoute.Comments}/${id}`);
    store.dispatch(loadReviews(data));
  },
);


