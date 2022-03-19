import { Box, Image, Text, Button, Flex } from "@chakra-ui/react";
import { IRecipes } from "../../../types/recipes";
import styles from "./RecipeCard.module.css";

interface IRecipeCard {
  recipes?: IRecipes[];
}

const RecipeCard = ({ recipes }: IRecipeCard) => {
  return (
    <>
      {!!recipes?.length &&
        recipes.map((recipe) => {
          return (
            <Box className={styles.recipeContainer} key={recipe._id}>
              <Image
                className={styles.recipeImg}
                src={recipe.photo || "https://picsum.photos/500/250"}
                alt={recipe.title}
              />

              <Box p="6">
                <Flex className={styles.titleWrapper}>
                  <Button className={styles.title} variant="link">
                    {recipe.title}
                  </Button>
                </Flex>

                <Flex className={styles.categWrapper}>
                  {recipe.food_category?.length &&
                    recipe.food_category?.map((category, index) => {
                      return (
                        <Button borderRadius="full" colorScheme="teal" mr={2} size="xs" key={index}>
                          {category}
                        </Button>
                      );
                    })}
                </Flex>

                <Box noOfLines={2} className={styles.descWrapper}>
                  <Text className={styles.descText}>{recipe.description}</Text>
                </Box>

                <Flex className={styles.userInfo}>
                  <span className={styles.by}>By:</span>
                  <Button className={styles.userName} variant="link">
                    {recipe.username}
                  </Button>
                </Flex>
              </Box>
            </Box>
          );
        })}
    </>
  );
};

export default RecipeCard;
