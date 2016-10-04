import React, { Component } from "react";
import Range from "components/form/range/range.jsx!";
import { connect } from "react-redux";
import { setBackgroundImgOpacity } from "redux/actions";
import setting from "model/setting";
function mapStateToProps(state) {
  return {
    value: state.background.img.opacity,
    minValue: 0,
    maxValue: 1
  }
}
function mapDispatchToProps(dispatch) {
  return {
    rangeChange: function rangeChange(val){
      dispatch(setBackgroundImgOpacity({opacity: val}));
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Range);;