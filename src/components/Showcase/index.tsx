import React, { FunctionComponent } from "react";
import "./index.css";

type ShowcaseProps = {
  children?: React.ReactNode;
};

export const Showcase: FunctionComponent<ShowcaseProps> = ({
  children,
}): JSX.Element => {
  return (
    <div className="App-Showcase">
      {children || <p>Nothing to show here...</p>}
    </div>
  );
};

export default Showcase;
