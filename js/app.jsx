import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"
import App from "components/app/app.jsx!";
import store from "./redux/store/index.js";

export default function(){
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.querySelector("#react-root")
    );
};