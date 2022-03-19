import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchRecipes, newRecipe } from "../services/recipesAPI";
import { IRecipes } from "../../types/recipes";
export interface RecipesState {
  data: IRecipes[];
  status: "idle" | "loading" | "failed";
}

const initialState: RecipesState = {
  data: [],
  status: "idle",
};

export const getRecipes = createAsyncThunk("recipes/getRecipes", async () => {
  const { data } = await fetchRecipes();
  return data;
});

export const createRecipe = createAsyncThunk(
  "recipes/createRecipe",
  async (params: any, { dispatch }) => {
    return await newRecipe(params).then(() => {
        dispatch(getRecipes());
    });
  }
);

export const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRecipes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getRecipes.fulfilled, (state, { payload }) => {
        state.status = "idle";
        state.data = payload;
      })
      .addCase(getRecipes.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(createRecipe.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createRecipe.fulfilled, (state) => {
        state.status = "idle";
      })
      .addCase(createRecipe.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default recipesSlice.reducer;
