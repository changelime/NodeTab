import React, { Component } from "react";
import BackgroundImg from "components/background/background-img.jsx!";
import BackgroundColor from "components/background/background-color.jsx!";
class Background extends Component {
    constructor (props, context) {
        super(props, context);
    }
    render () {
        return (
            <div id={this.props.id}>
                <BackgroundColor />
                <BackgroundImg />
            </div>);
    }
}
export default Background;