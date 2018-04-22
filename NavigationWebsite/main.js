var keys ={
  '0':{0:'q',1:'w',2:'e',3:'r',4:'t',5:'y',6:'u',7:'i',8:'o',9:'p',length:10},
  '1':{0:'a',1:'s',2:'d',3:'f',4:'g',5:'h',6:'j',7:'k',8:'l',length:9},
  '2':{0:'z',1:'x',2:'c',3:'v',4:'b',5:'n',6:'m',length:7},
  'length':3
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



index = 0
while (index < keys['length']) {
  divX = document.createElement('div')
  mainX.appendChild(divX)
  index2 = 0
  row = keys[index]
  while (index2 < keys[index]['length']) {
    console.log('keys', keys['length']);
    kbd = document.createElement('kbd')
    kbd.textContent = row[index2]
    buttonX = document.createElement('button')
    buttonX.textContent = 'E'
    buttonX.id = row[index2]
    buttonX.onclick = function(keyboard) {
      console.log('点击了一个按键')
      console.log(keyboard.target.id)
      console.log(keyboard)
      key = keyboard.target.id
      Site = prompt('请输入网址')
      hash[key] = Site
      console.log('hash', hash);
      localStorage.setItem('localHash', JSON.stringify(hash))
    }
    kbd.appendChild(buttonX)
    divX.appendChild(kbd)
    index2 += 1
  }
  index += 1
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
  window.open('http://' + webSite, '_blank')
}






























//
