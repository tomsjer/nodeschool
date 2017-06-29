function loadUsers(usersIds,load,done){
    var completed = 0;
    var users = [];
    usersIds.forEach(function(id,index){
        load(id,function(user){
            users[index] = user;
            if(++completed === usersIds.length) return done(users);
        });
    });
}

module.exports = loadUsers;