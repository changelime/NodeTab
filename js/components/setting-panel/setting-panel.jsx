import React, { Component } from "react";
import SettingList from "components/setting-panel/setting-list.jsx!";

export default class SettingPanel extends Component {
    constructor (props, context) {
        super(props, context);
    }
    render () {
        return (
            <div id="setting" >
                <input type="checkbox" className="open-btn" />
                <div className="panel" >
                    <SettingList/>
                </div>
            </div>);
    }
}
