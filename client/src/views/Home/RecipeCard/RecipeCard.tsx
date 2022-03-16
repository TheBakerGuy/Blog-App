import { Box, Image, Text, Button, Flex } from "@chakra-ui/react";
import styles from "./RecipeCard.module.css";

interface IRecipeCard {
  title: string;
  food_category?: string[];
  description: string;
  username: string;
  photo?: string;
}

const RecipeCard = ({
  title,
  description,
  username,
  food_category,
  photo = "https://picsum.photos/500/250",
}: IRecipeCard) => {
  return (
    <Box className={styles.recipeContainer}>
      <Image className={styles.recipeImg} src={photo} alt={title} />
      <Box p="6">
        <Flex className={styles.titleWrapper}>
          <Button className={styles.title} variant="link">
            {title}
          </Button>
        </Flex>
        <Flex className={styles.categWrapper}>
          {food_category?.length &&
            food_category?.map((category) => {
              return (
                <Button borderRadius="full" colorScheme="teal" mr={2} size="xs">
                  {category}
                </Button>
              );
            })}
        </Flex>
        <Box noOfLines={2} className={styles.descWrapper}>
          <Text className={styles.descText}>{description}</Text>
        </Box>
        <Flex className={styles.userInfo}>
          <span className={styles.by}>By:</span>
          <Button className={styles.userName} variant="link">
            {username}
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default RecipeCard;
