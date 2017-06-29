var net = require('net');
var server = net.createServer(function(socket){
    
    var date = buildDate();
    socket.end(date+'\n');

}).listen(process.argv[2]);

function buildDate(){

    var d = new Date();
    var yyyy = d.getFullYear();
    var MM = d.getMonth() + 1;
    var dd = d.getDate();
    var hh = d.getHours();
    var mm = d.getMinutes();

    return (yyyy+'-'+pad(MM)+'-'+pad(dd)+' '+pad(hh)+':'+pad(mm));
}

function pad(n){
    return (n<10) ? '0'+n : n;
}