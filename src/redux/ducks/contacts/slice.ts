import { ContactDto } from "src/types/dto/ContactDto";
import { DATA_CONTACT } from "src/__data__";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ContactDto[] = DATA_CONTACT;

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
});
