import $ from "jquery";
import mousewheel from "jquery-mousewheel";
import setting from "setting";

mousewheel($);

var addEvents = function addEvents({gardon, time, topsites}){
    $(window).on("keydown mousewheel", null, function (e) {
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
    });
    gardon.$btn.on("change", null, function (e) {
        var $this = $(this);
		var checked = $this.is(":checked");
		setting.setGardenStatus(checked);
    });
	time.$btn.on("change", null, function (e) {
        var $this = $(this);
		var checked = $this.is(":checked");
		setting.setTimeStatus(checked);
    });
	topsites.$btn.on("change", null, function (e) {
        var $this = $(this);
		var checked = $this.is(":checked");
		setting.setTopsitesStatus(checked);
    });
};

export default addEvents;