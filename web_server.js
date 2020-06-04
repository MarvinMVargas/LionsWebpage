var http = require('http');
var fs = require('fs');
var url = require('url');
var express = require('express');
var path = require('path');

var app = express();
app.use(express.static("public"));
app.set('views', path.join(__dirname, 'public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


var router = express.Router();

app.get("/",function(req,ans){
    ans.render("index.html");
});

app.get("/videos",function(req,ans){
    ans.render("videos.html");
});

app.get("/robots",function(req,ans){
    ans.render("robots.html");
});

app.get("/contactanos",function(req,ans){
    ans.render("contactanos.html");
});

app.get("/join",function(req,ans){
    ans.render("formtest.html");
});

app.listen(8880);

module.exports = router;
// http.createServer(function (req, res) {
//     var path = url.parse(req.url,true);
//     var filePath = '.' + path.pathname;
//     fs.readFile(filePath, function(err, data) {
//         if(err){
//             res.writeHead(404, {'Content-Type': 'text/html'});
//             return res.end("404 Not Found");
//         }
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write(data);
//         return res.end();
//     });
//   }).listen(8880);