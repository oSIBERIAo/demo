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
}

var hashInLocalStorage = JSON.parse(localStorage.getItem('localHash') || 'false')
if (hashInLocalStorage) {
   hash = hashInLocalStorage
}

for (var i = 0; i < keys.length; i++) {
  var row = keys[i]
  var className = ''
  divX = document.createElement('div')
  divX.className = 'div' + i
  mainX.appendChild(divX)
  for (var j = 0; j < row.length; j++) {
    kbdX = document.createElement('kbd')
    // kbdX.textContent = row[j]
    className = 'key ' + row[j]
    kbdX.className = className
    divX.appendChild(kbdX)
    buttonX = document.createElement('button')
    buttonX.textContent = 'E'
    buttonX.id = row[j]
    kbdX.appendChild(buttonX)
    spanX = document.createElement('span')
    spanX.className = 'keyspan'
    spanX.textContent = row[j]
    kbdX.appendChild(spanX)
    imgX = document.createElement('img')
    imgX.src = 'http://' + hash[row[j]] + '/favicon.ico'
    if (hash[row[j]]) {
      imgX.src = 'http://' + hash[row[j]] + '/favicon.ico'
    } else {
      imgX.src = './img/NavigationWebsiteNull.png'
    }
    imgX.onerror = function(xxx) {
      // console.log('下载失败',xxx);
      xxx.target.src = './img/NavigationWebsiteNull.png'
    }
    kbdX.appendChild(imgX)
    buttonX.onclick = function(keyboard){
      console.log('点到了')
      console.log(keyboard)
      console.log('keyboard.target.id', keyboard.target.id)
      buttonX2 = keyboard.target
      Site = prompt('✍️ 请输入网址👇')
      key = keyboard.target.id
      hash[key] = Site
      imgX2 =  buttonX2.nextSibling.nextSibling
      console.log('imgX2', imgX2);
      console.log('buttonX2', buttonX2);
      imgX2.src = 'http://' + Site + '/favicon.ico'
      imgX.onerror = function(xxx) {
        // console.log('下载失败',xxx);
        xxx.target.src = './img/NavigationWebsiteNull.png'
      }
      localStorage.setItem('localHash', JSON.stringify(hash))
    }
  }
}


document.onkeypress = function(keyboard) {
  console.log('输入了一个按键')
  console.log('keyboard', keyboard)
  console.log('输入的按键', keyboard.key)
  key = keyboard.key
  console.log('key',key);
  webSite = hash[key]
  console.log('webSite',webSite);
  // location.href = 'http://' + webSite
  if (webSite) {
    window.open('http://' + webSite, '_blank')
  }
}






























//
