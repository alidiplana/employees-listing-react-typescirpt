import { combineReducers } from "redux";
import employeesReducer from "./employeesReducers";

const reducers = combineReducers({
  bank: employeesReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
