var color = {
	hashToRGB : function(hash, a){
		hash = hash.slice(1);
		var r = parseInt(hash.substr(0, 2), 16);
		var g = parseInt(hash.substr(2, 2), 16);
		var b = parseInt(hash.substr(4, 2), 16);			
		if( typeof a === "number" )
		{
			return "rgba("+ r + ", " + g + ", " + b + ", " + a +")";
		}
		else
		{
			return "rgb("+ r + ", " + g + ", " + b +")";
		}
	},
	RGBToHash : function(r, g, b){
		var toString = function(number){
			if( number < 16 )
			{
				return "0" + number.toString(16);
			}
			else
			{
				return number.toString(16);
			}
		};
		return "#" + toString(r) + toString(g) + toString(b);
	},
	random : function(){
		return "#" + ((~~(Math.random() * 0xffffff)).toString(16));
	},
	fillNumber: function(str, maxLen, number){
		var len = str.length;
		if(len < maxLen)
		{
			var need = maxLen - len;
			for(let i = 0; i < need; i++)
			{
				str += number;
			}
		}
		return str;
	},
	toNumber: function(numStr){
		var len = numStr.length;
		if(len < 12)
		{
			numStr = this.fillNumber(numStr, 12, 2);
		}
		else
		{
			numStr = numStr.slice(0, 12);
		}
		return +numStr;
	},
	strToColor: function(str){
		var rex = /[^\d]/g;
		var base64 = btoa(encodeURIComponent(str));
		var number = this.toNumber(base64.replace(rex, ""));
		var hex = this.fillNumber((number % 0xffffff).toString(16), 6, 0);
		return `#${hex}`;
	}
};
export default color;

