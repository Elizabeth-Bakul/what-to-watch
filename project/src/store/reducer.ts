import { createReducer } from '@reduxjs/toolkit';
import { updateGenre, loadFilms, loadPromoFilm, loadReviews } from './action';

import { State } from '../types/state';

const DEFAULT_FILTER_GENRE_VALUE = 'All genres';

const initialState: State = {
  films: [],
  genre: DEFAULT_FILTER_GENRE_VALUE,
  promoFilm: null,
  reviews: [],
  isDataLoaded: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(updateGenre, (state, action) => {
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
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
      state.isDataLoaded = true;
    });
});

export { reducer };
