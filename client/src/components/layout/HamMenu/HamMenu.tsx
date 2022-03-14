import { MenuButton, Menu, IconButton, MenuList, MenuItem } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import styles from './HamMenu.module.css';

interface IHamMenu {
  user: boolean;
}

const HamMenu = ({ user }: IHamMenu) => {
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
          <NavLink to="/recipe/new">
            <MenuItem>Recipe<i className={`fa-solid fa-plus ${styles.icon}`}></i></MenuItem>
          </NavLink>
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
