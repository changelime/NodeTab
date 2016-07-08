import $ from "jquery";
import drawNodeGarden from "node-garden";
import drawTime from "time";
import printTopsites from "topsites";
import setting from "setting";
import addEvents from "addEvents";

var init = function init() {
    drawNodeGarden($("#bg"));
    drawTime($("#time"));
    printTopsites($("#topsites>ul"));
    addEvents();
    setting.init();
};

init();