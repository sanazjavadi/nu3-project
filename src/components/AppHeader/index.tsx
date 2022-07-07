import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import Basket from "../Basket";
import "./index.css";

export interface AppHeaderProps {
  title: string;
}

export const AppHeader: FunctionComponent<AppHeaderProps> = ({
  title,
}): JSX.Element => (
  <>
    <header
      data-testid="app-header"
      className="flex flex-wrap justify-between items-center mx-auto App-Header px-6"
    >
      <Link to="/">
        <h1
          data-testid="header-title"
          className="text-3xl text-grey-200 cursor-pointer"
        >
          {title}
        </h1>
      </Link>
      <Link to="/checkout">
        <Basket />
      </Link>
    </header>
  </>
);

export default AppHeader;
