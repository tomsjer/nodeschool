function repeat(operation,num){
    if(num<=0){
        return num;
    }else{
        return function(){operation(); return repeat(operation,--num);};
    }
}

function trampoline(fn){
    while(typeof fn === 'function'){
        res = fn();
    }
}
module.exports = function(operation,num){
    trampoline(function(){ return repeat(operation,num); });
};

/*
const trampoline = (fn) => {
    while (typeof fn === 'function') {
        fn = fn();
    }
    return fn;
};
 */