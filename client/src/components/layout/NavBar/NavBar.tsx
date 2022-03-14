import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import { useColorMode, Flex, Switch, Box } from "@chakra-ui/react";
import HamMenu from "../HamMenu/HamMenu";

const NavBar = () => {
  const user = true;
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex className={styles.navBar} background={colorMode === "light" ? "white" : "black"}>
      <Flex
        className={styles.logoWrap}
        flex={["2", "1", "1", "1", "1"]}
        fontSize={["18px", "20px", "25px", "25px", "25px"]}
      >
        <HamMenu user={user} />
        <NavLink to="/" className={styles.logoLink}>
          Recipes Collection
        </NavLink>
      </Flex>
      <Flex
        className={styles.mainMenu}
        display={["none", "flex", "flex", "flex", "flex"]}
        gap={["", "2em", "2em", "5em", "5em"]}
        fontSize={["", "20px", "25px", "25px", "25px"]}
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
        gap={["1rem", "1.5rem", "1.5rem", "1.5rem"]}
        justify={["end", "center", "center", "center", "center"]}
        mr={["20px", "0px", "0px", "0px", "0px"]}
      >
        <NavLink to="/settings" className={styles.link} hidden={!user}>
          <img src="https://picsum.photos/73/73" alt="profile-pic" />
        </NavLink>
        <Box as="button" hidden={!user}>
          <i className="fa-solid fa-right-from-bracket"></i>
        </Box>
        <NavLink to="/login" className={styles.link} hidden={user}>
          <i className="fa-solid fa-right-to-bracket"></i>
        </NavLink>
        <Switch onChange={toggleColorMode} size="sm" />
      </Flex>
    </Flex>
  );
};

export default NavBar;
