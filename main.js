var http = require('http');
var fs = require('fs');
var url = require('url');
 
var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var title = queryData.id;
    if(_url == '/'){
      title = 'Welcome';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    var template = `
    <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">세무법인다올</a></h1>
      <ul>
        <li><a href="/?id=직원등록">직원등록</a></li>
        <li><a href="/?id=회사등록">회사등록</a></li>
        <li><a href="/?id=미수금조회">미수금조회</a></li>
      </ul>
      <h2>${title}</h2>
      <p>
      ${title}화면입니다
      </p>
    </body>
    </html>
    `;
    response.end(template);
 
});
app.listen(3000);