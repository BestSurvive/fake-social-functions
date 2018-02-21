## Fake Social Function 

## Installation

    npm install fakesocial-js-function


## Usage

For use fakesocial-js-function

```js
var lib = require('fakesocial-js-function');

lib.signUp({name:"Luca" });
lib.addPost({mes:"Hello World"});
lib.reqFr(1,2);  //send friendship, id users
lib.conferme(2,1); //accept friendship, id users
lib.allUser();
lib.delPost(1,2);// id user, id post
lib.delFriend(1,2); // remove friendship, id users
lib.delreq(1,2);// cancel req friendship, id users
lib.viewPost(1,2);//if friend, id users
lib.allToken();
```
