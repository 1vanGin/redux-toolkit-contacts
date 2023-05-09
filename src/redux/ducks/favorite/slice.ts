import { FavoriteContactsDto } from "src/types/dto/FavoriteContactsDto";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ContactDto } from "src/types/dto/ContactDto";

const initialState: FavoriteContactsDto = [];

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<ContactDto["id"]>) {
      if (state.includes(action.payload)) {
        const index = state.findIndex((id) => id === action.payload);
        delete state[index];
      } else {
        state.push(action.payload);
      }
    },
  },
});
