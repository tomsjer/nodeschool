// MIA
//  module.exports = function(operation,num){
//     while(num > 0){
//         operation();
//         num--;
//     }
// };
// OFICIAL
function repeat(operation,num){
    if(num < 1) return;
    operation();
    return repeat(operation,--num);
}

module.exports = repeat;