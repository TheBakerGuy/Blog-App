import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../store";
import { fetchRecipes } from '../services/recipesAPI';

export interface RecipesState {
  data: [];
  status: "idle" | "loading" | "failed";
}

const initialState: RecipesState = {
  data: [],
  status: "idle",
};

export const getRecipes = createAsyncThunk(
    'recipes/getRecipes', 
    async () => {
      const { data } = await fetchRecipes();  
      return data;
});

export const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getRecipes.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(getRecipes.fulfilled, (state, { payload } ) => {
      state.status = 'idle';
      state.data = payload;
    })
    .addCase(getRecipes.rejected, (state) => {
      state.status = 'failed';
    });
  },
});

export const selectRecipes = (state: RootState) => state.recipes.data;

export const selectStatus = (state: RootState) => state.recipes.status;

export default recipesSlice.reducer;
