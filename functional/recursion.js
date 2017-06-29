// MIA
// function reduce(arr,fn,init){
//     if(!arr.length) return init;
//     var current = arr[0];
//     return reduce(arr.slice(1),fn,fn(init,current));
// }
// OFICIAL
function reduce(arr,fn,initial){
    return (function reduceOne(index,value){
        if(index>arr.length-1) return value; // Earlyy return
        return reduceOne(index+1,fn(value,arr[index],index,arr)); // Calculate and pass to next step
    })(0,initial); // IIFE trigger recusrion with initial values
}
module.exports = reduce;