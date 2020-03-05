import {applyMiddleware, combineReducers, createStore} from "redux";
import sidebarReducer from "./sidebarReducer";
import contentReducer from "./contentReducer";
import thunkMiddleware from "redux-thunk";

let reducersBundle = combineReducers({
	sidebar: sidebarReducer,
	content: contentReducer
});

let store = createStore(reducersBundle, applyMiddleware(thunkMiddleware));

window.state = store.getState();

export default store;