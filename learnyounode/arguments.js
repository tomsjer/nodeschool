var sum =  0;
process.argv.slice(2,process.argv.length).forEach(function(el,i){
    sum += (el | 0);
});
console.log(sum);