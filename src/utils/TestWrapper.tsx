import { configureStore, Store } from "@reduxjs/toolkit";
import { MemoryRouter } from "react-router-dom";
import { ComponentType, FunctionComponent } from "react";
import { Provider } from "react-redux";
import reducer from "../reducers";

export const makeStore = (): Store => {
  return configureStore({ reducer });
};

const wrapComponent = (
  Component: ComponentType | FunctionComponent | any,
  store: Store | null = null,
  props = {}
): JSX.Element => {
  return (
    <Provider store={store || makeStore()}>
      <MemoryRouter>
        <Component {...props} />
      </MemoryRouter>
    </Provider>
  );
};

export default wrapComponent;
