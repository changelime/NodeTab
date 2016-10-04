import React, { Component } from "react";
import SwitchBtn from "components/form/switch/swtch-btn.jsx!";
import { connect } from "react-redux";
import { setTopsitesState } from "redux/actions";
import setting from "model/setting";
function mapStateToProps(state) {
  return {
    value: state.topsites.state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    switchChange: function switchChange(event){
      var state = !setting.getTopsitesState();
      event.target.checked = state;
      dispatch(setTopsitesState({state: state}));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SwitchBtn);;