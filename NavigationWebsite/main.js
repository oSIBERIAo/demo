
//1.初始化数据
var hashA = init()
var keys = hashA['keys']
var hash = hashA['hash']

//2.生成键盘-监听鼠标
generateKeyboard(keys, hash)

//3.监听键盘
listenToKeyboard(hash)

//////////////////
//以下为工具函数

//////////////////
//1

function init() {
  var keys ={
    '0':{0:'~',1:'1',2:'2',3:'3',4:'4',5:'5',6:'6',7:'7',8:'8',9:'9',10:'0',11:'-',length:12},
    '1':{0:'q',1:'w',2:'e',3:'r',4:'t',5:'y',6:'u',7:'i',8:'o',9:'p',length:10},
    '2':{0:'a',1:'s',2:'d',3:'f',4:'g',5:'h',6:'j',7:'k',8:'l',length:9},
    '3':{0:'z',1:'x',2:'c',3:'v',4:'b',5:'n',6:'m',length:7},
    'length':4
  }
  var hash = {
    'q':'qq.com',
    'w':'weibo.com',
    'e':'ele.me',
    'r':'renren.com',
    'z':'zhihu.com',
  }
  var hashInLocalStorage = getFromInLocalStorage('localHash')
  if (hashInLocalStorage) {
     hash = hashInLocalStorage
  }
  return {
    "keys": keys,
    "hash": hash
  }
}

function getFromInLocalStorage(name) {
   return JSON.parse(localStorage.getItem(name) || 'false')
}


//////////////////
//2

function tag(tagName,attributes) {
  var element = document.createElement(tagName)
  // if (attributes) {
    for (var key in attributes) {
      element[key] = attributes[key]
    }
  // }
  return element
}

function createKbdX(className2){
  var KbdX = tag('kbd')
  KbdX.className = className2
  return KbdX
}

function createButton(buttonXid){
  var buttonX = tag('button', {textContent: 'E'})
  buttonX.id = buttonXid
  return buttonX
}

function createSpanX(textContent){
  var element = tag('span', {className: 'keyspan'})
  element.textContent = textContent
  return element
}

function createImg(domain){
  var imgX = tag('img')

  if (domain) {
    imgX.src = 'http://' + domain + '/favicon.ico'
  } else {
    imgX.src = './img/NavigationWebsiteNull.png'
  }
  imgX.onerror = function(xxx) {
    // console.log('下载失败',xxx);
    xxx.target.src = './img/NavigationWebsiteNull.png'
  }
  return imgX
}

function generateKeyboard(keys, hash) {
  for (var i = 0; i < keys.length; i++) {
    var row = keys[i]
    var className = ''
    divX = tag('div')
    divX.className = 'div' + i
    mainX.appendChild(divX)
    for (var j = 0; j < row.length; j++) {

      var className2 = 'key ' + row[j]
      var kbdX = createKbdX(className2)

      var buttonX = createButton(row[j])

      var spanX = createSpanX(row[j])

      var domain = hash[row[j]]
      var imgX = createImg(domain)

      divX.appendChild(kbdX)
      kbdX.appendChild(buttonX)
      kbdX.appendChild(spanX)
      kbdX.appendChild(imgX)

      // divX.appendChild(kbdX)

      buttonX.onclick = function(keyboard){

        buttonX2 = keyboard.target
        key = keyboard.target.id
        SiteOld = hash[key]
        Site = prompt('👀 当前网站为：' + SiteOld + '\n\n✍️ 请输入新网址👇')
        if (Site ) {
          hash[key] = Site
        } else {
          Site = SiteOld
        }

        imgX2 =  buttonX2.nextSibling.nextSibling

        imgX2.src = 'http://' + Site + '/favicon.ico'
        imgX.onerror = function(xxx) {
          // console.log('下载失败',xxx);
          xxx.target.src = './img/NavigationWebsiteNull.png'
        }
        localStorage.setItem('localHash', JSON.stringify(hash))
      }
    }
  }
}



//////////////////
//3

function listenToKeyboard(hash) {
  document.onkeypress = function(keyboard) {

    key = keyboard.key

    webSite = hash[key]

    // location.href = 'http://' + webSite
    if (webSite) {
      window.open('http://' + webSite, '_blank')
    }
  }
}

//
