import { createStore } from "redux";
import { todoreducer } from "./reducer";

export const store = createStore(
    todoreducer, /* preloadedState, */
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );