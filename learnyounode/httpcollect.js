var http = require('http');
var url = process.argv[2];

http.get(url,function(response){

    var buffer = '';
    response.setEncoding('utf8').on('data',function(data){
        buffer+=data;
    }).on('end',function(){
        console.log(buffer.length);
        console.log(buffer);
    });

});