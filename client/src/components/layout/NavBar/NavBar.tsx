import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import { useColorMode, Flex, Switch, Box, Avatar, AvatarBadge } from "@chakra-ui/react";
import HamMenu from "../HamMenu/HamMenu";

const NavBar = () => {
  const user = true;
  const { colorMode, toggleColorMode } = useColorMode();

  const breakPStyles = {
    logoFlex: ["2", "1", "1", "1", "1"],
    logoFontSize: ["25px", "30px", "35px", "38px", "40px"],
    menuDisplay: ["none", "flex", "flex", "flex", "flex"],
    menuGap: ["", "2em", "2em", "3em", "5em"],
    menuFontSize: ["", "20px", "25px", "25px", "25px"],
    userLinksGap: ["1rem", "1.5rem", "1.5rem", "1.5rem"],
    userLinksJustify: ["end", "center", "center", "center", "center"],
    userLinksMargin: ["20px", "0px", "0px", "0px", "0px"],
  };

  return (
    <Flex className={styles.navBar} background={colorMode === "light" ? "white" : "black"}>
      <Flex
        className={styles.logoWrap}
        flex={breakPStyles.logoFlex}
        fontSize={breakPStyles.logoFontSize}
      >
        <HamMenu user={user} />
        <NavLink to="/" className={styles.logoLink}>
          RecipesCollection
        </NavLink>
      </Flex>
      <Flex
        className={styles.mainMenu}
        display={breakPStyles.menuDisplay}
        gap={breakPStyles.menuGap}
        fontSize={breakPStyles.menuFontSize}
      >
        <NavLink to="/" className={styles.link}>
          Home
        </NavLink>
        <NavLink to="/recipe/new" className={styles.link}>
          Receta<i className={`fa-solid fa-plus ${styles.icon}`}></i>
        </NavLink>
        <NavLink to="/about" className={styles.link}>
          About
        </NavLink>
        <Box as="button" className={styles.link} hidden={!user}>
          My Recipes
        </Box>
      </Flex>
      <Flex
        className={styles.userLinks}
        gap={breakPStyles.userLinksGap}
        justify={breakPStyles.userLinksJustify}
        mr={breakPStyles.userLinksMargin}
      >
        <NavLink to={user ? "/settings" : "/login"} className={styles.link}>
          <Avatar size="sm" src="https://picsum.photos/73/73" name="user">
            <AvatarBadge boxSize="1.25em" bg={user ? "green.500" : "tomato"} />
          </Avatar>
        </NavLink>
        <Box as="button" hidden={!user}>
          <i className="fa-solid fa-right-from-bracket"></i>
        </Box>
        <Switch onChange={toggleColorMode} size="sm" />
      </Flex>
    </Flex>
  );
};

export default NavBar;
