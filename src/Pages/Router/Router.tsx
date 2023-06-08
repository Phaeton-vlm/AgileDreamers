import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

import Ukraine from "../../Components/Ukraine";

export enum PathNames {
  Home = "/",
  Providers = "/providers",
  ForStartUps = "/startups",
  Services = "/services",
  Developers = "/developers",
  AboutUs = "/about",
}

const Router = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={PathNames.Home} element={<Footer />}>
          <Route path={PathNames.Providers} element={<Ukraine />} />
          <Route path={PathNames.ForStartUps} element={<Ukraine />} />
        </Route>

        <Route path="*" element={<Navigate to={PathNames.Providers} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
