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
    <header className=" flex flex-wrap justify-between items-center mx-auto App-Header px-6">
      <h1 className="text-3xl text-grey-200">{title}</h1>
      <Link to="/checkout">
        <Basket />
      </Link>
    </header>
  </>
);

export default AppHeader;
