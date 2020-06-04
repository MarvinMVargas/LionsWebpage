var http = require('http');
var fs = require('fs');
var url = require('url');
var express = require('express');

var app = express();
app.engine('html', require('ejs').renderFile);
app.set('views','./public');
app.use(express.static("public"));

var router = express.Router();

app.get("/",function(req,ans){
    ans.render("index.html");
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