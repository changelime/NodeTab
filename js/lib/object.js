import util from "util";

class Obj
{
	constructor(x, y, width, height){
		this._x = x;
		this._y = y;
		this._width = width;
		this._height = height;
		this._color = "#ffff00";
		this._scaleX = 1;
		this._scaleY = 1;
		this._lineWidth = 1;
		this._rotation = 0;
		this.vs = {};
		this.vbs = [];
		this._bounce = -1.7;
	}
	getHeight(){
		return this._height;
	}
	getWidth(){
		return this._width;
	}
	getBounds(){
		return {
			x : this._x,
			y : this._y,
			width : this._width,
			height : this._height
		};
	}
	cleanVBS(){
		for(var i = 0; i < this.vbs.length; i++)
		{
			ve = this.vbs[i];
			ve.calculate();
			if( Math.abs(ve.get("x")) < 1 && Math.abs(ve.get("y")) < 1 )
			{
				this.vbs.splice(i,1);
				return true;
			}
		}
		return false;
	}
	calculate(noFri){
		var x = 0;
		var y = 0;
		for(var v in this.vs)
		{
			var ve = this.vs[v];
			!noFri && ve.calculate();//力
			x += ve.get("x");
			y += ve.get("y");
		}
		for(var i = 0; i < this.vbs.length; i++)
		{
			ve = this.vbs[i];
			!noFri && ve.calculate();
			x += ve.get("x");
			y += ve.get("y");
		}
		return {
			x : x,
			y : y
		};
	}
	run(self){
		var v = this.calculate();
		this.setX(v.x, self);//应用计算后的结果
		this.setY(v.y, self);
	}
	bounce(){
		var v = this.calculate();
		v = {
			x : v.x * this._bounce,
			y : v.y *  this._bounce
		};
		var pos = this.getXY();
		var ve = util.getVelocity({
			x : pos.x + v.x,
			y : pos.y + v.y
		}, pos);
		this.vbs.push(new Velocity(ve.angle, ve.distance, 0.9));
		this.cleanVBS();
	}
	setColor(color) {
		this._color = color;
	}
	setRotation(r){
		this._rotation = r;
	}
	getRotation(){
		return this._rotation;
	}
	scaleY(scaleY){
		this._scaleY = scaleY;
	}
	scaleX(scaleX){
		this._scaleX = scaleX;
	}
	setY(y, self){
		if(self)
		{
			this._y += y;
		}
		else
		{
			this._y = y;
		}
	}
	setX(x, self){
		if(self)
		{
			this._x += x;
		}
		else
		{
			this._x = x;
		}
	}
	setXY(x, y){
		this._x = x;
		this._y = y;
	}
	getY(){
		return this._y;
	}
	getX(){
		return this._x;
	}
	getXY(){
		return {
			x : this._x,
			y : this._y
		};
	}
}

export default Obj;