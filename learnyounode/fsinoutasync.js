var fs = require('fs');
fs.readdir(process.argv[2],function(error,list){
    list.forEach(function(el){
        if(el.indexOf('.'+process.argv[3])!== -1){
            console.log(el);
        }
    });
});