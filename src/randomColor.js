
var colors = ["#f26395", "#62efab", "#ef7658", "#ffe868", "#80e3f7", "#d781f9"];
/**
 * 产生随机颜色的函数,具体颜色从颜色列表中拿出
 * 
 */
export function randomColor(){
    const len = colors.length;
    const i = getRan(0,len);
    // console.log(i);
    return colors[i];
}

/**
 * 获得min-max之间的一个随机数字
 */
export function getRan(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}

