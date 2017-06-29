var fs = require('fs');
var mod = require('./fsmodule');
mod(process.argv[2],process.argv[3],function(error,data){
    if(error){
        console.log('ERROR: ',error);
    }
    data.forEach(function(el){
        console.log(el);
    });
});