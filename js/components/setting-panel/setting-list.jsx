import React, { Component } from "react";
import SettingItem from "components/setting-panel/setting-list-item.jsx!";
import TimeBtn from "components/form/switch/switch-btn-time.jsx!";
import NodeGardenBtn from "components/form/switch/switch-btn-Garden.jsx!";
import TopsitesBtn from "components/form/switch/switch-btn-topsites.jsx!";
import BackgroundImgBtn from "components/form/switch/switch-btn-background-img.jsx!";
import OpacityRange from "components/form/range/opacity-range.jsx!";
import BrightnessRange from "components/form/range/brightness-range.jsx!";
import BlurRange from "components/form/range/blur-range.jsx!";
import BackroundImgFile from "components/form/file/backround-img-file.jsx!";
import BackgroundColorBtn from "components/form/switch/switch-btn-background-color.jsx!";
import BackgroundColorColor from "components/form/color/background-color.jsx!";

export default class SettingList extends Component {
    constructor (props, context) {
        super(props, context);
    }
    render () {
        return (
            <ul>
                <SettingItem label="Node Garden" >
                    <NodeGardenBtn />
                </SettingItem>
                <SettingItem label="Time" >
                    <TimeBtn />
                </SettingItem>
                <SettingItem label="Topsites" >
                    <TopsitesBtn />
                </SettingItem>
                <SettingItem label="Background Image" >
                    <BackgroundImgBtn />
                </SettingItem>
                <SettingItem label="Background Image File" >
                    <BackroundImgFile />
                </SettingItem>
                <SettingItem label="Background Image Opacity" >
                    <OpacityRange />
                </SettingItem>
                <SettingItem label="Background Image Brightness" >
                    <BrightnessRange />
                </SettingItem>
                <SettingItem label="Background Image Blur" >
                    <BlurRange />
                </SettingItem>
                <SettingItem label="Background Color" >
                    <BackgroundColorBtn />
                </SettingItem>
                <SettingItem label="Background Color Value" >
                    <BackgroundColorColor />
                </SettingItem>
            </ul>);
    }
}
