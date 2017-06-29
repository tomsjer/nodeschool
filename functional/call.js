function duckCount(){
    return [].slice.call(arguments).reduce(function(prev,curr){
        console.log({}.hasOwnProperty.call(curr,'quack'));
        return ({}.hasOwnProperty.call(curr,'quack')) ? prev+=1 : prev;
    },0);
}

module.exports = duckCount;