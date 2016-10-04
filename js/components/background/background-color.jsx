import React, { Component } from "react";
import { connect } from "react-redux";
class BackgroundColor extends Component {
    constructor (props, context) {
        super(props, context);
    }
    render () {
        let {state, color} = this.props;
        let style = state ? ({
            backgroundColor: `${color}`
        }) : ({});
        return (<div style={style}></div>);
    }
}
function mapStateToProps(state) {
    let color = state.background.color;
    return {
        state: color.state,
        color: color.color
    };
}
export default connect(
  mapStateToProps
)(BackgroundColor);;