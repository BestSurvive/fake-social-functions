var assert = require('assert');
var lib = require('./index.js');

describe('Test fake Social', function () {
    it('signUp user, length 4',
        function () {
            lib.signUp({ name: 'caio' });
            assert.equal(lib.allUser().length, 4);
        });
    it('add post',
        function () {
            assert.equal(lib.addPost(1,{mes: "hello"}),"Post Added");
        });
        it('id exist, request send',
        function () {
            assert.equal(lib.reqFr(1,2),"Request Send");
        });
        it('id exist, accepted',
        function () {
            assert.equal(lib.conferme(2,3),"Accepted");
        });
        it('id esixt, deleted',
        function () {
            assert.equal(lib.delPost(3,1),"Deleted");
        });

        it('friendship deleted',
        function () {
            assert.equal(lib.delFriend(2,1),"Friend Deleted");

        });
        it('request send deleted',
        function () {
            assert.equal(lib.delReq(1,2),"Request Deleted");

        });
        it('all token',
        function () {
            assert.equal(lib.allToken().length,4);

        });


});
