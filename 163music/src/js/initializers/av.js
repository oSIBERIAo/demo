{
    var APP_ID = 'j3xksgtdqI01PaLDdTv0kw4h-gzGzoHsz';
    var APP_KEY = '9m6v7G0Fki6fHMan9Qydf8aa';
    AV.init({
        appId: APP_ID,
        appKey: APP_KEY,
        // 启用美国节点
        // region: 'us'
    });
    var TestObject = AV.Object.extend('TestObject');
    var testObject = new TestObject();
    testObject.save({
        words: 'Hello World!'
    }).then(function (object) {
        // alert('LeanCloud Rocks!');
    })    
}