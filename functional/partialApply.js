var slice = Array.prototype.slice;
function logger(namespace){
    return function log(){
        // var args = slice.apply(arguments);
        //             args.unshift(namespace);
        // console.log(args.join(' '));
        console.log.apply(console,[namespace].concat(slice.call(arguments)));
    };
}



module.exports = logger;