var http = require('http');
    http.createServer(function(req,res){
        
        var regex = /^(.*)(\?iso=)(.*)$/;
        var match = req.url.match(regex);
        var endpoint = match[1];
        var date = new Date(match[3]);

        res.writeHead(200,{'Content-Type':'application/json'});

        if(endpoint === '/api/parsetime'){
            
            res.end(JSON.stringify({
                hour: date.getHours(),
                minute: date.getMinutes(),
                second: date.getSeconds()
            }));
        }
        if(endpoint === '/api/unixtime'){
            
            res.end(JSON.stringify({
                unixtime: date.getTime()
            }));
        }

    })
    .listen(process.argv[2]);