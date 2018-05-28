var APP_ID = 'EDxMbgBCPl0kyC5cjk0IzxUp-gzGzoHsz';
var APP_KEY = 'KVS1wNH1CwYUb8aIA7zfEvqB';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});
console.log('运行到这里了');

var TestObject = AV.Object.extend('TestObject');
var testObject = new TestObject();
testObject.save({
  words: 'Hello World!'
}).then(function(object) {
  alert('LeanCloud Rocks!');
})


















//
