// require 함수에 'express'를 인자로 보낸다.
//var express = require('express/index.js'); 와 같은 뜻  
//var express = require('express/index'); 와 같은 뜻   .js 는 생략 가능
var express = require('express');
var app = express();

//간단한 서버 만듦
app.listen(3000, function(){
  console.log("http://127.0.0.1:3000");
});

//간단한 웹 페이지 1
app.get('/', function(req, res, next){
  res.send('<h1>Hello World</h1>');
});
//간단한 웹 페이지 2
app.get('/simple', function(req, res, next){
  res.send('<h1>Hello Simple</h1>');
});
