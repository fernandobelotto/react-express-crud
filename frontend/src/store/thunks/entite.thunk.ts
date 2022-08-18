import { createAsyncThunk } from "@reduxjs/toolkit";
import { EntiteApi } from "../../api/card.api";
import { EntiteModel } from "../../models/card.model";

export const createEntite = createAsyncThunk(
  "entite/createEntite",
  async (entite: EntiteModel) => {
    return EntiteApi.create(entite);
  }
);

type updateProps = { id: string; entite: EntiteModel };
export const updateEntite = createAsyncThunk(
  "entite/updateEntite",
  async ({ id, entite }: updateProps) => {
    return EntiteApi.updateById(id, entite);
  }
);

export const getEntites = createAsyncThunk("entite/getEntites", async () => {
  return EntiteApi.fetch();
});

export const deleteEntite = createAsyncThunk(
  "entite/deleteEntite",
  async (id: string) => {
    return EntiteApi.deleteById(id);
  }
);
