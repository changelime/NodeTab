import React, { Component } from "react";
import SwitchBtn from "components/form/switch/swtch-btn.jsx!";
import { connect } from "react-redux";
import { setGardenState } from "redux/actions";
import setting from "model/setting";
function mapStateToProps(state) {
  return {
    value: state.garden.state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    switchChange: function switchChange(event){
      // event.preventDefault();
      var state = !setting.getGardenState();
      event.target.checked = state;
      dispatch(setGardenState({state: state}));
    }
  }
}

const NodeGardenBtn = connect(
  mapStateToProps,
  mapDispatchToProps
)(SwitchBtn);

export default NodeGardenBtn;