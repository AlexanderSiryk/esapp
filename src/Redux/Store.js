import {combineReducers, createStore} from "redux";
import sidebarReducer from "./sidebarReducer";
import contentReducer from "./contentReducer";

let reducersBundle = combineReducers({
	sidebar: sidebarReducer,
	content: contentReducer
});

let store = createStore(reducersBundle);

Window.state = store.getState();

export default store;