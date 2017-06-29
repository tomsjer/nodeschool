function Spy(target,method){
    var self = this;
        self.count = 0;
    var temp = target[method];
    
    target[method] = function(){
        self.count++;
        return temp.apply(target,arguments);
    };
    return self;
}
module.exports = Spy;