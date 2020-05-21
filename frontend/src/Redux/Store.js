import {applyMiddleware, combineReducers, createStore} from "redux";
import sidebarReducer from "./sidebarReducer";
import thunkMiddleware from "redux-thunk";
import layersReducer from "./layersReducer";
import applicationReducer from "./applicationReducer";


let reducersBundle = combineReducers({
    sidebar: sidebarReducer,
    layers: layersReducer,
    app: applicationReducer,
});

let store = createStore(reducersBundle, applyMiddleware(thunkMiddleware));

export default store;
