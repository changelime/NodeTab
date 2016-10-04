import React, { Component } from "react";
import Range from "components/form/range/range.jsx!";
import { connect } from "react-redux";
import { setBackgroundImgBlur } from "redux/actions";
import setting from "model/setting";
function mapStateToProps(state) {
  return {
    value: state.background.img.blur,
    minValue: 0,
    maxValue: 100
  }
}
function mapDispatchToProps(dispatch) {
  return {
    rangeChange: function rangeChange(val){
      dispatch(setBackgroundImgBlur({blur: val}));
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Range);;