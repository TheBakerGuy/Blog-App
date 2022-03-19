import { MenuButton, Menu, IconButton, MenuList, MenuItem, Box } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import styles from './HamMenu.module.css';

interface IHamMenu {
  user: boolean;
  openModal: () => void;
}

const HamMenu = ({ user, openModal }: IHamMenu) => {
  return (
    <>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<i className="fa-solid fa-bars" />}
          variant="outline"
          display={["block", "none", "none", "none"]}
          mr={2}
        />

        <MenuList className={styles.menu}>
          <NavLink to="/">
            <MenuItem>Home</MenuItem>
          </NavLink>

          <Box hidden={!user} onClick={openModal}>
            <MenuItem>Recipe<i className={`fa-solid fa-pencil ${styles.icon}`}></i></MenuItem>
          </Box>

          <NavLink to="/about">
            <MenuItem>About</MenuItem>
          </NavLink>

          <MenuItem hidden={!user}>My Recipes</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default HamMenu;
