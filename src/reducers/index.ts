import { combineReducers } from "@reduxjs/toolkit";
import search from "./search";
import pdp from "./pdp";
import basket from "./basket";

export default combineReducers({ search, pdp, basket });
