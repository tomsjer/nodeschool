var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
    var file = fs.createReadStream(process.argv[3]);
    file.pipe(res);
}).listen(process.argv[2]);