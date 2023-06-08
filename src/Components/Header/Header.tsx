import React from "react";
import { LogoIconHeader } from "../../Assets/Logo/LogoIconHeader";
import { NavLink, useLocation } from "react-router-dom";
import classNames from "classnames";
import styles from "./Header.module.css";
import Button, { ButtonTypes } from "../Button";

const Header = () => {
  const { pathname } = useLocation();

  const CATEGORIES = [
    { name: "Providers", link: "/" },
    { name: "For StartUps", link: "/" },
    { name: "Services", link: "/" },
    { name: "Developers", link: "/" },
    { name: "About Us", link: "/" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.containerLogo}>
        <LogoIconHeader />
      </div>

      <div className={styles.containerSidebar}>
        {CATEGORIES.map(({ link, name }) => {
          return (
            <NavLink
              key={link}
              to={link}
              className={classNames(styles.categories, {
                [styles.activeСategories]: pathname === link,
              })}
            >
              {name}
            </NavLink>
          );
        })}
      </div>

      <div className={styles.containerButtons}>
        <Button
          className={styles.buttonSignIn}
          title={"Sign In"}
          type={ButtonTypes.Primary}
          onClick={() => {}}
        />
        <Button
          className={styles.buttonSignUp}
          title={"Sign Up"}
          type={ButtonTypes.Secondary}
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default Header;
