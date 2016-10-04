import React, { Component } from "react";
import File from "components/form/file/file.jsx!";
import { connect } from "react-redux";
import { setBackgroundImgUrl } from "redux/actions";
import setting from "model/setting";
function mapStateToProps(state) {
  return {
    url: state.background.img.url
  }
}
function mapDispatchToProps(dispatch) {
  return {
    fileChange: function fileChange(url){
      dispatch(setBackgroundImgUrl({url: url}));
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(File);;