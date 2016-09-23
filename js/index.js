// import $ from "jquery";

// import setting from "setting";
// import addEvents from "addEvents";
import viewModel from "./viewModel/view-model";
var init = function init() {
    // var gardon = drawNodeGarden($("#bg"));
    // var time = drawTime($("#time"));
    // var topsites = printTopsites($("#topsites>ul"));
    // var args = {
    //     gardon: {
    //         ctrl: gardon,
    //         $btn: $("#gardon-switch")
    //     },
    //     time: {
    //         ctrl: time,
    //         $btn: $("#time-switch")
    //     },
    //     topsites: {
    //         ctrl: topsites,
    //         $btn: $("#topsites-switch")
    //     }
    // };
    viewModel();
    // addEvents(args);
    // setting.init(args);
};

init();