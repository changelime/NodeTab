var util = {
	connectWithLine : function(context, now, target, color){
		context.save();
		context.strokeStyle = color ? color : "white";
		context.beginPath();
		context.moveTo(now.getX(), now.getY());
		context.lineTo(target.getX(), target.getY());
		context.stroke();
		context.closePath();
	},
	radToAng : function(rag){
		return rag * Math.PI / 180;
	},
	getOffset : function(fixed, ball, offset){
		var angle = this.getAngle(ball, fixed);
		var target = this.decomposeVelocity(angle, offset);
		return {
			x : fixed.x + target.x,
			y : fixed.y + target.y
		}
	},
	getAngle : function(pos1, pos2){
		var dx = pos1.x - pos2.x;
		var dy = pos1.y - pos2.y;
		return Math.atan2(dy, dx);
	},
	decomposeVelocity : function(angle, force){
		return {
			x : Math.cos(angle) * force,
			y : Math.sin(angle) * force
		};
	},
	getDistance : function(pos1, pos2){
		var dx = pos1.x - pos2.x;
		var dy = pos1.y - pos2.y;
		return Math.sqrt(dx * dx + dy * dy);
	},
	getVelocity : function(pos1, pos2){
		return {
			angle : this.getAngle(pos1, pos2),
			distance : this.getDistance(pos1, pos2)
		};
	},
	containsPoint : function(ract, x, y){
		return !(x < ract.x || x > ract.x + ract.width || y < ract.y || y > ract.y + ract.height);
	},
	intersectsRect : function(rectA, rectB){
		return !( rectA.x + rectA.width < rectB.x ||
					rectB.x + rectB.width < rectA.x ||
					rectA.y + rectA.height < rectB.y ||
					rectB.y + rectB.height < rectA.y );
	},
	intersectsDis : function(obj1, obj2){
		var pos1 = obj1.calculate(true);
		var pos2 = obj2.calculate(true);
		var dis = this.getDistance({
			x : pos1.x + obj1.getX(),
			y : pos1.y + obj1.getY()
		},{
			x : pos2.x + obj2.getX(),
			y : pos2.y + obj2.getY()
		});
		if( obj1.getRadius() + obj2.getRadius() >=  dis)
		{
			return true;
		}
		return false;
	}
};
export default util;