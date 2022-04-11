import isPrime from "./isprime";
import { randomColor,getRan} from "./randomColor";
// 获取页面的元素
var container  = document.getElementsByClassName('container')[0];
var center1 = document.getElementsByClassName('sta')[0];

/**
 * 进行页面的渲染
 * 
 */
export function render(n){
    //判断n是否为质数
    let span = document.createElement('span');
    span.innerHTML = n;
    let color  = `${randomColor()}`
    
    if(isPrime(n)){
        //如果是质数需要生成一个随机的颜色
        span.style.color = color;
    }
    //每调用一次就在页面上添加一个span元素
    
    container.appendChild(span);
    renderCenter(n,isPrime(n),color)
}

function renderCenter(n,isPrime,color){
    //大字只有会飘的会变
    if(isPrime){
        //如果是质数
        
        let flow = document.createElement('div');
        flow.classList = 'center piao';
        flow.style.color = color;
        flow.innerHTML = n;
        document.body.appendChild(flow);
        getComputedStyle(flow).left;
        flow.style.transform = `translateX(${getRan(-150,150)}px) translateY(${getRan(-150,150)}px)`
        flow.style.opacity = 0;

    }
    center1.innerHTML = n
}