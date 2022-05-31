import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import voca from "./modules/voca"
import thunk from "redux-thunk";

const middlewares = [thunk];
const rootReducer = combineReducers({voca});
const enhancer = applyMiddleware(...middlewares);

const store = createStore(rootReducer, enhancer);

export default store;