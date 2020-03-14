import {applyMiddleware, combineReducers, createStore} from "redux";
import sidebarReducer from "./sidebarReducer";
import contentReducer from "./contentReducer";
import thunkMiddleware from "redux-thunk";
import logInReducer from "./logInReducer";

let reducersBundle = combineReducers({
	sidebar: sidebarReducer,
	content: contentReducer,
	logIn: logInReducer,
});

let store = createStore(reducersBundle, applyMiddleware(thunkMiddleware));

export default store;