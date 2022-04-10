import { FilmDataType } from './../../types/state';
import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../consts';

const initialState: FilmDataType = {
  films: [],
  promoFilm: null,
  isDataLoaded: false,
  favoriteList: [],
};

export const filmData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    loadPromoFilm: (state, action) => {
      state.promoFilm = action.payload;
      state.isDataLoaded = true;
    },
    dataIsLoading: (state) => {
      state.isDataLoaded = false;
    },
    loadFilms: (state, action) => {
      state.films = action.payload;
      state.isDataLoaded = true;
    },
    loadFavoriteList: (state, action) => {
      state.favoriteList = action.payload;
      state.isDataLoaded = true;
    },
  },
});

export const { loadPromoFilm, dataIsLoading, loadFilms, loadFavoriteList } =
  filmData.actions;
