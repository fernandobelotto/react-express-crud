import { createSlice } from "@reduxjs/toolkit";
import { modals } from "../../components/modals";

type InitialStateType = {
  isOpen: boolean;
  modalType: modals
};

const InitialState: InitialStateType = {
  isOpen: false,
  modalType: modals.NEW_ENTITE,
};

const modalSlice = createSlice({
  initialState: InitialState,
  name: "modal",
  reducers: {
    onOpenModal: (state, action) => {
      state.modalType = action.payload
      state.isOpen = true;
    },

    onClose: (state) => {
      state.isOpen = false;
    }
  },
});

export const { onClose, onOpenModal } = modalSlice.actions;

export const ModalReducer = modalSlice.reducer;
