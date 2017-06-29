// MIA (y moz)
// function countWords(inputWords){
//     return inputWords.reduce(function(augmentator,current){
//         if(current in augmentator){
//             augmentator[current]++;
//         }else{
//             augmentator[current] = 1;
//         }
//         return augmentator;
//     },{});
// }
// OFICIAL
function countWords(arr){
    return arr.reduce(function(obj,curr){
        obj[curr] = ++obj[curr] || 1;
        return obj;
    },{});
}

module.exports = countWords;