import { createReducer } from '@reduxjs/toolkit';
import {
  updateGenre,
  loadFilms,
  loadPromoFilm,
  requireAuthorization,
  resetUser,
  dataIsLoading,
  setUser
} from './action';
import { AuthorizationStatus } from '../consts';
import { State } from '../types/state';

const DEFAULT_FILTER_GENRE_VALUE = 'All genres';

const initialState: State = {
  films: [],
  genre: DEFAULT_FILTER_GENRE_VALUE,
  promoFilm: null,
  reviews: [],
  isDataLoaded: false,
  authStatus: AuthorizationStatus.Unknown,
  user: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(updateGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(loadPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(setUser, (state, action) => {
      state.user = action.payload;
    })
    .addCase(resetUser, (state) => {
      state.user = null;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authStatus = action.payload;
    })
    .addCase(dataIsLoading, (state) => {
      state.isDataLoaded = false;
    });
});

export { reducer };
