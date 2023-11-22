import { combineReducers, createStore } from "redux";
import todoReducer from "./reducers/todoReducer";
import alertReducer from "./reducers/alertReducer";
import switchReducer from "./reducers/switchReducer";

const rootReducer = combineReducers({
    todoReducer,
    alertReducer,
    switchReducer
});

const store = createStore(rootReducer);

export default store;