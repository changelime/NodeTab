/**
 * status [0, 1, 2]
 */
import $ from "jquery";

var setting = {
    getStatus: function(){
        var status = localStorage["status"];
        if(status)
        {
            status = +status;
        }
        else
        {
            status = 0;
        }
        return status;
    },
    setStatus: function(status) {
        localStorage["status"] = status + "";
    },
    upStatus: function(){
        var status = this.getStatus();
        if(status < 2)
        {
            status++;
        }
        this.setStatus(status);
        this.applyStatus();
    },
    downStatus: function(){
        var status = this.getStatus();
        if(status > 0)
        {
            status--;
        }
        this.setStatus(status);
        this.applyStatus();
    },
    applyStatus: function() {
        var wrapper = $("#wrapper");
        var status = this.getStatus();
        switch(status)
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
    },
    init: function(){
        setTimeout(()=>{
            this.applyStatus();
        }, 100);
    }
};

export default setting;