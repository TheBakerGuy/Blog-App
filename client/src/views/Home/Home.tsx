import { SimpleGrid } from "@chakra-ui/react";
import RecipeCard from "./RecipeCard/RecipeCard";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { getRecipes, selectRecipes, selectStatus } from "../../redux/reducers/recipesSlice";
import { useEffect } from "react";

const Home = () => {
  const recipes = useAppSelector(selectRecipes);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  console.log(recipes)
  return (
    <SimpleGrid columns={[1, 3, 3, 4, 5]} spacing={10} m={10}>
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
    </SimpleGrid>
  );
};

export default Home;
