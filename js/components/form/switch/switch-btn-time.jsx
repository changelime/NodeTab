import React, { Component } from "react";
import SwitchBtn from "components/form/switch/swtch-btn.jsx!";
import { connect } from "react-redux";
import { setTimeState } from "redux/actions";
import setting from "model/setting";
function mapStateToProps(state) {
  return {
    value: state.time.state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    switchChange: function switchChange(event){
      // event.preventDefault();
      var state = !setting.getTimeState();
      event.target.checked = state;
      dispatch(setTimeState({state: state}));
    }
  }
}

const TimeBtn = connect(
  mapStateToProps,
  mapDispatchToProps
)(SwitchBtn);

export default TimeBtn;