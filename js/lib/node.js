import Obj from "object";


class Node extends Obj
{
	constructor(x, y, radius)
	{
		super(x, y, radius * 2, radius *2);
		this._radius = radius;
		this.vs = {};
		this.mass = 1;
	}
	getRadius(){
		return this._radius;
	}
	getBounds(){
		return {
			x : this._x - this._radius,
			y : this._y - this._radius,
			width : this._radius * 2,
			height : this._radius * 2
		};
	}
	draw(context) {
		context.save();
		context.translate(this._x, this._y);
		context.rotate(this._rotation);
		context.scale(this._scaleX, this._scaleY);
		context.lineWidth = this._lineWidth;
		context.fillStyle = this._color;
		context.beginPath();
		context.arc( 0, 0, this._radius, 0, (Math.PI * 2), true );
		context.closePath();
		context.fill();
		context.restore();
	}
}
export default Node;