var http = require('http');
var urls = [process.argv[2],process.argv[3],process.argv[4]];
var result = '';
var count = 0;

function asyncGet(url){
    return new Promise(function(resolve,reject){
        http.get(url,function(response){
            var buffer = '';
            response.setEncoding('utf8').on('data',function(data){
                buffer+=data;
            }).on('end',function(){
                resolve(buffer);
            });
        });
    });
}

asyncGet(urls[0]).then(function(data){
    console.log(data);
    asyncGet(urls[1]).then(function(data){
        console.log(data);
        asyncGet(urls[2]).then(function(data){
            console.log(data);
        });
    });
});
