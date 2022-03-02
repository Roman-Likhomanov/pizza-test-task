import {combineReducers, createStore} from "redux";
import employeesReducer from "./employees-reducer";

let reducers = combineReducers({
    employeesPage: employeesReducer
})

const store = createStore(reducers);

export default store;