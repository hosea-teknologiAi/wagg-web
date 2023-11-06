import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import Header from "../components/Header/Header";

type LayoutType = {
  title?: string;
  children?: React.ReactNode;
};

const Main = ({ children, title = "Wagginton" }: LayoutType) => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <div className={pathname !== "/" ? "app-main hidden" : "app-main"}>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <Header />

      {/* <main className={pathname !== "/" ? "main-page" : ""}>{children}</main> */}
      <main className="main-page">{children}</main>
    </div>
  );
};

export default Main;
