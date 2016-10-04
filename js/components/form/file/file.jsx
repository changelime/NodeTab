import React, { Component } from "react";
import BackgroundImgFile from "components/background/background-img-file.jsx!";
export default class File extends Component {
    constructor (props, context) {
        super(props, context);
    }
    change(event){
        let {fileChange} = this.props;
        let file = event.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function(fileEvent){
            fileChange(fileEvent.target.result);
        };
    }
    render () {
        return (
            <div className="input-file" >
                <BackgroundImgFile width="100" height="60" />
                <input onChange={this.change.bind(this)} type="file" accept="image/jpg,image/jpeg,image/png" />
            </div>  
        );
    }
}
