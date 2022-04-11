/**
 * 一个类,用于实例化一个不断产生数字并且可以暂停的对象
 * 
 */
export default class CreateNumber{
    constructor(duration = 500){
        this.count = 1;
        this.time = null;
        this.duration = duration;
        this.fd = null;
    }
    start(){
        if(this.time){
            return
        }
        this.time = setInterval(()=>{
            if(typeof this.fd == 'function'){
                this.fd(this.count)

            }
            this.count++;
        },this.duration)
    }
    stop(){
        clearInterval(this.time)
        this.time = null;

    }
}