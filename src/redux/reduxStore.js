import { combineReducers, createStore } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer"
import authReducer from "./authReducer";

const rootReducer = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
  usersPage: usersReducer,
	auth: authReducer
})

const store = createStore(rootReducer);

window.store = store

export default store