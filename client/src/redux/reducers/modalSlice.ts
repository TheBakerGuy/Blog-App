import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRecipes } from "../../types/recipes";

type TModalData = {
  isOpen: boolean;
  initialData?: IRecipes;
};

interface IModalsState {
  recipeModal: TModalData;
}

const initialState: IModalsState = {
  recipeModal: {
    isOpen: false,
    initialData: {
      cook_time: "",
      createdAt: "",
      description: "",
      food_category: [],
      ingredients: [],
      title: "",
      photo: "",
    },
  },
};

export const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    recipeModalStateAction: (state, { payload }: PayloadAction<TModalData>) => {
      state.recipeModal.isOpen = payload.isOpen;
      state.recipeModal.initialData = payload.initialData;
    },
  },
});

export const { recipeModalStateAction } = modalsSlice.actions;

export default modalsSlice.reducer;
