#!/usr/bin/env node
var fs = require('fs')

var dirName = process.argv[2] // 你传的参数是从第 2 个开始的
var mainjs =  `var string = "Hello World"
alert(string)`

fs.mkdirSync("./" + dirName) // mkdir $1
process.chdir("./" + dirName) // cd $1
fs.mkdirSync('css') // mkdir css
fs.mkdirSync('js') // mkdir js

fs.writeFileSync("./index.html", "<!DOCTYPE> \n <title>Hello</title> \n <h1>Hi</h1>")
fs.writeFileSync("css/style.css", "h1{color: red;}")
fs.writeFileSync("./js/main.js", mainjs )

process.exit(0)

/*
if [ -d $1]; then
  echo '$1 已经存在'
  exit 1
else
  mkdir $1
  cd $1
  mkdir css js
  Touch index.html css/style.css js/main.js
  echo  ' <!DOCTYPE>
 <title>Hello</title>
 <h1>Hi</h1>' > index.html
  echo  'h1{color: red;}' > css/style.css
  echo  ' var string = "Hello World"
 alert(string)' > js/main.js
  exit 0
fi
*/
