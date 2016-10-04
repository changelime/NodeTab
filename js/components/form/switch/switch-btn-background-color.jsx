import React, { Component } from "react";
import SwitchBtn from "components/form/switch/swtch-btn.jsx!";
import { connect } from "react-redux";
import { setBackgroundColorState } from "redux/actions";
import setting from "model/setting";
function mapStateToProps(state) {
  return {
    value: state.background.color.state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    switchChange: function switchChange(event){
      var state = !setting.getBackgroundColorState();
      event.target.checked = state;
      dispatch(setBackgroundColorState({state: state}));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SwitchBtn);;