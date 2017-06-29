var fs = require('fs');
var files = [];

module.exports = function(dir,ext,callback){
    fs.readdir(dir,function(error,list){
        
        if(error) return callback(error);

        list.forEach(function(file) {
            if(file.indexOf('.'+ext)!== -1){
                files.push(file);
            }
        });
        return callback(null,files);
    });
};