#!/usr/bin/env node
var fs = require('fs')
var dirName = process.argv[2] // 你传的参数是从第 2 个开始的

var path = "./" + dirName
if(fs.existsSync(path))
{
  console.log('File already exist！')
  process.exit(1)
}

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
