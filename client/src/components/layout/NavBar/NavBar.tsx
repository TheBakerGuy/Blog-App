import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import {
  useColorMode,
  Flex,
  Switch,
  Box,
  Avatar,
  AvatarBadge,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useAppDispatch } from "../../../hooks";
import { recipeModalStateAction } from "../../../redux/reducers/modalSlice";
import HamMenu from "../HamMenu/HamMenu";

const NavBar = () => {
  const user = true;
  const { colorMode, toggleColorMode } = useColorMode();
  const dispatch = useAppDispatch();

  const openModal = () => {
    dispatch(
      recipeModalStateAction({
        isOpen: true,
      })
    );
  };

  return (
    <Flex className={styles.navBar} background={colorMode === "light" ? "white" : "black"}>
      <Flex className={styles.logoWrap}>
        <HamMenu user={user} openModal={openModal} />
        <NavLink to="/" className={styles.logoLink}>
          ShaRecipe
        </NavLink>
      </Flex>

      <Flex className={styles.mainMenu}>
        <InputGroup>
          <Input variant="outline" placeholder="Que se te antoja?" />
          <InputRightElement>
            <i className="fa-solid fa-magnifying-glass" />
          </InputRightElement>
        </InputGroup>
      </Flex>

      <Flex className={styles.userLinks}>
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
