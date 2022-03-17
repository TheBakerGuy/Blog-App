import { SimpleGrid, Spinner, Center } from "@chakra-ui/react";
import RecipeCard from "./RecipeCard/RecipeCard";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { getRecipes } from "../../redux/reducers/recipesSlice";
import { useEffect } from "react";

const Home = () => {
  const { data, status } = useAppSelector((state) => ({
    ...state.recipes,
  }));

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  return (
    <>
      {status === "loading" ? (
        <Center mt={10}>
          <Spinner size="xl" />
        </Center>
      ) : (
        <SimpleGrid columns={[1, 3, 3, 4, 5]} spacing={10} m={10}>
          <RecipeCard recipes={data} />
        </SimpleGrid>
      )}
    </>
  );
};

export default Home;
