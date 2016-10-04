import React, { Component } from "react";

export default class SwitchBtn extends Component {
    constructor (props, context) {
        super(props, context)
    }
    render () {
        const { value, switchChange } = this.props;
            return (
                <input 
                    type="checkbox" 
                    onChange={switchChange} 
                    defaultChecked={value} 
                    className="switch-btn" />
            );
    }
}
