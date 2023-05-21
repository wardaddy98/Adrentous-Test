import { createStore, combineReducers } from "redux";
import mainReducer from "./reducer";

const rootReducer = combineReducers({
  main: mainReducer
});
const store = createStore(rootReducer);

export default store;
