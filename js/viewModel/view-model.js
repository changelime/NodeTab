import $ from "jquery";
import mousewheel from "jquery-mousewheel";
import drawNodeGarden from "node-garden";
import drawTime from "time";
import printTopsites from "topsites";
import setting from "../model/setting";
import Stylesheet from "../lib/css";
import bind from "../lib/bind";
mousewheel($);
window.jquery = $;
var viewModel = function viewModel(){
    var gardon = {
        ctrl: drawNodeGarden($("#bg")),
        $btn: $("#gardon-switch")
    };
    var time = {
        ctrl: drawTime($("#time")),
        $btn: $("#time-switch")
    };
    var topsites = {
        ctrl: printTopsites($("#topsites>ul")),
        $btn: $("#topsites-switch")
    };
    var backroundImg = {
        // ctrl: printTopsites($("#topsites>ul")),
        $btn: $("#backround-img-switch")
    };
    bind(gardon.$btn, ["load", "change"], function(event){
		var status = false;
        var status = (event.trigger === "load") ? setting.getGardenStatus() : gardon.$btn.is(":checked");
		setting.setGardenStatus(status);
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
    });
    bind(time.$btn, ["load", "change"], function(event){
        var status = (event.trigger === "load") ? setting.getTimeStatus() : time.$btn.is(":checked");
		setting.setTimeStatus(status);
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
    });
    bind(topsites.$btn, ["load", "change"], function(event){
        var status = (event.trigger === "load") ? setting.getTopsitesStatus() : topsites.$btn.is(":checked");
		setting.setTopsitesStatus(status);
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
    });
    bind($(window), ["load", "keydown", "mousewheel"], function(event){
        var wrapper = $("#wrapper");
        if( event.trigger !== "load" )
        {
            let e = event.event;
            if( e.deltaY < 0 || e.keyCode === 40 )
            {
                e.preventDefault();
                setting.upPageIndex();
            }
            else if( e.deltaY > 0 || e.keyCode === 38 )
            {
                e.preventDefault();
                setting.downPageIndex();
            }
        }
        var index = setting.getPageIndex();;
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
    });
    var css = new Stylesheet("background-css");
    bind(backroundImg.$btn, ["load", "change"], function(event){
        var status = (event.trigger === "load") ? setting.getBackgroundImgStatus() : backroundImg.$btn.is(":checked");
		setting.setBackgroundImgStatus(status);
        if( status )
        {
            let url = setting.getBackgroundImgUrl();
            let position = setting.getBackgroundImgPosition();
            let size = setting.getBackgroundImgSize();
            let repeat = setting.getBackgroundImgRepeat();
            let opacity = setting.getBackgroundImgOpacity();
            let brightness = setting.getBackgroundImgBrightness();
            let blur = setting.getBackgroundImgBlur();
            css.update("body::before", {
                "background-image": `url(${url})`,
                "background-position": `${position}`,
                "background-size": `${size}`,
                "background-repeat": `${repeat}`,
                "opacity": `${opacity}`,
                "filter": `blur(${blur}) brightness(${brightness})`
            }, true);
            backroundImg.$btn.attr("checked", "checked");
        }
        else
        {
            css.update("body::before", {}, true);
            backroundImg.$btn.removeAttr("checked");
        }
    });
    bind(backroundImg.$btn, ["load", "change"], function(event){
        var show = (event.trigger === "load") ? setting.getBackgroundImgStatus() : backroundImg.$btn.is(":checked");
		setting.setBackgroundImgStatus(status);
        if( show )
        {
            let opacity = setting.getBackgroundImgOpacity();
            css.update("body::before", {
                "opacity": `${opacity}`,
            }, true);
        }
    });
};

export default viewModel;