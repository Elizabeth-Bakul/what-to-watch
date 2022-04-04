import { createAction } from '@reduxjs/toolkit';

export const updateGenre = createAction('main/updateGenre', (genre: string) => ({
  payload: genre,
}));
