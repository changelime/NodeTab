import { combineReducers } from "redux";
import backgroundImgReducer from "./backgroundImgReducer.js";
import backgroundColorReducer from "./backgroundColorReducer.js";
export default combineReducers({
	img: backgroundImgReducer,
	color: backgroundColorReducer
});