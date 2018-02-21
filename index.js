var cont = 1;
var social = [
    {
        token: cont++,
        name: 'luca',
        friends: [],
        reqE: [],
        reqR: [],
        post: [
            {
                idPost: 1,
                mes: "hello"
            }
        ]

    },
    {
        token: cont++,
        name: 'pippo',
        friends: [],
        reqE: [],
        reqR: [],
        post: [
            {
                idPost: 1,
                mes: "hello"
            }
        ]

    },
    {
        token: cont++,
        name: 'ciao',
        friends: [],
        reqE: [],
        reqR: [],
        post: [
            {
                idPost: 1,
                mes: "hello"
            },
            {
                idPost: 2,
                mes: "hello"
            }
        ]

    }

]

exports.signUp=function(user){
    user.token=cont++;
    user.friends=[];
    user.reqE=[];
    user.reqR=[];
    user.post=[];
    social.push(user);
    return "userAdded";
}

exports.addPost=function(token,newPost){
   
    for (var i = 0; i < social.length; i++) {
        
        if (token===social[i].token) {
             newPost.idPost= parseInt(social[i].post[social[i].post.length-1].idPost+1)
             social[i].post.push(newPost)
             return "Post Added";
        }
        
    }
    
    
}






exports.reqFr = function (idE, idR) {
    for (var i = 0; i < social.length; i++) {
        if(social[i].token===idE)
        {
            social[i].reqE.push(idR)
        }
    //}
    //for (var i = 0; i < social.length; i++) {
        if(social[i].token===idR)
        {
            social[i].reqR.push(idE)
        }
    }

    return "Request Send"  
   
    
}
//this.reqFr(1,2);
//this.reqFr(3,2);
//console.log(social);



exports.conferme = function (id,idFriend) {
            for (var i = 0; i < social.length; i++) {
                if(social[i].token===id)
                {
                    for (var y = 0; y < social[i].reqR.length; y++) {
                     if (idFriend===social[i].reqR[y]) {
                         social[i].friends.push(idFriend)
                         social[i].reqR.splice(y,1)
                         
                        }
                    }
                    
                }  
            }

            for (var i = 0; i < social.length; i++) {
                if(social[i].token===idFriend)
                {
                    for (var y = 0; y < social[i].reqE.length; y++) {
                     if (id===social[i].reqE[y]) {
                         social[i].friends.push(id)
                         social[i].reqE.splice(y,1)
                         
                     }
                }
                    
            } 
        }
    return  "Accepted"
   
    
}
//this.conferme(2,3);
//this.conferme(2,1);
//console.log(social);


exports.allUser=function() {
    return social;   
}

exports.delPost=function(id,idPost){
    for (var i = 0; i < social.length; i++) {
        if(social[i].token===id)
        {
            for (var y = 0; y < social[i].post.length; y++) {
                if (social[i].post[y].idPost===idPost) {
                    social[i].post.splice(y,1) 
                    return "Deleted"   
                }
                
            }
        }
    }

}
exports.delFriend=function(id,idFriend){
    for (var i = 0; i < social.length; i++) {
        if(social[i].token===id)
        {
            for (var y = 0; y < social[i].friends.length; y++) {
                if (social[i].friends[y]===idFriend) {
                    social[i].friends.splice(y,1) 
                }
                
            }
        }
    }
    for (var i = 0; i < social.length; i++) {
        if(social[i].token===idFriend)
        {
            for (var y = 0; y < social[i].friends.length; y++) {
                if (social[i].friends[y]===id) {
                    social[i].friends.splice(y,1)  
                }
                
            }
        }
    }
    return "Friend Deleted"  

}
//this.delFriend(2,1);
//console.log(social);


exports.delReq=function(id,idreqE){
    for (var i = 0; i < social.length; i++) {
        if(social[i].token===id)
        {
            for (var y = 0; y < social[i].reqE.length; y++) {
                if (social[i].reqE[y]===idreqE) {
                    social[i].reqE.splice(y,1) 
                }
                
            }
        }
    }
    for (var i = 0; i < social.length; i++) {
        if(social[i].token===idreqE)
        {
            for (var y = 0; y < social[i].reqR.length; y++) {
                if (social[i].reqR[y]===id) {
                    social[i].reqR.splice(y,1)  
                }
                
            }
        }
    }
    return "Request Deleted"  

}

//this.delreq(1,2);
//console.log(social);


exports.viewPost=function(id,idFriend) {
    for(var i=0; i<social.length;i++)
    {
        if(social[i].token===idFriend)
        {
            for(var y=0; y<social[i].friends.length;y++)
            {
                if(social[i].friends[y]===id)
                {
                    return social[i].post
                }  
            }    
        }
    }
}
//console.log(viewPost(3,2));

exports.allToken=function () {
    var tokens=[];
    for (var i = 0; i < social.length; i++) {
        tokens.push(social[i].token)
    }
    return tokens;
    
}
//console.log(this.allToken());
