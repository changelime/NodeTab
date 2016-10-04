import React, { Component } from "react";
import { connect } from "react-redux";
import BackgroundImgFile from "components/background/background-img-file.jsx!";
class BackgroundImg extends Component {
    constructor (props, context) {
        super(props, context);
    }
    render () {
        let {state, opacity, brightness, blur} = this.props;
        let style = state ? ({
            opacity: `${opacity}`,
            filter: `blur(${blur}px) brightness(${brightness})`
        }) : ({});
        return (<div style={style}>
                    <BackgroundImgFile width={window.outerWidth} height={window.outerHeight} />
                </div>);
    }
}
function mapStateToProps(state) {
    let img = state.background.img;
    return {
        state: img.state,
        opacity: img.opacity,
        brightness: img.brightness,
        blur: img.blur
    };
}
export default connect(
  mapStateToProps
)(BackgroundImg);;