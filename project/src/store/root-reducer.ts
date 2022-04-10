import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../consts';
import { favoriteData } from './favorite-data/favorite-data';
import { filmData } from './film-data/film-data';
import { userProcess } from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.Data]: filmData.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Favorite]: favoriteData.reducer,
});
