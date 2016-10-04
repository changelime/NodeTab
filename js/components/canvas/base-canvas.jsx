import React, { Component } from "react";

export default class BaseCanvas extends Component {
    constructor (props, context) {
        super(props, context);
    }
    componentDidMount(){
        this.props.setCanvas(this.props, this.refs.canvas);
    }
    componentDidUpdate(prevProps, prevState)
    {
        this.props.setCanvas(this.props, this.refs.canvas);
    }
    render () {
        return (<canvas id={this.props.id} ref="canvas" ></canvas>);
    }
}
