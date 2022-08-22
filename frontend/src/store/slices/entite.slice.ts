import { createSlice } from "@reduxjs/toolkit";
import { EntiteModel } from "../../models/card.model";
import {
  createEntite,
  updateEntite,
  deleteEntite,
  getEntites,
  getEntite,
} from "../thunks/entite.thunk";

type InitialStateType = {
  entities: EntiteModel[];
  entitie: EntiteModel | null;
  loading: "idle" | "pending" | "succeeded" | "failed";
};

const InitialState: InitialStateType = {
  entities: [],
  entitie: null,
  loading: "idle",
};

const entiteSlice = createSlice({
  initialState: InitialState,
  name: "entites",
  reducers: {
    setEntitie: (state, action) => {
      state.entitie = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createEntite.fulfilled, (state) => {
        state.loading = "succeeded";
      })
      .addCase(createEntite.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(createEntite.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(updateEntite.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.entities = action.payload;
      })
      .addCase(updateEntite.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(updateEntite.rejected, (state) => {
        state.loading = "failed";
      })

      .addCase(deleteEntite.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.entities = action.payload;
      })
      .addCase(deleteEntite.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(deleteEntite.rejected, (state) => {
        state.loading = "failed";
      })

      .addCase(getEntites.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.entities = action.payload;
      })
      .addCase(getEntites.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(getEntites.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(getEntite.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.entitie = action.payload;
      })
      .addCase(getEntite.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(getEntite.rejected, (state) => {
        state.loading = "failed";
      });
  },
});

export const EntiteReducer = entiteSlice.reducer;
