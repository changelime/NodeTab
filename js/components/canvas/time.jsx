import React, { Component } from "react";
import BaseCanvas from "components/canvas/base-canvas.jsx!";
import { connect } from "react-redux";
import drawTime from "time";
function mapStateToProps(state) {
  return {
    value: state.time.state
  }
}
function mapDispatchToProps(dispatch) {
  return {
    setCanvas: function setCanvas(state, dom){
        let time = drawTime(dom);
        if( state.value )
        {
            time.start();
        }
        else
        {
            time.stop();
        }
    }
  }
}

const Time = connect(
  mapStateToProps,
  mapDispatchToProps
)(BaseCanvas);

export default Time;