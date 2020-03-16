import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import sidebarReducer from "./sidebarReducer";
import contentReducer from "./contentReducer";
import thunkMiddleware from "redux-thunk";
import layersReducer from "./layersReducer";

let reducersBundle = combineReducers({
	sidebar: sidebarReducer,
	content: contentReducer,
	layers: layersReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducersBundle,
	composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;