{
  let APP_ID = '3D7vlorgtw0PJkMSqe7rAVe7-gzGzoHsz'
  let APP_KEY = 'LjOqcBXoSsGFY75NignXIYP5'

  AV.init({
  appId: APP_ID,
  appKey: APP_KEY
  })
}


 // // 创建数据库
 // var TestObject = AV.Object.extend('Song');
 // // 创建一条记录
 // var testObject = new TestObject();
 // // 保存记录
 // testObject.save({
 //   name: 'test',
 //   singer: 'test',
 //   url: 'test',
 // }).then(function(object) {
 //   alert('LeanCloud Rocks!');
 // })

 // // 创建数据库
 // var TestObject = AV.Object.extend('Playlist');
 // // 创建一条记录
 // var testObject = new TestObject();
 // // 保存记录
 // testObject.save({
 //   name: 'test',
 //   cover: 'test',
 //   creatorID: 'test',
 //   description: 'test',
 //   songs: ['1'],
 // }).then(function(object) {
 //   alert('LeanCloud Rocks!');
 // }, ()=> alert('false'))
