import { FavoriteDataType } from './../../types/state';
import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../consts';

const initialState: FavoriteDataType = {
  isDataFavLoaded: false,
  favoriteList: [],
};
export const favoriteData = createSlice({
  name: NameSpace.Favorite,
  initialState,
  reducers: {
    loadFavoriteList: (state, action) => {
      state.favoriteList = action.payload;
      state.isDataFavLoaded = true;
    },
  },
});

export const { loadFavoriteList } = favoriteData.actions;
