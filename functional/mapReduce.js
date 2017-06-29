
module.exports = function arrayMap(arr,fn,thisArg){
    return arr.reduce(function(acc,curr,currI,arr){
            acc.push(fn.bind(thisArg)(curr));
            return acc;
        },[]);
};

//OFICIAL:
//module.exports = functional arrayMap(arr,fn,thisArg){
//  return arr.reduce(function(acc,item,index,arr){
//      acc.push(fn.call(thisArg,item,index,arr));
//      return acc;
//  },[]);
//};