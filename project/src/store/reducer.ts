import { createReducer } from '@reduxjs/toolkit';
import { updateGenre } from './action';

const DEFAULT_FILTER_GENRE_VALUE = 'All genres';

const initialState = {
  genre: DEFAULT_FILTER_GENRE_VALUE,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(updateGenre, (state, action) => {
    state.genre = action.payload;
  });
});

export { reducer };
