import { createSlice } from "@reduxjs/toolkit";
import { EntiteModel } from "../../models/card.model";
import {
  createEntite,
  updateEntite,
  deleteEntite,
  getEntites,
} from "../thunks/entite.thunk";

type InitialStateType = {
  entities: EntiteModel[];
  loading: "idle" | "pending" | "succeeded" | "failed";
};

const InitialState: InitialStateType = {
  entities: [],
  loading: "idle",
};

const entiteSlice = createSlice({
  initialState: InitialState,
  name: "entites",
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createEntite.fulfilled, (state, action) => {
        state.loading = "succeeded";
      })
      .addCase(createEntite.pending, (state, action) => {
        state.loading = "pending";
      })
      .addCase(createEntite.rejected, (state, action) => {
        state.loading = "failed";
      })
      .addCase(updateEntite.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.entities = action.payload;
      })
      .addCase(updateEntite.pending, (state, action) => {
        state.loading = "pending";
      })
      .addCase(updateEntite.rejected, (state, action) => {
        state.loading = "failed";
      })

      .addCase(deleteEntite.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.entities = action.payload;
      })
      .addCase(deleteEntite.pending, (state, action) => {
        state.loading = "pending";
      })
      .addCase(deleteEntite.rejected, (state, action) => {
        state.loading = "failed";
      })

      .addCase(getEntites.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.entities = action.payload;
      })
      .addCase(getEntites.pending, (state, action) => {
        state.loading = "pending";
      })
      .addCase(getEntites.rejected, (state, action) => {
        state.loading = "failed";
      });
  },
});

// export const { } = entiteSlice.actions;

export const EntiteReducer = entiteSlice.reducer;
