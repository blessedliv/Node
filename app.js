// require 함수에 'express'를 인자로 보낸다.
//var express = require('express/index.js'); 와 같은 뜻  
//var express = require('express/index'); 와 같은 뜻   .js 는 생략 가능
var express = require('express');   //express 는 폴더명이다.
var app = express();

var path = require('path'); //node 내장 객체
// console.log(app);

//간단한 서버 만듦
app.listen(3000, function(){
  console.log('http://127.0.0.1:3000');
});



app.use(express.json());
app.use(express.urlencoded({extended: false}));
//console.log(__dirname);  //하드디스크의 절대 경로를 나타낸다. 프로젝트 context 경로
//console.log(path.join(__dirname, 'public')); //console.log(path.join(__dirname, './public')); 와 같다
//미들웨어  //정적파일
app.use('/', express.static(path.join(__dirname, 'public')));


//간단한 웹 페이지 1
app.get('/hello', function(req, res, next){
  res.send('<html><head><title>Hi~</title></head><body><h1>Hello World</h1></body></html>');
});
//간단한 웹 페이지 2
app.get('/sample', function(req, res, next){
  var title='Sample Page';
  var content = 'Hello Sample';
  var html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
  </head>
  <body>
    <h1>${content}</h1>
  </body>
  </html>
  `;
  res.send(html);
});


app.get('/search', function(req, res, next){
  var q = req.query.q;
  res.send(`<h1>Your request is ${q}</h1>`);
  
});

app.get('/user/:id', function(req,res,next){
  var id = req.params.id;
  res.send(`<h1>Hi, ${id}</h1>`);
});

app.post('/join', function(req, res, next){
  var userid = req.body.userid;
  var userpw = req.body.userpw;
  res.send(`<h1>Your ID is ${userid} / Your PW is ${userpw}</h1>`);
});