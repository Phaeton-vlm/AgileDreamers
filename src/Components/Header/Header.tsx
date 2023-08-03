import React from "react";
import { LogoIconHeader } from "../../Assets/Logo/LogoIconHeader";
import { NavLink, useLocation } from "react-router-dom";
import { PathNames } from '../../Pages/Router/Router';
import classNames from "classnames";
import styles from "./Header.module.css";
import Button, { ButtonTypes } from "../Button";

const Header = () => {
  const { pathname } = useLocation();

  const CATEGORIES = [
    { name: "Providers", link: "/providers" },
    { name: "For StartUps", link: "/startups" },
    { name: "Services", link: "/services" },
    { name: "Developers", link: "/developers" },
    { name: "About Us", link: "/about" },
  ];

  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <div className={styles.containerLogo}>
        <NavLink to={PathNames.Home}> <LogoIconHeader /> </NavLink>
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
            className={styles.button}
            title={"Sign In"}
            type={ButtonTypes.BigPrimary}
            onClick={() => {}}
          />
          <Button
            className={styles.button}
            title={"Sign Up"}
            type={ButtonTypes.BigSecondary}
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
