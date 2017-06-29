module.exports = function(namespace){
    return function log(){
        console.log.apply.bind(console,[namespace].concat(Array.prototype.slice.call(arguments)));
    };
};