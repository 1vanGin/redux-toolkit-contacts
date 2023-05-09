import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "src/redux/ducks/contacts";
import { groupsReducer } from "src/redux/ducks/groups";
import { favoriteReducer } from "src/redux/ducks/favorite";

const rootReducer = combineReducers({
  contacts: contactsReducer,
  groups: groupsReducer,
  favorite: favoriteReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  // middleware(getDefaultMiddleware) {
  //   return getDefaultMiddleware().concat([]);
  // },
});

export type RootState = ReturnType<typeof rootReducer>;
