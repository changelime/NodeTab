import React, { Component } from "react";

export default class Color extends Component {
    constructor (props, context) {
        super(props, context);
    }
    render () {
        const { color, colorChange } = this.props;
            return (
                <input 
                    type="color" 
                    onChange={colorChange} 
                    defaultValue={color} 
                    className="color-btn" />
            );
    }
}
