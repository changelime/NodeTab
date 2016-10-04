import React, { Component } from "react";
import Color from "components/form/color/color.jsx!";
import { connect } from "react-redux";
import { setBackgroundColorColor } from "redux/actions";
import setting from "model/setting";
function mapStateToProps(state) {
  return {
    color: state.background.color.color
  }
}

function mapDispatchToProps(dispatch) {
  return {
    colorChange: function colorChange(event){
      var color = event.target.value;
      dispatch(setBackgroundColorColor({color: color}));
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Color);;