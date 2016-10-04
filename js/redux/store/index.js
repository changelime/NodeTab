import { createStore, applyMiddleware } from "redux";
import reducers from "../reducers/index.js";
import setting from "model/setting";
import promiseMiddleware from 'redux-promise';
var prestate = setting.getObject();
prestate.topsites.topsites = [];
export default createStore(reducers, 
                            prestate, 
                            applyMiddleware(promiseMiddleware)
                            );