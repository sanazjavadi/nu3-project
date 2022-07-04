import { combineReducers } from "@reduxjs/toolkit";
import search from "./search";
import basket from "./basket";

export default combineReducers({ search, basket });
