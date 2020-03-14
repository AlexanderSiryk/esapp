import {applyMiddleware, combineReducers, createStore} from "redux";
import sidebarReducer from "./sidebarReducer";
import contentReducer from "./contentReducer";
import thunkMiddleware from "redux-thunk";
import layersReducer from "./layersReducer";

let reducersBundle = combineReducers({
	sidebar: sidebarReducer,
	content: contentReducer,
	layers: layersReducer,
});

let store = createStore(reducersBundle, applyMiddleware(thunkMiddleware));

export default store;