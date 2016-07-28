import $ from "jquery";
import Node from "node";
import util from "util";

var context = null;
var width = $(window).width();
var height = $(window).height();
var center = {
    x : width/2,
    y : height/2
};
var minDits = 150;
var springAmount = 0.0000005;
var nodes = [];
var nodeNum = 100;
var lineColors = "rgba(255,255,255,0.3)";


var rotate = function(x, y, sin, cos, reverse){
    return {
        x : (reverse) ? (x * cos + y * sin) : (x * cos - y * sin),
        y : (reverse) ? (y * cos - x * sin) : (y * cos + x * sin)
    };
};
var checkCollision = function(partA, partB){
    var dx = partB.getX() - partA.getX();
    var dy = partB.getY() - partA.getY();
    var dist = Math.sqrt(dx * dx + dy * dy);
    if( dist < partA.getRadius() + partB.getRadius() )  
    {
        var angle = Math.atan2(dy, dx);
        var sin = Math.sin(angle);
        var cos = Math.cos(angle);
        //partA作为旋转的中心，坐标为0
        var base = {
            x : partA.getX(),
            y : partA.getY()
        };
        var pos0 = {
            x : 0,
            y : 0
        };

        //以partA为中心，partB旋转之后的坐标
        var pos1 = rotate(dx, dy, sin, cos, true);

        //partA旋转之后的加速度
        var vel0 = rotate(partA.vx, partA.vy, sin, cos, true);

        //partB旋转之后的加速度
        var vel1 = rotate(partB.vx, partB.vy, sin, cos, true);

        //碰撞之后的加速度
        var vxTotal = vel0.x - vel1.x;
        vel0.x = ((partA.mass - partB.mass) * vel0.x + 2 * partB.mass * vel1.x) / (partA.mass + partB.mass);
        vel1.x = vxTotal + vel0.x;
        pos0.x += vel0.x;
        pos1.x += vel1.x;

        var absV = Math.abs(vel0.x) + Math.abs(vel1.x);
        var overlap = (partA.getRadius() + partB.getRadius() - Math.abs(pos0.x - pos1.x));
        pos0.x += vel0.x / absV * overlap;
        pos1.x += vel1.x / absV * overlap;


        //旋转回到原本角度
        var pos0f = rotate(pos0.x, pos0.y, sin, cos, false);
        var pos1f = rotate(pos1.x, pos1.y, sin, cos, false);

        //调整node位置
        partA.setX(base.x + pos0f.x);
        partA.setY(base.y + pos0f.y);
        partB.setX(base.x + pos1f.x);
        partB.setY(base.y + pos1f.y);

        //旋转加速度方向
        var vel0f = rotate(vel0.x, vel0.y, sin, cos, false);
        var vel1f = rotate(vel1.x, vel1.y, sin, cos, false);
        partA.vx = vel0f.x;
        partA.vy = vel0f.y;
        partB.vx = vel1f.x;
        partB.vy = vel1f.y;
    }
};
var spring = function(partA, partB){
    var dx = partB.getX() - partA.getX();
    var dy = partB.getY() - partA.getY();
    var dist = Math.sqrt(dx * dx + dy * dy);
    if( minDits > dist ) 
    {
        util.connectWithLine(context, partA, partB, lineColors);
        var ax = dx * springAmount;
        var ay = dy * springAmount;
        partA.vx += ax;
        partA.vy += ay;
        partB.vx -= ax;
        partB.vy -= ay;
    }
};
var move = function(partA, index){
    partA.setX(partA.vx, true);
    partA.setY(partA.vy, true);
    if( partA.getX() > width + partA.getRadius() )
    {
        partA.setX(0);
    }
    else if( partA.getX() < (-partA.getRadius()) )
    {
        partA.setX(width);
    }
    if( partA.getY() > height + partA.getRadius() )
    {
        partA.setY(0);
    }
    else if( partA.getY() < (-partA.getRadius()) )
    {
        partA.setY(height);
    }
    for(var j = index + 1; j < nodeNum; j++)
    {
        checkCollision(partA, nodes[j]);
        spring(partA, nodes[j]);
    }
};
var draw = function(node){
    node.draw(context);
};
var init = function init(el){
    width = $(window).width();
    height = $(window).height();
    context = el[0].getContext("2d");
    el.attr("width", width);
    el.attr("height", height);
    el.width(width);
    el.height(height);
    center = {
        x : width/2,
        y : height/2
    };
};
var genNodes = function genNodes(){
    for(var i = 0; i < nodeNum; i++)
    {
        var radius = Math.random() * 5 + 1;
        var node = new Node(Math.random() * width, Math.random() * height, radius);
        node.mass = radius*0.02;
        node.vx = (0.5 - Math.random());
        node.vy = (0.5 - Math.random());
        node.setColor("white");
        nodes.push(node);
    }
};
var eachNode = function eachNode() {
    for(var i = 0; i < nodeNum; i++)
    {
        move(nodes[i], i);
        draw(nodes[i], i);
    }
};
var drawNodeGarden = function drawNodeGarden(el) {
    init(el);
    genNodes();
    function drawFrame(){
        requestAnimationFrame(drawFrame);
        context.clearRect(0, 0, width, height);
        eachNode();
    };
    requestAnimationFrame(drawFrame);
    $(window).on("resize", null, function (e) {
        init(el);
    });
};

export default drawNodeGarden;