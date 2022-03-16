import { Box, Image, Text, Button, Flex } from "@chakra-ui/react";
import styles from './RecipeCard.module.css';

const RecipeCard = () => {
  const property = {
    imageUrl: "https://picsum.photos/500/300",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title:
      "Modern home in city center in the heart of historic Los Angeles Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  };
  return (
    <Box className={styles.recipeContainer}>
      <Image className={styles.recipeImg} src={property.imageUrl} alt={property.imageAlt} />
      <Box p="6">
        <Flex className={styles.titleWrapper}>
          <Button className={styles.title} variant="link">
            Tacos al pastor
          </Button>
        </Flex>
        <Flex className={styles.categWrapper}>
          <Button borderRadius="full" colorScheme="teal" mr={2} size="xs">
            Food
          </Button>
        </Flex>
        <Box noOfLines={2} className={styles.descWrapper}>
          <Text className={styles.descText}>{property.title}</Text>
        </Box>
        <Flex className={styles.userInfo}>
          <span className={styles.by}>By:</span>
          <Button className={styles.userName} variant="link">
            Username
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default RecipeCard;
