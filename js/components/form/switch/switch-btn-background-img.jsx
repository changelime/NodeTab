import React, { Component } from "react";
import SwitchBtn from "components/form/switch/swtch-btn.jsx!";
import { connect } from "react-redux";
import { setBackgroundImgState } from "redux/actions";
import setting from "model/setting";
function mapStateToProps(state) {
  return {
    value: state.background.img.state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    switchChange: function switchChange(event){
      var state = !setting.getBackgroundImgState();
      event.target.checked = state;
      dispatch(setBackgroundImgState({state: state}));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SwitchBtn);;