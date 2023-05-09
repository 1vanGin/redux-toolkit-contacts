import { favoriteSlice } from "src/redux/ducks/favorite/slice";

export const favoriteReducer = favoriteSlice.reducer;
export const { toggleFavorite } = favoriteSlice.actions;
