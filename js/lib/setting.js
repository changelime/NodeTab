/**
 * status [0, 1, 2]
 */
import $ from "jquery";

const defaultSetting = {
    page: {
        index: 0
    },
    time: {
        status: true
    },
    topsites: {
        status: true
    },
    gardon: {
        status: true
    },
    background: {
        img: {
            url: "http://pre06.deviantart.net/c047/th/pre/f/2014/038/4/1/4138b69edbedb5131de2ff89e21412b9-d75hbpi.jpg",
            position: "center center",
            size: "cover",
            repeat: "no-repeat",
            opacity: 1,
            brightness: 1,
            blur: "0px",
            status: true
        },
        color: {
            color: "black",
            status: true
        }
    }
};
const dataName = "setting";
class Setting{
    constructor(){
        this._load();
    }
    _load(){
        if( !localStorage[dataName] )
        {
            this._update(defaultSetting);
        }
        this.setting = JSON.parse(localStorage[dataName]);
    }
    _update(setting){
        localStorage[dataName] = JSON.stringify(setting);
    }
    getTopsitesStatus(){
        return this.setting.topsites.status;
    }
    setTopsitesStatus(status) {
        this.setting.topsites.status = status;
        this._update(this.setting);
        this.applyTopsitesStatus(this.topsites);
    }
    applyTopsitesStatus(topsites) {
        var status = this.getTopsitesStatus();
        if( status )
        {
            topsites.ctrl.show();
            topsites.$btn.attr("checked", "checked");
        }
        else
        {
            topsites.ctrl.hide();
            topsites.$btn.removeAttr("checked");
        }
    }
    getTimeStatus(){
        return this.setting.time.status;
    }
    setTimeStatus(status) {
        this.setting.time.status = status;
        this._update(this.setting);
        this.applyTimeStatus(this.time);
    }
    applyTimeStatus(time) {
        var status = this.getTimeStatus();
        if( status )
        {
            time.ctrl.start();
            time.$btn.attr("checked", "checked");
        }
        else
        {
            time.ctrl.stop();
            time.$btn.removeAttr("checked");
        }
    }
    getPageIndex(){
        return this.setting.page.index;
    }
    setPageIndex(index) {
        this.setting.page.index = index;
        this._update(this.setting);
        this.applyPageIndex();
    }
    upPageIndex(){
        var index = this.getPageIndex();
        if(index < 2)
        {
            index++;
        }
        this.setPageIndex(index);
    }
    downPageIndex(){
        var index = this.getPageIndex();
        if( index > 0 )
        {
            index--;
        }
        this.setPageIndex(index);
    }
    applyPageIndex() {
        var wrapper = $("#wrapper");
        var index = this.getPageIndex();
        switch(index)
        {
            case 0 :
                wrapper.removeClass("show-topsites");
                wrapper.removeClass("hide-time");
                break;
            case 1 :
                wrapper.addClass("show-topsites");
                wrapper.removeClass("hide-time");
                break;
            case 2 :
                wrapper.addClass("show-topsites");
                wrapper.addClass("hide-time");
                break;
        }
    }
    setBackgroundImgStatus(status){
        this.setting.background.img.status = status;
        this._update(this.setting);
        this.applyBackgroundImg();
    }
    getBackgroundImgStatus(){
        return this.setting.background.img.status;
    }
    setBackgroundImgUrl(url){
        this.setting.background.img.url = url;
        this._update(this.setting);
        this.applyBackgroundImg();
    }
    getBackgroundImgUrl(){
        return this.setting.background.img.url;
    }
    setBackgroundImgPosition(position){
        this.setting.background.img.position = position;
        this._update(this.setting);
        this.applyBackgroundImg();
    }
    getBackgroundImgPosition(){
        return this.setting.background.img.position;
    }
    setBackgroundImgSize(size){
        this.setting.background.img.size = size;
        this._update(this.setting);
        this.applyBackgroundImg();
    }
    getBackgroundImgSize(){
        return this.setting.background.img.size;
    }
    setBackgroundImgRepeat(repeat){
        this.setting.background.img.repeat = repeat;
        this._update(this.setting);
        this.applyBackgroundImg();
    }
    getBackgroundImgRepeat(){
        return this.setting.background.img.repeat;
    }
    applyBackgroundImg(){
        var url = this.getBackgroundImgUrl();
        var position = this.getBackgroundImgPosition();
        var size = this.getBackgroundImgSize();
        var repeat = this.getBackgroundImgRepeat();
        var status = this.getBackgroundImgStatus();
        if( status )
        {
            this._updateBackgroundCss({
                "background-image": `url(${url})`,
                "background-position": `${position}`,
                "background-repeat": `${repeat}`,
                "background-size": `${size}`
            });
        }
        else
        {
            this._updateBackgroundCss({});
        }
    }
    setGardenStatus(status){
        this.setting.gardon.status = status;
        this._update(this.setting);
        this.applyGarden(this.gardon);
    }
    getGardenStatus(){
        return this.setting.gardon.status;
    }
    applyGarden(gardon){
        var status = this.getGardenStatus();
        if( status )
        {
            gardon.ctrl.start();
            gardon.$btn.attr("checked", "checked");
        }
        else
        {
            gardon.ctrl.stop();
            gardon.$btn.removeAttr("checked");
        }
    }
    setBackgroundColorStatus(status){
        this.setting.background.color.status = status;
        this._update(this.setting);
        this.applyBackgroundColor();
    }
    getBackgroundColorStatus(){
        return this.setting.background.color.status;
    }
    setBackgroundColorColor(color){
        this.setting.background.color.color = color;
        this._update(this.setting);
        this.applyBackgroundColor();
    }
    getBackgroundColorColor(){
        return this.setting.background.color.color;
    }
    _updateBackgroundCss(css){
        var old = {};
        var imgStatus = this.getBackgroundImgStatus();
        var colorStatus = this.getBackgroundColorStatus();
        if( imgStatus )
        {
            let url = this.getBackgroundImgUrl();
            let position = this.getBackgroundImgPosition();
            let size = this.getBackgroundImgSize();
            old = Object.assign(old, {
                "background-image": `url(${url})`,
                "background-position": `${position}`,
                "background-size": `${size}`,
            });
        }
        if( colorStatus )
        {
            let color = this.getBackgroundColorColor();
            old = Object.assign(old, {
                "background-color": `${color}`
            });
        }
        $("body").css(Object.assign(old, css));
    }
    applyBackgroundColor(){
        var status = this.getBackgroundColorStatus();
        var color = this.getBackgroundColorColor();
        if( status )
        {
            this._updateBackgroundCss({
                "background-color": `${color}`
            });
        }
        else
        {
            this._updateBackgroundCss({});
        }
    }
    init({gardon, time, topsites}){
        this.gardon = gardon;
        this.time = time;
        this.topsites = topsites;
        setTimeout(()=>{
            this.applyPageIndex();
            this.applyTimeStatus(time);
            this.applyTopsitesStatus(topsites);
            this.applyBackgroundImg();
            this.applyBackgroundColor();
            this.applyGarden(gardon);
        }, 100);
    }
}

export default new Setting();