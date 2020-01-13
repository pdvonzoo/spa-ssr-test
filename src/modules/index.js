import { combineReducers } from "redux";
import books from "./books";
import user from './user'
import admin from './admin'
const rootReducer = combineReducers({ books, user, admin });

export default rootReducer;
