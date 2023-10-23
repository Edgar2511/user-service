import { combineReducers, createStore } from "redux";
import { rootReducer } from "./reducers/rootReducer";

const enhancer =
  //@ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const reducers = combineReducers({
  rootReducer,
  //    heraxosiReducder ,
  //     iqosiReducer,
});
export const store = createStore(reducers, enhancer);
