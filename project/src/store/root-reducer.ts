import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../consts';
import { filmData } from './film-data/film-data';
import { userProcess } from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.data]: filmData.reducer,
  [NameSpace.user]: userProcess.reducer,
});
