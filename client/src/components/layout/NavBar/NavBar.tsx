import styles from "./NavBar.module.css";
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className={styles.navWrapper}>
      <NavLink to="/" className={`${styles.logoWrapper}`}>Recipes Collection</NavLink>
      <div className={styles.linksWrapper}>
        <ul className={styles.list}>
          <NavLink to="/" className={styles.link}>Home</NavLink>
          <NavLink to="/recipe/new" className={styles.link}>
            Receta<i className={`fa-solid fa-plus ${styles.icon}`}></i>
          </NavLink>
          <NavLink to="/about" className={styles.link}>About</NavLink>
        </ul>
      </div>
      <div className={styles.userWrapper}>
        <div className={styles.rightContainer}>
          <NavLink to="/settings" className={`${styles.profile} ${styles.profileLink}`}>
            <img src="https://picsum.photos/73/73" alt="profile-pic" />
            <p>Username</p>
          </NavLink>
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
