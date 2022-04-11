import CreateNumber  from "./createNumber.js";
import { render } from "./render.js";
/**
* 绑定事件
*/
var n = new CreateNumber(100);
n.fd = function(x){
    render(x)
}

// 当点击页面开始进行记数
var lock = true;

export default function event(){
    // console.log(lock)
    window.onclick = function(){
        if(lock){
            lock = false;
            n.start();
        }else{
            lock = true;
            n.stop()
        }
    
    }
}

event();
