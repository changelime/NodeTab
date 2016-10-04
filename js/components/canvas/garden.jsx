import React, { Component } from "react";
import BaseCanvas from "components/canvas/base-canvas.jsx!";
import { connect } from "react-redux";
import drawNodeGarden from "node-garden/node-garden";
function mapStateToProps(state) {
  return {
    value: state.garden.state
  }
}
function mapDispatchToProps(dispatch) {
  return {
    setCanvas: function setCanvas(state, dom){
        let gardon = drawNodeGarden(dom);
        if( state.value )
        {
            gardon.start();
        }
        else
        {
            gardon.stop();
        }
    }
  }
}

const Garden = connect(
  mapStateToProps,
  mapDispatchToProps
)(BaseCanvas);

export default Garden;