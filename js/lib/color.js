export function hashToRGB(hash){
	return (hash = hash.slice(1)) && `rgb(${[0, 2, 4].map((i)=> parseInt(hash.substr(i, 2), 16)).join()})`;
};
export function hashToRGBA(hash, a){
	return (hash = hash.slice(1)) && `rgba(${[0, 2, 4].map((i)=> parseInt(hash.substr(i, 2), 16)).join()}, ${a})`;
};
export function RGBToHash(r, g, b){
	return `#${[r, g, b].map((num)=> num < 16 ? "0" + num.toString(16) : num.toString(16)).join("")}`;
};
export function randomHash(){
	return `#${[].map.call("ffffff", ()=> (~~(Math.random() * 16)).toString(16)).join("")}`;
};
export function strToColor(str){
	var num = [...str].map(ch=> ch.codePointAt(0)).reduce((pre, cur)=>pre+cur, 9973);
	var hex = [..."123456"].map(val=> ((+val * num) % 16).toString(16)).join("");
	return `#${hex}`;
};
export default {
	hashToRGB,
	hashToRGBA,
	RGBToHash,
	randomHash,
	strToColor
};