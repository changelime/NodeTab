import $ from "jquery";

var context = null;
var width = $(window).width();
var height = $(window).height();
var center = {
    x : width/2,
    y : height/2
};
var size = 150;
var sizeHalf = size / 2;
var totalWidth = 1280;
var offsetLeft = (width - totalWidth) / 2;
var col = totalWidth/8;
var colHalf = col /2;

var formet = function(time){
    var str = time + "";
    if (time < 10)
    {
        str = "0" + str;
    }
    return str;
};
var drawText = function drawText(context){
    context.save();
    // context.font = "lighter " + size + "px 微软雅黑";
    // context.textAlign = "center";
    // context.textBaseline = "middle";
    context.fillStyle = "red";
    var text = getTimeText();
    for(var i = 0; i < 8; i++)
    {
        var nowLeftPos = col * i;
        var nowPosCenter = nowLeftPos + colHalf;
        var nowPos = nowPosCenter - sizeHalf;
        context.fillText(text[i], offsetLeft + nowPos + sizeHalf, center.y);
    }
    text = null;
    context.restore();
};
var drawRects = function drawRects(context){
    context.save();
    context.fillStyle = "rgba(255,255,255,0.8)";
    for(var i = 0; i < 8; i++)
    {
        var nowLeftPos = col * i;
        var nowPosCenter = nowLeftPos + colHalf;
        var nowPos = nowPosCenter - sizeHalf;
        context.fillRect(offsetLeft + nowPos, (center.y - sizeHalf), size, size);
    }
    context.restore();
};
var getTimeText = function getTimeText(){
    var date = new Date();
    var text = `${formet(date.getHours())}:${formet(date.getMinutes())}:${formet(date.getSeconds())}`;
    date = null;
    return text;
};
var draw = function draw(context){
    context.save();
    drawRects(context);
    context.globalCompositeOperation = "destination-out";
    drawText(context);
    context.restore();
};
var init = function init(el){
    width = $(window).width();
    height = $(window).height();
    center = {
        x : width/2,
        y : height/2
    };
    size = 150;
    sizeHalf = size / 2;
    totalWidth = 1280;
    offsetLeft = (width - totalWidth) / 2;
    col = totalWidth / 8;
    colHalf = col /2;
    context = el[0].getContext("2d");
    el.attr("width", width);
    el.attr("height", height);
    el.width(width);
    el.height(height);
    context.font = `lighter ${size}px 微软雅黑`;
    context.textAlign = "center";
    context.textBaseline = "middle";
};
var drawTime = function drawTime(el) {
    var status = false;
    init(el);
    function drawFrame(){
	    context.clearRect(0, 0, width, height);
        draw(context);
        if( status )
        {   
            requestAnimationFrame(drawFrame);
        }
        else
        {
            context.clearRect(0, 0, width, height);
        }
    };
    function start(){
        if( !status )
        {
            status = true;
            requestAnimationFrame(drawFrame);
        }
    }
    function stop(){
        if( status )
        {
            status = false;
        }
    }
    $(window).on("resize", null, function (e) {
        init(el);
    });
    return {
        start,
        stop
    };
};

export default drawTime;