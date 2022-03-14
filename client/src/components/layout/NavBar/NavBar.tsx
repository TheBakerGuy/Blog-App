import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import { useColorMode, Button, Flex, Switch, IconButton } from "@chakra-ui/react";

const NavBar = () => {
  const user = false;
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex className={styles.navBar} background={colorMode === "light" ? "white" : "black"}>
      <Flex className={styles.logoWrap} flex={["2", "2", "1", "1"]}>
        <NavLink to="/" className={styles.logoLink}>
          Recipes Collection
        </NavLink>
      </Flex>
      <Flex display={["flex", "flex", "none", "none"]} flex={1} justify="center" align="center">
        <IconButton
          icon={<i className="fa-solid fa-bars" />}
          aria-label="menu"
        />
        <Switch onChange={toggleColorMode} size="sm" ml={3}/>
      </Flex>
      <Flex className={styles.mainMenu} display={["none", "none", "flex", "flex"]}>
        <NavLink to="/" className={styles.link}>
          Home
        </NavLink>
        <NavLink to="/recipe/new" className={styles.link}>
          Receta<i className={`fa-solid fa-plus ${styles.icon}`}></i>
        </NavLink>
        <NavLink to="/about" className={styles.link}>
          About
        </NavLink>
      </Flex>
      {user ? (
        <Flex className={styles.userLinks} display={["none", "none", "flex", "flex"]}>
          <NavLink to="/settings" className={styles.link}>
            <img src="https://picsum.photos/73/73" alt="profile-pic" />
          </NavLink>
          <Button variant="ghost">
            <i className="fa-solid fa-right-from-bracket"></i>
          </Button>
          <Switch onChange={toggleColorMode} size="sm" />
        </Flex>
      ) : (
        <Flex className={styles.userLinks} display={["none", "none", "flex", "flex"]}>
          <NavLink to="/login" className={styles.profileLink}>
            Login
          </NavLink>
          <NavLink to="/register" className={styles.profileLink}>
            Register
          </NavLink>
          <Switch onChange={toggleColorMode} size="sm" />
        </Flex>
      )}
    </Flex>
  );
};

export default NavBar;
