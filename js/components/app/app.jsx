import React, { Component } from "react";
import { connect } from "react-redux";
import SettingPanel from "components/setting-panel/setting-panel.jsx!";
import Garden from "components/canvas/garden.jsx!";
import Time from "components/canvas/time.jsx!";
import Topsites from "components/topsites/topsites.jsx!";
import Background from "components/background/background.jsx!";
import { upPageIndex,  downPageIndex} from "redux/actions";
import store from "redux/store";
class App extends Component {
    constructor (props, context) {
        super(props, context);
    }
    scroll(event){
        if( event.deltaY < 0 || event.keyCode === 38 )
        {
            store.dispatch(upPageIndex());
        }
        else if( event.deltaY > 0 || event.keyCode === 40 )
        {
            store.dispatch(downPageIndex());
        }
    }
    render () {
        const { index } = this.props;
        return (<div 
                    onKeyDown={this.scroll.bind(this)} 
                    onWheel={this.scroll.bind(this)} 
                    tabIndex="0" 
                    id="react-app">
                    <Background id="bg" />
                    <Garden id="garden" />
                    <div 
                        id="wrapper" 
                        className={
                            (index === 1) ? 
                            "show-topsites" : (
                                (index === 2) ? 
                                "show-topsites hide-time" : "")}>
                        <SettingPanel />
                        <Time id="time" />
                        <Topsites id="topsites"/>
                    </div>
                </div>);
    }
}

function mapStateToProps(state) {
    return {
        index: state.page.index
    }
}

export default connect(
    mapStateToProps
)(App);