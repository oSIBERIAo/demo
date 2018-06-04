/*
var model = Model({
  resourceName: '表名'
})
*/

window.Model = function (options) {
  let resourceName = options.resourceName
  return {
    init: function() {
      var APP_ID = 'EDxMbgBCPl0kyC5cjk0IzxUp-gzGzoHsz';
      var APP_KEY = 'KVS1wNH1CwYUb8aIA7zfEvqB';

      AV.init({
        appId: APP_ID,
        appKey: APP_KEY
      });
      // console.log('运行到这里了');
    },
    //获取数据
    fetch: function() {
      var query = new AV.Query(resourceName);
      return query.find()
    },
    //创建数据
    save: function(object) {
      var X = AV.Object.extend(resourceName)
      var x = new X()
      return x.save(object)
    },
 }
}












//
