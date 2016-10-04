import { combineReducers } from "redux";
import timeReducer from "./timeReducer.js";
import gardenReducer from "./gardenReducer.js";
import pageReducer from "./pageReducer.js";
import topsitesReducer from "./topsitesReducer.js";
import backgroundReducer from "./background/index.js";
export default combineReducers({
	time: timeReducer,
	garden: gardenReducer,
	page: pageReducer,
	topsites: topsitesReducer,
	background: backgroundReducer
});
