import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profilePageReducer";
import dialogsReducer from "./dialogsPageReducer";
import userReducer from "./usersPageReducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reducer";

let reducers = combineReducers({
    profileReducer,
    dialogsReducer,
    userReducer,
    authReducer,
    appReducer,
    form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.store = store;

export default store;
