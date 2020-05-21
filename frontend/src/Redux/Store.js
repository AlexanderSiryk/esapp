import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import layersReducer from "./layersReducer";
import applicationReducer from "./applicationReducer";


let reducersBundle = combineReducers({
    layers: layersReducer,
    app: applicationReducer,
});

let store = createStore(reducersBundle, applyMiddleware(thunkMiddleware));

export default store;
