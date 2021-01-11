import { createStore, applyMiddleware } from "redux";
import { offersReducer } from "./reducers/offersReducer";
import thunk from "redux-thunk";

const store = createStore(offersReducer, applyMiddleware(thunk));

export default store;
