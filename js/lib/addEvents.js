import $ from "jquery";
import mousewheel from "jquery-mousewheel";
import setting from "setting";

mousewheel($);

var addEvents = function addEvents(){
    $(window).on("keydown mousewheel", null, function (e) {
        if( e.deltaY < 0 || e.keyCode === 40 )
		{
			e.preventDefault();
            setting.upStatus();
		}
		else if( e.deltaY > 0 || e.keyCode === 38 )
		{
			e.preventDefault();
            setting.downStatus();
		}
    });
    
};

export default addEvents;