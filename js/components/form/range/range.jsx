import React, { Component } from "react";

export default class Range extends Component {
    constructor (props, context) {
        super(props, context);
        this.state = {
            drag: false
        };
    }
    changeVal(pageX, parentX){
        const { value, maxValue, minValue, rangeChange} = this.props;
        if( this.state.drag )
        {
            let width = 100;
            let range = (maxValue - minValue);
            let racial = (pageX - parentX) / width;
            racial = (racial > 1) ? 1 : racial;
            racial = (racial < 0) ? 0 : racial;
            let val = range * racial;
            rangeChange(val);
        }
    }
    mouseMove(event){
        let traget = event.target;
        let parentX = traget.parentNode.getBoundingClientRect().left + document.documentElement.scrollLeft;
        this.changeVal(event.pageX, parentX);
    }
    mouseDown(event){
        this.state.drag = true;
    }
    mouseUp(event){
        this.state.drag = false;
    }
    mouseLeave(event){
        let traget = event.target;
        let parentX = traget.parentNode.getBoundingClientRect().left + document.documentElement.scrollLeft;
        this.changeVal(event.pageX, parentX);
        this.state.drag = false;
    }

    rangeMouseDown(event){
        this.state.drag = true;
        // let traget = event.target;
        // let parentX = traget.getBoundingClientRect().left + document.documentElement.scrollLeft;
        // this.changeVal(event.pageX, parentX);
        // this.state.drag = false;
    }
    rangeMouseUp(event){
        let traget = event.target;
        let parentX = traget.getBoundingClientRect().left + document.documentElement.scrollLeft;
        this.changeVal(event.pageX, parentX);
        this.state.drag = false;
    }
    rangeMouseLeave(event){
        let traget = event.target;
        let parentX = traget.getBoundingClientRect().left + document.documentElement.scrollLeft;
        this.changeVal(event.pageX, parentX);
        this.state.drag = false;
    }
    render () {
        const { value, maxValue, minValue } = this.props;
        let range = (maxValue - minValue);
        let handleWidth = 20;
        let width = 100;
        let handleInRange = handleWidth / width;
        let handlePos = (((value / range) - (handleInRange / 2))) * 100;
        let style = {
            left: `calc(${handlePos}% - 20px)`
        };
        return (
            <div 
                onMouseDown={this.rangeMouseDown.bind(this)}
                onMouseUp={this.rangeMouseUp.bind(this)}
                onMouseLeave={this.rangeMouseLeave.bind(this)}
                className="input-range">
                <div 
                    onMouseDown={this.mouseDown.bind(this)}
                    onMouseUp={this.mouseUp.bind(this)}
                    onMouseMove={this.mouseMove.bind(this)}
                    onMouseLeave={this.mouseLeave.bind(this)}
                    style={style} className="range-handle" ></div>
            </div>
        );
    }
}
