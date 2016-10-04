import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTopsites } from "redux/actions";
import color from "color";
class Topsites extends Component {
    componentDidMount(){
        this.props.goFetchTopsites();
    }
    // componentDidUpdate(prevProps, prevState)
    // {
    //     this.props.goFetchTopsites();
    // }
    constructor (props, context) {
        super(props, context);
    }
    render () {
        const { state, topsites } = this.props;
        const keyBase = `0.${setTimeout(()=>{})}`;
        var lis = state ? topsites.map((site, index) => {
            let style = {
                borderColor: color.strToColor(site.title + site.url)
            };
            return (<li key = {keyBase + index} style = {style} >
                        <a href = {site.url}>
                            {site.title}
                        </a>
                    </li>);
        }) : "";
        return (
            <div id={this.props.id}>
                <ul>
                    {lis}
                </ul>
            </div>);
    }
}
function mapStateToProps(state) {
  return {
    state: state.topsites.state,
    topsites: state.topsites.topsites
  }
}
function mapDispatchToProps(dispatch) {
  return {
    goFetchTopsites: function goFetchTopsites(){
        dispatch(fetchTopsites());
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Topsites);;