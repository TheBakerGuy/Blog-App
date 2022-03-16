import { SimpleGrid } from "@chakra-ui/react";
import RecipeCard from "./RecipeCard/RecipeCard";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { getRecipes, selectRecipes, selectStatus } from "../../redux/reducers/recipesSlice";
import { useEffect } from "react";

const Home = () => {
  const recipes = useAppSelector(selectRecipes);
  const status = useAppSelector(selectStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  console.log(recipes);
  console.log(status);
  return (
    <SimpleGrid columns={[1, 3, 3, 4, 5]} spacing={10} m={10}>
      {recipes.length &&
        recipes.map((rec) => {
          return (
            <RecipeCard
              title={rec.title}
              description={rec.description}
              username={rec.username}
              photo={rec.photo}
              food_category={rec.food_category}
            />
          );
        })}
    </SimpleGrid>
  );
};

export default Home;
