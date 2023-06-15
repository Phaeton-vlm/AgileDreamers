import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { PathNames } from "../Router/Router";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

import styles from "./PagesWrapper.module.css";
import Home from "../Home";
import ContactBlock from "../../Components/ContactBlock";

const PagesWrapper = () => {
  const { pathname } = useLocation();

  return (
    <div className={styles.container}>
      <Header />
      {pathname === PathNames.Home ? <Home /> : <Outlet />}
      <ContactBlock />
      <Footer />
    </div>
  );
};

export default PagesWrapper;
