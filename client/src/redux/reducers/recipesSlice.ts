import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchRecipes } from '../services/recipesAPI';
import { IRecipes } from '../../types/recipes';

export interface RecipesState {
  data: IRecipes[];
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


export default recipesSlice.reducer;
