import React, { Component } from "react";
import Range from "components/form/range/range.jsx!";
import { connect } from "react-redux";
import { setBackgroundImgBrightness } from "redux/actions";
import setting from "model/setting";
function mapStateToProps(state) {
  return {
    value: state.background.img.brightness,
    minValue: 0,
    maxValue: 1
  }
}
function mapDispatchToProps(dispatch) {
  return {
    rangeChange: function rangeChange(val){
      dispatch(setBackgroundImgBrightness({brightness: val}));
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Range);;