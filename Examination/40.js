var object = {}
object.__proto__ ===  ????填空1????  // 为 true

var fn = function(){}
fn.__proto__ === ????填空2????  // 为 true
fn.__proto__.__proto__ === ????填空3???? // 为 true

var array = []
array.__proto__ === ????填空4???? // 为 true
array.__proto__.__proto__ === ????填空5???? // 为 true

Function.__proto__ === ????填空6???? // 为 true
Array.__proto__ === ????填空7???? // 为 true
Object.__proto__ === ????填空8???? // 为 true

true.__proto__ === ????填空9???? // 为 true

Function.prototype.__proto__ === ????填空10???? // 为 true



var object = {}
object.__proto__ ===  Object.prototype  // 为 true

var fn = function(){}
fn.__proto__ === Function.prototype  // 为 true
fn.__proto__.__proto__ === Object.prototype // 为 true

var array = []
array.__proto__ === Array.prototype // 为 true
array.__proto__.__proto__ === Object.prototype // 为 true

Function.__proto__ ===  Function.prototype // 为 true ??//不是 Object.prototype
Array.__proto__ === Function.prototype // 为 true ??
Object.__proto__ === Function.prototype // 为 true

true.__proto__ === Boolean.prototype // 为 true

Function.prototype.__proto__ === Object.prototype // 为 true

















请用代码大概说明 MVC 三个对象分别有哪些重要属性和方法。


var Model = function() {
    data: null,
    init: function(){},
    /*增删改查*/
    fetch: function(){},
    save: function(){},
    update: function(){},
    delete: function(){},
    ...
}
View = function(selector) {
    ...
    let view = (selector)=>{/*选出监听的部分*/}
    return view
}
Controller = function(view) {
    let controller = (view)=>{/*需要的监听的部分*/}
    view: null,
    model: null,
    init(view, model){
        this.view = view
        this.model = model
        this.model.init()
        this.bindEvents()
    },
    /*调用Model，返回数据。监听view，更新view*/
    bindEvents: function(){}
    ....
}







用过 Promise 吗？举例说明。如果要你创建一个返回 Promise 对象的函数，你会怎么写？举例说明。
用过 Promise，比如 jQuery 或者 axios 的 AJAX 功能，都返回的是 Promise 对象。

$.ajax({url:'/xxx', method:'get'}).then(success1, error1).then(success2, error2)


function asyncMethod(){
    return new Promise(function (resolve, reject){
        setTimeout(function(){
            成功则调用 resolve
            失败则调用 reject
        },3000)
    })
}


var promise = new Promise(function(resolve, reject) {
    // 异步处理
    // 处理结束后、调用resolve 或 reject
    成功则调用 resolve()
    失败则调用 reject()
})

var myFirstPromise = new Promise(function(resolve, reject){
    //当异步代码执行成功时，我们才会调用resolve(...), 当异步代码失败时就会调用reject(...)
    //在本例中，我们使用setTimeout(...)来模拟异步代码，实际编码时可能是XHR请求或是HTML5的一些API方法.
    setTimeout(function(){
        resolve("成功!"); //代码正常执行！
    }, 250);
});

myFirstPromise.then(function(successMessage){
    //successMessage的值是上面调用resolve(...)方法传入的值.
    //successMessage参数不一定非要是字符串类型，这里只是举个例子
    document.write("Yay! " + successMessage);
});

var URL = "xxx";
function ajax(URL) {
    return new Promise(function (resolve, reject) {
        var req = new XMLHttpRequest();
        req.open('GET', URL, true);
        req.onload = function () {
        if (req.status === 200) {
                resolve(req.responseText);
            } else {
                reject(new Error(req.statusText));
            }
        };
        req.onerror = function () {
            reject(new Error(req.statusText));
        };
        req.send();
    });
}
var URL = "xxx";
ajax(URL).then(function onFulfilled(value){
    document.write('内容是：' + value);
}).catch(function onRejected(error){
    document.write('错误：' + error);
});








//
