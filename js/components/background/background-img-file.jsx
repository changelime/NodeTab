import React, { Component } from "react";
import { connect } from "react-redux";
class BackgroundImg extends Component {
    constructor (props, context) {
        super(props, context);
        this.state = {
            img: null
        };
    }
    update(){
        let {state, url, width, height} = this.props;
        let canvas = this.refs.canvas;
        let context = canvas.getContext("2d");
        if( !this.state.img )
        {
            this.state.img = document.createElement("img");
        }
        let img = this.state.img;
        if( state )
        {
            canvas.style.opacity = 1;
            if( img.src !== url )
            {
                canvas.width = width;
                canvas.height = height;
                img.src = url;
                img.onload = function(){
                    context.drawImage(img, 0, 0, canvas.width, canvas.height);
                };
            }
        }
        else
        {
            canvas.style.opacity = 0;
        }
    }
    componentDidMount() {
        this.update();
    }
    componentDidUpdate(prevProps, prevState)
    {
        this.update();
    }
    render () {
        return (<canvas className="BackgroundImg-canvas" ref="canvas"></canvas>);
    }
}
function mapStateToProps(state) {
    let img = state.background.img;
    return {
        state: img.state,
        url: img.url,
    };
}
export default connect(
  mapStateToProps
)(BackgroundImg);;