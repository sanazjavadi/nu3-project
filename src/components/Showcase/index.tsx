import { FunctionComponent } from "react";
import "./index.css";

export const Showcase: FunctionComponent = ({ children }): JSX.Element => {
  return <div className="App-Showcase">{children}</div>;
};

export default Showcase;
