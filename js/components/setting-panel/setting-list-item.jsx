import React, { Component } from "react";

export default class SettingItem extends Component {
    constructor (props, context) {
        super(props, context);
    }
    render () {
        return (<li className="panel-item" >
                    <label className="panel-item-left" htmlFor="time-switch">{this.props.label}</label>
                    <div className="panel-item-right">
                        {React.Children.map(this.props.children, child=>child)}
                    </div>
                </li>);
    }
}
