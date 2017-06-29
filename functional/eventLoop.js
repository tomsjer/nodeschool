function repeat(operation,num){
    var tid;
    if(num <= 0 ) clearInterval(tid);
    tid = setInterval(function(){
        operation();
        repeat(operation,num--);
    },0);
}

module.exports = repeat;